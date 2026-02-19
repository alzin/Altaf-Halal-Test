"use client";

import { useState } from "react";
import { MapPin, Plus } from "lucide-react";
import { addresses } from "../../_data/mock";
import { AddressCard } from "../../_components/AddressCard";
import { AddressForm, type AddressFormData } from "../../_components/AddressForm";

export default function AddressesPage() {
  const [showForm, setShowForm] = useState(false);

  function handleSubmit(_data: AddressFormData) {
    setShowForm(false);
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-heading text-lg font-semibold text-text">
          Saved Addresses
        </h2>
        <button
          type="button"
          onClick={() => setShowForm(true)}
          className="flex cursor-pointer items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-secondary"
        >
          <Plus className="h-4 w-4" />
          Add New
        </button>
      </div>

      {showForm && (
        <div className="mb-6 rounded-xl border border-border bg-white p-5">
          <h3 className="mb-4 font-heading text-base font-semibold text-text">
            New Address
          </h3>
          <AddressForm
            onSubmit={handleSubmit}
            onCancel={() => setShowForm(false)}
          />
        </div>
      )}

      <div className="space-y-3">
        {addresses.map((addr) => (
          <AddressCard
            key={addr.id}
            address={addr}
            variant="display"
            onEdit={() => {}}
          />
        ))}
      </div>

      {addresses.length === 0 && (
        <div className="flex flex-col items-center py-12 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-surface">
            <MapPin className="h-8 w-8 text-primary" />
          </div>
          <p className="text-sm text-text-muted">
            No saved addresses yet. Add one to speed up checkout.
          </p>
        </div>
      )}
    </div>
  );
}
