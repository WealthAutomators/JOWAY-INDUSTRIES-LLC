"use client";

import { homepageNewArrivalSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/product/product-card";

export function NewArrivals() {
  const products = getProductsBySlugs(homepageNewArrivalSlugs);

  return (
    <section className="bg-card py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Just in"
          title="New arrivals"
          subtitle="Recent pieces across rooms, travel, and the table."
          viewMoreLink="/new-arrivals"
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
