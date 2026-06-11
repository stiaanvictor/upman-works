"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";
import { site, waLink } from "@/lib/site";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const lineRise = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 1.0, ease: EASE_OUT },
  },
} as const;

const lineGroup = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
};

export default function Hero() {
  return (
    <section className="relative isolate -mt-20 flex h-[100svh] min-h-[680px] w-full flex-col overflow-hidden bg-[#070D0A]">
      {/* Image with slow drift */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: EASE_OUT }}
        className="absolute inset-0"
      >
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.07 }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0"
        >
          <Image
            src="/hero-bg-v2.png"
            alt="Last light pouring through a colossal Highveld tree at golden hour"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-[62%_50%]"
          />
        </motion.div>
      </motion.div>

      {/* Cinematic overlays */}
      <div
        aria-hidden
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(98deg, rgba(5,12,8,0.88) 0%, rgba(5,12,8,0.78) 24%, rgba(5,12,8,0.40) 52%, rgba(5,12,8,0.06) 78%, rgba(5,12,8,0) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 lg:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,12,8,0.30) 0%, rgba(5,12,8,0.30) 35%, rgba(5,12,8,0.80) 78%, rgba(5,12,8,0.95) 100%)",
        }}
      />
      {/* Vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 45%, transparent 55%, rgba(0,0,0,0.55) 100%)",
        }}
      />
      {/* Top scrim for navbar */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/55 to-transparent"
      />
      {/* Film grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.95 0 0 0 0 0.92 0 0 0 0 0.84 0 0 0 0.7 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          backgroundSize: "300px 300px",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pt-24 pb-8 lg:px-8 lg:pt-32 lg:pb-10">
        <div className="mt-auto max-w-[1100px] lg:my-auto lg:-translate-y-10">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-8 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/75"
          >
            <span className="h-px w-10 bg-white/45" />
            Randburg · Gauteng
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={lineGroup}
            initial="hidden"
            animate="show"
            className="font-display font-medium leading-[0.94] tracking-[-0.025em] text-[#FBF6E7]"
            style={{ fontSize: "clamp(2.85rem, 8.6vw, 8.25rem)" }}
          >
            <span className="block overflow-hidden">
              <motion.span variants={lineRise} className="block">
                Tree felling
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={lineRise} className="block">
                <span>&amp; artificial grass&nbsp;—</span>
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={lineRise} className="block">
                done with{" "}
                <span className="italic font-light text-[#E4D097]">care.</span>
              </motion.span>
            </span>
          </motion.h1>

          {/* Subhead + accent */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.25 }}
            className="mt-8 flex max-w-2xl items-start gap-4"
          >
            <span className="mt-3 h-px w-12 shrink-0 bg-[#E4D097]/70" />
            <p className="text-[15px] leading-relaxed text-white/82 sm:text-base lg:text-[17px]">
              One team for tree felling and artificial grass installation —
              across Gauteng.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.45 }}
            className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={waLink("Hi Upman Works, I'd like a free quote.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#FBF6E7] px-8 py-[18px] text-sm font-semibold uppercase tracking-[0.18em] text-primary-dark shadow-[0_24px_60px_-18px_rgba(0,0,0,0.7)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-2 px-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/90 sm:px-4"
            >
              <span className="relative">
                Explore Services
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-white/50 transition-transform duration-300 group-hover:scale-x-110 group-hover:bg-white" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Bottom info strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-white/15 pt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/65"
        >
          <a
            href={`tel:${site.phoneIntl}`}
            className="inline-flex items-center gap-2 hover:text-white"
          >
            <Phone className="h-3.5 w-3.5" />
            {site.phone}
          </a>
          <span className="hidden sm:inline">
            Tree felling · Artificial grass installation
          </span>
          <span className="inline-flex items-center gap-2">
            Scroll
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
              className="inline-flex"
            >
              <ChevronDown className="h-4 w-4" />
            </motion.span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
