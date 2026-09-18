import { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "1",
    slug: "home",
    name: "Home",
    image: "/categories/home.jpg",
    description: "Lighting, textiles, storage, and objects for sunlit rooms.",
    productCount: 15,
  },
  {
    id: "2",
    slug: "kitchen-dining",
    name: "Kitchen + Dining",
    image: "/categories/kitchen-dining.jpg",
    description: "Drinkware, tableware, and tools for everyday meals.",
    productCount: 13,
  },
  {
    id: "3",
    slug: "outdoor-leisure",
    name: "Outdoor + Leisure",
    image: "/categories/outdoor-leisure.jpg",
    description: "Patio, picnic, and weekend pieces for time outside.",
    productCount: 8,
  },
  {
    id: "4",
    slug: "travel",
    name: "Travel",
    image: "/categories/travel.jpg",
    description: "Weekenders, organizers, and packing essentials.",
    productCount: 6,
  },
  {
    id: "5",
    slug: "everyday",
    name: "Everyday",
    image: "/categories/everyday.jpg",
    description: "Bags, wallets, and practical daily carry.",
    productCount: 7,
  },
  {
    id: "6",
    slug: "apparel-accessories",
    name: "Apparel + Accessories",
    image: "/categories/apparel-accessories.jpg",
    description: "Contemporary basics, hats, belts, and warm-weather pieces.",
    productCount: 6,
  },
  {
    id: "7",
    slug: "wellness",
    name: "Wellness",
    image: "/categories/wellness.jpg",
    description: "Movement, recovery, and quiet personal-care objects.",
    productCount: 6,
  },
  {
    id: "8",
    slug: "tech-workspace",
    name: "Tech + Workspace",
    image: "/categories/tech-workspace.jpg",
    description: "Desk lighting, charging, and tools for focused work.",
    productCount: 7,
  },
  {
    id: "9",
    slug: "gifts",
    name: "Gifts",
    image: "/categories/gifts.jpg",
    description: "Considered presents for the home and the person.",
    productCount: 6,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
