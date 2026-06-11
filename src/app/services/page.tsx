import { Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import { serviceCategories } from "@/lib/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Upman Works",
  description:
    "Tree felling and artificial grass installation across Gauteng. Safe, skilled, and tidy from the first cut to the final brush.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Everything we do —{" "}
            <span className="italic font-light text-[#E4D097]">in one place</span>.
          </>
        }
        blurb="From precision tree felling to fresh artificial lawns, our crews handle the job end-to-end and clean up after themselves."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-20 px-5 lg:px-8">
          {serviceCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <article
                key={cat.slug}
                id={cat.slug}
                className="scroll-mt-24"
              >
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                  <div className="lg:col-span-5">
                    <div className="sticky top-24">
                      <span className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-primary-soft text-primary">
                        <Icon className="h-7 w-7" strokeWidth={1.6} />
                      </span>
                      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink-mute">
                        0{idx + 1} · Category
                      </p>
                      <h2 className="mt-2 font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
                        {cat.title}
                      </h2>
                      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
                        {cat.blurb}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-7">
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {cat.items.map((it) => (
                        <li
                          key={it}
                          className="group flex items-center gap-3 rounded-2xl border border-border bg-surface px-5 py-4 text-[15px] text-ink transition-colors duration-200 hover:border-primary/40 hover:bg-primary-soft/40"
                        >
                          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary-soft text-primary group-hover:bg-primary group-hover:text-bg">
                            <Check className="h-4 w-4" strokeWidth={2.4} />
                          </span>
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {idx < serviceCategories.length - 1 && (
                  <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
                )}
              </article>
            );
          })}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
