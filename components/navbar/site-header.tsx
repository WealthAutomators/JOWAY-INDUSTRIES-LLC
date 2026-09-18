"use client";

import { Navbar } from "@/components/navbar/navbar";
import { SearchBar } from "@/components/navbar/search-bar";
import { company } from "@/data/company";

export function SiteHeader() {
  return (
    <div className="sticky top-0 z-50 bg-card/95 backdrop-blur-md">
      <div className="border-b border-border/80 bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-1.5 text-[11px] tracking-[0.16em] sm:px-6 lg:px-8">
          <p className="truncate uppercase">
            {company.address.city}, {company.address.state}
          </p>
          <a
            href={`mailto:${company.email}`}
            className="hidden truncate lowercase tracking-normal hover:underline sm:inline"
          >
            {company.email}
          </a>
        </div>
      </div>
      <Navbar />
      <SearchBar />
    </div>
  );
}
