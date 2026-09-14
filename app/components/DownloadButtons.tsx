"use client";

import { useEffect, useRef, useState } from "react";

type StoreKey = "play" | "app";

const STORE_LABEL: Record<StoreKey, string> = {
  play: "Play Store",
  app: "App Store",
};

function ComingSoonButton({ store }: { store: StoreKey }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    const timer = setTimeout(() => setOpen(false), 3000);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={wrapperRef} className="relative">
      {open && (
        <div
          role="status"
          className="absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 rounded-lg bg-charcoal-ink/80 px-3 py-2 text-xs font-semibold text-cream-parade shadow-lg backdrop-blur-sm"
        >
          Coming soon to the {STORE_LABEL[store]}
        </div>
      )}
      <button
        type="button"
        aria-disabled="true"
        onClick={() => setOpen((v) => !v)}
        className="cursor-not-allowed rounded-full border border-khaki-sand bg-khaki-sand/40 px-5 py-3 font-body text-sm font-semibold text-charcoal-ink/50 opacity-60 blur-[0.2px] transition hover:opacity-70"
      >
        Get on {STORE_LABEL[store]}
      </button>
    </div>
  );
}

export default function DownloadButtons({ id }: { id?: string } = {}) {
  return (
    <div
      id={id}
      className="flex flex-col items-center gap-3 sm:flex-row sm:items-start"
    >
      <a
        href="/downloads/corper-companion.apk"
        className="rounded-full bg-harmattan-gold px-6 py-3 text-center font-body text-sm font-semibold text-charcoal-ink shadow-md transition hover:opacity-90"
      >
        Download APK
      </a>
      <ComingSoonButton store="play" />
      <ComingSoonButton store="app" />
    </div>
  );
}
