import Link from "next/link";
import Image from "next/image";
import { promotionalBanner } from "@/data/homepage";
import { Button } from "@/components/ui/button";

export function PromotionalBanner() {
  return (
    <section className="relative min-h-[420px] overflow-hidden md:min-h-[480px]">
      <Image
        src={promotionalBanner.image}
        alt={promotionalBanner.title}
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-foreground/45" />
      <div className="relative mx-auto flex min-h-[420px] max-w-[1400px] flex-col items-start justify-center px-4 py-16 sm:px-6 md:min-h-[480px] lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-eucalyptus">Seasonal note</p>
        <h2 className="mt-3 max-w-xl font-serif text-4xl text-card md:text-5xl">{promotionalBanner.title}</h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-card/85">{promotionalBanner.description}</p>
        <Button asChild size="lg" className="mt-8 bg-card text-foreground hover:bg-ivory">
          <Link href={promotionalBanner.buttonLink}>{promotionalBanner.buttonText}</Link>
        </Button>
      </div>
    </section>
  );
}
