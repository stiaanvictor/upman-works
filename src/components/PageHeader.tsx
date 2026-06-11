import { ReactNode } from "react";
import Image from "next/image";

export default function PageHeader({
  eyebrow,
  title,
  blurb,
}: {
  eyebrow: string;
  title: ReactNode;
  blurb?: ReactNode;
}) {
  return (
    <section className="relative isolate -mt-20 overflow-hidden border-b border-border bg-[#0F2016] pt-[calc(4rem+5rem)] pb-14 lg:pt-[calc(6rem+5rem)] lg:pb-20">
      {/* Background image */}
      <Image
        src="/page-hero.png"
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover object-[65%_50%]"
      />
      {/* Left-to-right dark canopy gradient */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(95deg, rgba(8,22,15,0.82) 0%, rgba(8,22,15,0.70) 32%, rgba(8,22,15,0.35) 60%, rgba(8,22,15,0.10) 100%)",
        }}
      />
      {/* Top scrim for navbar legibility */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-black/45 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-[#FBF6E7]">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E4D097]">
            <span className="h-px w-6 bg-[#E4D097]/60" />
            {eyebrow}
          </span>
        </div>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] text-[#FBF6E7] sm:text-5xl lg:text-[64px]">
          {title}
        </h1>
        {blurb && (
          <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-white/82 sm:text-base">
            {blurb}
          </p>
        )}
      </div>
    </section>
  );
}
