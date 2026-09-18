"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { brandIntro } from "@/data/homepage";
import { Container } from "@/components/ui/container";

export function BrandIntro() {
  return (
    <section className="bg-card py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">{brandIntro.eyebrow}</p>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {brandIntro.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{brandIntro.body}</p>
          </motion.div>
          <motion.div
            className="relative aspect-[4/3] overflow-hidden lg:col-span-7"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src={brandIntro.image}
              alt="Sunlit contemporary architecture"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
