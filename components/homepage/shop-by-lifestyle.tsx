"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { categories } from "@/data/categories";
import { lifestyleCategories } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ShopByLifestyle() {
  const items = lifestyleCategories
    .map((item) => {
      const category = categories.find((c) => c.slug === item.slug);
      return category ? { ...item, image: category.image } : null;
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Shop by lifestyle"
          title="Nine ways to live with the collection."
          subtitle="Browse rooms, tables, weekends, and daily carry — not a generic department grid."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <Link href={`/categories/${item.slug}`} className="group relative block overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden bg-ivory">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-card">
                    <p className="font-serif text-2xl">{item.name}</p>
                    <p className="mt-1 text-sm text-card/80">{item.line}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
