import { Mark } from "@/components/brand/Mark";

/** Mini illustrations UI par service (aperçu au survol + page services). */
export function ServiceVisual({ id }: { id: string }) {
  const frame = "relative h-full w-full overflow-hidden rounded-2xl border border-line bg-ink-2 p-4 text-fg";
  switch (id) {
    case "meta":
      return (
        <div className={frame + " flex flex-col"}>
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink-3"><Mark className="h-3.5" /></span>
            <div>
              <p className="text-[0.7rem] font-semibold">Clinique Lumière</p>
              <p className="text-[0.58rem] text-faint">Sponsorisé · Casablanca</p>
            </div>
          </div>
          <div className="mt-3 flex min-h-[45%] flex-1 items-end rounded-xl bg-[linear-gradient(135deg,#7a1c8c,#4c1373_60%,#1c1226)] p-3">
            <p className="display text-lg leading-none text-snow">-30% sur votre<br />premier soin</p>
          </div>
          <div className="mt-2.5 flex items-center justify-between rounded-lg bg-ink-3 px-3 py-2">
            <span className="text-[0.62rem] text-muted">lumiere.ma</span>
            <span className="rounded-md bg-fg px-2.5 py-1 text-[0.6rem] font-semibold text-ink">Réserver</span>
          </div>
        </div>
      );
    case "google":
      return (
        <div className={frame + " flex flex-col justify-between"}>
          <div className="flex items-center gap-2 rounded-full border border-line bg-ink px-3 py-2 text-[0.68rem] text-fg/80">
            <svg viewBox="0 0 16 16" className="h-3 w-3 text-faint" fill="none" aria-hidden><circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.6" /><path d="m11 11 3 3" stroke="currentColor" strokeWidth="1.6" /></svg>
            concessionnaire auto casablanca
          </div>
          <div className="my-4 space-y-1">
            <p className="text-[0.6rem] text-faint"><span className="font-semibold text-fg">Annonce</span> · autoexpress.ma</p>
            <p className="text-sm font-medium text-lilac">Essai gratuit - Livraison 48h au Maroc</p>
            <p className="text-[0.66rem] leading-snug text-muted">Financement dès 0%. Reprise de votre véhicule. Prenez RDV en ligne.</p>
          </div>
          <div className="grid grid-cols-3 gap-1.5 text-center">
            {[["CTR", "8,4%"], ["QS", "9/10"], ["CPA", "-37%"]].map(([k, v]) => (
              <div key={k} className="rounded-lg bg-ink-3 py-2">
                <p className="text-[0.55rem] text-faint">{k}</p>
                <p className="text-sm font-semibold">{v}</p>
              </div>
            ))}
          </div>
        </div>
      );
    case "web":
      return (
        <div className={frame + " !p-0"}>
          <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
            {[0, 1, 2].map((i) => <span key={i} className="h-2 w-2 rounded-full bg-ink-3" />)}
            <span className="ml-2 flex-1 rounded bg-ink-3 px-2 py-0.5 text-[0.55rem] text-faint">votremarque.ma</span>
          </div>
          <div className="p-4">
            <div className="h-2 w-1/3 rounded bg-violet-bright/70" />
            <div className="display mt-3 text-xl leading-none">Un site qui<br />vend pour vous.</div>
            <div className="mt-3 flex gap-2">
              <span className="h-6 w-20 rounded-full bg-violet" />
              <span className="h-6 w-16 rounded-full border border-line" />
            </div>
          </div>
          <div className="absolute bottom-3 right-3 flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-positive text-sm font-semibold text-positive">98</div>
        </div>
      );
    case "seo":
      return (
        <div className={frame + " flex flex-col justify-between"}>
          <div className="flex items-center justify-between">
            <p className="label !text-[0.58rem] text-faint">Position Google · 90 jours</p>
            <span className="rounded-full bg-violet px-2 py-0.5 text-[0.6rem] font-semibold text-snow">#1</span>
          </div>
          <svg viewBox="0 0 200 90" className="my-3 min-h-0 w-full flex-1" aria-hidden>
            {[20, 45, 70].map((y) => <line key={y} x1="0" x2="200" y1={y} y2={y} stroke="rgba(245,240,248,0.08)" />)}
            <path d="M0 80 C 30 78, 45 70, 70 58 S 120 30, 145 22 S 185 10, 200 8" fill="none" className="stroke-lilac" strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="200" cy="8" r="4" fill="#b24fd3" />
          </svg>
          <div className="mt-1 flex flex-wrap gap-1.5">
            {["dentiste rabat", "resto marrakech", "clinique casa"].map((k) => (
              <span key={k} className="rounded-full border border-line px-2 py-0.5 text-[0.58rem] text-muted">{k}</span>
            ))}
          </div>
        </div>
      );
    case "ugc":
      return (
        <div className={frame + " flex items-center justify-center gap-3"}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`relative aspect-[9/16] w-[28%] overflow-hidden rounded-xl border border-line ${i === 1 ? "scale-110 bg-[linear-gradient(160deg,#7a1c8c,#1c1226)]" : "bg-ink-3"}`}
            >
              <span className="absolute inset-0 m-auto flex h-7 w-7 items-center justify-center rounded-full bg-fg/90 text-[0.6rem] text-ink">▶</span>
              <span className="absolute inset-x-1.5 bottom-2 rounded bg-ink/80 px-1 py-0.5 text-center text-[0.48rem]">{["FR", "Darija", "FR"][i]}</span>
            </div>
          ))}
        </div>
      );
    default:
      return (
        <div className={frame + " grid grid-cols-3 gap-2"}>
          {[
            ["Nouveau", 3],
            ["Qualifié", 2],
            ["RDV", 1],
          ].map(([col, n]) => (
            <div key={col as string} className="rounded-xl bg-ink-3 p-2">
              <p className="label mb-2 !text-[0.5rem] text-faint">{col}</p>
              {Array.from({ length: n as number }).map((_, i) => (
                <div key={i} className="mb-1.5 rounded-md bg-ink-2 p-1.5">
                  <div className="h-1.5 w-3/4 rounded bg-fg/40" />
                  <div className="mt-1 h-1 w-1/2 rounded bg-fg/15" />
                </div>
              ))}
            </div>
          ))}
          <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-[#25D366] px-3 py-1 text-[0.58rem] font-semibold text-[#0a0610]">WhatsApp auto ✓</span>
        </div>
      );
  }
}
