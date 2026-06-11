import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Upman Works — Tree Felling & Artificial Grass Installation in Gauteng";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public", "logo.png"),
    "base64",
  );
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#FAF6EC",
          padding: 80,
          fontFamily: "sans-serif",
          color: "#171411",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 12,
            background: "#2A4A36",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 12,
            background: "#2A4A36",
            display: "flex",
          }}
        />

        <img
          src={logoSrc}
          width={260}
          height={260}
          style={{ marginBottom: 24, objectFit: "contain" }}
        />

        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: -2,
            lineHeight: 1,
            marginBottom: 24,
            display: "flex",
          }}
        >
          Upman Works
        </div>

        <div
          style={{
            fontSize: 36,
            color: "#4F4A41",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.3,
            display: "flex",
          }}
        >
          Tree Felling &amp; Artificial Grass Installation — Randburg, Gauteng
        </div>
      </div>
    ),
    { ...size },
  );
}
