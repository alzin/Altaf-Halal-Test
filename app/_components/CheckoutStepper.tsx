"use client";

import { Check } from "lucide-react";

interface Step {
  id: number;
  label: string;
}

interface CheckoutStepperProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

export function CheckoutStepper({
  steps,
  currentStep,
  className = "",
}: CheckoutStepperProps) {
  return (
    <nav aria-label="Checkout progress" className={className}>
      <ol className="flex items-center gap-2">
        {steps.map((step, index) => {
          const isCompleted = currentStep > step.id;
          const isCurrent = currentStep === step.id;

          return (
            <li key={step.id} className="flex items-center gap-2">
              {index > 0 && (
                <div
                  className={`hidden h-px w-6 sm:block md:w-10 ${
                    isCompleted ? "bg-primary" : "bg-border"
                  }`}
                  aria-hidden="true"
                />
              )}
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors duration-200 ${
                    isCompleted
                      ? "bg-primary text-white"
                      : isCurrent
                        ? "border-2 border-primary bg-primary/10 text-primary"
                        : "border-2 border-border bg-white text-text-muted"
                  }`}
                  aria-current={isCurrent ? "step" : undefined}
                >
                  {isCompleted ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    step.id
                  )}
                </div>
                <span
                  className={`hidden text-sm font-medium sm:inline ${
                    isCurrent
                      ? "text-primary"
                      : isCompleted
                        ? "text-text"
                        : "text-text-muted"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
