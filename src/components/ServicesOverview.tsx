"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "./Section";
import { homeFeaturedServices } from "@/lib/services";

export default function ServicesOverview() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-start gap-4">
            <Eyebrow>What we do</Eyebrow>

            <div className="flex flex-col gap-3">
              <h2 className="max-w-2xl font-display text-3xl font-medium leading-[1.05] tracking-tight text-ink md:text-5xl lg:text-[52px]">
                Two services.{" "}
                <span className="italic text-primary">Done properly.</span>
              </h2>
              <p className="max-w-xl text-[15.5px] leading-relaxed text-ink-soft sm:text-base">
                From a single overhanging branch to a brand-new artificial
                lawn — we bring the right crew, gear and finish.
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
            {homeFeaturedServices.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              >
                <Link
                  href={s.href}
                  className="group flex flex-col gap-3"
                >
                  <div className="relative mb-2 aspect-video w-full overflow-hidden rounded-2xl bg-muted">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 30vw"
                      className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent opacity-70"
                    />
                  </div>

                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-medium tracking-tight text-ink transition-colors duration-200 group-hover:text-primary">
                      {s.title}
                    </h3>
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-ink-mute transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                  <p className="text-[15px] leading-relaxed text-ink-soft">
                    {s.blurb}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-2">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
            >
              View all services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
