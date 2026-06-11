import { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
      <span className="h-px w-6 bg-primary/50" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  blurb,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  blurb?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-2xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 font-display text-3xl font-medium leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[44px]">
        {title}
      </h2>
      {blurb && (
        <p className="mt-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">
          {blurb}
        </p>
      )}
    </div>
  );
}
