"use client";

interface CategoryChipsProps {
  items: { name: string; slug: string }[];
  activeSlug?: string;
  onSelect: (slug: string) => void;
  className?: string;
}

export function CategoryChips({
  items,
  activeSlug,
  onSelect,
  className = "",
}: CategoryChipsProps) {
  return (
    <div
      className={`flex flex-wrap gap-2 ${className}`}
      role="group"
      aria-label="Subcategory filters"
    >
      <button
        type="button"
        onClick={() => onSelect("")}
        className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
          !activeSlug
            ? "bg-primary text-white shadow-sm"
            : "bg-surface text-text-muted hover:bg-primary/10 hover:text-primary"
        }`}
      >
        All
      </button>
      {items.map((item) => (
        <button
          key={item.slug}
          type="button"
          onClick={() => onSelect(item.slug)}
          className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
            activeSlug === item.slug
              ? "bg-primary text-white shadow-sm"
              : "bg-surface text-text-muted hover:bg-primary/10 hover:text-primary"
          }`}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}
