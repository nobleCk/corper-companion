import Image from "next/image";
import DownloadButtons from "./components/DownloadButtons";

const FREE_FEATURES = [
  {
    title: "Camp Countdown",
    description:
      "Enter your reporting date and see exactly how much time is left — no more losing track during the anxious run-up to camp.",
  },
  {
    title: "Packing Checklist",
    description:
      "Sharpened with the specific gaps real corps members ran into — extra charging capacity, cash for the mammy market economy — not a generic list.",
  },
  {
    title: "Registration Walkthrough",
    description:
      "A step-by-step guide through the registration process, built for the exact confusion people describe most.",
  },
  {
    title: "Camp Guide",
    description: "What to expect, day by day, so you walk in prepared instead of guessing.",
  },
];

const PRO_FEATURES = [
  {
    title: "PPA Vetting Guide",
    description:
      "A structured list of questions to ask before accepting a placement, a place to log the answers, and a simple red-flag indicator — so you don't find out too late that a PPA doesn't pay or provide accommodation.",
    screenshot: "/screenshots/04_ppa_vetting_v2.png",
  },
  {
    title: "Current Info Feed",
    description:
      "Circulars, batch-specific updates, and deadline changes — kept current, unlike the staleness the official app is known for.",
    screenshot: "/screenshots/07_info_feed_v2.png",
  },
  {
    title: "Clearance & CDS Reminders",
    description: "Never miss a clearance date or CDS attendance window again.",
    screenshot: "/screenshots/05_clearance_reminders_v2.png",
  },
  {
    title: "Document Vault",
    description:
      "Your NIN, certificates, admission letter, and call-up letter — stored locally with AES-256 encryption and biometric lock.",
    screenshot: "/screenshots/06_document_vault_v2.png",
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Corper Companion",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Android",
    description:
      "The unofficial, always-current companion for your NYSC service year — camp countdown, packing checklist, PPA vetting guide, current info feed, and a locally encrypted document vault.",
    offers: {
      "@type": "Offer",
      price: "2000",
      priceCurrency: "NGN",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-savannah-green">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-16 text-center sm:px-6 sm:py-24">
          <h1 className="max-w-3xl font-display text-4xl font-bold text-cream-parade sm:text-5xl">
            The guide the official NYSC app should have been.
          </h1>
          <p className="max-w-2xl font-body text-base text-cream-parade/90 sm:text-lg">
            Corper Companion is the unofficial, always-current companion for your
            NYSC service year — from registration, through camp, through your full
            service year. Not another stale checklist app.
          </p>
          <DownloadButtons />
        </div>
      </section>

      {/* Screenshot showcase */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="overflow-x-auto">
          <div className="flex w-max gap-4">
            {[
              "01_home_v2.png",
              "02_camp_packing_v2.png",
              "03_camp_guide_v2.png",
              "08_corper_pro_pricing_v2.png",
            ].map((file) => (
              <Image
                key={file}
                src={`/screenshots/${file}`}
                alt="Corper Companion app screenshot"
                width={220}
                height={468}
                className="rounded-2xl border border-khaki-sand shadow-md"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="bg-khaki-sand/30">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <h2 className="font-display text-2xl font-bold text-charcoal-ink sm:text-3xl">
            NYSC info isn&apos;t hard to find. It&apos;s scattered, outdated, and
            useless once you need it.
          </h2>
          <p className="mt-4 font-body text-base text-charcoal-ink/80 sm:text-lg">
            The official app has gone stale before — a batch&apos;s POP circular
            wasn&apos;t reflected for days after release. Everything else is
            scattered blog posts, TikTok carousels, and Facebook groups. Corper
            Companion packages it into one current, structured tool.
          </p>
        </div>
      </section>

      {/* Free features */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-display text-2xl font-bold text-charcoal-ink sm:text-3xl">
          Free, from the day you install it
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {FREE_FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-khaki-sand bg-cream-parade p-6"
            >
              <h3 className="font-display text-lg font-bold text-charcoal-ink">
                {f.title}
              </h3>
              <p className="mt-2 font-body text-sm text-charcoal-ink/80">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pro features */}
      <section className="bg-savannah-green/5 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center font-display text-2xl font-bold text-charcoal-ink sm:text-3xl">
            Corper Pro — the decisions that actually matter
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {PRO_FEATURES.map((f) => (
              <div key={f.title} className="flex gap-4 rounded-2xl bg-cream-parade p-6">
                <Image
                  src={f.screenshot}
                  alt={`${f.title} screenshot`}
                  width={90}
                  height={191}
                  className="h-auto w-20 shrink-0 rounded-lg border border-khaki-sand"
                />
                <div>
                  <h3 className="font-display text-lg font-bold text-charcoal-ink">
                    {f.title}
                  </h3>
                  <p className="mt-2 font-body text-sm text-charcoal-ink/80">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h2 className="font-display text-2xl font-bold text-charcoal-ink sm:text-3xl">
          One-time, no subscription
        </h2>
        <div className="mt-8 rounded-3xl border border-khaki-sand bg-cream-parade p-10">
          <p className="font-display text-4xl font-bold text-savannah-green">
            &#8358;2,000
          </p>
          <p className="mt-2 font-body text-sm text-charcoal-ink/70">
            Paid once, unlocks Corper Pro for good. No subscription, no renewal.
          </p>
        </div>
      </section>

      {/* Download */}
      <section className="bg-savannah-green py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center sm:px-6">
          <h2 className="font-display text-2xl font-bold text-cream-parade sm:text-3xl">
            Get started
          </h2>
          <p className="font-body text-sm text-cream-parade/90">
            Corper Companion isn&apos;t on the Play Store or App Store yet — download
            the APK directly and install it on your Android phone.
          </p>
          <DownloadButtons id="download" />
        </div>
      </section>
    </>
  );
}
