import { Heart } from "lucide-react";
import { products } from "../../_data/mock";
import { ProductGrid } from "../../_components/ProductGrid";
import { EmptyState } from "../../_components/EmptyState";

export default function WishlistPage() {
  /* Mock: first 3 products as "wishlisted" */
  const wishlistItems = products.slice(0, 3);

  return (
    <div>
      <h2 className="mb-6 font-heading text-lg font-semibold text-text">
        My Wishlist
      </h2>

      {wishlistItems.length > 0 ? (
        <ProductGrid products={wishlistItems} columns={3} />
      ) : (
        <EmptyState
          icon={Heart}
          title="Your wishlist is empty"
          description="Save items you love by clicking the heart icon on any product."
          action={{ label: "Browse Products", href: "/" }}
        />
      )}
    </div>
  );
}
