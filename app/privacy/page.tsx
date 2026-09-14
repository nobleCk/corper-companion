import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Corper Companion collects, stores, and protects your data — in plain English.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl font-bold text-charcoal-ink">
        Privacy Policy
      </h1>
      <p className="mt-2 font-body text-sm text-charcoal-ink/60">
        Last updated: September 2026
      </p>

      <div className="mt-8 space-y-8 font-body text-base text-charcoal-ink/90">
        <p>
          Corper Companion is built by an independent developer, not by NYSC or
          the Federal Government of Nigeria. This page explains, in plain
          language, what information the app collects and why — no legal
          jargon, no hidden catch.
        </p>

        <section>
          <h2 className="font-display text-xl font-bold text-charcoal-ink">
            What we collect
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>Account details.</strong> When you sign up, we use Firebase
              Authentication to store your email address and a securely hashed
              password. We never see or store your plaintext password.
            </li>
            <li>
              <strong>Profile photo (optional).</strong> If you upload one, it&apos;s
              stored with Cloudinary, a third-party image hosting service.
            </li>
            <li>
              <strong>App usage data you create.</strong> Your camp countdown date,
              checklist progress, PPA vetting notes, and feedback you submit are
              stored either on your device or in Firebase Firestore, tied to your
              account.
            </li>
            <li>
              <strong>Payment records.</strong> When you unlock Corper Pro, payment
              is processed by Paystack. We never receive or store your card
              details — only a record that a purchase was claimed, kept for
              fraud prevention and support purposes.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-charcoal-ink">
            What stays on your device
          </h2>
          <p className="mt-3">
            Your Document Vault (NIN, certificates, admission letter, call-up
            letter) is encrypted with AES-256 and stored locally on your phone,
            protected by biometric lock where your device supports it. We do
            not upload vault documents to any server, and we cannot see their
            contents.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-charcoal-ink">
            What we don&apos;t do
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>We don&apos;t sell your data to anyone.</li>
            <li>We don&apos;t use third-party ad trackers.</li>
            <li>
              We don&apos;t share your information beyond the service providers
              named above (Firebase, Cloudinary, Paystack), each of whom only
              receives what they need to do their job.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-charcoal-ink">
            Your control over your data
          </h2>
          <p className="mt-3">
            You can delete vault documents at any time from within the app.
            To request deletion of your account and associated data, email us
            using the address below — we&apos;ll process it promptly.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-charcoal-ink">
            Changes to this policy
          </h2>
          <p className="mt-3">
            If this policy changes in a meaningful way, we&apos;ll update the date
            at the top of this page.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-charcoal-ink">
            Contact us
          </h2>
          <p className="mt-3">
            Questions about your data or this policy? Reach us at{" "}
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
