import { OG_SIZE, ogImage } from "@/lib/og";

export const alt = "WePushX · Services de marketing digital pour les PME";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ kicker: "Services · Maroc", title: "Services de marketing digital pour les PME" });
}
