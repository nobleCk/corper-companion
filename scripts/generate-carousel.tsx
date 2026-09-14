// One-off generator for the Instagram/TikTok carousel images.
// Run with: npx tsx scripts/generate-carousel.tsx
// Reuses the same ImageResponse (satori) engine as app/opengraph-image.tsx,
// just invoked standalone instead of as a Next.js route.
import { ImageResponse } from "../node_modules/next/dist/compiled/@vercel/og/index.node.js";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const ROOT = join(import.meta.dirname, "..");
const OUT_DIR = join(ROOT, "public/social/instagram_carousel");
mkdirSync(OUT_DIR, { recursive: true });

const COLORS = {
  green: "#1F5F3F",
  gold: "#E8A33D",
  sand: "#D8CBB0",
  ink: "#262321",
  cream: "#F6F1E7",
};

const W = 1080;
const H = 1350;

async function loadFonts() {
  const [spaceGroteskBold, karlaRegular, karlaSemiBold] = await Promise.all([
    fetch(
      "https://fonts.gstatic.com/s/spacegrotesk/v22/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj4PVksj.ttf",
    ).then((r) => r.arrayBuffer()),
    fetch(
      "https://fonts.gstatic.com/s/karla/v33/qkBIXvYC6trAT55ZBi1ueQVIjQTD-JqqFA.ttf",
    ).then((r) => r.arrayBuffer()),
    fetch(
      "https://fonts.gstatic.com/s/karla/v33/qkBIXvYC6trAT55ZBi1ueQVIjQTDJp2qFA.ttf",
    ).then((r) => r.arrayBuffer()),
  ]);
  return [
    { name: "Space Grotesk", data: spaceGroteskBold, weight: 700 as const, style: "normal" as const },
    { name: "Karla", data: karlaRegular, weight: 400 as const, style: "normal" as const },
    { name: "Karla", data: karlaSemiBold, weight: 600 as const, style: "normal" as const },
  ];
}

function toDataUri(path: string) {
  const buf = readFileSync(path);
  return `data:image/png;base64,${buf.toString("base64")}`;
}

const iconSrc = toDataUri(join(ROOT, "public/brand/icon_rounded_64.png"));

function Footer() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        paddingBottom: 40,
        paddingTop: 24,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={iconSrc} width={32} height={32} alt="" style={{ borderRadius: 8 }} />
      <span
        style={{
          fontFamily: "Karla",
          fontWeight: 600,
          fontSize: 24,
          color: `${COLORS.ink}99`,
        }}
      >
        Corper Companion
      </span>
    </div>
  );
}

function CoverSlide() {
  return (
    <div
      style={{
        width: W,
        height: H,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.green,
        padding: 100,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={iconSrc} width={140} height={140} alt="" style={{ borderRadius: 32 }} />
      <div
        style={{
          display: "flex",
          fontFamily: "Space Grotesk",
          fontWeight: 700,
          fontSize: 72,
          color: COLORS.cream,
          marginTop: 40,
          textAlign: "center",
        }}
      >
        Corper Companion
      </div>
      <div
        style={{
          display: "flex",
          fontFamily: "Karla",
          fontWeight: 600,
          fontSize: 32,
          color: COLORS.gold,
          marginTop: 12,
        }}
      >
        NYSC Prep &amp; Camp Guide
      </div>
      <div
        style={{
          display: "flex",
          fontFamily: "Space Grotesk",
          fontWeight: 700,
          fontSize: 46,
          color: COLORS.cream,
          marginTop: 64,
          textAlign: "center",
          lineHeight: 1.25,
          maxWidth: 820,
        }}
      >
        The NYSC app nobody built. Until now.
      </div>
    </div>
  );
}

function ClosingSlide() {
  return (
    <div
      style={{
        width: W,
        height: H,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.green,
        padding: 100,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={iconSrc} width={110} height={110} alt="" style={{ borderRadius: 26 }} />
      <div
        style={{
          display: "flex",
          fontFamily: "Space Grotesk",
          fontWeight: 700,
          fontSize: 60,
          color: COLORS.cream,
          marginTop: 48,
          textAlign: "center",
          lineHeight: 1.2,
        }}
      >
        Link in bio to download
      </div>
      <div
        style={{
          display: "flex",
          fontFamily: "Karla",
          fontWeight: 400,
          fontSize: 32,
          color: `${COLORS.cream}E6`,
          marginTop: 24,
          textAlign: "center",
          maxWidth: 780,
        }}
      >
        Direct APK download — not on the Play Store yet
      </div>
      <div
        style={{
          display: "flex",
          fontFamily: "Karla",
          fontWeight: 600,
          fontSize: 30,
          color: COLORS.gold,
          marginTop: 44,
        }}
      >
        corpercompanion.vercel.app
      </div>
    </div>
  );
}

function ScreenshotSlide({
  caption,
  screenshotPath,
}: {
  caption: string;
  screenshotPath: string;
}) {
  const src = toDataUri(screenshotPath);
  // real screenshot files are 720x1532 after status-bar crop
  const shotH = 980;
  const shotW = Math.round(shotH * (720 / 1532));

  return (
    <div
      style={{
        width: W,
        height: H,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: COLORS.cream,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontFamily: "Space Grotesk",
          fontWeight: 700,
          fontSize: 52,
          color: COLORS.ink,
          lineHeight: 1.2,
          padding: "64px 70px 0 70px",
          maxWidth: 940,
        }}
      >
        {caption}
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            border: `6px solid ${COLORS.sand}`,
            borderRadius: 28,
            overflow: "hidden",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} width={shotW} height={shotH} alt="" style={{ display: "block" }} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

const SLIDES: { file: string; el: React.ReactElement }[] = [
  { file: "01_cover.png", el: <CoverSlide /> },
  {
    file: "02_home.png",
    el: (
      <ScreenshotSlide
        caption="Your camp countdown, at a glance"
        screenshotPath={join(ROOT, "public/screenshots/01_home_v2.png")}
      />
    ),
  },
  {
    file: "03_packing.png",
    el: (
      <ScreenshotSlide
        caption="Packing, minus the guesswork"
        screenshotPath={join(ROOT, "public/screenshots/02_camp_packing_v2.png")}
      />
    ),
  },
  {
    file: "04_ppa_vetting.png",
    el: (
      <ScreenshotSlide
        caption="Vet your PPA before you regret it"
        screenshotPath={join(ROOT, "public/screenshots/04_ppa_vetting_v2.png")}
      />
    ),
  },
  {
    file: "05_info_feed.png",
    el: (
      <ScreenshotSlide
        caption="Circulars that stay current"
        screenshotPath={join(ROOT, "public/screenshots/07_info_feed_v2.png")}
      />
    ),
  },
  {
    file: "06_document_vault.png",
    el: (
      <ScreenshotSlide
        caption="Your documents, encrypted & offline"
        screenshotPath={join(ROOT, "public/screenshots/06_document_vault_v2.png")}
      />
    ),
  },
  {
    file: "07_pricing.png",
    el: (
      <ScreenshotSlide
        caption="₦2,000. One time. That's it."
        screenshotPath={join(ROOT, "public/screenshots/08_corper_pro_pricing_v2.png")}
      />
    ),
  },
  { file: "08_closing.png", el: <ClosingSlide /> },
];

async function main() {
  const fonts = await loadFonts();
  for (const slide of SLIDES) {
    const res = new ImageResponse(slide.el, { width: W, height: H, fonts });
    const buf = Buffer.from(await res.arrayBuffer());
    writeFileSync(join(OUT_DIR, slide.file), buf);
    console.log("wrote", slide.file, buf.length, "bytes");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
