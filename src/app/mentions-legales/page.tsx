import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = { title: "Mentions légales & CGU", alternates: { canonical: "/mentions-legales" } };

export default function Page() {
  return <LegalPage slug="mentions-legales" />;
}
