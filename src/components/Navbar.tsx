"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import { site, waLink } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Every page now has a dark hero at the top, so navbar is light there.
  void pathname;
  const light = !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-border/80"
          : light
            ? "bg-white/12 backdrop-blur-md border-b border-white/15"
            : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo light={light} />

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? "page" : undefined}
                className={`group relative text-sm font-medium transition-colors ${
                  light
                    ? active
                      ? "text-white"
                      : "text-white/85 hover:text-white"
                    : active
                      ? "text-ink"
                      : "text-ink-soft hover:text-ink"
                }`}
              >
                {n.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  } ${light ? "bg-white" : "bg-primary"}`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${site.phoneIntl}`}
            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
              light
                ? "text-white/85 hover:text-white"
                : "text-ink-soft hover:text-ink"
            }`}
          >
            <Phone className="h-4 w-4" aria-hidden />
            {site.phone}
          </a>
          <a
            href={waLink("Hi Upman Works, I'd like a free quote.")}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_8px_24px_-12px_rgba(0,0,0,0.4)] transition-transform duration-200 hover:-translate-y-0.5 ${
              light
                ? "bg-[#FBF6E7] text-primary-dark hover:bg-white"
                : "bg-primary text-bg hover:bg-primary-dark"
            }`}
          >
            Get a Free Quote
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`grid h-10 w-10 place-items-center rounded-full border transition-colors md:hidden ${
            light
              ? "border-white/35 bg-white/10 text-white"
              : "border-border bg-surface/60 text-ink"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-40 border-t border-border bg-bg md:hidden"
          >
            <motion.div
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="px-5 py-6"
            >
              <ul className="flex flex-col gap-1">
                {nav.map((n, i) => (
                  <motion.li
                    key={n.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.25 }}
                  >
                    <Link
                      href={n.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 font-display text-2xl text-ink hover:bg-muted"
                    >
                      {n.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
                <a
                  href={`tel:${site.phoneIntl}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-4 py-3 text-sm font-medium text-ink"
                >
                  <Phone className="h-4 w-4" /> Call {site.phone}
                </a>
                <a
                  href={waLink("Hi Upman Works, I'd like a free quote.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-medium text-bg"
                >
                  WhatsApp for a Free Quote
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
