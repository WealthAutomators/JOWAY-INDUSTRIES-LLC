import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";
import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Categories",
};

export default function CategoriesPage() {
  return (
    <Container className="py-8 md:py-12">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Browse</p>
      <h1 className="mt-2 font-serif text-4xl tracking-tight">Shop by category</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Home, kitchen, outdoor leisure, travel, everyday carry, apparel, wellness, workspace, and gifts.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.id} href={`/categories/${category.slug}`} className="group overflow-hidden bg-card">
            <div className="relative aspect-[16/10] overflow-hidden bg-ivory">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-5">
              <h2 className="font-serif text-2xl group-hover:text-primary">{category.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {category.productCount} products
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
