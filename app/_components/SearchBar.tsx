"use client";

import { useState, useRef } from "react";
import { Search, X, ShoppingCart } from "lucide-react";
import { products } from "../_data/mock";
import Link from "next/link";
import Image from "next/image";
import { Price } from "./Price";
import { useCart } from "../_context/CartContext";

interface SearchBarProps {
  variant?: "hero" | "header";
  className?: string;
}

export function SearchBar({ variant = "header", className = "" }: SearchBarProps) {
  const { addItem } = useCart();
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered =
    query.length >= 2
      ? products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 15)
      : [];

  const showResults = isFocused && filtered.length > 0;

  const isHero = variant === "hero";
  const containerClasses = isHero
    ? "w-full max-w-xl"
    : "w-full max-w-md";

  return (
    <div className={`relative ${containerClasses} ${className}`}>
      <div
        className={`flex items-center gap-2 rounded-xl border bg-white transition-all duration-200 ${isFocused
          ? "border-primary shadow-md"
          : "border-border shadow-sm"
          } ${isHero ? "px-5 py-3.5" : "px-3 py-2"}`}
      >
        <Search
          className={`shrink-0 text-text-muted ${isHero ? "h-5 w-5" : "h-4 w-4"
            }`}
        />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder={
            isHero
              ? "Search halal meats, spices, groceries..."
              : "Search products..."
          }
          aria-label="Search products"
          className={`no-focus-ring w-full bg-transparent font-body text-text outline-none placeholder:text-text-muted ${isHero ? "text-base" : "text-sm"
            }`}
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            aria-label="Clear search"
            className="shrink-0 cursor-pointer rounded-md p-1 text-text-muted transition-colors duration-200 hover:bg-surface"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {showResults && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-border bg-white shadow-lg">
          <ul role="listbox" aria-label="Search results" className="max-h-[192px] overflow-y-auto">
            {filtered.map((product) => (
              <li key={product.id} className="transition-colors duration-150 hover:bg-surface group">
                <div className="flex items-center gap-3 px-4 py-3">
                  <Link
                    href={`/p/${product.slug}`}
                    className="flex min-w-0 flex-1 cursor-pointer items-center gap-3"
                    onClick={() => setIsFocused(false)}
                  >
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-text group-hover:text-primary transition-colors">
                        {product.name}
                      </p>
                      <p className="text-xs text-text-muted">{product.category}</p>
                    </div>
                  </Link>
                  <div className="ml-2 flex shrink-0 items-center gap-3">
                    <Price amount={product.price} size="sm" />
                    {product.inStock && (
                      <button
                        type="button"
                        onMouseDown={(e) => {
                          // Prevent input from losing focus and closing the dropdown immediately
                          e.preventDefault();
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addItem(product);
                          setIsFocused(false);
                          setQuery("");
                        }}
                        aria-label={`Add ${product.name} to cart`}
                        className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-lg bg-surface text-primary transition-all duration-200 hover:bg-primary hover:text-white"
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
