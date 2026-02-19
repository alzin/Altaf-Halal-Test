"use client";

import { useState } from "react";
import { SlidersHorizontal, ChevronDown, Grid3X3, LayoutList } from "lucide-react";

interface SortFilterBarProps {
  totalCount: number;
  sortValue: string;
  onSortChange: (value: string) => void;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
  className?: string;
}

const sortOptions = [
  { value: "recommended", label: "Recommended" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest First" },
];

export function SortFilterBar({
  totalCount,
  sortValue,
  onSortChange,
  viewMode,
  onViewModeChange,
  className = "",
}: SortFilterBarProps) {
  const [showSort, setShowSort] = useState(false);

  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-3 ${className}`}
    >
      <p className="text-sm text-text-muted">
        <span className="font-semibold text-text">{totalCount}</span> products
      </p>

      <div className="flex items-center gap-2">
        {/* Sort dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowSort(!showSort)}
            onBlur={() => setTimeout(() => setShowSort(false), 200)}
            className="flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-white px-3 py-2 text-sm font-medium text-text transition-colors duration-200 hover:border-primary"
          >
            <SlidersHorizontal className="h-4 w-4 text-text-muted" />
            <span className="hidden sm:inline">
              {sortOptions.find((o) => o.value === sortValue)?.label}
            </span>
            <span className="sm:hidden">Sort</span>
            <ChevronDown className="h-3.5 w-3.5 text-text-muted" />
          </button>
          {showSort && (
            <div className="absolute right-0 z-40 mt-1 w-48 overflow-hidden rounded-lg border border-border bg-white shadow-lg">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onSortChange(option.value);
                    setShowSort(false);
                  }}
                  className={`w-full cursor-pointer px-4 py-2.5 text-left text-sm transition-colors duration-150 hover:bg-surface ${
                    sortValue === option.value
                      ? "bg-primary/5 font-semibold text-primary"
                      : "text-text"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* View toggle */}
        <div className="flex rounded-lg border border-border bg-white">
          <button
            type="button"
            onClick={() => onViewModeChange("grid")}
            aria-label="Grid view"
            className={`flex cursor-pointer items-center justify-center rounded-l-lg p-2 transition-colors duration-200 ${
              viewMode === "grid"
                ? "bg-primary text-white"
                : "text-text-muted hover:bg-surface"
            }`}
          >
            <Grid3X3 className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => onViewModeChange("list")}
            aria-label="List view"
            className={`flex cursor-pointer items-center justify-center rounded-r-lg p-2 transition-colors duration-200 ${
              viewMode === "list"
                ? "bg-primary text-white"
                : "text-text-muted hover:bg-surface"
            }`}
          >
            <LayoutList className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
