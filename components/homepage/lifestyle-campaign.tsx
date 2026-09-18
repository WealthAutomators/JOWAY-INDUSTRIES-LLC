"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { lifestyleCampaign } from "@/data/homepage";
import { Button } from "@/components/ui/button";

export function LifestyleCampaign() {
  return (
    <section className="grid md:grid-cols-2">
      <motion.div
        className="relative min-h-[420px] md:min-h-[560px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Image
          src={lifestyleCampaign.image}
          alt={lifestyleCampaign.title}
          fill
          className="object-cover"
          sizes="50vw"
        />
      </motion.div>
      <div className="relative flex min-h-[420px] items-center bg-primary px-6 py-16 text-primary-foreground md:min-h-[560px] md:px-14">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <Image
            src={lifestyleCampaign.secondaryImage}
            alt=""
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
        <div className="relative max-w-md">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-eucalyptus">
            {lifestyleCampaign.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">{lifestyleCampaign.title}</h2>
          <p className="mt-5 text-base leading-relaxed text-primary-foreground/85">{lifestyleCampaign.body}</p>
          <Button asChild size="lg" className="mt-8 bg-card text-foreground hover:bg-ivory">
            <Link href={lifestyleCampaign.ctaLink}>{lifestyleCampaign.ctaText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
