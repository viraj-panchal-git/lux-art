import Link from "next/link";
import { BRAND_NAME, CONTACT_EMAIL, CREATIVE_DIRECTOR, SITE_URL, WHATSAPP } from "@/lib/constants";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          <div>
            <p className="luxury-heading text-base uppercase tracking-[0.2em] text-ivory md:text-lg">
              {BRAND_NAME}
            </p>
            <p className="luxury-body mt-4 text-sm text-muted">
              Crafting spaces that define luxury.
            </p>
            <div className="mt-6 border-l border-gold/20 pl-4">
              <p className="text-sm text-ivory">{CREATIVE_DIRECTOR.name}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-gold">
                {CREATIVE_DIRECTOR.title}
              </p>
            </div>
            <p className="mt-8 text-[11px] uppercase tracking-[0.15em] text-muted/70">
              &copy; 2026 {BRAND_NAME}. All rights reserved.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold">Quick Links</p>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors duration-300 hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold">Contact</p>
            <div className="mt-5 space-y-3">
              <a
                href={`https://wa.me/${WHATSAPP.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-muted transition-colors duration-300 hover:text-ivory"
              >
                Phone: +91 {WHATSAPP.phone.slice(2)}
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="block text-sm text-muted transition-colors duration-300 hover:text-ivory"
              >
                Email: {CONTACT_EMAIL}
              </a>
              <p className="text-sm text-muted/80">
                Based in India | Serving clients across the nation
              </p>
            </div>
          </div>
        </div>

        <div className="luxury-divider mt-12" />

        <p className="mt-6 text-center text-[11px] tracking-[0.15em] text-muted/60 md:text-left">
          {SITE_URL.replace("https://", "")}
        </p>
      </div>
    </footer>
  );
}
