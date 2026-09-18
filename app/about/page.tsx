import { company } from "@/data/company";
import { testimonials } from "@/data/testimonials";
import { PageHero, PageSection } from "@/components/ui/page-layout";
import { Container } from "@/components/ui/container";
import { StarRating } from "@/components/ui/star-rating";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={`About ${company.name}`}
        description={company.description}
        breadcrumbs={[{ label: "About Us" }]}
      />

      <Container className="pb-16">
        <div className="grid items-center gap-10 py-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden lg:col-span-6">
            <Image src="/banners/about.jpg" alt={`About ${company.name}`} fill className="object-cover" sizes="50vw" />
          </div>
          <PageSection title="Our approach" className="lg:col-span-6">
            <p>
              JOWAY INDUSTRIES LLC is a contemporary lifestyle retailer. We gather useful, well-designed
              products for living, cooking, moving, and working — with a preference for clear materials,
              calm forms, and objects that earn a place in daily life.
            </p>
            <p className="mt-4">
              Based at 2310 COCONUT LN, MERRITT ISLAND, FL 32952, we look at Florida living through light
              and space rather than souvenir imagery. The store is meant to feel modern, bright, and easy
              to shop — not themed.
            </p>
            <p className="mt-4">
              We do not invent a founding myth. The work is the catalog: honest descriptions, matching
              photography, and a straightforward path from browse to checkout.
            </p>
          </PageSection>
        </div>

        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Home + table", desc: "Objects and tools that settle into sunlit rooms and everyday meals." },
            { title: "Weekend + travel", desc: "Pieces for getting outside and packing with intention." },
            { title: "Everyday carry", desc: "Bags, wallets, and accessories that stay in rotation." },
            { title: "Clear shopping", desc: "30-day returns, email support, and a demonstration checkout." },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-card p-6">
              <h3 className="font-serif text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <PageSection title="What customers say" className="mt-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {testimonials.map((t) => (
              <div key={t.id} className="border border-border bg-card p-6">
                <StarRating rating={t.rating} showCount={false} size="md" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-4 text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            ))}
          </div>
        </PageSection>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/shop">Shop the collection</Link>
          </Button>
        </div>
      </Container>
    </>
  );
}
