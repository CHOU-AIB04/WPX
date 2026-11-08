import { OG_SIZE, ogImage } from "@/lib/og";

export const alt = "WePushX · Offres marketing digital et CRM au Maroc";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ kicker: "Catalogue", title: "Offres marketing digital et CRM au Maroc" });
}
