import { MapPin, Check } from "lucide-react";
import type { Address } from "../_data/mock";

interface AddressCardProps {
  address: Address;
  selected?: boolean;
  onSelect?: () => void;
  onEdit?: () => void;
  variant?: "selectable" | "display";
}

export function AddressCard({
  address,
  selected = false,
  onSelect,
  onEdit,
  variant = "display",
}: AddressCardProps) {
  const isSelectable = variant === "selectable";

  return (
    <div
      onClick={isSelectable ? onSelect : undefined}
      className={`relative rounded-xl border-2 p-4 transition-all duration-200 ${
        isSelectable ? "cursor-pointer" : ""
      } ${
        selected
          ? "border-primary bg-primary/5"
          : "border-border bg-white hover:border-primary/30"
      }`}
      role={isSelectable ? "radio" : undefined}
      aria-checked={isSelectable ? selected : undefined}
    >
      {/* Selection indicator */}
      {isSelectable && (
        <div
          className={`absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors duration-200 ${
            selected
              ? "border-primary bg-primary"
              : "border-border bg-white"
          }`}
        >
          {selected && <Check className="h-3 w-3 text-white" />}
        </div>
      )}

      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface">
          <MapPin className="h-4 w-4 text-primary" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-text">
              {address.label}
            </span>
            {address.isDefault && (
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                Default
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-text">{address.name}</p>
          <p className="mt-0.5 text-sm leading-relaxed text-text-muted">
            {address.line1}
            {address.line2 && `, ${address.line2}`}
            <br />
            {address.city}, {address.prefecture} {address.postalCode}
          </p>
          <p className="mt-0.5 text-sm text-text-muted">{address.phone}</p>
        </div>
      </div>

      {onEdit && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
          className="mt-3 cursor-pointer text-sm font-medium text-primary transition-colors duration-200 hover:text-secondary"
        >
          Edit
        </button>
      )}
    </div>
  );
}
