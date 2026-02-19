"use client";

import { useState } from "react";

interface AddressFormProps {
  onSubmit: (data: AddressFormData) => void;
  onCancel: () => void;
  initialData?: Partial<AddressFormData>;
}

export interface AddressFormData {
  label: string;
  name: string;
  phone: string;
  postalCode: string;
  prefecture: string;
  city: string;
  line1: string;
  line2: string;
}

const prefectures = [
  "Tokyo", "Osaka", "Kanagawa", "Aichi", "Saitama", "Chiba",
  "Hyogo", "Hokkaido", "Fukuoka", "Shizuoka",
];

export function AddressForm({
  onSubmit,
  onCancel,
  initialData,
}: AddressFormProps) {
  const [form, setForm] = useState<AddressFormData>({
    label: initialData?.label || "",
    name: initialData?.name || "",
    phone: initialData?.phone || "",
    postalCode: initialData?.postalCode || "",
    prefecture: initialData?.prefecture || "",
    city: initialData?.city || "",
    line1: initialData?.line1 || "",
    line2: initialData?.line2 || "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(form);
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-text transition-all duration-200 placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="addr-label" className="mb-1.5 block text-sm font-medium text-text">
            Label
          </label>
          <input
            id="addr-label"
            name="label"
            value={form.label}
            onChange={handleChange}
            placeholder="e.g., Home, Office"
            className={inputClass}
            required
          />
        </div>
        <div>
          <label htmlFor="addr-name" className="mb-1.5 block text-sm font-medium text-text">
            Full Name
          </label>
          <input
            id="addr-name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClass}
            required
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="addr-phone" className="mb-1.5 block text-sm font-medium text-text">
            Phone
          </label>
          <input
            id="addr-phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="090-0000-0000"
            className={inputClass}
            required
          />
        </div>
        <div>
          <label htmlFor="addr-postal" className="mb-1.5 block text-sm font-medium text-text">
            Postal Code
          </label>
          <input
            id="addr-postal"
            name="postalCode"
            value={form.postalCode}
            onChange={handleChange}
            placeholder="000-0000"
            className={inputClass}
            required
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="addr-prefecture" className="mb-1.5 block text-sm font-medium text-text">
            Prefecture
          </label>
          <select
            id="addr-prefecture"
            name="prefecture"
            value={form.prefecture}
            onChange={handleChange}
            className={`${inputClass} cursor-pointer`}
            required
          >
            <option value="">Select prefecture</option>
            {prefectures.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="addr-city" className="mb-1.5 block text-sm font-medium text-text">
            City
          </label>
          <input
            id="addr-city"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="City / Ward"
            className={inputClass}
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="addr-line1" className="mb-1.5 block text-sm font-medium text-text">
          Address Line 1
        </label>
        <input
          id="addr-line1"
          name="line1"
          value={form.line1}
          onChange={handleChange}
          placeholder="Street address"
          className={inputClass}
          required
        />
      </div>

      <div>
        <label htmlFor="addr-line2" className="mb-1.5 block text-sm font-medium text-text">
          Address Line 2 (Optional)
        </label>
        <input
          id="addr-line2"
          name="line2"
          value={form.line2}
          onChange={handleChange}
          placeholder="Apartment, building, floor"
          className={inputClass}
        />
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          className="cursor-pointer rounded-lg bg-cta px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-cta-hover"
        >
          Save Address
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="cursor-pointer rounded-lg border border-border px-6 py-3 text-sm font-semibold text-text transition-colors duration-200 hover:bg-surface"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
