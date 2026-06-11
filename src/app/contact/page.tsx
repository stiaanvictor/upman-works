import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { Phone, MapPin } from "lucide-react";
import FacebookIcon from "@/components/icons/FacebookIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { site, waLink } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Upman Works",
  description:
    "Get a free quote from Upman Works. WhatsApp or call us — tree felling and artificial grass installation in Randburg and across Gauteng.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Tell us about the job.{" "}
            <span className="italic font-light text-[#E4D097]">We'll handle the rest.</span>
          </>
        }
        blurb="Send your details below — we'll open WhatsApp with your message ready to go. Or reach us straight on the phone."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-[0_24px_60px_-30px_rgba(28,40,30,0.18)]">
            <div className="grid lg:grid-cols-[1.25fr_1fr]">
              {/* Form */}
              <div className="p-7 sm:p-10 lg:p-12">
                <h2 className="font-display text-2xl font-semibold text-ink">
                  Request a free quote
                </h2>
                <p className="mt-2 text-[14.5px] text-ink-soft">
                  Fill in the form — tapping "Send via WhatsApp" opens a chat
                  with your message ready to send.
                </p>
                <div className="mt-7">
                  <ContactForm />
                </div>
              </div>

              {/* Contact details */}
              <aside className="border-t border-border p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                <h2 className="font-display text-2xl font-semibold text-ink">
                  Reach us directly
                </h2>
                <p className="mt-2 text-[14.5px] text-ink-soft">
                  We answer fast on WhatsApp and the phone — usually within
                  business hours.
                </p>

                <ul className="mt-7 divide-y divide-border/70">
                  <li>
                    <a
                      href={waLink("Hi Upman Works, I'd like a free quote.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group -mx-3 flex items-center gap-4 rounded-2xl px-3 py-4 transition-colors hover:bg-muted/60"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#25D366]/15 text-[#1FA855]">
                        <WhatsAppIcon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-mute">
                          WhatsApp
                        </span>
                        <span className="block font-display text-lg font-semibold text-ink group-hover:text-primary">
                          {site.phone}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${site.phoneIntl}`}
                      className="group -mx-3 flex items-center gap-4 rounded-2xl px-3 py-4 transition-colors hover:bg-muted/60"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                        <Phone className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-mute">
                          Phone
                        </span>
                        <span className="block font-display text-lg font-semibold text-ink group-hover:text-primary">
                          {site.phone}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group -mx-3 flex items-center gap-4 rounded-2xl px-3 py-4 transition-colors hover:bg-muted/60"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#1877F2]/10 text-[#1877F2]">
                        <FacebookIcon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-mute">
                          Facebook
                        </span>
                        <span className="block font-display text-lg font-semibold text-ink group-hover:text-primary">
                          Message on Facebook
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="flex items-start gap-4 py-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-burgundy-soft text-burgundy">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-mute">
                        Based in
                      </span>
                      <span className="block font-display text-lg font-semibold text-ink">
                        Randburg, Gauteng
                      </span>
                      <span className="block text-[13px] text-ink-soft">
                        Serving all suburbs across the province
                      </span>
                    </span>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
