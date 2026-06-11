"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "./Section";
import { valueProps } from "@/lib/services";

export default function WhyUs() {
  return (
    <section className="relative py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative aspect-[5/6] w-full overflow-hidden rounded-[28px] border border-border bg-muted lg:aspect-[4/5]"
        >
          <Image
            src="/whyus.png"
            alt="A quiet, well-kept corner of a Highveld garden"
            fill
            unoptimized
            sizes="(max-width: 1024px) 92vw, 45vw"
            className="object-cover"
          />
        </motion.div>

        <div>
          <SectionHeading
            eyebrow="Why Upman Works"
            title={
              <>
                Skilled hands.{" "}
                <span className="italic text-primary">Honest work.</span>{" "}
                Cleaned-up sites.
              </>
            }
            blurb="Three things we focus on: turning up when we say, doing the job properly, and leaving the place tidier than we found it."
          />

          <ul className="mt-10 space-y-6">
            {valueProps.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.li
                  key={v.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-4"
                >
                  <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {v.title}
                    </h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">
                      {v.body}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
