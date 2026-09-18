"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/types";
import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CategoryStoryProps {
  eyebrow: string;
  title: string;
  body: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  products: Product[];
  reverse?: boolean;
  className?: string;
}

export function CategoryStory({
  eyebrow,
  title,
  body,
  ctaText,
  ctaLink,
  image,
  products,
  reverse = false,
  className,
}: CategoryStoryProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className={cn("grid lg:grid-cols-12", reverse && "lg:direction-rtl")}>
        <motion.div
          className={cn("relative min-h-[320px] lg:col-span-5 lg:min-h-full", reverse && "lg:order-2")}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
        </motion.div>
        <div className={cn("px-4 py-10 sm:px-8 lg:col-span-7 lg:px-12 lg:py-4", reverse && "lg:order-1")}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">{body}</p>
          <Button asChild className="mt-6" variant="outline">
            <Link href={ctaLink}>{ctaText}</Link>
          </Button>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
