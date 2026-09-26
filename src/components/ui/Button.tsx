"use client";

import Link from "next/link";
import { Magnetic } from "./motion";
import { track } from "@/lib/track";

type Variant = "primary" | "ghost" | "light";

const styles: Record<Variant, string> = {
  primary: "bg-violet text-snow hover:bg-violet-bright",
  ghost: "border border-line text-fg hover:border-lilac/60",
  light: "bg-fg text-ink hover:bg-lilac",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  cursor,
  trackAs,
  onClick,
  type,
}: {
  href?: string;
  children: string;
  variant?: Variant;
  className?: string;
  cursor?: string;
  trackAs?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const cls = `group relative inline-flex h-14 items-center gap-3 overflow-hidden rounded-full pl-7 pr-2 text-[0.95rem] font-medium transition-colors duration-500 ${styles[variant]} ${className}`;
  const inner = (
    <>
      <span className="roll">
        <span>{children}</span>
        <span>{children}</span>
      </span>
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-500 ease-[var(--ease-expo)] group-hover:rotate-[-45deg] ${
          variant === "light" ? "bg-ink text-fg" : "bg-fg text-ink"
        }`}
      >
        <Arrow />
      </span>
    </>
  );
  const handle = () => {
    if (trackAs) track("cta_click", { cta: trackAs });
    onClick?.();
  };

  return (
    <Magnetic strength={0.25}>
      {href ? (
        <Link href={href} className={cls} data-cursor={cursor} onClick={handle}>
          {inner}
        </Link>
      ) : (
        <button type={type ?? "button"} className={cls} data-cursor={cursor} onClick={handle}>
          {inner}
        </button>
      )}
    </Magnetic>
  );
}

export function Arrow({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SectionLabel({ n, children, tone = "dark" }: { n: string; children: React.ReactNode; tone?: "dark" | "light" }) {
  return (
    <div className={`label flex items-center gap-3 ${tone === "dark" ? "text-muted" : "text-ink/60"}`}>
      <span className={tone === "dark" ? "text-violet-bright" : "text-accent-paper"}>({n})</span>
      <span className={`h-px w-10 ${tone === "dark" ? "bg-line" : "bg-line-ink"}`} />
      <span>{children}</span>
    </div>
  );
}
