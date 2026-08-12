import { ImageResponse } from "next/og";
import { MARK_ORANGE, orangeMark } from "@/lib/brand";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS masks home-screen icons, so the mark sits on a full-bleed orange square
// rather than a circle that would be clipped at the corners.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: MARK_ORANGE,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={orangeMark()} width={180} height={180} alt="" />
      </div>
    ),
    { ...size }
  );
}
