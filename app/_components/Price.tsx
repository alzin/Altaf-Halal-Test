import { formatPrice } from "../_data/mock";

interface PriceProps {
  amount: number;
  originalAmount?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Price({
  amount,
  originalAmount,
  size = "md",
  className = "",
}: PriceProps) {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-2xl",
  };

  const hasDiscount = originalAmount && originalAmount > amount;
  const discount = hasDiscount
    ? Math.round(((originalAmount - amount) / originalAmount) * 100)
    : 0;

  return (
    <div className={`flex flex-wrap items-center gap-1.5 ${className}`}>
      <span
        className={`font-bold text-text ${sizeClasses[size]}`}
      >
        {formatPrice(amount)}
      </span>
      {hasDiscount && (
        <>
          <span className="text-text-muted line-through text-xs">
            {formatPrice(originalAmount)}
          </span>
          <span className="rounded-full bg-cta/10 px-1.5 py-0.5 text-xs font-semibold text-cta">
            -{discount}%
          </span>
        </>
      )}
    </div>
  );
}
