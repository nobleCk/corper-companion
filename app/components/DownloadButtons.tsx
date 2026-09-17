"use client";

import { useEffect, useRef, useState } from "react";

type StoreKey = "play" | "app";

const STORE_LABEL: Record<StoreKey, string> = {
  play: "Play Store",
  app: "App Store",
};

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
      <path d="M4.5 2.5v19a.5.5 0 0 0 .79.41l14-9.5a.5.5 0 0 0 0-.82l-14-9.5a.5.5 0 0 0-.79.41Z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
      <path d="M16.36 1c.12 1.07-.3 2.11-.94 2.87-.66.78-1.75 1.4-2.8 1.31-.14-1.03.36-2.1 1-2.78.7-.76 1.86-1.33 2.74-1.4ZM19.9 17.1c-.36.83-.78 1.6-1.28 2.31-.68.96-1.24 1.62-1.68 1.98-.68.6-1.4.9-2.18.92-.56.01-1.23-.16-2-.5-.78-.34-1.5-.5-2.16-.5-.7 0-1.44.16-2.24.5-.8.34-1.44.52-1.94.54-.75.03-1.5-.28-2.2-.94-.47-.42-1.06-1.12-1.77-2.1C.92 17.9.24 15.98.1 14.16-.05 12.2.36 10.5 1.2 9.08c.65-1.13 1.53-2.02 2.63-2.68a5.2 5.2 0 0 1 2.66-.79c.6 0 1.4.2 2.4.6.98.4 1.62.6 1.9.6.22 0 .93-.23 2.13-.7 1.14-.44 2.1-.62 2.9-.55 2.14.17 3.75 1.02 4.8 2.55-1.92 1.16-2.87 2.79-2.85 4.87.02 1.63.6 2.98 1.75 4.06.53.5 1.1.9 1.7 1.17-.13.4-.28.77-.45 1.13Z" />
    </svg>
  );
}

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

  const eyebrow = store === "play" ? "GET IT ON" : "Download on the";

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
        className="flex cursor-not-allowed items-center gap-2 rounded-xl border border-charcoal-ink/20 bg-charcoal-ink/40 px-4 py-2 text-left opacity-50 blur-[0.3px] grayscale transition hover:opacity-60"
      >
        <span className="text-cream-parade">
          {store === "play" ? <PlayIcon /> : <AppleIcon />}
        </span>
        <span className="flex flex-col leading-tight">
          <span className="font-body text-[10px] text-cream-parade/80">{eyebrow}</span>
          <span className="font-display text-sm font-bold text-cream-parade">
            {STORE_LABEL[store]}
          </span>
        </span>
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
        href="https://apkpure.com/p/com.corpercompanion.corper_companion"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-harmattan-gold px-6 py-3 text-center font-body text-sm font-semibold text-charcoal-ink shadow-md transition hover:opacity-90"
      >
        Download APK
      </a>
      <ComingSoonButton store="play" />
      <ComingSoonButton store="app" />
    </div>
  );
}
