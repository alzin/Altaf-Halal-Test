"use client";

import { Clock, Truck } from "lucide-react";
import { deliverySlots } from "../_data/mock";

interface DeliverySlotPickerProps {
  selectedSlotId: string;
  onSelect: (slotId: string) => void;
  className?: string;
}

export function DeliverySlotPicker({
  selectedSlotId,
  onSelect,
  className = "",
}: DeliverySlotPickerProps) {
  /* Group slots by day */
  const grouped = deliverySlots.reduce(
    (acc, slot) => {
      const key = `${slot.day}, ${slot.date}`;
      if (!acc[key]) acc[key] = [];
      acc[key].push(slot);
      return acc;
    },
    {} as Record<string, typeof deliverySlots>
  );

  return (
    <div className={className}>
      <div className="mb-4 flex items-center gap-2">
        <Truck className="h-5 w-5 text-primary" />
        <h3 className="text-base font-semibold text-text">
          Choose Delivery Slot
        </h3>
      </div>

      <div className="space-y-4">
        {Object.entries(grouped).map(([day, slots]) => (
          <div key={day}>
            <p className="mb-2 text-sm font-medium text-text-muted">{day}</p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {slots.map((slot) => {
                const isSelected = selectedSlotId === slot.id;
                return (
                  <button
                    key={slot.id}
                    type="button"
                    disabled={!slot.available}
                    onClick={() => onSelect(slot.id)}
                    className={`flex cursor-pointer items-center gap-2 rounded-lg border-2 px-3 py-3 text-sm transition-all duration-200 ${
                      isSelected
                        ? "border-primary bg-primary/5 font-semibold text-primary"
                        : slot.available
                          ? "border-border bg-white text-text hover:border-primary/30"
                          : "cursor-not-allowed border-border bg-surface text-text-muted opacity-50"
                    }`}
                    aria-label={`${slot.timeRange} on ${day}`}
                  >
                    <Clock className="h-4 w-4 shrink-0" />
                    {slot.timeRange}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
