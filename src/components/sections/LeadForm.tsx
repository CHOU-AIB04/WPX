"use client";

import { AnimatePresence, motion } from "motion/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { EASE } from "@/components/ui/motion";
import { budgetOptions, plans, serviceOptions, site } from "@/lib/content";
import { eventId, track } from "@/lib/track";

type Status = "idle" | "sending" | "done" | "error";

const field =
  "peer w-full border-b border-line bg-transparent pb-3 pt-7 text-lg text-fg outline-none transition-colors placeholder:text-transparent focus:border-violet-bright";
const floating =
  "pointer-events-none absolute left-0 top-7 text-lg text-muted transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:text-lilac peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs";

export function LeadForm() {
  const params = useSearchParams();
  const plan = params.get("plan") ?? "";
  const [status, setStatus] = useState<Status>("idle");
  const [services, setServices] = useState<string[]>(plan ? ["Stratégie complète"] : []);
  const service = services.join(", ");
  const toggleService = (s: string) =>
    setServices((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));
  const [budget, setBudget] = useState<string>("");
  const [selectedPlan, setSelectedPlan] = useState<string>(
    plans.find((p) => p.name.toLowerCase() === plan.toLowerCase())?.name ??
      (plan === "devis" || plan === "simulation" ? "Sur mesure" : ""),
  );
  const chosenPlan = selectedPlan || plan;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const id = eventId();
    const utm: Record<string, string> = {};
    params.forEach((v, k) => {
      if (k.startsWith("utm_") || k === "gclid" || k === "fbclid") utm[k] = v;
    });
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, service, budget, plan: chosenPlan, eventId: id, page: window.location.href, utm }),
      });
      if (!res.ok) throw new Error(String(res.status));
      track("generate_lead", { event_id: id, service, budget, plan: chosenPlan, form: "audit" });
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "done" ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="rounded-[1.8rem] bg-violet p-10 text-snow"
          >
            <p className="label text-snow/70">Demande reçue</p>
            <p className="display mt-4 text-5xl">
              Merci. On revient vers vous <span className="serif-accent">sous 24h.</span>
            </p>
            <p className="mt-6 text-snow/80">Vous recevrez un créneau pour votre audit de 30 minutes. Pensez à vérifier vos spams.</p>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} exit={{ opacity: 0, y: -20 }} className="space-y-8" noValidate={false}>
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
            <div className="grid gap-8 md:grid-cols-2">
              <label className="relative block">
                <input name="name" required placeholder="Nom" autoComplete="name" className={field} />
                <span className={floating}>Votre nom *</span>
              </label>
              <label className="relative block">
                <input name="email" type="email" required placeholder="Email" autoComplete="email" className={field} />
                <span className={floating}>Email professionnel *</span>
              </label>
              <label className="relative block">
                <input name="phone" type="tel" placeholder="Téléphone" autoComplete="tel" className={field} />
                <span className={floating}>WhatsApp / téléphone</span>
              </label>
              <label className="relative block">
                <input name="company" placeholder="Entreprise" autoComplete="organization" className={field} />
                <span className={floating}>Entreprise</span>
              </label>
            </div>

            <fieldset>
              <legend className="label mb-4 text-muted">Services souhaités (plusieurs choix possibles)</legend>
              <div className="flex flex-wrap gap-2">
                {serviceOptions.map((s) => (
                  <Chip key={s} active={services.includes(s)} onClick={() => toggleService(s)}>
                    {s}
                  </Chip>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="label mb-4 text-muted">Formule qui vous intéresse</legend>
              <div className="flex flex-wrap gap-2">
                {[...plans.map((p) => p.name), "Sur mesure", "Je ne sais pas encore"].map((name) => {
                  const p = plans.find((x) => x.name === name);
                  return (
                    <Chip key={name} active={selectedPlan === name} onClick={() => setSelectedPlan(selectedPlan === name ? "" : name)}>
                      {name}
                      {p && <span className="opacity-60"> · {formatDh(p.monthly)} DH / mois</span>}
                    </Chip>
                  );
                })}
              </div>
            </fieldset>

            <fieldset>
              <legend className="label mb-4 text-muted">Budget publicitaire mensuel</legend>
              <div className="flex flex-wrap gap-2">
                {budgetOptions.map((b) => (
                  <Chip key={b} active={budget === b} onClick={() => setBudget(budget === b ? "" : b)}>
                    {b}
                  </Chip>
                ))}
              </div>
            </fieldset>

            <div>
              <label className="relative block">
                <textarea name="message" rows={4} required minLength={20} placeholder="Message" className={`${field} resize-none`} />
                <span className={floating}>Votre projet et vos objectifs *</span>
              </label>
              <p className="mt-3 text-sm text-faint">
                Activité, situation actuelle (publicité, site, leads) et objectifs pour les 3 à 6 prochains mois.
              </p>
            </div>

            <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center">
              <Button type="submit" cursor="Go">
                {status === "sending" ? "Envoi en cours..." : "Envoyer ma demande"}
              </Button>
              <p className="label text-faint">Réponse garantie sous 24h ouvrées</p>
            </div>
            {status === "error" && (
              <p className="text-sm text-danger">
                L&apos;envoi a échoué. Réessayez ou écrivez-nous à{" "}
                <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

const formatDh = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-2.5 text-sm transition-all duration-300 ${
        active ? "border-violet-bright bg-violet-bright text-snow" : "border-line text-fg/75 hover:border-lilac/60 hover:text-fg"
      }`}
    >
      {children}
    </button>
  );
}
