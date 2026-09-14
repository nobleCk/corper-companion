import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-khaki-sand bg-cream-parade">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="font-body text-sm text-charcoal-ink/70">
          &copy; {new Date().getFullYear()} Corper Companion. Not affiliated with
          NYSC or the Federal Government of Nigeria.
        </p>
        <nav className="flex gap-6 font-body text-sm font-semibold text-charcoal-ink">
          <Link href="/privacy" className="hover:text-savannah-green">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-savannah-green">
            Terms of Service
          </Link>
          <a
            href="mailto:olivernoble672@gmail.com"
            className="hover:text-savannah-green"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
