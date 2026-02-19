import { type LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: {
    label: string;
    href: string;
  };
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-surface">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-text">{title}</h3>
      <p className="mb-6 max-w-sm text-sm text-text-muted">{description}</p>
      {action && (
        <a
          href={action.href}
          className="inline-flex cursor-pointer items-center rounded-lg bg-cta px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-cta-hover hover:-translate-y-0.5"
        >
          {action.label}
        </a>
      )}
    </div>
  );
}
