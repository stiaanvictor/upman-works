"use client";

import { useState } from "react";
import { waLink } from "@/lib/site";
import WhatsAppIcon from "./icons/WhatsAppIcon";

const serviceOptions = [
  "Tree felling",
  "Stump removal",
  "Artificial grass installation",
  "Other",
];

export default function ContactForm() {
  const [service, setService] = useState(serviceOptions[0]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = (data.get("name") as string)?.trim();
    const suburb = (data.get("suburb") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    const lines = [
      `Hi Upman Works,`,
      ``,
      `My name is ${name || "(not given)"}.`,
      `Suburb: ${suburb || "(not given)"}`,
      `Service: ${service}`,
      ``,
      `Details:`,
      message || "(no details added)",
    ];
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit}>
      <h2 className="font-display text-2xl font-semibold text-ink">
        Request a free quote
      </h2>
      <p className="mt-2 text-[14.5px] text-ink-soft">
        Fill in the form — tapping "Send via WhatsApp" opens a chat with your
        message ready to send.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name" required>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="e.g. Thandi Nkosi"
            className={inputCls}
          />
        </Field>
        <Field label="Suburb / area" htmlFor="suburb">
          <input
            id="suburb"
            name="suburb"
            autoComplete="address-level2"
            placeholder="e.g. Randburg"
            className={inputCls}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Service" htmlFor="service">
          <div className="flex flex-wrap gap-2">
            {serviceOptions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setService(s)}
                className={`rounded-full border px-3.5 py-2 text-[13px] font-medium transition-colors ${
                  service === s
                    ? "border-primary bg-primary text-bg"
                    : "border-border bg-bg text-ink-soft hover:border-primary/40 hover:text-ink"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Tell us about the job" htmlFor="message">
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="e.g. Two large gum trees need trimming, both near the boundary wall."
            className={`${inputCls} resize-none`}
          />
        </Field>
      </div>

      <button
        type="submit"
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-bg shadow-[0_18px_40px_-18px_rgba(42,74,54,0.7)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark sm:w-auto"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Send via WhatsApp
      </button>
    </form>
  );
}

const inputCls =
  "w-full rounded-2xl border border-border bg-bg px-4 py-3 text-[15px] text-ink placeholder:text-ink-mute outline-none transition-colors focus:border-primary focus:bg-surface focus:ring-4 focus:ring-primary/15";

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-2 block text-[12.5px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
        {label} {required && <span className="text-burgundy">*</span>}
      </span>
      {children}
    </label>
  );
}
