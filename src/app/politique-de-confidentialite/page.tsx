import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = { title: "Politique de confidentialité", alternates: { canonical: "/politique-de-confidentialite" } };

export default function Page() {
  return <LegalPage slug="politique-de-confidentialite" />;
}
