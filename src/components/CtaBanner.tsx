"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { site, waLink } from "@/lib/site";

export default function CtaBanner() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[32px] border border-primary-dark/30 bg-primary px-7 py-14 text-bg shadow-[0_40px_80px_-40px_rgba(30,58,42,0.6)] sm:px-12 sm:py-20 lg:px-16"
        >
          {/* decorative rings */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-bg/15"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 top-20 h-48 w-48 rounded-full border border-bg/10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-bg/5 blur-3xl"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-bg/25 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-bg/85">
                Free quotes across Gauteng
              </span>
              <h2 className="mt-5 font-display text-3xl font-medium leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
                Ready to get a clean,{" "}
                <span className="italic">honest quote</span>?
              </h2>
              <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-bg/85">
                Send us a quick WhatsApp with a photo of the job — or give us
                a ring. We'll get back to you with a clear, honest quote.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={waLink("Hi Upman Works, I'd like a free quote.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-bg px-6 py-4 text-sm font-semibold text-primary transition-transform duration-200 hover:-translate-y-0.5"
              >
                WhatsApp for a Free Quote
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a
                href={`tel:${site.phoneIntl}`}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-bg/30 px-6 py-4 text-sm font-semibold text-bg transition-colors duration-200 hover:bg-bg/10"
              >
                <Phone className="h-4 w-4" /> Call {site.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
