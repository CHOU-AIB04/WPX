import { OG_SIZE, ogImage } from "@/lib/og";

export const alt = "WePushX · Tarifs marketing digital et CRM, à partir de prix clairs";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ kicker: "Tarifs · Maroc", title: "Tarifs marketing digital et CRM, à partir de prix clairs" });
}
