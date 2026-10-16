import { ImageResponse } from "next/og";
import { markDataUri } from "@/lib/og";

/**
 * Logo carré en PNG pour le JSON-LD `Organization.logo` : Google veut une
 * image matricielle d'au moins 112 px, pas un SVG.
 */
export const dynamic = "force-static";

export async function GET() {
  const mark = await markDataUri();
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#ffffff" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={mark} width={380} height={332} alt="" />
      </div>
    ),
    { width: 512, height: 512 },
  );
}
