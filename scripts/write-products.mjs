import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PRODUCTS_DIR = path.join(__dirname, "..", "public", "products");

function images(slug) {
  const out = [`/products/${slug}-1.jpg`];
  if (fs.existsSync(path.join(PRODUCTS_DIR, `${slug}-2.jpg`))) out.push(`/products/${slug}-2.jpg`);
  return out;
}

const cats = {
  home: ["Home", "home"],
  kitchen: ["Kitchen + Dining", "kitchen-dining"],
  outdoor: ["Outdoor + Leisure", "outdoor-leisure"],
  travel: ["Travel", "travel"],
  everyday: ["Everyday", "everyday"],
  apparel: ["Apparel + Accessories", "apparel-accessories"],
  wellness: ["Wellness", "wellness"],
  tech: ["Tech + Workspace", "tech-workspace"],
  gifts: ["Gifts", "gifts"],
};

const items = [
  // HOME
  { slug: "arc-floor-lamp", name: "Arc Floor Lamp", cat: "home", sku: "JOW-HM-001", price: 189, sale: 159, rating: 4.7, reviews: 86, stock: 28, badge: "Sale", featured: true, bestseller: true,
    desc: "A slender standing floor lamp that pools warm light beside a sofa or reading chair. The open arc keeps sightlines clear in sunlit rooms.",
    features: ["Freestanding arc silhouette", "Warm ambient glow", "Stable weighted base", "Simple fabric shade"],
    specs: { Height: "65 in", Material: "Metal + fabric shade", Finish: "Graphite", Use: "Living room, reading nook" } },
  { slug: "ceramic-table-lamp", name: "Ceramic Table Lamp", cat: "home", sku: "JOW-HM-002", price: 78, rating: 4.6, reviews: 124, stock: 40, featured: true,
    desc: "A ceramic-base table lamp with a quiet shade, sized for a bedside, console, or entry table. Soft, even light for evening rooms.",
    features: ["Ceramic base", "Fabric drum shade", "Bedside and console scale", "Warm, even illumination"],
    specs: { Height: "18 in", Base: "Ceramic", Shade: "Linen-look fabric", Switch: "Inline" } },
  { slug: "ceramic-vase", name: "Matte Ceramic Vase", cat: "home", sku: "JOW-HM-003", price: 42, rating: 4.8, reviews: 167, stock: 55, featured: true, bestseller: true,
    desc: "A rounded ceramic vase with a matte body, suited to dried stems or a small fresh arrangement on a shelf or dining table.",
    features: ["Matte ceramic finish", "Rounded silhouette", "Works with dried or fresh stems", "Stable weighted base"],
    specs: { Height: "9 in", Material: "Ceramic / stoneware", Finish: "Matte", Color: "Warm white" } },
  { slug: "glass-bud-vase", name: "Glass Bud Vase", cat: "home", sku: "JOW-HM-004", price: 24, rating: 4.7, reviews: 93, stock: 80, newArrival: true,
    desc: "A slim glass vase for a single stem or short clipping. Easy to group on a windowsill, shelf, or dining table.",
    features: ["Clear glass", "Single-stem scale", "Narrow opening", "Easy to rinse and reuse"],
    specs: { Height: "6 in", Material: "Glass", Opening: "Narrow", Use: "Tabletop, shelf" } },
  { slug: "knit-throw", name: "Knit Throw Blanket", cat: "home", sku: "JOW-HM-005", price: 68, sale: 54, rating: 4.8, reviews: 211, stock: 46, badge: "Sale", featured: true, bestseller: true,
    desc: "A knitted throw for draping over a sofa arm or the foot of a bed. Soft texture with a relaxed, everyday drape.",
    features: ["Knit construction", "Sofa and bed scale", "Soft hand-feel", "Easy to fold or drape"],
    specs: { Size: "50 × 60 in", Material: "Knit textile", Care: "Gentle wash", Color: "Natural oat" } },
  { slug: "linen-cushion", name: "Linen Cushion Cover", cat: "home", sku: "JOW-HM-006", price: 32, rating: 4.5, reviews: 88, stock: 70,
    desc: "A woven linen cushion cover that layers onto a sofa, armchair, or bed. Neutral tone that sits easily with other textiles.",
    features: ["Linen-look weave", "Hidden zip closure", "Sofa, chair, or bed", "Neutral everyday palette"],
    specs: { Size: "18 × 18 in", Material: "Linen", Closure: "Zip", Insert: "Sold separately" } },
  { slug: "woven-basket", name: "Woven Storage Basket", cat: "home", sku: "JOW-HM-007", price: 38, rating: 4.6, reviews: 142, stock: 60, featured: true,
    desc: "A seagrass woven basket for blankets, magazines, or everyday clutter. Open storage that still looks considered in a living room.",
    features: ["Seagrass weave", "Open-top storage", "Living-room scale", "Lightweight to move"],
    specs: { Material: "Seagrass", Shape: "Tapered open basket", Use: "Blankets, toys, laundry overflow" } },
  { slug: "storage-box", name: "Lidded Storage Box", cat: "home", sku: "JOW-HM-008", price: 28, rating: 4.4, reviews: 64, stock: 75,
    desc: "A lidded box for keeping household odds and ends out of sight. Stackable enough for a closet shelf or entry console.",
    features: ["Fitted lid", "Stack-friendly shape", "Closed storage", "Console or closet use"],
    specs: { Closure: "Lid", Use: "Household storage", Placement: "Shelf, closet, console" } },
  { slug: "wall-shelf", name: "Floating Wall Shelf", cat: "home", sku: "JOW-HM-009", price: 44, rating: 4.5, reviews: 77, stock: 42,
    desc: "A wall-mounted wood shelf for books, a small plant, or a few objects. A quiet line on the wall rather than bulky storage.",
    features: ["Wall-mounted", "Wood surface", "Slim display profile", "Hardware included"],
    specs: { Material: "Wood", Mount: "Wall", Use: "Books, plants, objects" } },
  { slug: "ceramic-planter", name: "Ceramic Plant Pot", cat: "home", sku: "JOW-HM-010", price: 34, rating: 4.7, reviews: 119, stock: 58, featured: true,
    desc: "A ceramic planter for an indoor plant, sized for a shelf, sill, or side table. Clean profile that lets the plant do the talking.",
    features: ["Ceramic body", "Indoor planter scale", "Stable base", "Shelf and sill friendly"],
    specs: { Material: "Ceramic", Use: "Indoor plants", Placement: "Shelf, sill, side table" } },
  { slug: "wooden-side-table", name: "Wooden Side Table", cat: "home", sku: "JOW-HM-011", price: 129, rating: 4.6, reviews: 54, stock: 22, newArrival: true,
    desc: "A compact wood side table that sits beside a sofa or bed. Room for a lamp, a book, and a glass — nothing more, nothing less.",
    features: ["Solid wood look", "Compact accent scale", "Sofa or bedside use", "Easy to reposition"],
    specs: { Material: "Wood", Use: "Accent furniture", Placement: "Living room, bedroom" } },
  { slug: "round-wall-mirror", name: "Round Wall Mirror", cat: "home", sku: "JOW-HM-012", price: 96, rating: 4.8, reviews: 101, stock: 31, featured: true, bestseller: true,
    desc: "A round wall mirror for an entry, bedroom, or bath. Simple geometry that brightens a room without adding visual noise.",
    features: ["Circular glass", "Wall-mounted", "Entry and bedroom scale", "Light-catching surface"],
    specs: { Shape: "Round", Material: "Glass", Mount: "Wall", Use: "Entry, bedroom, bath" } },
  { slug: "wall-clock", name: "Minimal Wall Clock", cat: "home", sku: "JOW-HM-013", price: 48, rating: 4.4, reviews: 73, stock: 49,
    desc: "A wall clock with a plain face and quiet presence. Functional timekeeping that reads as a small architectural accent.",
    features: ["Uncluttered face", "Wall-mounted", "Quiet everyday scale", "Easy to read"],
    specs: { Mount: "Wall", Style: "Minimal face", Use: "Kitchen, office, living room" } },
  { slug: "decorative-bowl", name: "Ceramic Catchall Bowl", cat: "home", sku: "JOW-HM-014", price: 36, rating: 4.6, reviews: 90, stock: 64,
    desc: "A shallow ceramic bowl for keys, fruit, or a few objects on a console or coffee table. Useful decoration, not just display.",
    features: ["Shallow ceramic form", "Tabletop catchall", "Console or coffee table", "Easy to wipe clean"],
    specs: { Material: "Ceramic", Form: "Shallow bowl", Use: "Keys, fruit, objects" } },
  { slug: "bath-towel-set", name: "Cotton Bath Towel Set", cat: "home", sku: "JOW-HM-015", price: 59.99, sale: 47.99, rating: 4.7, reviews: 298, stock: 90, badge: "Sale", featured: true, bestseller: true,
    desc: "A folded cotton bath towel set for everyday use. Soft, absorbent, and easy to keep in rotation — the kind of essential that earns its place.",
    features: ["Cotton terry", "Set presentation", "Everyday absorbency", "Machine washable"],
    specs: { Material: "Cotton", Type: "Bath towel set", Care: "Machine wash", Color: "Warm white" } },

  // KITCHEN
  { slug: "ceramic-mug", name: "Everyday Ceramic Mug", cat: "kitchen", sku: "JOW-KD-001", price: 18, rating: 4.8, reviews: 246, stock: 120, featured: true, bestseller: true,
    desc: "A ceramic mug with a rounded body and a comfortable handle. Built for daily coffee and tea, not just the weekend pour.",
    features: ["Stoneware ceramic", "Looped handle", "Daily coffee and tea", "Microwave-safe ceramic"],
    specs: { Material: "Ceramic / stoneware", Capacity: "12 oz", Use: "Coffee, tea", Dishwasher: "Yes" } },
  { slug: "wine-glass", name: "Stemmed Wine Glass", cat: "kitchen", sku: "JOW-KD-002", price: 16, rating: 4.5, reviews: 81, stock: 95,
    desc: "A clear stemmed glass for wine at the table. Simple bowl and stem — nothing ornate, just a well-balanced pour.",
    features: ["Clear stemmed glass", "Everyday entertaining", "Balanced bowl", "Sold as a single glass"],
    specs: { Material: "Glass", Style: "Stemmed", Use: "Wine service" } },
  { slug: "serving-board", name: "Wooden Serving Board", cat: "kitchen", sku: "JOW-KD-003", price: 48, rating: 4.7, reviews: 133, stock: 50, featured: true,
    desc: "A wooden board for prepping ingredients or setting out cheese and fruit. One piece that moves easily from kitchen to table.",
    features: ["Wood serving surface", "Prep or entertaining", "Easy to wipe clean", "Table-ready grain"],
    specs: { Material: "Wood", Use: "Prep and serving", Care: "Hand wash, oil occasionally" } },
  { slug: "dinner-plate", name: "Stoneware Dinner Plate", cat: "kitchen", sku: "JOW-KD-004", price: 22, rating: 4.6, reviews: 158, stock: 110, featured: true, bestseller: true,
    desc: "A stoneware dinner plate for everyday table settings. Quiet color and a comfortable rim that works for weeknights and guests.",
    features: ["Stoneware ceramic", "Everyday dinner scale", "Neutral glaze", "Dishwasher-safe"],
    specs: { Material: "Stoneware", Diameter: "10.5 in", Use: "Dinner service", Dishwasher: "Yes" } },
  { slug: "ceramic-teapot", name: "Ceramic Teapot", cat: "kitchen", sku: "JOW-KD-005", price: 54, rating: 4.5, reviews: 67, stock: 36, newArrival: true,
    desc: "A ceramic teapot for steeping and pouring loose-leaf or bagged tea. Generous enough for two cups, calm enough for the counter.",
    features: ["Ceramic body", "Pouring spout and handle", "Loose-leaf or bagged tea", "Table and counter use"],
    specs: { Material: "Ceramic", Use: "Tea service", Capacity: "About 24 oz" } },
  { slug: "espresso-cup", name: "Espresso Cup & Saucer", cat: "kitchen", sku: "JOW-KD-006", price: 14, rating: 4.6, reviews: 72, stock: 88,
    desc: "A small cup and saucer for serving espresso. Compact, ceramic, and easy to keep by the machine.",
    features: ["Cup and saucer pair", "Espresso scale", "Ceramic construction", "Easy to stack"],
    specs: { Includes: "Cup + saucer", Use: "Espresso", Material: "Ceramic" } },
  { slug: "travel-tumbler", name: "Insulated Travel Tumbler", cat: "kitchen", sku: "JOW-KD-007", price: 32, sale: 26, rating: 4.7, reviews: 190, stock: 74, badge: "Sale", bestseller: true,
    desc: "A lidded insulated tumbler for coffee or tea on the way out. Keeps a morning pour at temperature without looking like gym gear.",
    features: ["Insulated body", "Travel lid", "Coffee or tea", "Fits most cup holders"],
    specs: { Type: "Insulated tumbler", Use: "Travel drinkware", Lid: "Yes" } },
  { slug: "salt-pepper-set", name: "Salt & Pepper Shaker Set", cat: "kitchen", sku: "JOW-KD-008", price: 26, rating: 4.4, reviews: 59, stock: 66,
    desc: "A paired set of shakers for salt and pepper at the table. Compact, matched, and easy to refill.",
    features: ["Matched pair", "Tabletop seasoning", "Easy-fill openings", "Everyday dining"],
    specs: { Includes: "Salt + pepper", Use: "Table seasoning", Type: "Shaker set" } },
  { slug: "serving-bowl", name: "Ceramic Serving Bowl", cat: "kitchen", sku: "JOW-KD-009", price: 42, rating: 4.6, reviews: 84, stock: 47, featured: true,
    desc: "A wide ceramic bowl for salads, pasta, or sides. One bowl that can live on the table instead of hiding in a cabinet.",
    features: ["Wide serving form", "Ceramic glaze", "Salads, pasta, sides", "Table-ready finish"],
    specs: { Material: "Ceramic", Use: "Serving", Form: "Wide bowl" } },
  { slug: "tea-kettle", name: "Stovetop Tea Kettle", cat: "kitchen", sku: "JOW-KD-010", price: 44.99, sale: 36.99, rating: 4.7, reviews: 267, stock: 70, badge: "Sale", featured: true, bestseller: true,
    desc: "A metal stovetop kettle for boiling water for tea and coffee. Straightforward, sturdy, and meant for daily use on the hob.",
    features: ["Metal stovetop kettle", "Boils water for tea and coffee", "Stay-cool handle", "Everyday kitchen essential"],
    specs: { Material: "Metal", Type: "Stovetop kettle", Use: "Boiling water" } },
  { slug: "kitchen-scale", name: "Countertop Kitchen Scale", cat: "kitchen", sku: "JOW-KD-011", price: 29, rating: 4.5, reviews: 91, stock: 53,
    desc: "A compact countertop scale for weighing baking and cooking ingredients. Accurate enough for recipes, small enough to tuck away.",
    features: ["Digital readout", "Baking and cooking", "Compact footprint", "Tare function"],
    specs: { Type: "Kitchen scale", Use: "Weighing ingredients", Placement: "Countertop" } },
  { slug: "flatware-set", name: "Everyday Flatware Set", cat: "kitchen", sku: "JOW-KD-012", price: 58, rating: 4.6, reviews: 112, stock: 41, featured: true,
    desc: "A matching fork, knife, and spoon set with a clean metal finish. Comfortable in the hand and simple on the table.",
    features: ["Fork, knife, and spoon", "Metal finish", "Everyday place setting", "Comfortable weight"],
    specs: { Includes: "Flatware place setting", Material: "Metal", Use: "Daily dining" } },
  { slug: "glass-storage-jar", name: "Lidded Glass Storage Jar", cat: "kitchen", sku: "JOW-KD-013", price: 22, rating: 4.7, reviews: 105, stock: 82, newArrival: true,
    desc: "A lidded glass jar for dry pantry goods — oats, coffee, or snacks. Clear enough to see what’s left, tidy enough for the counter.",
    features: ["Clear glass", "Fitted lid", "Pantry or counter", "Dry-goods storage"],
    specs: { Material: "Glass", Closure: "Lid", Use: "Dry pantry storage" } },

  // OUTDOOR
  { slug: "picnic-blanket", name: "Outdoor Picnic Blanket", cat: "outdoor", sku: "JOW-OD-001", price: 48, rating: 4.7, reviews: 138, stock: 52, featured: true, bestseller: true,
    desc: "A picnic blanket for grass, sand, or a park lawn. Easy to spread, easy to fold, and built for actual weekends outdoors.",
    features: ["Outdoor textile", "Packable fold", "Grass or sand use", "Room for two"],
    specs: { Type: "Picnic blanket", Use: "Outdoor lounging", Packable: "Yes" } },
  { slug: "picnic-basket", name: "Wicker Picnic Basket", cat: "outdoor", sku: "JOW-OD-002", price: 72, rating: 4.5, reviews: 61, stock: 28, featured: true,
    desc: "A lidded wicker basket for carrying food and tableware to a picnic. Structured enough to keep things upright on the walk over.",
    features: ["Wicker construction", "Lidded carry", "Food and tableware", "Picnic-ready structure"],
    specs: { Material: "Wicker", Closure: "Lid", Use: "Picnic carry" } },
  { slug: "outdoor-hammock", name: "Outdoor Hammock", cat: "outdoor", sku: "JOW-OD-003", price: 64, sale: 52, rating: 4.6, reviews: 97, stock: 34, badge: "Sale", newArrival: true,
    desc: "A fabric hammock for resting between trees or posts. Weekend leisure without the camping-catalog look.",
    features: ["Fabric hammock", "Hangs between trees or posts", "Outdoor rest", "Packs down when not in use"],
    specs: { Type: "Hammock", Use: "Outdoor relaxation", Setup: "Trees or posts" } },
  { slug: "watering-can", name: "Garden Watering Can", cat: "outdoor", sku: "JOW-OD-004", price: 36, rating: 4.6, reviews: 74, stock: 48,
    desc: "A long-spout watering can for garden beds, patio pots, and indoor plants. Practical metal form with an easy pour.",
    features: ["Metal construction", "Long spout", "Garden and patio pots", "Comfortable carry handle"],
    specs: { Material: "Metal", Use: "Watering plants", Placement: "Garden, patio, indoor" } },
  { slug: "garden-tools", name: "Garden Hand Tool Set", cat: "outdoor", sku: "JOW-OD-005", price: 34, rating: 4.5, reviews: 69, stock: 55,
    desc: "Hand tools for planting and tending beds and pots. Compact enough for a balcony, useful enough for a small yard.",
    features: ["Hand-tool set", "Planting and tending", "Patio or garden beds", "Comfortable handles"],
    specs: { Type: "Garden tool set", Use: "Planting, weeding, potting" } },
  { slug: "fire-pit", name: "Patio Fire Pit", cat: "outdoor", sku: "JOW-OD-006", price: 249, rating: 4.4, reviews: 48, stock: 12, featured: true,
    desc: "A compact patio fire pit for cooler evenings outdoors. A gathering point for the backyard without turning the space into a campsite.",
    features: ["Patio-scale fire pit", "Outdoor evenings", "Stable base", "For outdoor use only"],
    specs: { Type: "Fire pit", Use: "Patio, backyard", Placement: "Outdoor only" } },
  { slug: "outdoor-lantern", name: "Outdoor Lantern", cat: "outdoor", sku: "JOW-OD-007", price: 42, rating: 4.5, reviews: 83, stock: 44,
    desc: "A portable lantern for patio tables, evening walks, and weekend camping. Warm light you can carry.",
    features: ["Portable lantern", "Patio and camp use", "Carry handle", "Evening ambient light"],
    specs: { Type: "Lantern", Use: "Outdoor lighting", Portable: "Yes" } },
  { slug: "outdoor-bottle", name: "Insulated Outdoor Bottle", cat: "outdoor", sku: "JOW-OD-008", price: 28, rating: 4.7, reviews: 156, stock: 90, bestseller: true,
    desc: "An insulated bottle for water on walks, errands, and weekends outside. A simple everyday flask with a secure lid.",
    features: ["Insulated bottle", "Secure lid", "Walks and weekends", "Reusable daily carry"],
    specs: { Type: "Insulated bottle", Use: "Outdoor hydration", Lid: "Yes" } },

  // TRAVEL
  { slug: "weekender-duffel", name: "Canvas Weekender Duffel", cat: "travel", sku: "JOW-TR-001", price: 128, rating: 4.8, reviews: 174, stock: 36, featured: true, bestseller: true,
    desc: "A canvas weekender duffel for overnight trips and short getaways. Structured enough for a car, soft enough to stow.",
    features: ["Canvas body", "Overnight capacity", "Dual carry handles", "Short-trip packing"],
    specs: { Type: "Weekender bag", Material: "Canvas", Use: "Overnight travel" } },
  { slug: "travel-backpack", name: "Travel Backpack", cat: "travel", sku: "JOW-TR-002", price: 98, sale: 84, rating: 4.6, reviews: 121, stock: 40, badge: "Sale", featured: true,
    desc: "A travel backpack for daily commuting and weekend packing. Clean lines, wearable all day, and easy to live out of.",
    features: ["Backpack carry", "Daily and weekend use", "Padded straps", "Main compartment + pockets"],
    specs: { Type: "Travel backpack", Use: "Commute, short trips", Carry: "Shoulder straps" } },
  { slug: "luggage-tag", name: "Leather Luggage Tag", cat: "travel", sku: "JOW-TR-003", price: 18, rating: 4.5, reviews: 66, stock: 100,
    desc: "A leather luggage tag for identifying a bag in a pile. Slim, durable, and easy to fill in.",
    features: ["Leather tag", "ID window or insert", "Fits most handles", "Travel accessory"],
    specs: { Material: "Leather", Use: "Luggage identification" } },
  { slug: "canvas-daypack", name: "Canvas Daypack", cat: "travel", sku: "JOW-TR-004", price: 86, rating: 4.6, reviews: 79, stock: 33, newArrival: true,
    desc: "A canvas daypack for errands, workdays, and light travel. Flap closure and a shape that sits well on the shoulder.",
    features: ["Canvas + leather details", "Flap closure", "Daytime carry", "Work or weekend"],
    specs: { Type: "Daypack", Materials: "Canvas, leather", Closure: "Flap" } },
  { slug: "travel-suitcase", name: "Hard-Case Travel Suitcase", cat: "travel", sku: "JOW-TR-005", price: 189, rating: 4.4, reviews: 58, stock: 18, featured: true,
    desc: "A latched hard-case suitcase for longer trips. Classic structure with a protective shell — built to be packed, not displayed.",
    features: ["Hard-case shell", "Latch closure", "Travel packing", "Protective structure"],
    specs: { Type: "Suitcase", Closure: "Latches", Use: "Luggage" } },
  { slug: "document-cover", name: "Leather Document Cover", cat: "travel", sku: "JOW-TR-006", price: 36, rating: 4.7, reviews: 71, stock: 62,
    desc: "A slim leather cover for a passport, pocket notebook, or travel papers. Keeps documents together without bulk.",
    features: ["Slim leather cover", "Passport or papers", "Pocket-friendly", "Travel organization"],
    specs: { Material: "Leather", Use: "Documents, passport", Profile: "Slim" } },

  // EVERYDAY
  { slug: "key-organizer", name: "Leather Key Organizer", cat: "everyday", sku: "JOW-EV-001", price: 24, rating: 4.5, reviews: 88, stock: 85,
    desc: "A compact leather holder that keeps everyday keys together and quiet in a pocket. Small EDC, not a gadget.",
    features: ["Leather holder", "Quiets keys in a pocket", "Everyday carry", "Compact profile"],
    specs: { Material: "Leather", Use: "Everyday keys", Type: "Key organizer" } },
  { slug: "sunglasses", name: "Everyday Sunglasses", cat: "everyday", sku: "JOW-EV-002", price: 38, sale: 29, rating: 4.4, reviews: 102, stock: 70, badge: "Sale", bestseller: true,
    desc: "Tinted sunglasses with a simple moulded frame for bright days. An everyday pair — not a souvenir shop look.",
    features: ["Tinted lenses", "Moulded frame", "Bright-day wear", "Includes a soft pouch"],
    specs: { Type: "Sunglasses", Use: "Everyday eyewear", Frame: "Moulded" } },
  { slug: "phone-pouch", name: "Slim Phone Pouch", cat: "everyday", sku: "JOW-EV-003", price: 22, rating: 4.3, reviews: 54, stock: 77,
    desc: "A slim pouch that protects a phone in a pocket or bag. Soft structure, no bulky case geometry.",
    features: ["Protective sleeve", "Pocket or bag", "Slim profile", "Everyday phone carry"],
    specs: { Type: "Phone pouch", Use: "Phone protection", Profile: "Slim" } },
  { slug: "messenger-bag", name: "Everyday Messenger Bag", cat: "everyday", sku: "JOW-EV-004", price: 118, rating: 4.6, reviews: 93, stock: 29, featured: true,
    desc: "A flap-front messenger sized for a laptop, documents, and daily carry. Structured enough for work, easy enough for weekends.",
    features: ["Shoulder strap", "Flap front", "Laptop-friendly", "Everyday work carry"],
    specs: { Type: "Messenger bag", Carry: "Shoulder", Use: "Work and everyday" } },
  { slug: "umbrella", name: "Compact Rain Umbrella", cat: "everyday", sku: "JOW-EV-005", price: 28, rating: 4.4, reviews: 76, stock: 68,
    desc: "A handled umbrella for wet commutes and sudden rain. Straightforward canopy, nothing novelty about it.",
    features: ["Canopy and handle", "Rain-day carry", "Manual open", "Everyday utility"],
    specs: { Type: "Umbrella", Use: "Rain", Carry: "Handle" } },
  { slug: "crossbody-bag", name: "Compact Crossbody Bag", cat: "everyday", sku: "JOW-EV-006", price: 64, rating: 4.7, reviews: 141, stock: 45, featured: true, bestseller: true, newArrival: true,
    desc: "A small shoulder bag worn across the body for keys, wallet, and phone. Hands-free everyday carry with a clean shape.",
    features: ["Crossbody strap", "Compact everyday size", "Essentials only", "Secure flap or zip"],
    specs: { Type: "Crossbody bag", Carry: "Shoulder, across body", Use: "Everyday essentials" } },
  { slug: "leather-wallet", name: "Slim Leather Wallet", cat: "everyday", sku: "JOW-EV-007", price: 42, rating: 4.5, reviews: 156, stock: 80, featured: true,
    desc: "A folding leather wallet with card slots and a note section. Slim enough for a front pocket, structured enough to last.",
    features: ["Leather bifold", "Card slots + notes", "Slim everyday profile", "Pocket-friendly"],
    specs: { Material: "Leather", Type: "Bifold wallet", Use: "Everyday carry" } },

  // APPAREL
  { slug: "cotton-tee", name: "Cotton Everyday Tee", cat: "apparel", sku: "JOW-AP-001", price: 28, rating: 4.6, reviews: 188, stock: 96, featured: true, bestseller: true,
    desc: "A short-sleeve cotton t-shirt in a plain everyday cut. The basic you actually reach for — soft, simple, no graphic.",
    features: ["Cotton jersey", "Short sleeve", "Everyday basic", "Easy to layer"],
    specs: { Material: "Cotton", Sleeve: "Short", Fit: "Regular" } },
  { slug: "baseball-cap", name: "Cotton Baseball Cap", cat: "apparel", sku: "JOW-AP-002", price: 26, rating: 4.5, reviews: 97, stock: 72, featured: true,
    desc: "A curved-brim baseball cap with an adjustable back. Sun on the walk, shade on the errand run.",
    features: ["Cotton twill", "Curved brim", "Adjustable back", "Everyday headwear"],
    specs: { Material: "Cotton", Type: "Baseball cap", Closure: "Adjustable" } },
  { slug: "wool-scarf", name: "Wool Knit Scarf", cat: "apparel", sku: "JOW-AP-003", price: 48, rating: 4.7, reviews: 64, stock: 38,
    desc: "A knitted wool scarf for cooler mornings and travel days. Soft wrap, quiet color, no novelty knit.",
    features: ["Wool knit", "Neck wrap", "Cool-weather layer", "Generous length"],
    specs: { Material: "Wool knit", Use: "Cool weather", Type: "Scarf" } },
  { slug: "leather-belt", name: "Leather Belt", cat: "apparel", sku: "JOW-AP-004", price: 44, rating: 4.6, reviews: 81, stock: 54,
    desc: "A leather belt with a simple metal buckle. Everyday trousers, weekend shorts — one belt that does both.",
    features: ["Leather strap", "Metal buckle", "Everyday waist", "Simple hardware"],
    specs: { Material: "Leather", Hardware: "Metal buckle", Use: "Everyday" } },
  { slug: "casual-shorts", name: "Warm-Weather Casual Shorts", cat: "apparel", sku: "JOW-AP-005", price: 42, rating: 4.4, reviews: 73, stock: 50, newArrival: true,
    desc: "Casual cotton shorts for warm-weather days. Easy cut, no loud print — made for heat, not costume.",
    features: ["Cotton fabric", "Warm-weather cut", "Everyday casual", "Comfortable waist"],
    specs: { Material: "Cotton", Type: "Casual shorts", Season: "Warm weather" } },
  { slug: "everyday-sandals", name: "Open Everyday Sandals", cat: "apparel", sku: "JOW-AP-006", price: 46, rating: 4.3, reviews: 59, stock: 44,
    desc: "Open sandals for warm days at home and around town. Easy on, easy off — practical warm-weather footwear.",
    features: ["Open design", "Warm-weather wear", "Easy slip-on", "Everyday summer use"],
    specs: { Type: "Sandals", Use: "Warm weather", Style: "Open" } },

  // WELLNESS
  { slug: "yoga-mat", name: "Everyday Yoga Mat", cat: "wellness", sku: "JOW-WL-001", price: 34.99, rating: 4.7, reviews: 389, stock: 100, featured: true, bestseller: true,
    desc: "A rollable exercise mat for yoga, stretching, and floor work. Reliable grip and a thickness that works at home or in class.",
    features: ["Non-slip surface", "Rolls for storage", "Yoga and stretching", "Carrying strap friendly"],
    specs: { Type: "Yoga mat", Use: "Yoga, stretching, floor work", Storage: "Rolls up" } },
  { slug: "yoga-block", name: "Support Yoga Block", cat: "wellness", sku: "JOW-WL-002", price: 16, rating: 4.6, reviews: 112, stock: 88,
    desc: "A firm yoga block used as a prop to support poses. Simple, stable, and easy to keep with the mat.",
    features: ["Firm support prop", "Yoga pose assist", "Lightweight to carry", "Pairs with a mat"],
    specs: { Type: "Yoga block", Use: "Pose support", Form: "Rectangular block" } },
  { slug: "sports-bottle", name: "Aluminium Sports Bottle", cat: "wellness", sku: "JOW-WL-003", price: 24, rating: 4.5, reviews: 147, stock: 92, bestseller: true,
    desc: "A refillable aluminium bottle with a screw lid and clip loop. For training, walks, and days you want water close at hand.",
    features: ["Aluminium body", "Screw lid", "Carabiner loop", "Reusable hydration"],
    specs: { Material: "Aluminium", Closure: "Screw lid", Extra: "Clip loop" } },
  { slug: "essential-oil-set", name: "Essential Oil Set", cat: "wellness", sku: "JOW-WL-004", price: 32, rating: 4.4, reviews: 86, stock: 60, newArrival: true,
    desc: "Small dropper bottles of aromatic oils presented as a set. For a diffuser, a bath, or a quiet evening routine.",
    features: ["Dropper bottles", "Aromatic oil set", "Diffuser compatible", "Wellness ritual"],
    specs: { Type: "Essential oils", Format: "Dropper bottles", Use: "Aromatherapy" } },
  { slug: "reed-diffuser", name: "Reed Room Diffuser", cat: "wellness", sku: "JOW-WL-005", price: 36, rating: 4.6, reviews: 99, stock: 48, featured: true,
    desc: "A reed diffuser in a glass bottle for continuous, unattended scent. A low, even fragrance for a living room or bath.",
    features: ["Glass bottle", "Rattan reeds", "Continuous scent", "No flame"],
    specs: { Type: "Reed diffuser", Vessel: "Glass", Use: "Room fragrance" } },
  { slug: "soap-bar-set", name: "Botanical Soap Bar Set", cat: "wellness", sku: "JOW-WL-006", price: 22, rating: 4.5, reviews: 78, stock: 70,
    desc: "Bars of soap presented as a bath set. Simple daily care with a clean, unscented-to-light botanical character.",
    features: ["Bar soap set", "Bath and body", "Everyday wash", "Gift-ready presentation"],
    specs: { Type: "Soap bars", Use: "Bath and body", Format: "Set" } },

  // TECH
  { slug: "desk-lamp", name: "Adjustable LED Desk Light", cat: "tech", sku: "JOW-TW-001", price: 39.99, rating: 4.6, reviews: 178, stock: 85, featured: true, bestseller: true,
    desc: "An adjustable LED task light for a desk or workbench. Direct the beam where you need it without glare taking over the room.",
    features: ["LED task lighting", "Adjustable arm", "Desk or workbench", "Focused work light"],
    specs: { Type: "Desk light", Lighting: "LED", Arm: "Adjustable" } },
  { slug: "power-bank", name: "Portable Power Bank", cat: "tech", sku: "JOW-TW-002", price: 34, sale: 27, rating: 4.5, reviews: 164, stock: 78, badge: "Sale",
    desc: "A portable battery pack for charging a phone or tablet away from an outlet. Pocketable power for travel days and long afternoons.",
    features: ["Portable battery", "Phone and tablet charging", "Travel-friendly size", "USB output"],
    specs: { Type: "Power bank", Use: "Portable charging", Devices: "Phones, tablets" } },
  { slug: "laptop-stand", name: "Desktop Laptop Stand", cat: "tech", sku: "JOW-TW-003", price: 48, rating: 4.7, reviews: 121, stock: 40, featured: true, newArrival: true,
    desc: "A stand that raises a laptop to a more comfortable viewing height. A small ergonomic change that makes a long work session easier.",
    features: ["Laptop riser", "Improved viewing height", "Desk use", "Open, stable structure"],
    specs: { Type: "Laptop stand", Use: "Desk ergonomics", Placement: "Desktop" } },
  { slug: "hardcover-notebook", name: "Hardcover Notebook", cat: "tech", sku: "JOW-TW-004", price: 18, rating: 4.8, reviews: 203, stock: 110, bestseller: true,
    desc: "A bound hardcover notebook for notes, lists, and planning. Paper you actually want to write on, in a cover that holds up in a bag.",
    features: ["Bound hardcover", "Everyday writing", "Bag-ready cover", "Lined pages"],
    specs: { Type: "Notebook", Cover: "Hardcover", Use: "Notes, journaling, planning" } },
  { slug: "pen-cup", name: "Desktop Pen Cup", cat: "tech", sku: "JOW-TW-005", price: 16, rating: 4.4, reviews: 57, stock: 84,
    desc: "A cup that stands pens and pencils upright on a desk. Small organization that keeps the surface usable.",
    features: ["Upright pen storage", "Desktop scale", "Stationery catchall", "Easy to wipe clean"],
    specs: { Type: "Pen cup", Use: "Desk organization", Placement: "Desktop" } },
  { slug: "fountain-pen", name: "Everyday Fountain Pen", cat: "tech", sku: "JOW-TW-006", price: 42, rating: 4.6, reviews: 69, stock: 46,
    desc: "A refillable fountain pen for handwriting and correspondence. A considered writing tool, not a novelty desk object.",
    features: ["Refillable ink", "Writing nib", "Correspondence and notes", "Balanced barrel"],
    specs: { Type: "Fountain pen", Use: "Handwriting", Ink: "Refillable" } },
  { slug: "weekly-planner", name: "Weekly Desk Planner", cat: "tech", sku: "JOW-TW-007", price: 22, rating: 4.5, reviews: 94, stock: 67, featured: true,
    desc: "A dated weekly planner for laying out work and appointments. Clear structure, paper you can actually use, no overdesigned spreads.",
    features: ["Weekly layout", "Dated planning pages", "Desk or bag", "Undated extras where useful"],
    specs: { Type: "Planner", Layout: "Weekly", Use: "Work and appointments" } },

  // GIFTS
  { slug: "gift-box", name: "Ribbon Gift Box", cat: "gifts", sku: "JOW-GF-001", price: 16, rating: 4.5, reviews: 73, stock: 90,
    desc: "A wrapped gift box finished with ribbon, ready for a small present or a seasonal set. Presentation without the fuss.",
    features: ["Ribbon finish", "Ready for gifting", "Small-item scale", "Reusable box"],
    specs: { Type: "Gift box", Finish: "Ribbon", Use: "Gifting" } },
  { slug: "chess-set", name: "Turned Chess Set", cat: "gifts", sku: "JOW-GF-002", price: 72, rating: 4.7, reviews: 81, stock: 24, featured: true,
    desc: "A set of turned chess pieces for a slow game at the table. Two opposing sides, classic forms — a gift that gets used.",
    features: ["Turned pieces", "Two-colour set", "Table game", "Gift-ready"],
    specs: { Type: "Chess set", Pieces: "Turned", Use: "Home games" } },
  { slug: "scented-candle", name: "Vessel Scented Candle", cat: "gifts", sku: "JOW-GF-003", price: 28, rating: 4.6, reviews: 154, stock: 76, featured: true, bestseller: true,
    desc: "A poured scented candle in a simple vessel. Even burn, quiet fragrance — for a room, not a display shelf.",
    features: ["Wax in a vessel", "Room fragrance", "Even burn", "Gift-ready scale"],
    specs: { Type: "Scented candle", Material: "Wax", Use: "Home fragrance" } },
  { slug: "jewelry-dish", name: "Ceramic Jewelry Dish", cat: "gifts", sku: "JOW-GF-004", price: 18, rating: 4.7, reviews: 92, stock: 64, newArrival: true,
    desc: "A small ceramic dish for rings and earrings on a bedside table or vanity. A landing place for what you take off at night.",
    features: ["Ceramic dish", "Bedside or vanity", "Rings and earrings", "Small gift scale"],
    specs: { Material: "Ceramic", Use: "Jewelry catchall", Placement: "Bedside, vanity" } },
  { slug: "playing-cards", name: "Travel Playing Cards", cat: "gifts", sku: "JOW-GF-005", price: 14, rating: 4.4, reviews: 61, stock: 120,
    desc: "A deck of playing cards for games at home or on a trip. Compact, printed, and easy to throw in a bag.",
    features: ["Standard deck", "Home or travel", "Compact box", "Everyday games"],
    specs: { Type: "Playing cards", Use: "Games", Format: "Deck" } },
  { slug: "tea-gift-set", name: "Loose-Leaf Tea Gift Set", cat: "gifts", sku: "JOW-GF-006", price: 36, rating: 4.6, reviews: 88, stock: 42, featured: true,
    desc: "Loose-leaf tea presented with serving pieces as a gift set. A considered present for someone who already has enough mugs.",
    features: ["Loose-leaf tea", "Gift presentation", "Serving pieces included", "Coffee-and-tea moment"],
    specs: { Type: "Tea gift set", Contents: "Loose leaf + serving pieces", Use: "Gifting" } },
];

function jsString(s) {
  return JSON.stringify(s);
}

const lines = [];
lines.push('import { Product } from "@/types";');
lines.push("");
lines.push("export const products: Product[] = [");

items.forEach((p, i) => {
  const [category, categorySlug] = cats[p.cat];
  const imgs = images(p.slug);
  const id = `p${i + 1}`;
  const flags = [];
  if (p.featured) flags.push("    featured: true,");
  if (p.bestseller) flags.push("    bestseller: true,");
  if (p.newArrival) flags.push("    newArrival: true,");
  const badge = p.badge ? `    badge: ${jsString(p.badge)},\n` : "";
  const sale = p.sale ? `    salePrice: ${p.sale},\n` : "";
  lines.push("  {");
  lines.push(`    id: ${jsString(id)},`);
  lines.push(`    slug: ${jsString(p.slug)},`);
  lines.push(`    name: ${jsString(p.name)},`);
  lines.push(`    category: ${jsString(category)},`);
  lines.push(`    categorySlug: ${jsString(categorySlug)},`);
  lines.push(`    images: [${imgs.map(jsString).join(", ")}],`);
  lines.push(`    description: ${jsString(p.desc)},`);
  lines.push(`    features: [${p.features.map(jsString).join(", ")}],`);
  lines.push(`    specifications: { ${Object.entries(p.specs).map(([k, v]) => `${jsString(k)}: ${jsString(v)}`).join(", ")} },`);
  lines.push(`    price: ${p.price},`);
  if (sale) lines.push(sale.trimEnd());
  lines.push(`    rating: ${p.rating},`);
  lines.push(`    reviews: ${p.reviews},`);
  lines.push(`    stock: ${p.stock},`);
  if (badge) lines.push(badge.trimEnd());
  flags.forEach((f) => lines.push(f));
  lines.push(`    sku: ${jsString(p.sku)},`);
  lines.push("  },");
});

lines.push("];");
lines.push("");
lines.push(`export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProductsBySlugs(slugs: readonly string[]): Product[] {
  return slugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => p !== undefined);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getBestsellerProducts(): Product[] {
  return products.filter((p) => p.bestseller);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.newArrival);
}

export function getDealProducts(): Product[] {
  return products.filter((p) => p.salePrice);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return products;
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
  );
}

export function getRelatedProducts(product: Product, limit = 8): Product[] {
  return products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, limit);
}

export function getEffectivePrice(product: Product): number {
  return product.salePrice ?? product.price;
}
`);

const out = path.join(__dirname, "..", "data", "products.ts");
fs.writeFileSync(out, lines.join("\n"));
console.log(`Wrote ${items.length} products to data/products.ts`);
const missing = items.filter((p) => !fs.existsSync(path.join(PRODUCTS_DIR, `${p.slug}-1.jpg`)));
if (missing.length) {
  console.error("Missing images:", missing.map((p) => p.slug).join(", "));
  process.exit(1);
}
const skus = items.map((p) => p.sku);
const dup = skus.filter((s, i) => skus.indexOf(s) !== i);
if (dup.length) {
  console.error("Duplicate SKUs", dup);
  process.exit(1);
}
console.log("All primary images exist. SKUs unique.");
