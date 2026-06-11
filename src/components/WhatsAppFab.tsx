"use client";

import WhatsAppIcon from "./icons/WhatsAppIcon";
import { waLink } from "@/lib/site";

export default function WhatsAppFab() {
  return (
    <a
      href={waLink("Hi Upman Works, I'd like a free quote.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgba(37,211,102,0.6)] transition-transform duration-200 hover:-translate-y-0.5 sm:bottom-6 sm:right-6"
    >
      <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15">
        <WhatsAppIcon className="h-4 w-4" />
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
