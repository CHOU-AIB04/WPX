import legal from "@/lib/legal.json";

type Block = [string, string];

export function LegalPage({ slug }: { slug: keyof typeof legal }) {
  const blocks = legal[slug] as Block[];
  const [, title] = blocks.find(([t]) => t === "h1") ?? ["h1", ""];
  const rest = blocks.filter(([t]) => t !== "h1");

  return (
    <article className="container-x pb-28 pt-36 md:pt-44">
      <p className="label text-violet-bright">Légal</p>
      <h1 className="display mt-6 max-w-4xl text-[clamp(2.6rem,6vw,5.4rem)]">{title}</h1>
      <div className="mt-16 max-w-3xl">
        {rest.map(([t, text], i) => {
          if (t === "h2") return <h2 key={i} className="display mt-14 border-t border-line pt-8 text-3xl">{text}</h2>;
          if (t === "h3") return <h3 key={i} className="mt-8 text-xl font-medium text-fg">{text}</h3>;
          if (t === "li") return <p key={i} className="mt-2 flex gap-3 text-fg/70"><span className="text-violet-bright">•</span>{text}</p>;
          if (t === "kv") {
            const [k, ...v] = text.split(" : ");
            return (
              <div key={i} className="grid grid-cols-3 gap-4 border-b border-line py-3 text-sm">
                <span className="label text-faint">{k}</span>
                <span className="col-span-2 text-fg/85">{v.join(" : ")}</span>
              </div>
            );
          }
          return <p key={i} className="mt-4 leading-relaxed text-fg/70">{text}</p>;
        })}
      </div>
    </article>
  );
}
