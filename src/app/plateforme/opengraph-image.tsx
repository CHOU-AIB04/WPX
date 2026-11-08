import { OG_SIZE, ogImage } from "@/lib/og";

export const alt = "WePushX · CRM au Maroc avec WhatsApp et IA";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ kicker: "WePushX CRM", title: "CRM au Maroc avec WhatsApp et IA" });
}
