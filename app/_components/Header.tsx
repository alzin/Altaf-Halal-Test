"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  ShoppingCart,
  User,
  Heart,
  Search,
  X,
} from "lucide-react";
import { useCart } from "../_context/CartContext";
import { SearchBar } from "./SearchBar";
import { CategoryMenu } from "./CategoryMenu";

export function Header() {
  const { openCart, itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-xs">
          <p className="hidden sm:block">
            Free shipping on orders over ¥5,000
          </p>
          <p className="sm:hidden">Free delivery ¥5,000+</p>
          <div className="flex items-center gap-4">
            <span>JP / ¥ JPY</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-30 border-b border-border bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open category menu"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-text transition-colors duration-200 hover:bg-surface lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 cursor-pointer items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-white font-heading">
                AF
              </span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold leading-tight text-text font-heading">
                Altaf Halal Food
              </p>
              <p className="text-[10px] leading-tight text-text-muted">
                Premium Halal Groceries
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-text transition-colors duration-200 hover:bg-surface hover:text-primary"
            >
              Categories
            </button>
            <Link
              href="/c/fresh-meat"
              className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-text transition-colors duration-200 hover:bg-surface hover:text-primary"
            >
              Fresh Meat
            </Link>
            <Link
              href="/c/spices-seasonings"
              className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-text transition-colors duration-200 hover:bg-surface hover:text-primary"
            >
              Spices
            </Link>
            <Link
              href="/c/frozen-foods"
              className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-text transition-colors duration-200 hover:bg-surface hover:text-primary"
            >
              Frozen
            </Link>
          </nav>

          {/* Search — desktop */}
          <div className="mx-4 hidden flex-1 lg:block">
            <SearchBar variant="header" />
          </div>

          {/* Actions */}
          <div className="ml-auto flex items-center gap-1">
            {/* Search toggle — mobile */}
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label={searchOpen ? "Close search" : "Open search"}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-text transition-colors duration-200 hover:bg-surface lg:hidden"
            >
              {searchOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Search className="h-5 w-5" />
              )}
            </button>

            <Link
              href="/account/wishlist"
              aria-label="Wishlist"
              className="hidden h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-text transition-colors duration-200 hover:bg-surface sm:flex"
            >
              <Heart className="h-5 w-5" />
            </Link>

            <Link
              href="/account"
              aria-label="Account"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-text transition-colors duration-200 hover:bg-surface"
            >
              <User className="h-5 w-5" />
            </Link>

            <button
              type="button"
              onClick={openCart}
              aria-label={`Shopping cart, ${itemCount} items`}
              className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-text transition-colors duration-200 hover:bg-surface"
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-cta px-1 text-[10px] font-bold text-white">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile search bar */}
        {searchOpen && (
          <div className="border-t border-border px-4 py-3 lg:hidden">
            <SearchBar variant="header" />
          </div>
        )}
      </header>

      <CategoryMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
