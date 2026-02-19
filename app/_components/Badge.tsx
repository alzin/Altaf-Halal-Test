interface BadgeProps {
  variant?: "default" | "success" | "warning" | "error" | "new" | "halal";
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<string, string> = {
  default: "bg-primary/10 text-primary",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  error: "bg-error/10 text-error",
  new: "bg-secondary/10 text-secondary",
  halal: "bg-success/10 text-success",
};

export function Badge({
  variant = "default",
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
