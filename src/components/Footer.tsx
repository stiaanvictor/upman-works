import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import FacebookIcon from "./icons/FacebookIcon";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import Logo from "./Logo";
import { site, waLink } from "@/lib/site";
import { serviceCategories } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-bg">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-soft">
            Based in Randburg and serving all of Gauteng — tree felling and
            artificial grass installation. Reliable crews, own transport,
            clean finishes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={waLink("Hi Upman Works, I'd like a free quote.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-bg hover:bg-primary-dark"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
            </a>
            <a
              href={`tel:${site.phoneIntl}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-ink hover:bg-muted"
            >
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-mute">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {serviceCategories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/services#${c.slug}`}
                  className="text-ink-soft hover:text-ink"
                >
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-mute">
            Visit & Follow
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-soft">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                {site.location}
                <br />
                Serving {site.serviceArea}
              </span>
            </li>
            <li>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-ink"
              >
                <FacebookIcon className="h-4 w-4" /> Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-ink-mute sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} Upman Works. All rights reserved.</p>
          <p>Tree felling · Artificial grass installation</p>
        </div>
      </div>
    </footer>
  );
}
