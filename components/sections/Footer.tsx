import Link from "next/link";
import { Camera } from "lucide-react";
import { BRAND_NAME, WHATSAPP } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-end">
          <div className="text-center md:text-left">
            <p className="luxury-heading text-base uppercase tracking-[0.2em] text-ivory md:text-lg md:tracking-[0.25em]">
              {BRAND_NAME}
            </p>
            <a
              href={`https://wa.me/${WHATSAPP.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-muted transition-colors duration-500 hover:text-ivory"
            >
              +91 {WHATSAPP.phone.slice(2)}
            </a>
          </div>

          <div className="flex items-center gap-8">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted transition-all duration-500 hover:text-ivory active:scale-95"
            >
              <Camera size={20} strokeWidth={1.5} />
            </Link>
          </div>
        </div>

        <div className="luxury-divider mt-12" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
            &copy; {year} {BRAND_NAME}. All rights reserved.
          </p>
          <p className="text-[11px] tracking-[0.15em] text-muted/60">
            luxlayerinteriors.com
          </p>
        </div>
      </div>
    </footer>
  );
}
