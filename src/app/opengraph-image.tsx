import { OG_SIZE, ogImage } from "@/lib/og";

export const alt = "WePushX, agence marketing digital au Maroc : chaque dirham investi devient un client qualifié";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    kicker: "Agence marketing digital · Maroc",
    title: "Chaque dirham investi devient un client qualifié.",
    footer: "Meta Ads · Google Ads · SEO & GEO · Sites web · CRM",
  });
}
