import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = pageMeta({
  title: "Politique de confidentialité",
  description: "Comment WePushX collecte, utilise et protège vos données personnelles : formulaires, cookies, mesure d'audience, durée de conservation et vos droits.",
  path: "/politique-de-confidentialite",
});

export default function Page() {
  return <LegalPage slug="politique-de-confidentialite" />;
}
