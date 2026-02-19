/* ── Mock Data for Altaf Halal Food ── */

export interface Category {
  id: string;
  name: string;
  nameJa: string;
  slug: string;
  image: string;
  color: string;
  subcategories: { name: string; slug: string }[];
  productCount: number;
}

export interface Product {
  id: string;
  name: string;
  nameJa: string;
  slug: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  categorySlug: string;
  subcategory: string;
  inStock: boolean;
  stockCount: number;
  unit: string;
  description: string;
  origin: string;
  halal: boolean;
  rating: number;
  reviewCount: number;
  tags: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface Order {
  id: string;
  date: string;
  status: "processing" | "shipped" | "delivered" | "cancelled";
  items: { productId: string; name: string; quantity: number; price: number }[];
  total: number;
  trackingNumber?: string;
}

export interface Address {
  id: string;
  label: string;
  name: string;
  phone: string;
  postalCode: string;
  prefecture: string;
  city: string;
  line1: string;
  line2?: string;
  isDefault: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

/* ── Categories ── */

export const categories: Category[] = [
  {
    id: "cat-1",
    name: "Fresh Meat",
    nameJa: "新鮮な肉",
    slug: "fresh-meat",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=400&fit=crop",
    color: "#DC2626",
    subcategories: [
      { name: "Chicken", slug: "chicken" },
      { name: "Beef", slug: "beef" },
      { name: "Lamb & Goat", slug: "lamb-goat" },
      { name: "Ground Meat", slug: "ground-meat" },
    ],
    productCount: 42,
  },
  {
    id: "cat-2",
    name: "Spices & Seasonings",
    nameJa: "スパイス・調味料",
    slug: "spices-seasonings",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop",
    color: "#D4A574",
    subcategories: [
      { name: "Whole Spices", slug: "whole-spices" },
      { name: "Ground Spices", slug: "ground-spices" },
      { name: "Spice Mixes", slug: "spice-mixes" },
      { name: "Herbs", slug: "herbs" },
    ],
    productCount: 68,
  },
  {
    id: "cat-3",
    name: "Rice & Grains",
    nameJa: "米・穀物",
    slug: "rice-grains",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop",
    color: "#16A34A",
    subcategories: [
      { name: "Basmati Rice", slug: "basmati" },
      { name: "Other Rice", slug: "other-rice" },
      { name: "Flour & Atta", slug: "flour" },
      { name: "Lentils & Daal", slug: "lentils" },
    ],
    productCount: 35,
  },
  {
    id: "cat-4",
    name: "Frozen Foods",
    nameJa: "冷凍食品",
    slug: "frozen-foods",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=400&fit=crop",
    color: "#15803D",
    subcategories: [
      { name: "Samosas & Snacks", slug: "samosas-snacks" },
      { name: "Parathas & Naan", slug: "parathas-naan" },
      { name: "Frozen Vegetables", slug: "frozen-vegetables" },
      { name: "Ready Meals", slug: "ready-meals" },
    ],
    productCount: 29,
  },
  {
    id: "cat-5",
    name: "Pantry Staples",
    nameJa: "パントリー",
    slug: "pantry-staples",
    image: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=400&h=400&fit=crop",
    color: "#B8935F",
    subcategories: [
      { name: "Cooking Oil", slug: "cooking-oil" },
      { name: "Canned Goods", slug: "canned-goods" },
      { name: "Sauces & Pastes", slug: "sauces-pastes" },
      { name: "Pickles & Chutneys", slug: "pickles-chutneys" },
    ],
    productCount: 53,
  },
  {
    id: "cat-6",
    name: "Snacks & Sweets",
    nameJa: "スナック・スイーツ",
    slug: "snacks-sweets",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop",
    color: "#D4A574",
    subcategories: [
      { name: "Biscuits & Cookies", slug: "biscuits" },
      { name: "Chips & Namkeen", slug: "chips-namkeen" },
      { name: "Sweets & Mithai", slug: "sweets-mithai" },
      { name: "Nuts & Dried Fruits", slug: "nuts-dried-fruits" },
    ],
    productCount: 41,
  },
  {
    id: "cat-7",
    name: "Beverages",
    nameJa: "飲料",
    slug: "beverages",
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=400&fit=crop",
    color: "#16A34A",
    subcategories: [
      { name: "Tea & Chai", slug: "tea-chai" },
      { name: "Juices & Drinks", slug: "juices-drinks" },
      { name: "Syrups & Mixes", slug: "syrups-mixes" },
    ],
    productCount: 22,
  },
  {
    id: "cat-8",
    name: "Fresh Produce",
    nameJa: "生鮮食品",
    slug: "fresh-produce",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=400&fit=crop",
    color: "#15803D",
    subcategories: [
      { name: "Vegetables", slug: "vegetables" },
      { name: "Fruits", slug: "fruits" },
      { name: "Fresh Herbs", slug: "fresh-herbs" },
    ],
    productCount: 18,
  },
];

/* ── Products ── */

export const products: Product[] = [
  {
    id: "prod-1",
    name: "Halal Chicken Breast",
    nameJa: "ハラール鶏むね肉",
    slug: "halal-chicken-breast",
    price: 890,
    originalPrice: 1080,
    images: ["https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=500&h=500&fit=crop"],
    category: "Fresh Meat",
    categorySlug: "fresh-meat",
    subcategory: "chicken",
    inStock: true,
    stockCount: 45,
    unit: "500g",
    description:
      "Premium hand-slaughtered halal chicken breast. Sourced from trusted farms in Brazil. Vacuum-sealed for freshness.",
    origin: "Brazil",
    halal: true,
    rating: 4.8,
    reviewCount: 124,
    tags: ["bestseller", "protein"],
    isBestSeller: true,
  },
  {
    id: "prod-2",
    name: "Basmati Rice (Premium)",
    nameJa: "バスマティライス（プレミアム）",
    slug: "basmati-rice-premium",
    price: 1480,
    images: ["https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&h=500&fit=crop"],
    category: "Rice & Grains",
    categorySlug: "rice-grains",
    subcategory: "basmati",
    inStock: true,
    stockCount: 80,
    unit: "5kg",
    description:
      "Extra-long grain premium Basmati rice. Perfect for biryani, pulao, and everyday cooking. Aged for superior aroma.",
    origin: "Pakistan",
    halal: true,
    rating: 4.9,
    reviewCount: 210,
    tags: ["bestseller", "staple"],
    isBestSeller: true,
  },
  {
    id: "prod-3",
    name: "Lamb Leg (Bone-In)",
    nameJa: "ラムレッグ（骨付き）",
    slug: "lamb-leg-bone-in",
    price: 3200,
    originalPrice: 3800,
    images: ["https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=500&h=500&fit=crop"],
    category: "Fresh Meat",
    categorySlug: "fresh-meat",
    subcategory: "lamb-goat",
    inStock: true,
    stockCount: 12,
    unit: "1kg",
    description:
      "Tender halal lamb leg, bone-in. Ideal for slow roasts, curries, and grills. Hand-slaughtered in Australia.",
    origin: "Australia",
    halal: true,
    rating: 4.7,
    reviewCount: 89,
    tags: ["premium", "protein"],
    isBestSeller: true,
  },
  {
    id: "prod-4",
    name: "Garam Masala",
    nameJa: "ガラムマサラ",
    slug: "garam-masala",
    price: 580,
    images: ["https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&h=500&fit=crop"],
    category: "Spices & Seasonings",
    categorySlug: "spices-seasonings",
    subcategory: "spice-mixes",
    inStock: true,
    stockCount: 120,
    unit: "100g",
    description:
      "Authentic garam masala blend with cardamom, cinnamon, cloves, and black pepper. Freshly ground for maximum flavour.",
    origin: "India",
    halal: true,
    rating: 4.6,
    reviewCount: 156,
    tags: ["essential", "spice"],
    isBestSeller: true,
  },
  {
    id: "prod-5",
    name: "Chicken Samosa (12 pcs)",
    nameJa: "チキンサモサ（12個入り）",
    slug: "chicken-samosa-12pcs",
    price: 780,
    originalPrice: 920,
    images: ["https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=500&fit=crop"],
    category: "Frozen Foods",
    categorySlug: "frozen-foods",
    subcategory: "samosas-snacks",
    inStock: true,
    stockCount: 60,
    unit: "pack",
    description:
      "Crispy halal chicken samosas filled with seasoned chicken and vegetables. Ready to fry or bake from frozen.",
    origin: "Malaysia",
    halal: true,
    rating: 4.5,
    reviewCount: 98,
    tags: ["snack", "frozen"],
    isBestSeller: true,
  },
  {
    id: "prod-6",
    name: "Turmeric Powder",
    nameJa: "ターメリックパウダー",
    slug: "turmeric-powder",
    price: 380,
    images: ["https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=500&h=500&fit=crop"],
    category: "Spices & Seasonings",
    categorySlug: "spices-seasonings",
    subcategory: "ground-spices",
    inStock: true,
    stockCount: 200,
    unit: "200g",
    description:
      "Pure turmeric powder with high curcumin content. Essential for curries, rice dishes, and golden milk.",
    origin: "India",
    halal: true,
    rating: 4.7,
    reviewCount: 73,
    tags: ["essential", "spice"],
  },
  {
    id: "prod-7",
    name: "Mustard Oil",
    nameJa: "マスタードオイル",
    slug: "mustard-oil",
    price: 680,
    images: ["https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&h=500&fit=crop"],
    category: "Pantry Staples",
    categorySlug: "pantry-staples",
    subcategory: "cooking-oil",
    inStock: true,
    stockCount: 45,
    unit: "1L",
    description:
      "Cold-pressed mustard oil. Adds a distinctive pungent flavour to Bengali and North Indian dishes.",
    origin: "Bangladesh",
    halal: true,
    rating: 4.4,
    reviewCount: 42,
    tags: ["cooking", "oil"],
  },
  {
    id: "prod-8",
    name: "Beef Mince (Halal)",
    nameJa: "ハラール牛ひき肉",
    slug: "beef-mince-halal",
    price: 1280,
    images: ["https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=500&h=500&fit=crop"],
    category: "Fresh Meat",
    categorySlug: "fresh-meat",
    subcategory: "ground-meat",
    inStock: false,
    stockCount: 0,
    unit: "500g",
    description:
      "Lean halal beef mince. Perfect for keema, kebabs, burgers, and bolognese. Hand-slaughtered.",
    origin: "Australia",
    halal: true,
    rating: 4.6,
    reviewCount: 67,
    tags: ["protein"],
  },
  {
    id: "prod-9",
    name: "Paratha (Family Pack)",
    nameJa: "パラタ（ファミリーパック）",
    slug: "paratha-family-pack",
    price: 650,
    images: ["https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&h=500&fit=crop"],
    category: "Frozen Foods",
    categorySlug: "frozen-foods",
    subcategory: "parathas-naan",
    inStock: true,
    stockCount: 90,
    unit: "20 pcs",
    description:
      "Flaky, layered parathas ready to cook from frozen. Just heat on a tawa with a little oil for crispy perfection.",
    origin: "Malaysia",
    halal: true,
    rating: 4.8,
    reviewCount: 134,
    tags: ["frozen", "bread"],
    isBestSeller: true,
  },
  {
    id: "prod-10",
    name: "Red Lentils (Masoor Daal)",
    nameJa: "レッドレンティル",
    slug: "red-lentils-masoor",
    price: 520,
    images: ["https://images.unsplash.com/photo-1515543904413-63b36956ad1c?w=500&h=500&fit=crop"],
    category: "Rice & Grains",
    categorySlug: "rice-grains",
    subcategory: "lentils",
    inStock: true,
    stockCount: 150,
    unit: "1kg",
    description:
      "Split red lentils ideal for daal, soups, and stews. Quick cooking and high in protein.",
    origin: "Turkey",
    halal: true,
    rating: 4.5,
    reviewCount: 56,
    tags: ["staple", "protein"],
  },
  {
    id: "prod-11",
    name: "Kashmiri Chai Tea",
    nameJa: "カシミールチャイ",
    slug: "kashmiri-chai-tea",
    price: 920,
    images: ["https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=500&h=500&fit=crop"],
    category: "Beverages",
    categorySlug: "beverages",
    subcategory: "tea-chai",
    inStock: true,
    stockCount: 35,
    unit: "200g",
    description:
      "Premium pink Kashmiri chai leaves. Brew with milk, cardamom, and pistachios for a rich, creamy tea experience.",
    origin: "Pakistan",
    halal: true,
    rating: 4.9,
    reviewCount: 87,
    tags: ["tea", "premium"],
    isNew: true,
  },
  {
    id: "prod-12",
    name: "Mango Pickle (Achaar)",
    nameJa: "マンゴーピクルス",
    slug: "mango-pickle-achaar",
    price: 480,
    images: ["https://images.unsplash.com/photo-1589621316382-008455b857cd?w=500&h=500&fit=crop"],
    category: "Pantry Staples",
    categorySlug: "pantry-staples",
    subcategory: "pickles-chutneys",
    inStock: true,
    stockCount: 70,
    unit: "400g",
    description:
      "Traditional mango achaar with mustard oil and spices. The perfect accompaniment to any South Asian meal.",
    origin: "India",
    halal: true,
    rating: 4.3,
    reviewCount: 45,
    tags: ["condiment"],
  },
  {
    id: "prod-13",
    name: "Whole Wheat Atta",
    nameJa: "全粒小麦粉（アタ）",
    slug: "whole-wheat-atta",
    price: 750,
    images: ["https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&h=500&fit=crop"],
    category: "Rice & Grains",
    categorySlug: "rice-grains",
    subcategory: "flour",
    inStock: true,
    stockCount: 55,
    unit: "5kg",
    description:
      "Stone-ground whole wheat flour for soft rotis and chapatis. Made from premium wheat grain.",
    origin: "India",
    halal: true,
    rating: 4.6,
    reviewCount: 92,
    tags: ["staple", "bread"],
  },
  {
    id: "prod-14",
    name: "Gulab Jamun Mix",
    nameJa: "グラブジャムンミックス",
    slug: "gulab-jamun-mix",
    price: 420,
    images: ["https://images.unsplash.com/photo-1666190020955-1c6f1e53da03?w=500&h=500&fit=crop"],
    category: "Snacks & Sweets",
    categorySlug: "snacks-sweets",
    subcategory: "sweets-mithai",
    inStock: true,
    stockCount: 40,
    unit: "200g",
    description:
      "Easy-to-make gulab jamun mix. Just add water, shape, fry, and soak in sugar syrup for authentic Indian sweets.",
    origin: "India",
    halal: true,
    rating: 4.4,
    reviewCount: 38,
    tags: ["dessert", "sweet"],
    isNew: true,
  },
  {
    id: "prod-15",
    name: "Chicken Tikka Masala Paste",
    nameJa: "チキンティッカマサラペースト",
    slug: "chicken-tikka-masala-paste",
    price: 550,
    images: ["https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&h=500&fit=crop"],
    category: "Pantry Staples",
    categorySlug: "pantry-staples",
    subcategory: "sauces-pastes",
    inStock: true,
    stockCount: 65,
    unit: "300g",
    description:
      "Ready-to-use tikka masala paste. Add chicken and cream for restaurant-quality curry at home.",
    origin: "UK",
    halal: true,
    rating: 4.5,
    reviewCount: 71,
    tags: ["cooking", "sauce"],
  },
  {
    id: "prod-16",
    name: "Mixed Nuts & Raisins",
    nameJa: "ミックスナッツ＆レーズン",
    slug: "mixed-nuts-raisins",
    price: 1200,
    images: ["https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=500&h=500&fit=crop"],
    category: "Snacks & Sweets",
    categorySlug: "snacks-sweets",
    subcategory: "nuts-dried-fruits",
    inStock: true,
    stockCount: 30,
    unit: "500g",
    description:
      "Premium mix of almonds, cashews, pistachios, and raisins. Great for snacking or adding to desserts and pilafs.",
    origin: "Various",
    halal: true,
    rating: 4.7,
    reviewCount: 54,
    tags: ["snack", "premium"],
  },
];

/* ── Orders ── */

export const orders: Order[] = [
  {
    id: "ORD-20240201",
    date: "2026-02-01",
    status: "delivered",
    items: [
      { productId: "prod-1", name: "Halal Chicken Breast", quantity: 3, price: 890 },
      { productId: "prod-4", name: "Garam Masala", quantity: 1, price: 580 },
      { productId: "prod-2", name: "Basmati Rice (Premium)", quantity: 1, price: 1480 },
    ],
    total: 4730,
    trackingNumber: "JP-1234567890",
  },
  {
    id: "ORD-20240115",
    date: "2026-01-15",
    status: "delivered",
    items: [
      { productId: "prod-9", name: "Paratha (Family Pack)", quantity: 2, price: 650 },
      { productId: "prod-5", name: "Chicken Samosa (12 pcs)", quantity: 1, price: 780 },
    ],
    total: 2080,
    trackingNumber: "JP-0987654321",
  },
  {
    id: "ORD-20240210",
    date: "2026-02-10",
    status: "shipped",
    items: [
      { productId: "prod-3", name: "Lamb Leg (Bone-In)", quantity: 1, price: 3200 },
      { productId: "prod-6", name: "Turmeric Powder", quantity: 2, price: 380 },
    ],
    total: 3960,
    trackingNumber: "JP-5678901234",
  },
  {
    id: "ORD-20240212",
    date: "2026-02-12",
    status: "processing",
    items: [
      { productId: "prod-11", name: "Kashmiri Chai Tea", quantity: 1, price: 920 },
      { productId: "prod-16", name: "Mixed Nuts & Raisins", quantity: 1, price: 1200 },
    ],
    total: 2120,
  },
];

/* ── Addresses ── */

export const addresses: Address[] = [
  {
    id: "addr-1",
    label: "Home",
    name: "Altaf Ahmad",
    phone: "090-1234-5678",
    postalCode: "150-0001",
    prefecture: "Tokyo",
    city: "Shibuya-ku",
    line1: "1-2-3 Jingumae",
    line2: "Sakura Heights 401",
    isDefault: true,
  },
  {
    id: "addr-2",
    label: "Office",
    name: "Altaf Ahmad",
    phone: "080-9876-5432",
    postalCode: "100-0005",
    prefecture: "Tokyo",
    city: "Chiyoda-ku",
    line1: "1-1-1 Marunouchi",
    line2: "Otemachi Tower 15F",
    isDefault: false,
  },
];

/* ── Blog Posts ── */

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "Guide to Halal Certification in Japan",
    excerpt:
      "Understanding the different halal certification bodies operating in Japan and what their stamps mean for consumers.",
    slug: "halal-certification-japan",
    date: "2026-02-10",
    readTime: "5 min",
    category: "Guides",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
  },
  {
    id: "blog-2",
    title: "5 Easy Biryani Recipes for Beginners",
    excerpt:
      "Master the art of biryani with these simple step-by-step recipes using ingredients available from our store.",
    slug: "easy-biryani-recipes",
    date: "2026-02-05",
    readTime: "8 min",
    category: "Recipes",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=400&fit=crop",
  },
  {
    id: "blog-3",
    title: "Ramadan 2026 Preparation Guide",
    excerpt:
      "Stock up on essentials and plan your iftar meals ahead. Here are our top recommendations for Ramadan.",
    slug: "ramadan-2026-prep",
    date: "2026-01-28",
    readTime: "6 min",
    category: "Seasonal",
    image: "https://images.unsplash.com/photo-1567982047351-76b6f93e38ee?w=600&h=400&fit=crop",
  },
];

/* ── Delivery Slots ── */

export const deliverySlots = [
  { id: "slot-1", date: "2026-02-16", day: "Monday", timeRange: "10:00 - 12:00", available: true },
  { id: "slot-2", date: "2026-02-16", day: "Monday", timeRange: "14:00 - 16:00", available: true },
  { id: "slot-3", date: "2026-02-16", day: "Monday", timeRange: "18:00 - 20:00", available: false },
  { id: "slot-4", date: "2026-02-17", day: "Tuesday", timeRange: "10:00 - 12:00", available: true },
  { id: "slot-5", date: "2026-02-17", day: "Tuesday", timeRange: "14:00 - 16:00", available: true },
  { id: "slot-6", date: "2026-02-17", day: "Tuesday", timeRange: "18:00 - 20:00", available: true },
  { id: "slot-7", date: "2026-02-18", day: "Wednesday", timeRange: "10:00 - 12:00", available: true },
  { id: "slot-8", date: "2026-02-18", day: "Wednesday", timeRange: "14:00 - 16:00", available: false },
];

/* ── Helpers ── */

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((p) => p.categorySlug === slug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.isBestSeller);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.isNew);
}

export function getDeals(): Product[] {
  return products.filter((p) => p.originalPrice && p.originalPrice > p.price);
}

export function formatPrice(amount: number): string {
  return `¥${amount.toLocaleString()}`;
}

export function getRelatedProducts(product: Product): Product[] {
  return products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);
}
