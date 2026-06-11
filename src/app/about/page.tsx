import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import { Eyebrow } from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Upman Works",
  description:
    "Upman Works is based in Randburg, Gauteng, providing tree felling and artificial grass installation across the province.",
};

const principles = [
  {
    title: "Skilled, not careless",
    body: "Every cut, every roll of grass — handled by people who know what they're doing and care how it looks.",
  },
  {
    title: "We arrive ready",
    body: "Own chainsaws, own tools, own trucks. No surprise delays, no hidden hire fees.",
  },
  {
    title: "We finish the job",
    body: "We don't leave you with a pile of branches and a mess. Sites go back cleaner than we found them.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            One team for{" "}
            <span className="italic font-light text-[#E4D097]">trees and turf</span> —
            done properly.
          </>
        }
        blurb="Upman Works is based in Randburg and handles tree felling and artificial grass installation across Gauteng."
      />

      <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-border bg-muted">
            <Image
              src="/what-we-do.png"
              alt="A well-kept Highveld garden — trees, lawn and paving"
              fill
              unoptimized
              sizes="(max-width: 1024px) 92vw, 45vw"
              className="object-cover"
            />
          </div>

          <div>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
              Two services, done properly.
            </h2>
            <div className="prose prose-stone mt-5 max-w-none text-[15.5px] leading-relaxed text-ink-soft">
              <p>
                We focus on two things and do them well: tree felling and
                artificial grass installation. From single problem trees and
                overhanging branches through to stump removal, plus full
                artificial lawn installs — site prep, base, lay and finish.
              </p>
              <p className="mt-4">
                You deal with one team for the whole job. Honest quotes,
                straightforward communication, and a tidy finish — that's how
                we like to work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <Eyebrow>What we stand for</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
              Three things we don't compromise on.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {principles.map((p, i) => (
              <div
                key={p.title}
                className="rounded-3xl border border-border bg-surface p-7"
              >
                <span className="font-display text-3xl font-medium text-primary">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
