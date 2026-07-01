"use client";

import { FormEvent, useState } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { buildWhatsAppUrl, WHATSAPP } from "@/lib/constants";

const PROJECT_TYPES = [
  "Interior Design",
  "Bespoke Furniture",
  "Custom Manufacturing",
  "Full Renovation",
  "Commercial / Hospitality",
  "Other",
];

export function Contact() {
  const [isRedirecting, setIsRedirecting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      projectType: formData.get("projectType") as string,
      message: formData.get("message") as string,
    };

    setIsRedirecting(true);

    const url = buildWhatsAppUrl(data);

    window.setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setIsRedirecting(false);
      form.reset();
    }, 600);
  }

  return (
    <section id="contact" className="bg-surface py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-2 md:gap-20 md:px-10 lg:px-16 lg:gap-28">
        <div>
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Contact</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="luxury-heading mt-4 text-3xl font-light text-ivory md:text-4xl lg:text-5xl">
              Begin Your
              <br />
              Transformation
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="luxury-body mt-8 max-w-md text-sm text-muted md:text-base">
              Every extraordinary space and piece of furniture begins with a conversation.
              Share your vision — we will connect you directly with {WHATSAPP.owner}.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <a
              href={`https://wa.me/${WHATSAPP.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block text-sm tracking-wide text-ivory transition-opacity duration-500 hover:opacity-70"
            >
              WhatsApp: +91 {WHATSAPP.phone.slice(2)}
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                disabled={isRedirecting}
                placeholder="Name"
                className="luxury-input disabled:opacity-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={isRedirecting}
                placeholder="Email"
                className="luxury-input disabled:opacity-50"
              />
            </div>
            <div>
              <label htmlFor="projectType" className="sr-only">
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                required
                disabled={isRedirecting}
                defaultValue=""
                className="luxury-input cursor-pointer appearance-none bg-transparent disabled:opacity-50"
              >
                <option value="" disabled className="bg-surface text-muted">
                  Project Type
                </option>
                {PROJECT_TYPES.map((type) => (
                  <option key={type} value={type} className="bg-surface text-ivory">
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                disabled={isRedirecting}
                placeholder="Tell us about your vision"
                className="luxury-input luxury-textarea disabled:opacity-50"
              />
            </div>
            <button
              type="submit"
              disabled={isRedirecting}
              className="mt-4 w-full bg-gold px-8 py-4 text-xs uppercase tracking-[0.2em] text-background transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-gold/90 hover:shadow-[0_4px_24px_-8px_rgba(198,161,91,0.4)] active:scale-[0.98] disabled:cursor-wait disabled:opacity-70 md:w-auto"
            >
              {isRedirecting ? "Redirecting to WhatsApp..." : "Request Private Consultation"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
