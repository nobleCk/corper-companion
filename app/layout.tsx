import type { Metadata } from "next";
import { Space_Grotesk, Karla } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["700"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const siteUrl = "https://corper-companion.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Corper Companion — NYSC Prep & Camp Guide",
    template: "%s | Corper Companion",
  },
  description:
    "The unofficial, always-current companion for your NYSC service year. Camp countdown, packing checklist, PPA vetting guide, current info feed, and a locally encrypted document vault.",
  openGraph: {
    title: "Corper Companion — NYSC Prep & Camp Guide",
    description:
      "The unofficial, always-current companion for your NYSC service year — the guide the official app should have been.",
    url: siteUrl,
    siteName: "Corper Companion",
    images: [{ url: "/brand/icon_square_1024.png", width: 1024, height: 1024 }],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corper Companion — NYSC Prep & Camp Guide",
    description:
      "The unofficial, always-current companion for your NYSC service year — the guide the official app should have been.",
    images: ["/brand/icon_square_1024.png"],
  },
  icons: {
    icon: "/brand/icon_rounded_64.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${karla.variable} antialiased flex min-h-screen flex-col`}
      >
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
