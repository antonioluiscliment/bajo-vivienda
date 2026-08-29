import { ImageResponse } from "next/og";

// Apple touch icon, generated at build time (no binary asset to ship —
// avoids any risk of the PNG getting corrupted in transit).
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#241f19",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 25,
            left: 25,
            width: 32,
            height: 32,
            borderTop: "9px solid #c1622d",
            borderLeft: "9px solid #c1622d",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            color: "#f6f1e7",
            fontSize: 105,
            fontWeight: 700,
            fontFamily: "Arial, sans-serif",
            transform: "translate(5px, 2px)",
          }}
        >
          5
        </div>
      </div>
    ),
    { ...size }
  );
}
