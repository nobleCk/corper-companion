import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms for using Corper Companion, including the Corper Pro refund policy.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl font-bold text-charcoal-ink">
        Terms of Service
      </h1>
      <p className="mt-2 font-body text-sm text-charcoal-ink/60">
        Last updated: September 2026
      </p>

      <div className="mt-8 space-y-8 font-body text-base text-charcoal-ink/90">
        <p>
          Corper Companion is an independent app built to help corps members
          through their NYSC service year. It is not affiliated with, endorsed
          by, or officially connected to NYSC or the Federal Government of
          Nigeria. By using the app, you agree to the terms below.
        </p>

        <section>
          <h2 className="font-display text-xl font-bold text-charcoal-ink">
            The app and its content
          </h2>
          <p className="mt-3">
            Corper Companion provides information and tools — countdowns,
            checklists, PPA vetting questions, a current info feed, and a
            document vault — to make your service year easier to navigate.
            Content in the info feed is maintained on a best-effort basis and
            may occasionally lag behind official NYSC announcements. Always
            confirm critical dates and requirements on the official NYSC
            portal.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-charcoal-ink">
            Installing the app
          </h2>
          <p className="mt-3">
            Corper Companion is not yet listed on the Google Play Store or the
            Apple App Store. The Android version is distributed as a direct
            APK download from this website. Installing it requires enabling
            &quot;install from unknown sources&quot; in your phone&apos;s
            settings — a standard step for apps distributed outside an app
            store, not a sign anything is wrong with the file.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-charcoal-ink">
            Corper Pro
          </h2>
          <p className="mt-3">
            Corper Pro is a one-time purchase of &#8358;2,000 that unlocks the
            PPA vetting guide, current info feed, clearance/CDS reminders, and
            document vault. It is a single payment, not a subscription —
            there is no recurring charge.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-charcoal-ink">
            Refund policy
          </h2>
          <p className="mt-3">
            If you change your mind, you can request a full refund within{" "}
            <strong>48 hours</strong> of purchase, provided you have not yet
            opened any Corper Pro feature (the Document Vault, Info Feed, PPA
            Vetting guide, or Clearance/CDS reminders). Once any of these have
            been used, the purchase is final. To request a refund within the
            window, email us with your purchase details at the address below.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-charcoal-ink">
            No warranty
          </h2>
          <p className="mt-3">
            The app is provided &quot;as is,&quot; without guarantees of
            uninterrupted availability or that every piece of content is
            perfectly current. We work to keep it accurate and useful, but it
            is not a substitute for official NYSC guidance.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-charcoal-ink">
            Changes to these terms
          </h2>
          <p className="mt-3">
            If these terms change in a meaningful way, we&apos;ll update the
            date at the top of this page.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-charcoal-ink">
            Contact us
          </h2>
          <p className="mt-3">
            Questions about these terms, or a refund request? Reach us at{" "}
            <a
              href="mailto:corpercompanionapp@gmail.com"
              className="font-semibold text-savannah-green underline"
            >
              corpercompanionapp@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
