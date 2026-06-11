import Link from "next/link";
import Image from "next/image";

export default function Logo({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Upman Works — Home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <Image
        src="/logo.png"
        alt="Upman Works"
        width={56}
        height={56}
        priority
        unoptimized
        className={`h-14 w-14 shrink-0 object-contain transition-[filter] duration-300 ${
          light ? "[filter:brightness(0)_invert(1)]" : ""
        }`}
      />
      <span className="hidden leading-tight sm:block">
        <span
          className={`block font-display text-[17px] font-semibold tracking-tight transition-colors ${
            light ? "text-white" : "text-ink"
          }`}
        >
          Upman Works
        </span>
        <span
          className={`block text-[10px] uppercase tracking-[0.18em] transition-colors ${
            light ? "text-white/70" : "text-ink-mute"
          }`}
        >
          Randburg · Gauteng
        </span>
      </span>
    </Link>
  );
}
