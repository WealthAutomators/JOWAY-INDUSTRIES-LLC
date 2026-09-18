import { Feature, HeroSlide, PromoBanner } from "@/types";

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    image: "/hero/hero-1.jpg",
    headline: "Light, space + everyday living.",
    description:
      "A considered edit of home objects, tableware, travel pieces, and daily essentials — made for sunlit rooms and unhurried weekends.",
    ctaText: "Shop the collection",
    ctaLink: "/shop",
    secondaryCtaText: "The JOWAY Edit",
    secondaryCtaLink: "/#joway-edit",
  },
];

export const features: Feature[] = [
  {
    id: "1",
    icon: "truck",
    title: "Thoughtful shipping",
    description: "Free standard shipping on orders over $75 within the contiguous United States.",
  },
  {
    id: "2",
    icon: "shield",
    title: "Secure checkout",
    description: "Demo checkout with encrypted-style form fields — no real payment is processed.",
  },
  {
    id: "3",
    icon: "rotate",
    title: "Easy returns",
    description: "Most unused items can be returned within 30 days of delivery.",
  },
  {
    id: "4",
    icon: "headphones",
    title: "Email support",
    description: "Questions about an order or a product? Write us and we will respond promptly.",
  },
  {
    id: "5",
    icon: "star",
    title: "Useful by design",
    description: "Every listing is chosen for how it lives in a home — not for noise or novelty.",
  },
];

export const dealsEndTime = new Date(Date.now() + 1000 * 60 * 60 * 18).toISOString();

export const homepageDealsSlugs = [
  "knit-throw",
  "tea-kettle",
  "travel-tumbler",
  "outdoor-hammock",
  "travel-backpack",
  "sunglasses",
] as const;

export const homepageBestsellerSlugs = [
  "ceramic-mug",
  "knit-throw",
  "yoga-mat",
  "weekender-duffel",
  "ceramic-vase",
  "dinner-plate",
  "hardcover-notebook",
  "outdoor-bottle",
] as const;

export const homepageFeaturedSlugs = [
  "ceramic-vase",
  "knit-throw",
  "ceramic-mug",
  "weekender-duffel",
  "round-wall-mirror",
  "dinner-plate",
  "crossbody-bag",
  "desk-lamp",
] as const;

export const homepageNewArrivalSlugs = [
  "glass-bud-vase",
  "wooden-side-table",
  "ceramic-teapot",
  "outdoor-hammock",
  "canvas-daypack",
  "laptop-stand",
  "jewelry-dish",
  "casual-shorts",
] as const;

export const jowayEditSlugs = [
  "arc-floor-lamp",
  "ceramic-teapot",
  "canvas-daypack",
  "linen-cushion",
  "sunglasses",
  "hardcover-notebook",
  "scented-candle",
  "outdoor-bottle",
] as const;

export const homeLivingSlugs = [
  "arc-floor-lamp",
  "ceramic-table-lamp",
  "ceramic-vase",
  "knit-throw",
  "woven-basket",
  "round-wall-mirror",
  "ceramic-planter",
  "wooden-side-table",
] as const;

export const outdoorWeekendSlugs = [
  "picnic-blanket",
  "picnic-basket",
  "outdoor-hammock",
  "outdoor-lantern",
  "outdoor-bottle",
  "fire-pit",
] as const;

export const travelEverydaySlugs = [
  "weekender-duffel",
  "travel-backpack",
  "messenger-bag",
  "crossbody-bag",
  "document-cover",
  "leather-wallet",
] as const;

export const promotionalBanner: PromoBanner = {
  id: "1",
  title: "Everyday, refined.",
  description:
    "From a ceramic mug to a weekender bag, the JOWAY collection is built around pieces you will actually use — at home, at the table, and out the door.",
  buttonText: "Shop new arrivals",
  buttonLink: "/new-arrivals",
  image: "/banners/promo.jpg",
};

export const aboutSection = {
  title: "Useful objects. Quiet rooms.",
  description:
    "JOWAY INDUSTRIES LLC approaches retail the way a well-kept home approaches objects: choose fewer things, choose them well, and let them earn their place. We gather contemporary lifestyle products for living, cooking, moving, and working — with a preference for natural materials, clear function, and unforced design.",
  checklist: [
    "Home, kitchen, travel, and everyday carry in one place",
    "Photography and copy that describe the same object",
    "Straightforward shipping, returns, and support",
    "A storefront built for browsing, not for noise",
  ],
  buttonText: "Read our approach",
  buttonLink: "/about",
  image: "/banners/about.jpg",
};

export const featuredCollection = {
  title: "Featured collection",
  description: "A first look at pieces that define the current season of the store.",
  bannerImage: "/banners/living.jpg",
  categorySlug: "home",
};

export const bestSellerTabs = [
  { label: "All", slug: "all" },
  { label: "Home", slug: "home" },
  { label: "Kitchen + Dining", slug: "kitchen-dining" },
  { label: "Travel", slug: "travel" },
  { label: "Wellness", slug: "wellness" },
];

export const newsletter = {
  title: "Notes from the store",
  description: "New arrivals, the JOWAY Edit, and the occasional offer — sent only when there is something worth opening.",
  placeholder: "Email address",
  buttonText: "Subscribe",
};

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

export const brandIntro = {
  eyebrow: "JOWAY INDUSTRIES LLC",
  title: "Contemporary Florida living — without the cliché.",
  body: "From Merritt Island, we look at everyday life through light, space, and use. Open skies and coastal air are atmosphere, not a theme. The collection is for modern rooms, practical weekends, and the objects that make both feel easier.",
  image: "/banners/intro.jpg",
};

export const lifestyleCategories = [
  { slug: "home", name: "Home", line: "Rooms that hold light" },
  { slug: "kitchen-dining", name: "Kitchen + Dining", line: "The table, set simply" },
  { slug: "outdoor-leisure", name: "Outdoor + Leisure", line: "Weekend hours, outside" },
  { slug: "travel", name: "Travel", line: "Packed with intention" },
  { slug: "everyday", name: "Everyday", line: "What you carry" },
  { slug: "apparel-accessories", name: "Apparel", line: "Warm-weather basics" },
  { slug: "wellness", name: "Wellness", line: "Movement and rest" },
  { slug: "tech-workspace", name: "Workspace", line: "Clear desk, clear work" },
  { slug: "gifts", name: "Gifts", line: "Chosen, not generic" },
];

export const editorialShowcase = {
  eyebrow: "Modern living, made easy",
  title: "Furniture accents that earn a corner.",
  body: "A side table, a lamp, a single stem — the smallest pieces often do the most for a room. Start here if you are furnishing a sunlit space without filling it.",
  ctaText: "Shop Home",
  ctaLink: "/categories/home",
  image: "/banners/living.jpg",
  productSlugs: ["wooden-side-table", "ceramic-table-lamp", "glass-bud-vase", "decorative-bowl"] as const,
};

export const lifestyleCampaign = {
  eyebrow: "Made for the weekend",
  title: "Out + about, without the gear closet.",
  body: "Picnic cloth, a bottle, a hammock for the shade. Outdoor pieces selected for actual leisure — not a costume of the coast.",
  ctaText: "Shop Outdoor + Leisure",
  ctaLink: "/categories/outdoor-leisure",
  image: "/banners/weekend.jpg",
  secondaryImage: "/banners/outdoor.jpg",
};

export const jowayEdit = {
  eyebrow: "Signature curation",
  title: "The JOWAY Edit",
  body: "A cross-category selection: home objects, travel, workspace, wellness, and personal accessories. Not a department. A point of view.",
};
