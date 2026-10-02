"use client";

import { animate } from "motion/react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Arrow, SectionLabel } from "@/components/ui/Button";
import { EASE, Lines, Reveal } from "@/components/ui/motion";
import {
  SLIDERS,
  VOICE_REGIONS,
  complexityLabels,
  crmPlans,
  dh,
  regionLabels,
  simulate,
  type Complexity,
  type Region,
  type SimInput,
} from "@/lib/pricing";
import { plans } from "@/lib/content";

/* ────────────────────────────────────────────────────────────── utilitaires */

/** Interpole la valeur affichée pour que les chiffres ne sautent pas. */
function useCountTo(target: number) {
  const [n, setN] = useState(target);
  const from = useRef(target);

  useEffect(() => {
    const c = animate(from.current, target, {
      duration: 0.55,
      ease: EASE,
      onUpdate: (v) => {
        from.current = v;
        setN(v);
      },
    });
    return () => c.stop();
  }, [target]);

  return n;
}

/* ──────────────────────────────────────────────────────────── sous-éléments */

function Segmented<T extends string>({
  value,
  onChange,
  options,
  label,
}: {
  value: T;
  onChange: (v: T) => void;
  options: { v: T; l: string }[];
  label: string;
}) {
  return (
    <div>
      <p className="label text-faint">{label}</p>
      <div className="mt-3 inline-flex flex-wrap gap-1 rounded-full border border-line p-1.5">
        {options.map((o) => {
          const on = o.v === value;
          return (
            <button
              key={o.v}
              type="button"
              onClick={() => onChange(o.v)}
              aria-pressed={on}
              className={`rounded-full px-4 py-2 text-[0.85rem] transition-colors duration-300 ${
                on ? "bg-violet text-snow" : "text-fg/65 hover:text-fg"
              }`}
            >
              {o.l}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Slider({
  label,
  hint,
  unit,
  value,
  onChange,
  bounds,
  disabled,
  disabledNote,
}: {
  label: string;
  hint: string;
  unit: string;
  value: number;
  onChange: (v: number) => void;
  bounds: { min: number; max: number; step: number };
  disabled?: boolean;
  disabledNote?: string;
}) {
  const pct = ((value - bounds.min) / (bounds.max - bounds.min)) * 100;

  return (
    <div className={`border-t border-line py-6 transition-opacity ${disabled ? "opacity-45" : ""}`}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <label className="text-[0.98rem] text-fg/85" htmlFor={`sim-${label}`}>
          {label}
        </label>
        <p className="display text-xl tabular-nums text-fg">
          {dh(value)} <span className="label text-faint">{unit}</span>
        </p>
      </div>

      <input
        id={`sim-${label}`}
        type="range"
        className="wpx-range mt-4 w-full"
        min={bounds.min}
        max={bounds.max}
        step={bounds.step}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ ["--pct" as string]: `${pct}%` }}
      />

      <p className="mt-3 text-[0.82rem] text-muted">{disabled && disabledNote ? disabledNote : hint}</p>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────── le composant */

export function CostSimulator({ n = "06" }: { n?: string }) {
  const [region, setRegion] = useState<Region>("ma");
  const [complexity, setComplexity] = useState<Complexity>("standard");
  const [whatsapp, setWhatsapp] = useState<number>(SLIDERS.whatsapp.def);
  const [email, setEmail] = useState<number>(SLIDERS.email.def);
  const [chatbot, setChatbot] = useState<number>(SLIDERS.chatbot.def);
  const [voice, setVoice] = useState<number>(0);
  const [call, setCall] = useState<number>(SLIDERS.call.def);
  const [recording, setRecording] = useState(false);
  const [planId, setPlanId] = useState<string>("Growth");
  const [crmId, setCrmId] = useState<string>("pro");

  const voiceAllowed = VOICE_REGIONS.includes(region);

  const usage = useMemo(() => {
    const input: SimInput = { region, complexity, whatsapp, email, chatbot, voice, call, recording };
    return simulate(input);
  }, [region, complexity, whatsapp, email, chatbot, voice, call, recording]);

  const plan = plans.find((p) => p.name === planId);
  const crm = crmPlans.find((p) => p.id === crmId);

  const fixed = (plan?.monthly ?? 0) + (crm?.monthly ?? 0);
  const setup = crm?.setup ?? 0;
  const totalMin = fixed + usage.min;
  const totalMax = fixed + usage.max;

  const aMin = useCountTo(totalMin);
  const aMax = useCountTo(totalMax);

  return (
    <section id="simulateur" className="scroll-mt-24 border-t border-line bg-ink-2 py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <SectionLabel n={n}>Simulateur</SectionLabel>
            <Lines className="display mt-8 text-[clamp(2.4rem,6vw,5.6rem)]">
              <span key="1">Votre budget,</span>
              <span key="2" className="serif-accent text-lilac">
                avant de signer.
              </span>
            </Lines>
          </div>
          <Reveal className="max-w-sm">
            <p className="text-fg/60">
              Réglez vos volumes réels. L&apos;estimation se met à jour en direct : abonnements fixes d&apos;un côté,
              consommation variable de l&apos;autre. Aucune donnée n&apos;est envoyée.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ══════════════════════════════════════════ colonne réglages */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-x-12 gap-y-8">
              <Segmented
                label="Où sont vos contacts"
                value={region}
                onChange={(v) => {
                  setRegion(v);
                  if (!VOICE_REGIONS.includes(v)) setVoice(0);
                }}
                options={[
                  { v: "ma" as Region, l: regionLabels.ma },
                  { v: "intl" as Region, l: regionLabels.intl },
                ]}
              />
              <Segmented
                label="Complexité des tâches IA"
                value={complexity}
                onChange={setComplexity}
                options={[
                  { v: "simple" as Complexity, l: "Simple" },
                  { v: "standard" as Complexity, l: "Standard" },
                  { v: "avance" as Complexity, l: "Avancée" },
                ]}
              />
            </div>
            <p className="mt-4 text-[0.85rem] text-muted">{complexityLabels[complexity].hint}</p>

            <div className="mt-12">
              <p className="label text-violet-bright">Vos volumes mensuels</p>

              <div className="mt-6">
                <Slider
                  label="Messages WhatsApp automatisés"
                  unit="msg / mois"
                  hint={
                    region === "ma"
                      ? "Templates validés par Meta. Les réponses entrantes sous 24h ne sont pas facturées."
                      : "Hors Maroc, le message template coûte plus cher côté Meta."
                  }
                  value={whatsapp}
                  onChange={setWhatsapp}
                  bounds={SLIDERS.whatsapp}
                />
                <Slider
                  label="Emails automatisés"
                  unit="emails / mois"
                  hint="Relances, confirmations de RDV, séquences de nurturing."
                  value={email}
                  onChange={setEmail}
                  bounds={SLIDERS.email}
                />
                <Slider
                  label="Messages traités par le chatbot"
                  unit="msg / mois"
                  hint="Chaque message que l'IA lit et auquel elle répond, sur WhatsApp, Instagram ou le site."
                  value={chatbot}
                  onChange={setChatbot}
                  bounds={SLIDERS.chatbot}
                />
                <Slider
                  label="Minutes d'agent vocal IA"
                  unit="min / mois"
                  hint="L'IA appelle, qualifie et réserve. Facturé à la minute de conversation réelle."
                  value={voice}
                  onChange={setVoice}
                  bounds={SLIDERS.voice}
                  disabled={!voiceAllowed}
                  disabledNote="L'agent vocal IA n'est pas commercialisé au Maroc. Basculez sur « International » pour l'estimer."
                />
                <Slider
                  label="Minutes d'appel téléphonique"
                  unit="min / mois"
                  hint="Appels sortants depuis le CRM, numéro local inclus."
                  value={call}
                  onChange={setCall}
                  bounds={SLIDERS.call}
                />
              </div>

              <div className="flex items-center justify-between gap-6 border-t border-line py-6">
                <div>
                  <p className="text-[0.98rem] text-fg/85">Enregistrement + transcription des appels</p>
                  <p className="mt-1 text-[0.82rem] text-muted">
                    Utile pour le contrôle qualité et l&apos;entraînement de l&apos;IA. Environ +25% sur la minute.
                  </p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={recording}
                  aria-label="Enregistrement des appels"
                  onClick={() => setRecording((r) => !r)}
                  className={`relative h-7 w-12 shrink-0 rounded-full border transition-colors duration-300 ${
                    recording ? "border-violet-bright bg-violet" : "border-line bg-ink-3"
                  }`}
                >
                  <span
                    className={`absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-fg transition-all duration-300 ease-[var(--ease-expo)] ${
                      recording ? "left-[1.55rem]" : "left-0.5"
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="mt-12">
              <p className="label text-violet-bright">Vos abonnements</p>
              <div className="mt-6 flex flex-wrap gap-x-12 gap-y-8">
                <Segmented
                  label="Forfait agence"
                  value={planId}
                  onChange={setPlanId}
                  options={[{ v: "aucun", l: "Aucun" }, ...plans.map((p) => ({ v: p.name, l: p.name }))]}
                />
                <Segmented
                  label="Abonnement WePushX CRM"
                  value={crmId}
                  onChange={setCrmId}
                  options={[{ v: "aucun", l: "Aucun" }, ...crmPlans.map((p) => ({ v: p.id, l: p.name }))]}
                />
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════ colonne résultat */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-[1.8rem] border border-line bg-ink">
                <div className="relative p-8 md:p-10">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(70%_100%_at_50%_0%,rgba(122,28,140,0.35),transparent)]"
                  />
                  <p className="label relative text-faint">Estimation mensuelle</p>
                  <p className="display relative mt-5 text-[clamp(2.2rem,4.4vw,3.4rem)] leading-none tabular-nums">
                    {dh(aMin)}
                    {totalMax !== totalMin && (
                      <>
                        <span className="text-faint"> – </span>
                        {dh(aMax)}
                      </>
                    )}
                  </p>
                  <p className="relative mt-3 text-muted">MAD HT / mois</p>

                  {setup > 0 && (
                    <p className="relative mt-5 text-[0.88rem] text-fg/65">
                      + <span className="tabular-nums text-fg">{dh(setup)} DH</span> de mise en place, une seule fois.
                    </p>
                  )}
                </div>

                {/* détail ligne par ligne */}
                <div className="border-t border-line">
                  {fixed > 0 && (
                    <div className="border-b border-line px-8 py-5 md:px-10">
                      <p className="label text-faint">Abonnements — fixe</p>
                      <div className="mt-3">
                        {plan && (
                          <Row label={`Forfait ${plan.name}`} detail="honoraires agence" value={`${dh(plan.monthly)} DH`} />
                        )}
                        {crm && (
                          <Row label={`WePushX CRM ${crm.name}`} detail={crm.seats} value={`${dh(crm.monthly)} DH`} />
                        )}
                      </div>
                    </div>
                  )}

                  <div className="px-8 py-5 md:px-10">
                    <p className="label text-faint">Consommation — variable</p>
                    {usage.lines.length === 0 ? (
                      <p className="mt-3 text-[0.9rem] text-muted">
                        Réglez vos volumes à gauche pour voir la consommation apparaître.
                      </p>
                    ) : (
                      <div className="mt-3">
                        {usage.lines.map((l) => (
                          <Row
                            key={l.id}
                            label={l.label}
                            detail={l.detail}
                            value={
                              Math.round(l.min) === Math.round(l.max)
                                ? `${dh(l.min)} DH`
                                : `${dh(l.min)} – ${dh(l.max)} DH`
                            }
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="border-t border-line px-8 py-6 md:px-10">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-fg/70">Sur douze mois</span>
                    <span className="display text-lg tabular-nums">
                      {dh(totalMin * 12)}
                      {totalMax !== totalMin && ` – ${dh(totalMax * 12)}`} DH
                    </span>
                  </div>
                </div>

                <div className="border-t border-line p-8 md:p-10">
                  <Link
                    href="/contact?plan=simulation"
                    className="group flex h-14 w-full items-center justify-between rounded-full bg-violet pl-7 pr-2 text-[0.95rem] font-medium text-snow transition-colors duration-500 hover:bg-violet-bright"
                  >
                    <span>Valider cette estimation</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-snow text-violet transition-transform duration-500 ease-[var(--ease-expo)] group-hover:rotate-[-45deg]">
                      <Arrow />
                    </span>
                  </Link>
                  <p className="mt-5 text-[0.8rem] leading-relaxed text-muted">
                    Estimation indicative, hors budget publicitaire Meta / Google. La fourchette vient de la complexité
                    des tâches confiées à l&apos;IA : nous la figeons au devis, après l&apos;audit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, detail, value }: { label: string; detail: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-2">
      <span className="min-w-0">
        <span className="block text-[0.92rem] text-fg/85">{label}</span>
        <span className="block truncate text-[0.76rem] text-faint">{detail}</span>
      </span>
      <span className="shrink-0 text-[0.92rem] tabular-nums text-fg">{value}</span>
    </div>
  );
}
