import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  viewMoreLink?: string;
  viewMoreText?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  viewMoreLink,
  viewMoreText = "View all",
  className,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
        centered && "text-center sm:flex-col sm:items-center",
        className
      )}
    >
      <div className={cn(centered && "max-w-2xl")}>
        {eyebrow && (
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
        )}
        <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">{title}</h2>
        {subtitle && <p className="mt-3 max-w-xl text-muted-foreground leading-relaxed">{subtitle}</p>}
      </div>
      {viewMoreLink && (
        <Button variant="link" asChild className="text-sm font-medium tracking-[0.08em] uppercase">
          <Link href={viewMoreLink}>{viewMoreText}</Link>
        </Button>
      )}
    </div>
  );
}
