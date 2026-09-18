import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";
import { footerLinks, paymentMethods } from "@/data/navigation";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-primary-foreground">
      <Container className="py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-2xl font-semibold tracking-[0.28em] text-card">JOWAY</p>
            <p className="mt-1 text-[11px] font-medium tracking-[0.28em] text-sea-glass">INDUSTRIES LLC</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-stone/90">{company.description}</p>
            <div className="mt-6 space-y-1 text-sm text-stone">
              <p>{company.address.street}</p>
              <p>
                {company.address.city}, {company.address.state} {company.address.zip}
              </p>
              <p>
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-card">
                  {company.email}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-semibold tracking-[0.18em] text-card uppercase">Shop</h3>
            <ul className="space-y-2.5">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-stone transition-colors hover:text-card">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-semibold tracking-[0.18em] text-card uppercase">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-stone transition-colors hover:text-card">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mb-4 mt-8 text-[11px] font-semibold tracking-[0.18em] text-card uppercase">Help</h3>
            <ul className="space-y-2.5">
              {footerLinks.customerCare.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-stone transition-colors hover:text-card">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-semibold tracking-[0.18em] text-card uppercase">Legal</h3>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-stone transition-colors hover:text-card">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <Separator className="bg-white/10" />

      <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="text-xs tracking-wide text-stone">{company.copyright}</p>
        <div className="flex items-center gap-2">
          {paymentMethods.map((method) => (
            <Image
              key={method.name}
              src={method.icon}
              alt={method.name}
              width={40}
              height={28}
              style={{ width: "auto", height: 28 }}
            />
          ))}
        </div>
      </Container>
    </footer>
  );
}
