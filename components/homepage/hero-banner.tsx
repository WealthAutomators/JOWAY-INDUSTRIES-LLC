"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroSlides } from "@/data/homepage";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  const slide = heroSlides[0];

  return (
    <section className="relative min-h-[78vh] w-full overflow-hidden md:min-h-[86vh]">
      <Image
        src={slide.image}
        alt={slide.headline}
        fill
        className="object-cover object-[center_42%]"
        priority
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(44,42,38,0.86) 0%, rgba(44,42,38,0.58) 32%, rgba(44,42,38,0.18) 58%, rgba(44,42,38,0.04) 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[48%]"
        style={{
          background: "linear-gradient(0deg, rgba(44,42,38,0.55) 0%, rgba(44,42,38,0) 100%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[78vh] w-full max-w-[1400px] flex-col justify-end px-4 pb-14 sm:px-6 md:min-h-[86vh] md:pb-20 lg:px-8">
        <motion.div
          className="max-w-3xl text-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-eucalyptus">
            Contemporary Florida living
          </p>
          <h1 className="mt-4 font-serif text-4xl font-medium leading-[1.08] tracking-tight drop-shadow-[0_2px_16px_rgba(20,24,22,0.45)] sm:text-5xl md:text-6xl lg:text-7xl">
            {slide.headline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-card/85 sm:text-lg">
            {slide.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-card text-foreground hover:bg-ivory">
              <Link href={slide.ctaLink}>{slide.ctaText}</Link>
            </Button>
            {slide.secondaryCtaText && slide.secondaryCtaLink && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-card/50 bg-transparent text-card hover:bg-card hover:text-foreground"
              >
                <Link href={slide.secondaryCtaLink}>{slide.secondaryCtaText}</Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
