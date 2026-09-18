import { HeroBanner } from "@/components/homepage/hero-banner";
import { BrandIntro } from "@/components/homepage/brand-intro";
import { ShopByLifestyle } from "@/components/homepage/shop-by-lifestyle";
import { FeaturesRow } from "@/components/homepage/features-row";
import { FeaturedCollection } from "@/components/homepage/featured-collection";
import { EditorialShowcase } from "@/components/homepage/editorial-showcase";
import { NewArrivals } from "@/components/homepage/new-arrivals";
import { JowayEdit } from "@/components/homepage/joway-edit";
import { CategoryStory } from "@/components/homepage/category-story";
import { BestSellers } from "@/components/homepage/best-sellers";
import { LifestyleCampaign } from "@/components/homepage/lifestyle-campaign";
import { PromotionalBanner } from "@/components/homepage/promotional-banner";
import { AboutSection } from "@/components/homepage/about-section";
import { Newsletter } from "@/components/homepage/newsletter";
import { getProductsBySlugs } from "@/data/products";
import { homeLivingSlugs, outdoorWeekendSlugs, travelEverydaySlugs } from "@/data/homepage";

export default function HomePage() {
  const homeLiving = getProductsBySlugs(homeLivingSlugs);
  const outdoorWeekend = getProductsBySlugs(outdoorWeekendSlugs);
  const travelEveryday = getProductsBySlugs(travelEverydaySlugs);

  return (
    <>
      <HeroBanner />
      <BrandIntro />
      <ShopByLifestyle />
      <FeaturesRow />
      <FeaturedCollection />
      <EditorialShowcase />
      <NewArrivals />
      <JowayEdit />
      <CategoryStory
        eyebrow="Home + living"
        title="Rooms that hold light."
        body="Lamps, textiles, storage, and small furniture accents selected for sunlit interiors — objects that settle into a space rather than decorate it."
        ctaText="Shop Home"
        ctaLink="/categories/home"
        image="/banners/living.jpg"
        products={homeLiving}
        className="bg-card"
      />
      <CategoryStory
        eyebrow="Outdoor + weekend"
        title="Hours spent outside."
        body="Picnic pieces, patio light, and simple outdoor utility for Florida weekends. Leisure, not a theme park."
        ctaText="Shop Outdoor + Leisure"
        ctaLink="/categories/outdoor-leisure"
        image="/banners/outdoor.jpg"
        products={outdoorWeekend}
        reverse
        className="bg-background"
      />
      <CategoryStory
        eyebrow="Travel + everyday"
        title="Packed, carried, lived with."
        body="Weekenders, organizers, and daily bags for getting out the door. Practical forms with a quiet finish."
        ctaText="Shop Travel"
        ctaLink="/categories/travel"
        image="/banners/travel.jpg"
        products={travelEveryday}
        className="bg-card"
      />
      <BestSellers />
      <LifestyleCampaign />
      <PromotionalBanner />
      <AboutSection />
      <Newsletter />
    </>
  );
}
