import Image from "next/image";
import Link from "next/link";
import { aboutSection } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Brand philosophy</p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl">{aboutSection.title}</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">{aboutSection.description}</p>
        </div>
        <div className="relative mx-auto mt-12 aspect-[21/9] max-w-5xl overflow-hidden">
          <Image
            src={aboutSection.image}
            alt={aboutSection.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 80vw"
          />
        </div>
        <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {aboutSection.checklist.map((item) => (
            <li key={item} className="border border-border bg-card px-5 py-4 text-sm leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href={aboutSection.buttonLink}>{aboutSection.buttonText}</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
