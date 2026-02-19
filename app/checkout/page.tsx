"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ShoppingBag, CheckCircle } from "lucide-react";
import { useCart } from "../_context/CartContext";
import { addresses } from "../_data/mock";
import { CheckoutStepper } from "../_components/CheckoutStepper";
import { AddressCard } from "../_components/AddressCard";
import { AddressForm, type AddressFormData } from "../_components/AddressForm";
import { DeliverySlotPicker } from "../_components/DeliverySlotPicker";
import { PaymentSelector } from "../_components/PaymentSelector";
import { OrderSummary } from "../_components/OrderSummary";
import { EmptyState } from "../_components/EmptyState";

const steps = [
  { id: 1, label: "Address" },
  { id: 2, label: "Delivery" },
  { id: 3, label: "Payment" },
  { id: 4, label: "Review" },
];

export default function CheckoutPage() {
  const { items, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState(
    addresses.find((a) => a.isDefault)?.id || ""
  );
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20">
        <EmptyState
          icon={ShoppingBag}
          title="Your cart is empty"
          description="Add some items to your cart before checking out."
          action={{ label: "Start Shopping", href: "/" }}
        />
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-success/10">
            <CheckCircle className="h-10 w-10 text-success" />
          </div>
        </div>
        <h1 className="mb-3 font-heading text-2xl font-bold text-text">
          Order Placed Successfully!
        </h1>
        <p className="mb-2 text-text-muted">
          Thank you for your order. You will receive a confirmation email
          shortly.
        </p>
        <p className="mb-8 text-sm text-text-muted">
          Order ID: <span className="font-mono font-semibold text-text">ORD-20260214</span>
        </p>
        <div className="flex justify-center gap-3">
          <Link
            href="/account/orders"
            className="cursor-pointer rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-secondary"
          >
            View Orders
          </Link>
          <Link
            href="/"
            className="cursor-pointer rounded-lg border border-border px-6 py-3 text-sm font-semibold text-text transition-colors duration-200 hover:bg-surface"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  function goNext() {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  }

  function goBack() {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  }

  function handlePlaceOrder() {
    clearCart();
    setOrderPlaced(true);
  }

  function handleAddressSubmit(_data: AddressFormData) {
    setShowAddressForm(false);
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
            <span className="font-medium text-text">Checkout</span>
          </li>
        </ol>
      </nav>

      <h1 className="mb-6 font-heading text-2xl font-bold text-text">
        Checkout
      </h1>

      {/* Stepper */}
      <CheckoutStepper
        steps={steps}
        currentStep={currentStep}
        className="mb-8"
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main content */}
        <div className="lg:col-span-2">
          {/* Step 1: Address */}
          {currentStep === 1 && (
            <div>
              <h2 className="mb-4 font-heading text-lg font-semibold text-text">
                Delivery Address
              </h2>
              {!showAddressForm ? (
                <>
                  <div className="space-y-3">
                    {addresses.map((addr) => (
                      <AddressCard
                        key={addr.id}
                        address={addr}
                        variant="selectable"
                        selected={selectedAddress === addr.id}
                        onSelect={() => setSelectedAddress(addr.id)}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowAddressForm(true)}
                    className="mt-4 cursor-pointer text-sm font-medium text-primary transition-colors duration-200 hover:text-secondary"
                  >
                    + Add New Address
                  </button>
                </>
              ) : (
                <AddressForm
                  onSubmit={handleAddressSubmit}
                  onCancel={() => setShowAddressForm(false)}
                />
              )}
            </div>
          )}

          {/* Step 2: Delivery Slot */}
          {currentStep === 2 && (
            <DeliverySlotPicker
              selectedSlotId={selectedSlot}
              onSelect={setSelectedSlot}
            />
          )}

          {/* Step 3: Payment */}
          {currentStep === 3 && (
            <div>
              <h2 className="mb-4 font-heading text-lg font-semibold text-text">
                Payment Method
              </h2>
              <PaymentSelector
                selectedMethod={selectedPayment}
                onSelect={setSelectedPayment}
              />
            </div>
          )}

          {/* Step 4: Review */}
          {currentStep === 4 && (
            <div>
              <h2 className="mb-4 font-heading text-lg font-semibold text-text">
                Review Your Order
              </h2>
              <div className="space-y-4">
                <div className="rounded-xl border border-border bg-white p-4">
                  <h3 className="mb-2 text-sm font-semibold text-text-muted uppercase tracking-wider">
                    Delivery Address
                  </h3>
                  {addresses.find((a) => a.id === selectedAddress) && (
                    <AddressCard
                      address={
                        addresses.find((a) => a.id === selectedAddress)!
                      }
                      variant="display"
                    />
                  )}
                </div>
                <div className="rounded-xl border border-border bg-white p-4">
                  <h3 className="mb-2 text-sm font-semibold text-text-muted uppercase tracking-wider">
                    Payment
                  </h3>
                  <p className="text-sm text-text">
                    {selectedPayment === "card" && "Credit / Debit Card"}
                    {selectedPayment === "konbini" && "Convenience Store"}
                    {selectedPayment === "cod" && "Cash on Delivery"}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={goBack}
                className="cursor-pointer rounded-lg border border-border px-6 py-3 text-sm font-semibold text-text transition-colors duration-200 hover:bg-surface"
              >
                Back
              </button>
            ) : (
              <div />
            )}
            {currentStep < 4 ? (
              <button
                type="button"
                onClick={goNext}
                className="cursor-pointer rounded-lg bg-cta px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-cta-hover hover:-translate-y-0.5"
              >
                Continue
              </button>
            ) : (
              <button
                type="button"
                onClick={handlePlaceOrder}
                className="cursor-pointer rounded-lg bg-cta px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-cta-hover hover:-translate-y-0.5"
              >
                Place Order
              </button>
            )}
          </div>
        </div>

        {/* Sticky Order Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
