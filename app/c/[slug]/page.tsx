"use client";

import { useState, useMemo, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ChevronRight, PackageSearch } from "lucide-react";
import { getCategoryBySlug, getProductsByCategory } from "../../_data/mock";
import { ProductGrid } from "../../_components/ProductGrid";
import { CategoryChips } from "../../_components/CategoryChips";
import { SortFilterBar } from "../../_components/SortFilterBar";
import { EmptyState } from "../../_components/EmptyState";

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const searchParams = useSearchParams();
  const category = getCategoryBySlug(slug);
  const allProducts = getProductsByCategory(slug);

  const [activeSubcategory, setActiveSubcategory] = useState("");
  const [sortValue, setSortValue] = useState("recommended");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Read subcategory from URL parameter
  useEffect(() => {
    const subParam = searchParams.get("sub");
    if (subParam) {
      setActiveSubcategory(subParam);
    }
  }, [searchParams]);

  const filtered = useMemo(() => {
    let result = activeSubcategory
      ? allProducts.filter((p) => p.subcategory === activeSubcategory)
      : allProducts;

    switch (sortValue) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result = [...result].sort((a, b) =>
          a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1
        );
        break;
    }
    return result;
  }, [allProducts, activeSubcategory, sortValue]);

  if (!category) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20">
        <EmptyState
          icon={PackageSearch}
          title="Category not found"
          description="We couldn't find the category you're looking for."
          action={{ label: "Back to Home", href: "/" }}
        />
      </div>
    );
  }

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
            <span className="font-medium text-text">{category.name}</span>
          </li>
        </ol>
      </nav>

      {/* Category header */}
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={category.image}
              alt={category.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h1 className="font-heading text-2xl font-bold text-text">
              {category.name}
            </h1>
            <p className="text-sm text-text-muted">
              {category.nameJa} · {allProducts.length} products
            </p>
          </div>
        </div>
      </div>

      {/* Subcategory chips */}
      <CategoryChips
        items={category.subcategories}
        activeSlug={activeSubcategory}
        onSelect={setActiveSubcategory}
        className="mb-6"
      />

      {/* Sort + filter bar */}
      <SortFilterBar
        totalCount={filtered.length}
        sortValue={sortValue}
        onSortChange={setSortValue}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        className="mb-6"
      />

      {/* Product grid */}
      {filtered.length > 0 ? (
        <ProductGrid products={filtered} />
      ) : (
        <EmptyState
          icon={PackageSearch}
          title="No products found"
          description="Try selecting a different subcategory or removing filters."
        />
      )}
    </div>
  );
}
