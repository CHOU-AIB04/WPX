import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Conditions générales de vente", alternates: { canonical: "/cgv" } };

export default function Page() {
  return (
    <section className="container-x pb-28 pt-36 md:pt-44">
      <p className="label text-violet-bright">Légal</p>
      <h1 className="display mt-6 text-[clamp(2.6rem,6vw,5.4rem)]">Conditions générales de vente</h1>
      <div className="mt-8">
        <Button href="/cgv.pdf" variant="ghost">Télécharger le PDF</Button>
      </div>
      <div className="mt-12 overflow-hidden rounded-[1.6rem] border border-line bg-white">
        <iframe src="/cgv.pdf" title="CGV WePushX" className="h-[80vh] w-full" />
      </div>
    </section>
  );
}
