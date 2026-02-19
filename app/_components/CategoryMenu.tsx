"use client";

import { useState, useEffect } from "react";
import { X, ChevronRight } from "lucide-react";
import { categories } from "../_data/mock";
import Link from "next/link";
import Image from "next/image";

interface CategoryMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CategoryMenu({ isOpen, onClose }: CategoryMenuProps) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const activeCategory = categories.find((c) => c.id === hoveredCategory);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Mega Menu — Desktop */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Category menu"
        className={`fixed left-0 top-0 z-40 hidden h-full w-full max-w-4xl bg-white shadow-xl transition-transform duration-300 ease-out md:flex ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Left: category list */}
        <div className="w-72 shrink-0 border-r border-border">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <h2 className="font-heading text-lg font-semibold text-text">
              Categories
            </h2>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-text-muted transition-colors duration-200 hover:bg-surface"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav>
            <ul>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setHoveredCategory(cat.id)}
                    onClick={() => setHoveredCategory(cat.id)}
                    className={`flex w-full cursor-pointer items-center justify-between px-5 py-3 text-left text-sm transition-colors duration-150 ${
                      hoveredCategory === cat.id
                        ? "bg-surface font-semibold text-primary"
                        : "text-text hover:bg-surface/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative h-8 w-8 overflow-hidden rounded-lg">
                        <Image
                          src={cat.image}
                          alt={cat.name}
                          fill
                          className="object-cover"
                          sizes="32px"
                        />
                      </div>
                      <span>{cat.name}</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-text-muted" />
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Right: subcategories */}
        <div className="flex-1 overflow-y-auto p-8">
          {activeCategory ? (
            <div>
              <Link
                href={`/c/${activeCategory.slug}`}
                onClick={onClose}
                className="mb-1 inline-block cursor-pointer font-heading text-xl font-semibold text-text hover:text-primary"
              >
                {activeCategory.name}
              </Link>
              <p className="mb-6 text-sm text-text-muted">
                {activeCategory.productCount} products
              </p>
              <div className="grid grid-cols-2 gap-3">
                {activeCategory.subcategories.map((sub) => (
                  <Link
                    key={sub.slug}
                    href={`/c/${activeCategory.slug}?sub=${sub.slug}`}
                    onClick={onClose}
                    className="cursor-pointer rounded-xl border border-border bg-white p-4 transition-all duration-200 hover:border-primary/30 hover:shadow-md"
                  >
                    <p className="text-sm font-medium text-text">
                      {sub.name}
                    </p>
                  </Link>
                ))}
              </div>
              <Link
                href={`/c/${activeCategory.slug}`}
                onClick={onClose}
                className="mt-6 inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-primary transition-colors duration-200 hover:text-secondary"
              >
                View all {activeCategory.name}
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-text-muted">
              Hover over a category to see subcategories
            </div>
          )}
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Category menu"
        className={`fixed left-0 top-0 z-40 flex h-full w-full max-w-sm flex-col bg-white shadow-xl transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-4">
          <h2 className="font-heading text-lg font-semibold text-text">
            Categories
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-text-muted transition-colors duration-200 hover:bg-surface"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="divide-y divide-border">
            {categories.map((cat) => (
              <li key={cat.id}>
                <Link
                  href={`/c/${cat.slug}`}
                  onClick={onClose}
                  className="flex cursor-pointer items-center gap-3 px-4 py-3.5 transition-colors duration-150 hover:bg-surface"
                >
                  <div className="relative h-10 w-10 overflow-hidden rounded-xl">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-text">{cat.name}</p>
                    <p className="text-xs text-text-muted">
                      {cat.nameJa} · {cat.productCount} items
                    </p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-text-muted" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
