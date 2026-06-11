"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "./Section";

const REAL_WORK = "/real-work";

const shots = [
  {
    src: `${REAL_WORK}/tree-felling.jpeg`,
    label: "On site",
    aspect: "aspect-[3/4]",
  },
  {
    src: `${REAL_WORK}/grass-around-pool.jpeg`,
    label: "On site",
    aspect: "aspect-[4/3]",
  },
  {
    src: `${REAL_WORK}/721025015_935997186155760_1102667234979677508_n.jpg`,
    label: "On site",
    aspect: "aspect-[3/4]",
  },
  {
    src: `${REAL_WORK}/720946653_935997182822427_5630409685680702460_n.jpg`,
    label: "On site",
    aspect: "aspect-[4/3]",
  },
];

export default function GalleryPreview() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const isOpen = openIdx !== null;

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIdx(null);
      if (e.key === "ArrowRight")
        setOpenIdx((i) => (i === null ? i : (i + 1) % shots.length));
      if (e.key === "ArrowLeft")
        setOpenIdx((i) =>
          i === null ? i : (i - 1 + shots.length) % shots.length,
        );
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <section className="relative bg-muted/40 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Recent work"
          title={
            <>
              A glimpse of the{" "}
              <span className="italic text-primary">craft</span>.
            </>
          }
          blurb="Every job, big or small, treated with care from the first cut to the final sweep."
          align="center"
        />

        {/*
          Desktop grid columns are proportional to each image's aspect ratio
          (W/H). Each tile uses its native aspect-ratio for height, so every
          tile ends at exactly the same height: (totalWidth ÷ sumOfAspects).
          Mobile = 1 col stack. SM = 2x2.
        */}
        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:[grid-template-columns:3fr_5.33fr_3fr_5.33fr]">
          {shots.map((s, i) => (
            <motion.figure
              key={s.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className={`relative ${s.aspect} group overflow-hidden rounded-2xl border border-border bg-surface`}
            >
              <button
                type="button"
                onClick={() => setOpenIdx(i)}
                aria-label={`View image: ${s.label}`}
                className="absolute inset-0 cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <Image
                  src={s.src}
                  alt={s.label}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
                <figcaption className="absolute bottom-3 left-3 right-3 text-left text-[12px] font-medium uppercase tracking-[0.15em] text-bg/90">
                  {s.label}
                </figcaption>
              </button>
            </motion.figure>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setOpenIdx(null)}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={() => setOpenIdx(null)}
              aria-label="Close"
              className="absolute top-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIdx(
                  (i) =>
                    i === null ? i : (i - 1 + shots.length) % shots.length,
                );
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIdx((i) =>
                  i === null ? i : (i + 1) % shots.length,
                );
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:right-6"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.div
              key={shots[openIdx!].src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative h-full max-h-[88vh] w-full max-w-6xl"
            >
              <Image
                src={shots[openIdx!].src}
                alt={shots[openIdx!].label}
                fill
                unoptimized
                sizes="100vw"
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
