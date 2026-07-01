"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { Button } from "@/components/ui/Button";
import { LUXURY_EASE } from "@/components/animations/motion-variants";
import { JOURNAL_ARTICLES } from "@/lib/data";

export function Journal() {
  return (
    <section id="journal" aria-label="Journal" className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Journal</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="luxury-heading mt-3 text-3xl font-light text-ivory md:text-4xl lg:text-5xl">
            Design Perspectives
          </h2>
        </Reveal>

        {/* TODO: Connect to blog CMS or static markdown files */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {JOURNAL_ARTICLES.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: LUXURY_EASE }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-background">
                <SafeImage
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-5 text-[10px] uppercase tracking-[0.25em] text-gold">
                {article.category}
              </p>
              <h3 className="luxury-heading mt-2 text-xl font-light text-ivory">
                {article.title}
              </h3>
              <p className="luxury-body mt-3 line-clamp-2 text-sm text-muted">
                {article.excerpt}
              </p>
              <Link
                href="#"
                className="mt-4 inline-block text-xs uppercase tracking-[0.2em] text-ivory transition-opacity duration-300 hover:text-gold"
              >
                Read More →
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="#" variant="secondary">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
