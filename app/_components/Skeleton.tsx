interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div className={`skeleton ${className}`} aria-hidden="true" />
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-white p-3">
      <Skeleton className="mb-3 aspect-square w-full rounded-lg" />
      <Skeleton className="mb-2 h-4 w-3/4" />
      <Skeleton className="mb-3 h-3 w-1/2" />
      <div className="flex items-center justify-between">
        <Skeleton className="h-5 w-16" />
        <Skeleton className="h-9 w-9 rounded-lg" />
      </div>
    </div>
  );
}

export function CategoryCardSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-white p-4">
      <Skeleton className="mb-3 h-12 w-12 rounded-xl" />
      <Skeleton className="mb-1 h-4 w-24" />
      <Skeleton className="h-3 w-16" />
    </div>
  );
}
