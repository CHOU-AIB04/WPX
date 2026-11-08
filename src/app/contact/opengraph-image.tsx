import { OG_SIZE, ogImage } from "@/lib/og";

export const alt = "WePushX · Réservez votre audit marketing digital gratuit";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ kicker: "Audit gratuit · 30 min", title: "Réservez votre audit marketing digital gratuit" });
}
