"use client";

import { FormEvent, useState } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { ProjectTypeSelect } from "@/components/ui/ProjectTypeSelect";
import {
  buildWhatsAppUrl,
  CONTACT_EMAIL,
  CREATIVE_DIRECTOR,
  WHATSAPP,
} from "@/lib/constants";
import { PROJECT_TYPE_GROUPS } from "@/lib/data";

export function Contact() {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [formKey, setFormKey] = useState(0);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      projectType: formData.get("projectType") as string,
      message: formData.get("message") as string,
    };

    setIsRedirecting(true);

    const url = buildWhatsAppUrl(data);

    window.setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setIsRedirecting(false);
      form.reset();
      setFormKey((k) => k + 1);
    }, 600);
  }

  return (
    <section id="contact" aria-label="Contact" className="section-padding bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-10 lg:px-16">
        <div>
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Contact</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="luxury-heading mt-3 text-3xl font-light text-ivory md:text-4xl lg:text-5xl">
              Begin Your
              <br />
              Transformation
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="luxury-body mt-6 max-w-md text-sm text-muted md:text-base">
              Every extraordinary space begins with a conversation. Share your vision
              — we will connect you directly with our Creative Director.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 border-l border-gold/30 pl-5">
              <p className="luxury-heading text-lg text-ivory">
                {CREATIVE_DIRECTOR.name}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-gold">
                {CREATIVE_DIRECTOR.title}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 space-y-3">
              <a
                href={`https://wa.me/${WHATSAPP.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm tracking-wide text-ivory transition-opacity duration-300 hover:opacity-70"
              >
                WhatsApp: +91 {WHATSAPP.phone.slice(2)}
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="block text-sm tracking-wide text-ivory transition-opacity duration-300 hover:opacity-70"
              >
                Email: {CONTACT_EMAIL}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div>
              <label htmlFor="name" className="luxury-label">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                disabled={isRedirecting}
                placeholder="Your full name"
                className="luxury-input disabled:opacity-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="luxury-label">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={isRedirecting}
                placeholder="you@email.com"
                className="luxury-input disabled:opacity-50"
              />
            </div>
            <div>
              <label htmlFor="phone" className="luxury-label">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                disabled={isRedirecting}
                placeholder="+91 your phone number"
                className="luxury-input disabled:opacity-50"
              />
            </div>
            <div>
              <label id="projectType-label" htmlFor="projectType" className="luxury-label">
                Project Type
              </label>
              <ProjectTypeSelect
                key={formKey}
                id="projectType"
                labelId="projectType-label"
                name="projectType"
                groups={PROJECT_TYPE_GROUPS}
                required
                disabled={isRedirecting}
              />
            </div>
            <div>
              <label htmlFor="message" className="luxury-label">
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
              className="mt-2 w-full bg-gold px-8 py-4 text-xs uppercase tracking-[0.2em] text-background transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-gold/90 hover:shadow-[0_4px_24px_-8px_rgba(201,169,110,0.4)] active:scale-[0.98] disabled:cursor-wait disabled:opacity-70 md:w-auto"
            >
              {isRedirecting ? "Redirecting to WhatsApp..." : "Request Private Consultation"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
