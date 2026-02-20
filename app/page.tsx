import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Award,
  Snowflake,
  Clock,
  ChevronRight,
} from "lucide-react";
import { SearchBar } from "./_components/SearchBar";
import { ProductGrid } from "./_components/ProductGrid";
import { Badge } from "./_components/Badge";
import {
  categories,
  getBestSellers,
  getDeals,
  blogPosts,
} from "./_data/mock";

export default function HomePage() {
  const bestSellers = getBestSellers();
  const deals = getDeals();

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-gradient-to-br from-surface via-white to-primary/5">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: 'url(/hero.png)' }}
          aria-hidden="true"
        />
        
        {/* Subtle floating shapes — antigravity vibe */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-cta/5 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-start px-4 pt-16 md:pt-20">
          <div className="mx-auto w-full max-w-2xl text-center">
            <Badge variant="halal" className="mb-4">
              Certified Halal
            </Badge>
            <h1 className="mb-4 font-heading text-3xl font-bold leading-tight text-text md:text-5xl md:leading-tight lg:text-6xl">
              <span className="whitespace-nowrap">Premium Halal Groceries</span>
              <br />
              <span className="text-primary">Delivered to Your Door</span>
            </h1>
            <p className="mb-8 text-base leading-relaxed text-text-muted md:text-lg lg:text-xl">
              Fresh halal meat, authentic spices, and pantry essentials from
              trusted sources worldwide. Serving the Muslim community across
              Japan.
            </p>

            {/* Search */}
            <SearchBar variant="hero" className="mx-auto" />

            {/* Quick stats */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-text-muted md:text-base">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-success md:h-5 md:w-5" />
                100% Halal Certified
              </span>
              <span className="flex items-center gap-1.5">
                <Truck className="h-4 w-4 text-primary md:h-5 md:w-5" />
                Next-Day Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <Snowflake className="h-4 w-4 text-sky-500 md:h-5 md:w-5" />
                Cold Chain Fresh
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Category Grid ── */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-heading text-xl font-bold text-text md:text-2xl">
              Shop by Category
            </h2>
            <p className="mt-1 text-sm text-text-muted">
              Find exactly what you need
            </p>
          </div>
          <Link
            href="/c/fresh-meat"
            className="hidden cursor-pointer items-center gap-1 text-sm font-medium text-primary transition-colors duration-200 hover:text-secondary sm:flex"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/c/${cat.slug}`}
              className="group flex cursor-pointer flex-col items-center gap-3 rounded-xl border border-border bg-white p-5 text-center transition-all duration-200 hover:border-primary/20 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl transition-transform duration-200 group-hover:scale-105">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-text">{cat.name}</p>
                <p className="text-xs text-text-muted">{cat.nameJa}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Best Sellers ── */}
      <section className="bg-surface/50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="font-heading text-xl font-bold text-text md:text-2xl">
                Best Sellers
              </h2>
              <p className="mt-1 text-sm text-text-muted">
                Our customers&apos; top picks
              </p>
            </div>
          </div>
          <ProductGrid products={bestSellers} />
        </div>
      </section>

      {/* ── Seasonal Deals ── */}
      {deals.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Clock className="h-5 w-5 text-cta" />
                <Badge variant="error">Limited Time</Badge>
              </div>
              <h2 className="font-heading text-xl font-bold text-text md:text-2xl">
                Special Deals
              </h2>
              <p className="mt-1 text-sm text-text-muted">
                Save on your favourite halal products
              </p>
            </div>
          </div>
          <ProductGrid products={deals} columns={3} />
        </section>
      )}

      {/* ── Trust Section ── */}
      <section className="border-t border-border bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-10 text-center font-heading text-xl font-bold text-text md:text-2xl">
            Why Shop With Us
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: "100% Halal Certified",
                desc: "Every product is verified by recognized halal certification bodies. No compromises.",
                color: "text-success",
                bg: "bg-success/10",
              },
              {
                icon: Truck,
                title: "Fast Delivery",
                desc: "Next-day delivery in Tokyo. 2-3 days nationwide. Free shipping over ¥5,000.",
                color: "text-primary",
                bg: "bg-primary/10",
              },
              {
                icon: Snowflake,
                title: "Cold Chain Fresh",
                desc: "Perishables shipped in insulated boxes with ice packs to maintain freshness.",
                color: "text-sky-500",
                bg: "bg-sky-100",
              },
              {
                icon: Award,
                title: "Quality Sourced",
                desc: "Direct partnerships with halal farms and producers in Australia, Brazil, and Asia.",
                color: "text-cta",
                bg: "bg-cta/10",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-white p-6 transition-all duration-200 hover:shadow-md"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${item.bg}`}
                >
                  <item.icon className={`h-6 w-6 ${item.color}`} />
                </div>
                <h3 className="mb-2 font-heading text-base font-semibold text-text">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog Preview ── */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-heading text-xl font-bold text-text md:text-2xl">
              From Our Kitchen
            </h2>
            <p className="mt-1 text-sm text-text-muted">
              Recipes, guides, and halal living tips
            </p>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-white transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-5">
                <div className="mb-2 flex items-center gap-2">
                  <Badge variant="default">{post.category}</Badge>
                  <span className="text-xs text-text-muted">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="mb-2 font-heading text-base font-semibold leading-snug text-text transition-colors duration-200 group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="line-clamp-2 text-sm leading-relaxed text-text-muted">
                  {post.excerpt}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read more <ChevronRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="mb-3 font-heading text-xl font-bold text-white md:text-2xl">
              Stay in the Loop
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-white/70">
              Get notified about new arrivals, seasonal specials, and Ramadan
              offers. No spam, ever.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                aria-label="Email address for newsletter"
                className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button
                type="submit"
                className="shrink-0 cursor-pointer rounded-lg bg-cta px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-cta-hover"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
