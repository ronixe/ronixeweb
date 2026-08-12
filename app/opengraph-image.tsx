import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";
import { whiteMark } from "@/lib/brand";

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded social-share card. Uses only the flexbox subset supported by Satori.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#000000",
          backgroundImage:
            "linear-gradient(180deg, #451a09 0%, #923f1b 45%, #d46736 78%, #e96a31 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={whiteMark()} width={64} height={64} alt="" />
          <div style={{ fontSize: "34px", fontWeight: 600, letterSpacing: 1 }}>
            {SITE.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "82px",
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: "900px",
              letterSpacing: "-2px",
            }}
          >
            We build applications from conception to launch.
          </div>
          <div
            style={{
              fontSize: "30px",
              color: "rgba(255,255,255,0.85)",
              maxWidth: "860px",
            }}
          >
            Ronixe — a software development company.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
