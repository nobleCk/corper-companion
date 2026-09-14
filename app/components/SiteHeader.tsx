import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="border-b border-khaki-sand bg-cream-parade">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/brand/icon_rounded_64.png"
            alt="Corper Companion"
            width={36}
            height={36}
            priority
          />
          <span className="font-display text-lg font-bold text-charcoal-ink">
            Corper Companion
          </span>
        </Link>
        <nav className="flex items-center gap-6 font-body text-sm font-semibold text-charcoal-ink">
          <Link href="/#features" className="hidden hover:text-savannah-green sm:inline">
            Features
          </Link>
          <Link href="/#pricing" className="hidden hover:text-savannah-green sm:inline">
            Pricing
          </Link>
          <Link
            href="/#download"
            className="rounded-full bg-savannah-green px-4 py-2 text-cream-parade hover:opacity-90"
          >
            Download
          </Link>
        </nav>
      </div>
    </header>
  );
}
