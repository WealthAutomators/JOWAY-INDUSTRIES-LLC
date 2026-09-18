"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { editorialShowcase } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/product-card";
import { formatPrice } from "@/lib/format";

export function EditorialShowcase() {
  const [lead, ...rest] = getProductsBySlugs(editorialShowcase.productSlugs);

  return (
    <section className="bg-ivory py-16 md:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            className="relative min-h-[420px] overflow-hidden lg:col-span-7 lg:min-h-[640px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={editorialShowcase.image}
              alt={editorialShowcase.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-card md:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-eucalyptus">
                {editorialShowcase.eyebrow}
              </p>
              <h2 className="mt-3 max-w-md font-serif text-3xl md:text-5xl">{editorialShowcase.title}</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-card/85 md:text-base">
                {editorialShowcase.body}
              </p>
              <Button asChild size="lg" className="mt-6 bg-card text-foreground hover:bg-ivory">
                <Link href={editorialShowcase.ctaLink}>{editorialShowcase.ctaText}</Link>
              </Button>
            </div>
          </motion.div>

          <div className="lg:col-span-5">
            {lead && (
              <Link href={`/product/${lead.slug}`} className="group mb-8 flex items-center gap-5 border-b border-border pb-6">
                <div className="relative h-28 w-24 shrink-0 overflow-hidden bg-card">
                  <Image src={lead.images[0]} alt={lead.name} fill className="object-cover" sizes="96px" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Lead piece</p>
                  <h3 className="mt-1 font-serif text-2xl group-hover:text-primary">{lead.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{formatPrice(lead.salePrice ?? lead.price)}</p>
                </div>
              </Link>
            )}
            <div className="grid grid-cols-3 gap-4">
              {rest.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
