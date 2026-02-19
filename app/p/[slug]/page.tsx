"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ChevronRight,
  ShoppingCart,
  Heart,
  Truck,
  ShieldCheck,
  Snowflake,
  Star,
  Bell,
  Minus,
  Plus,
  PackageSearch,
} from "lucide-react";
import {
  getProductBySlug,
  getRelatedProducts,
  formatPrice,
} from "../../_data/mock";
import { useCart } from "../../_context/CartContext";
import { ProductGrid } from "../../_components/ProductGrid";
import { Badge } from "../../_components/Badge";
import { EmptyState } from "../../_components/EmptyState";

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20">
        <EmptyState
          icon={PackageSearch}
          title="Product not found"
          description="We couldn't find the product you're looking for."
          action={{ label: "Back to Home", href: "/" }}
        />
      </div>
    );
  }

  const related = getRelatedProducts(product);
  const hasDiscount =
    product.originalPrice && product.originalPrice > product.price;
  const discount = hasDiscount
    ? Math.round(
      ((product.originalPrice! - product.price) / product.originalPrice!) *
      100
    )
    : 0;

  const colorMap: Record<string, string> = {
    "fresh-meat": "from-red-100 to-red-50",
    "spices-seasonings": "from-amber-100 to-amber-50",
    "rice-grains": "from-green-100 to-green-50",
    "frozen-foods": "from-sky-100 to-sky-50",
    "pantry-staples": "from-violet-100 to-violet-50",
    "snacks-sweets": "from-pink-100 to-pink-50",
    beverages: "from-teal-100 to-teal-50",
    "fresh-produce": "from-lime-100 to-lime-50",
  };
  const gradient = colorMap[product.categorySlug] || "from-surface to-white";

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-1.5 text-sm">
          <li>
            <Link
              href="/"
              className="cursor-pointer text-text-muted transition-colors duration-200 hover:text-primary"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-3.5 w-3.5 text-text-muted" />
          </li>
          <li>
            <Link
              href={`/c/${product.categorySlug}`}
              className="cursor-pointer text-text-muted transition-colors duration-200 hover:text-primary"
            >
              {product.category}
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-3.5 w-3.5 text-text-muted" />
          </li>
          <li>
            <span className="font-medium text-text">{product.name}</span>
          </li>
        </ol>
      </nav>

      {/* Product detail */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Gallery */}
        <div className="space-y-3">
          <div
            className={`relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br ${gradient}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.images[0]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
            {/* Badges */}
            <div className="absolute left-4 top-4 flex flex-col gap-1.5">
              {product.halal && <Badge variant="halal">Halal Certified</Badge>}
              {product.isNew && <Badge variant="new">New</Badge>}
              {hasDiscount && <Badge variant="error">-{discount}%</Badge>}
            </div>
          </div>
          {/* Thumbnail strip */}
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`h-16 w-16 shrink-0 cursor-pointer overflow-hidden rounded-lg border-2 transition-colors duration-200 ${i === 0 ? "border-primary" : "border-border hover:border-primary/30"
                  }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.images[0]}
                  alt={`${product.name} thumbnail ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <p className="mb-1 text-sm text-text-muted">{product.category}</p>
          <h1 className="mb-1 font-heading text-2xl font-bold text-text md:text-3xl">
            {product.name}
          </h1>
          <p className="mb-4 text-sm text-text-muted">{product.nameJa}</p>

          {/* Rating */}
          <div className="mb-4 flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(product.rating)
                      ? "fill-warning text-warning"
                      : "text-border"
                    }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-text">
              {product.rating}
            </span>
            <span className="text-sm text-text-muted">
              ({product.reviewCount} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="mb-6 flex items-baseline gap-3">
            <span className="text-3xl font-bold text-text">
              {formatPrice(product.price)}
            </span>
            {hasDiscount && (
              <>
                <span className="text-lg text-text-muted line-through">
                  {formatPrice(product.originalPrice!)}
                </span>
                <Badge variant="error">Save {discount}%</Badge>
              </>
            )}
          </div>

          <p className="mb-1 text-sm text-text-muted">
            Unit: <span className="font-medium text-text">{product.unit}</span>
          </p>
          <p className="mb-6 text-sm text-text-muted">
            Origin:{" "}
            <span className="font-medium text-text">{product.origin}</span>
          </p>

          {/* Stock + Add to cart */}
          {product.inStock ? (
            <div className="mb-6">
              <p className="mb-3 text-sm font-medium text-success">
                In Stock ({product.stockCount} available)
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {/* Quantity */}
                <div className="inline-flex items-center gap-1 rounded-lg border border-border bg-white">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                    className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-l-lg text-text-muted transition-colors duration-200 hover:bg-surface disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-[2.5rem] text-center font-semibold text-text">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setQuantity(
                        Math.min(product.stockCount, quantity + 1)
                      )
                    }
                    disabled={quantity >= product.stockCount}
                    aria-label="Increase quantity"
                    className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-r-lg text-text-muted transition-colors duration-200 hover:bg-surface disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => addItem(product, quantity)}
                  className="flex cursor-pointer items-center gap-2 rounded-lg bg-cta px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-cta-hover hover:-translate-y-0.5"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </button>

                <button
                  type="button"
                  aria-label="Add to wishlist"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-border text-text-muted transition-all duration-200 hover:border-cta hover:text-cta"
                >
                  <Heart className="h-5 w-5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="mb-6 rounded-xl border border-warning/30 bg-warning/5 p-4">
              <p className="mb-2 font-semibold text-warning">Out of Stock</p>
              <p className="mb-3 text-sm text-text-muted">
                This item is currently unavailable. We&apos;ll notify you when
                it&apos;s back.
              </p>
              <button
                type="button"
                className="flex cursor-pointer items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-secondary"
              >
                <Bell className="h-4 w-4" />
                Notify Me When Available
              </button>
            </div>
          )}

          {/* Delivery info */}
          <div className="space-y-3 rounded-xl border border-border bg-surface/50 p-4">
            <div className="flex items-center gap-3 text-sm">
              <Truck className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium text-text">Next-Day Delivery</p>
                <p className="text-text-muted">
                  Order by 2 PM for Tokyo next-day delivery
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <ShieldCheck className="h-5 w-5 shrink-0 text-success" />
              <div>
                <p className="font-medium text-text">Halal Guaranteed</p>
                <p className="text-text-muted">
                  Certified by recognized halal authorities
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Snowflake className="h-5 w-5 shrink-0 text-sky-500" />
              <div>
                <p className="font-medium text-text">Cold Chain Shipping</p>
                <p className="text-text-muted">
                  Temperature-controlled packaging for freshness
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h2 className="mb-2 font-heading text-lg font-semibold text-text">
              About This Product
            </h2>
            <p className="text-sm leading-relaxed text-text-muted">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-6 font-heading text-xl font-bold text-text">
            You Might Also Like
          </h2>
          <ProductGrid products={related} />
        </section>
      )}
    </div>
  );
}
