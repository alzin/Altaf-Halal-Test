"use client";

import { useCart } from "../_context/CartContext";
import { formatPrice } from "../_data/mock";
import { ShieldCheck, Truck, Package } from "lucide-react";

interface OrderSummaryProps {
  className?: string;
  showCheckoutButton?: boolean;
}

export function OrderSummary({
  className = "",
  showCheckoutButton = false,
}: OrderSummaryProps) {
  const { items, subtotal, itemCount } = useCart();

  const shipping = subtotal >= 5000 ? 0 : 500;
  const tax = Math.round(subtotal * 0.1);
  const total = subtotal + shipping + tax;

  return (
    <div
      className={`rounded-xl border border-border bg-white p-5 ${className}`}
    >
      <h3 className="mb-4 font-heading text-base font-semibold text-text">
        Order Summary
      </h3>

      {/* Item list */}
      <ul className="mb-4 space-y-2.5">
        {items.map((item) => (
          <li
            key={item.product.id}
            className="flex items-center justify-between text-sm"
          >
            <span className="text-text-muted">
              {item.product.name}{" "}
              <span className="text-xs">x{item.quantity}</span>
            </span>
            <span className="font-medium text-text">
              {formatPrice(item.product.price * item.quantity)}
            </span>
          </li>
        ))}
      </ul>

      <div className="space-y-2 border-t border-border pt-3">
        <div className="flex justify-between text-sm">
          <span className="text-text-muted">
            Subtotal ({itemCount} items)
          </span>
          <span className="text-text">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-text-muted">Shipping</span>
          <span className={shipping === 0 ? "font-medium text-success" : "text-text"}>
            {shipping === 0 ? "Free" : formatPrice(shipping)}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-text-muted">Tax (10%)</span>
          <span className="text-text">{formatPrice(tax)}</span>
        </div>
        <div className="flex justify-between border-t border-border pt-2 text-base">
          <span className="font-semibold text-text">Total</span>
          <span className="font-bold text-text">{formatPrice(total)}</span>
        </div>
      </div>

      {showCheckoutButton && (
        <button
          type="submit"
          className="mt-4 w-full cursor-pointer rounded-lg bg-cta py-3.5 font-semibold text-white transition-all duration-200 hover:bg-cta-hover hover:-translate-y-0.5"
        >
          Place Order
        </button>
      )}

      {/* Trust signals */}
      <div className="mt-4 space-y-2 border-t border-border pt-4">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <ShieldCheck className="h-4 w-4 text-success" />
          <span>100% Halal Certified Products</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Truck className="h-4 w-4 text-primary" />
          <span>Free delivery on orders over ¥5,000</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Package className="h-4 w-4 text-primary" />
          <span>Cold chain delivery for perishables</span>
        </div>
      </div>
    </div>
  );
}
