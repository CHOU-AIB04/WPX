import { OG_SIZE, ogImage } from "@/lib/og";

export const alt = "Blog WePushX : guides marketing digital au Maroc";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ kicker: "Blog", title: "Guides marketing digital pour les PME au Maroc", footer: "Prix · Méthodes · Erreurs à éviter" });
}
