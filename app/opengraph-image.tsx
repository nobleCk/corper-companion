import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Corper Companion — NYSC Prep & Camp Guide";

export default async function Image() {
  const [spaceGroteskBold, karlaRegular, karlaSemiBold, iconBuffer] =
    await Promise.all([
      fetch(
        "https://fonts.gstatic.com/s/spacegrotesk/v22/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj4PVksj.ttf",
      ).then((r) => r.arrayBuffer()),
      fetch(
        "https://fonts.gstatic.com/s/karla/v33/qkBIXvYC6trAT55ZBi1ueQVIjQTD-JqqFA.ttf",
      ).then((r) => r.arrayBuffer()),
      fetch(
        "https://fonts.gstatic.com/s/karla/v33/qkBIXvYC6trAT55ZBi1ueQVIjQTDJp2qFA.ttf",
      ).then((r) => r.arrayBuffer()),
      readFileSync(join(process.cwd(), "public/brand/icon_square_1024.png")),
    ]);

  const iconSrc = `data:image/png;base64,${iconBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1F5F3F",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={iconSrc}
            alt=""
            width={160}
            height={160}
            style={{ borderRadius: 36 }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontFamily: "Space Grotesk",
                fontSize: 76,
                fontWeight: 700,
                color: "#F6F1E7",
                lineHeight: 1.05,
              }}
            >
              Corper Companion
            </span>
            <span
              style={{
                fontFamily: "Karla",
                fontWeight: 600,
                fontSize: 34,
                color: "#E8A33D",
                marginTop: 8,
              }}
            >
              NYSC Prep &amp; Camp Guide
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 56,
            fontFamily: "Karla",
            fontWeight: 400,
            fontSize: 30,
            color: "#F6F1E7",
            opacity: 0.9,
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          The unofficial, always-current companion for your NYSC service
          year — camp countdown, PPA vetting, and a lot more.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Space Grotesk", data: spaceGroteskBold, weight: 700, style: "normal" },
        { name: "Karla", data: karlaRegular, weight: 400, style: "normal" },
        { name: "Karla", data: karlaSemiBold, weight: 600, style: "normal" },
      ],
    },
  );
}
