"use client";

import Link from "next/link";
import { ShoppingCart, Bell, Heart } from "lucide-react";
import { useCart } from "../_context/CartContext";
import { Price } from "./Price";
import { Badge } from "./Badge";
import type { Product } from "../_data/mock";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className = "" }: ProductCardProps) {
  const { addItem } = useCart();

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
    <div
      className={`group relative flex flex-col overflow-hidden rounded-xl border border-border bg-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${className}`}
    >
      {/* Image area */}
      <Link
        href={`/p/${product.slug}`}
        className="relative block aspect-square cursor-pointer overflow-hidden"
      >
        <div
          className={`relative h-full w-full bg-gradient-to-br ${gradient}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Badges */}
        <div className="absolute left-2 top-2 flex flex-col gap-1">
          {product.isNew && <Badge variant="new">New</Badge>}
          {product.isBestSeller && <Badge variant="default">Best Seller</Badge>}
          {product.originalPrice && product.originalPrice > product.price && (
            <Badge variant="error">
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </Badge>
          )}
          {!product.inStock && (
            <Badge variant="warning">Out of Stock</Badge>
          )}
        </div>

        {/* Wishlist */}
        <button
          type="button"
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute right-2 top-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/80 text-text-muted opacity-0 shadow-sm backdrop-blur-sm transition-all duration-200 hover:text-cta group-hover:opacity-100"
        >
          <Heart className="h-4 w-4" />
        </button>
      </Link>

      {/* Info */}
      <div className="flex flex-1 flex-col p-3">
        <Link href={`/p/${product.slug}`} className="cursor-pointer">
          <p className="text-xs text-text-muted">{product.category}</p>
          <h3 className="mt-0.5 line-clamp-2 text-sm font-semibold leading-snug text-text transition-colors duration-150 hover:text-primary">
            {product.name}
          </h3>
        </Link>

        <p className="mt-0.5 text-xs text-text-muted">{product.unit}</p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-2">
          <Price
            amount={product.price}
            originalAmount={product.originalPrice}
            size="sm"
          />

          {product.inStock ? (
            <button
              type="button"
              onClick={() => addItem(product)}
              aria-label={`Add ${product.name} to cart`}
              className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg bg-cta text-white shadow-sm transition-all duration-200 hover:bg-cta-hover hover:shadow-md"
            >
              <ShoppingCart className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="button"
              aria-label={`Notify when ${product.name} is back in stock`}
              className="flex h-9 shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-border px-3 text-xs font-medium text-text-muted transition-colors duration-200 hover:border-primary hover:text-primary"
            >
              <Bell className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Notify</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
