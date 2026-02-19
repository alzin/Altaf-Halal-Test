"use client";

import { Minus, Plus } from "lucide-react";

interface QuantityStepperProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  min?: number;
  max?: number;
  size?: "sm" | "md";
}

export function QuantityStepper({
  quantity,
  onIncrement,
  onDecrement,
  min = 1,
  max = 99,
  size = "md",
}: QuantityStepperProps) {
  const sizeClasses = {
    sm: "h-7 w-7",
    md: "h-9 w-9",
  };
  const textSize = size === "sm" ? "text-sm" : "text-base";

  return (
    <div className="inline-flex items-center gap-1 rounded-lg border border-border bg-white">
      <button
        type="button"
        onClick={onDecrement}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
        className={`${sizeClasses[size]} flex cursor-pointer items-center justify-center rounded-l-lg text-text-muted transition-colors duration-200 hover:bg-surface disabled:cursor-not-allowed disabled:opacity-40`}
      >
        <Minus className="h-4 w-4" />
      </button>
      <span
        className={`${textSize} min-w-[2rem] text-center font-semibold text-text`}
        aria-live="polite"
        aria-label={`Quantity: ${quantity}`}
      >
        {quantity}
      </span>
      <button
        type="button"
        onClick={onIncrement}
        disabled={quantity >= max}
        aria-label="Increase quantity"
        className={`${sizeClasses[size]} flex cursor-pointer items-center justify-center rounded-r-lg text-text-muted transition-colors duration-200 hover:bg-surface disabled:cursor-not-allowed disabled:opacity-40`}
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
