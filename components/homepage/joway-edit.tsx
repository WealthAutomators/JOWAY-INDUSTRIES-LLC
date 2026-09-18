"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { jowayEdit, jowayEditSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { formatPrice } from "@/lib/format";

export function JowayEdit() {
  const products = getProductsBySlugs(jowayEditSlugs);

  return (
    <section id="joway-edit" className="scroll-mt-28 bg-foreground py-16 text-card md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sea-glass">{jowayEdit.eyebrow}</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">{jowayEdit.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-stone">{jowayEdit.body}</p>
        </div>

        <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link href={`/product/${product.slug}`} className="group block bg-foreground p-4 md:p-5">
                <div className="relative aspect-[4/5] overflow-hidden bg-ivory">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-sea-glass">{product.category}</p>
                <h3 className="mt-1 text-base text-card group-hover:text-eucalyptus">{product.name}</h3>
                <p className="mt-1 text-sm text-stone">{formatPrice(product.salePrice ?? product.price)}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
