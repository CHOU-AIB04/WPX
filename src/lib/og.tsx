import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/** Format standard Open Graph / X (Twitter). */
export const OG_SIZE = { width: 1200, height: 630 };

let markCache: string | undefined;

/** Le logo WePushX en data URI, lu une fois depuis /public. */
export async function markDataUri() {
  if (!markCache) {
    const svg = await readFile(join(process.cwd(), "public/brand/wepushx-mark.svg"), "utf8");
    markCache = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
  }
  return markCache;
}

/** Visuel de partage aux couleurs de la marque : sur-titre, titre, pied. */
export async function ogImage({ kicker, title, footer }: { kicker: string; title: string; footer?: string }) {
  const mark = await markDataUri();
  const size = title.length > 70 ? 54 : title.length > 45 ? 64 : 76;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "radial-gradient(circle at 85% 15%, #4c1373 0%, #120b19 45%, #0a0610 100%)",
          color: "#f5f0f8",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={mark} width={64} height={56} alt="" />
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700, letterSpacing: -0.5 }}>WePushX</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", fontSize: 24, letterSpacing: 4, textTransform: "uppercase", color: "#d8b6ea" }}>{kicker}</div>
          <div style={{ display: "flex", fontSize: size, fontWeight: 700, lineHeight: 1.08, letterSpacing: -1.5, maxWidth: 1000 }}>{title}</div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 24, color: "rgba(245,240,248,0.7)" }}>
          <div style={{ display: "flex" }}>{footer ?? "Agence marketing digital · Maroc"}</div>
          <div style={{ display: "flex", color: "#b24fd3" }}>wepushx.com</div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
