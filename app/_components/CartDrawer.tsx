"use client";

import { useEffect } from "react";
import { X, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "../_context/CartContext";
import { QuantityStepper } from "./QuantityStepper";
import { Price } from "./Price";
import { EmptyState } from "./EmptyState";
import Link from "next/link";
import { formatPrice } from "../_data/mock";

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    itemCount,
    subtotal,
  } = useCart();

  /* Lock body scroll when open */
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

  /* Close on Escape */
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeCart();
    }
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, closeCart]);

  const shipping = subtotal >= 5000 ? 0 : 500;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-200"
          onClick={closeCart}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            <h2 className="font-heading text-lg font-semibold text-text">
              Your Cart
            </h2>
            {itemCount > 0 && (
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                {itemCount}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-text-muted transition-colors duration-200 hover:bg-surface"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 px-5">
            <EmptyState
              icon={ShoppingBag}
              title="Your cart is empty"
              description="Browse our products and add items to your cart to get started."
              action={{ label: "Start Shopping", href: "/" }}
            />
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-border overflow-y-auto px-5">
              {items.map((item) => {
                const gradient: Record<string, string> = {
                  "fresh-meat": "from-red-100 to-red-50",
                  "spices-seasonings": "from-amber-100 to-amber-50",
                  "rice-grains": "from-green-100 to-green-50",
                  "frozen-foods": "from-sky-100 to-sky-50",
                  "pantry-staples": "from-violet-100 to-violet-50",
                  "snacks-sweets": "from-pink-100 to-pink-50",
                  beverages: "from-teal-100 to-teal-50",
                  "fresh-produce": "from-lime-100 to-lime-50",
                };
                const bg = gradient[item.product.categorySlug] || "from-surface to-white";

                return (
                  <li key={item.product.id} className="flex gap-3 py-4">
                    <div
                      className={`h-16 w-16 shrink-0 rounded-lg bg-gradient-to-br ${bg} flex items-center justify-center`}
                    >
                      <span className="text-lg font-bold text-text/10 font-heading">
                        {item.product.name.charAt(0)}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <Link
                        href={`/p/${item.product.slug}`}
                        onClick={closeCart}
                        className="cursor-pointer text-sm font-medium leading-tight text-text hover:text-primary"
                      >
                        {item.product.name}
                      </Link>
                      <p className="mt-0.5 text-xs text-text-muted">
                        {item.product.unit}
                      </p>
                      <div className="mt-2 flex items-center justify-between">
                        <QuantityStepper
                          quantity={item.quantity}
                          onIncrement={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity + 1
                            )
                          }
                          onDecrement={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity - 1
                            )
                          }
                          size="sm"
                        />
                        <div className="flex items-center gap-2">
                          <Price
                            amount={item.product.price * item.quantity}
                            size="sm"
                          />
                          <button
                            type="button"
                            onClick={() => removeItem(item.product.id)}
                            aria-label={`Remove ${item.product.name} from cart`}
                            className="cursor-pointer rounded-md p-1 text-text-muted transition-colors duration-200 hover:bg-error/10 hover:text-error"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Summary */}
            <div className="border-t border-border px-5 py-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Subtotal</span>
                  <span className="font-medium text-text">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Shipping</span>
                  <span className="font-medium text-text">
                    {shipping === 0 ? (
                      <span className="text-success">Free</span>
                    ) : (
                      formatPrice(shipping)
                    )}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-text-muted">
                    Free shipping on orders over ¥5,000
                  </p>
                )}
                <div className="flex justify-between border-t border-border pt-2 text-base">
                  <span className="font-semibold text-text">Total</span>
                  <span className="font-bold text-text">
                    {formatPrice(subtotal + shipping)}
                  </span>
                </div>
              </div>

              <Link
                href="/checkout"
                onClick={closeCart}
                className="mt-4 flex w-full cursor-pointer items-center justify-center rounded-lg bg-cta px-6 py-3.5 font-semibold text-white transition-all duration-200 hover:bg-cta-hover hover:-translate-y-0.5"
              >
                Proceed to Checkout
              </Link>
              <button
                type="button"
                onClick={closeCart}
                className="mt-2 w-full cursor-pointer rounded-lg py-2.5 text-center text-sm font-medium text-primary transition-colors duration-200 hover:bg-surface"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
