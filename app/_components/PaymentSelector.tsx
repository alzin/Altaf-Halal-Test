"use client";

import { CreditCard, Landmark, Wallet, Check } from "lucide-react";

const paymentMethods = [
  {
    id: "card",
    label: "Credit / Debit Card",
    description: "Visa, Mastercard, JCB, AMEX",
    icon: CreditCard,
  },
  {
    id: "konbini",
    label: "Convenience Store",
    description: "Pay at 7-Eleven, Lawson, FamilyMart",
    icon: Landmark,
  },
  {
    id: "cod",
    label: "Cash on Delivery",
    description: "Pay when you receive (¥300 fee)",
    icon: Wallet,
  },
];

interface PaymentSelectorProps {
  selectedMethod: string;
  onSelect: (method: string) => void;
  className?: string;
}

export function PaymentSelector({
  selectedMethod,
  onSelect,
  className = "",
}: PaymentSelectorProps) {
  return (
    <div className={className} role="radiogroup" aria-label="Payment method">
      <div className="space-y-3">
        {paymentMethods.map((method) => {
          const isSelected = selectedMethod === method.id;
          return (
            <button
              key={method.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelect(method.id)}
              className={`flex w-full cursor-pointer items-center gap-4 rounded-xl border-2 p-4 text-left transition-all duration-200 ${
                isSelected
                  ? "border-primary bg-primary/5"
                  : "border-border bg-white hover:border-primary/30"
              }`}
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors duration-200 ${
                  isSelected ? "bg-primary/10" : "bg-surface"
                }`}
              >
                <method.icon
                  className={`h-5 w-5 ${
                    isSelected ? "text-primary" : "text-text-muted"
                  }`}
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-text">
                  {method.label}
                </p>
                <p className="text-xs text-text-muted">
                  {method.description}
                </p>
              </div>
              <div
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-200 ${
                  isSelected
                    ? "border-primary bg-primary"
                    : "border-border bg-white"
                }`}
              >
                {isSelected && <Check className="h-3 w-3 text-white" />}
              </div>
            </button>
          );
        })}
      </div>

      {/* Card form placeholder */}
      {selectedMethod === "card" && (
        <div className="mt-4 space-y-3 rounded-xl border border-border bg-surface/50 p-4">
          <div>
            <label htmlFor="card-number" className="mb-1.5 block text-sm font-medium text-text">
              Card Number
            </label>
            <input
              id="card-number"
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-text transition-all duration-200 placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="card-expiry" className="mb-1.5 block text-sm font-medium text-text">
                Expiry
              </label>
              <input
                id="card-expiry"
                type="text"
                placeholder="MM/YY"
                className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-text transition-all duration-200 placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label htmlFor="card-cvc" className="mb-1.5 block text-sm font-medium text-text">
                CVC
              </label>
              <input
                id="card-cvc"
                type="text"
                placeholder="123"
                className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-text transition-all duration-200 placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
