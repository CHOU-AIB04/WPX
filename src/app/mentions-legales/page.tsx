import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = pageMeta({
  title: "Mentions légales & CGU",
  description: "Mentions légales et conditions générales d'utilisation du site WePushX, agence marketing digital au Maroc.",
  path: "/mentions-legales",
});

export default function Page() {
  return <LegalPage slug="mentions-legales" />;
}
