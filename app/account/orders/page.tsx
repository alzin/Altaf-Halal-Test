import Link from "next/link";
import { Package, ExternalLink } from "lucide-react";
import { orders, formatPrice } from "../../_data/mock";

const statusColor: Record<string, string> = {
  processing: "bg-warning/10 text-warning",
  shipped: "bg-primary/10 text-primary",
  delivered: "bg-success/10 text-success",
  cancelled: "bg-error/10 text-error",
};

export default function OrdersPage() {
  return (
    <div>
      <h2 className="mb-6 font-heading text-lg font-semibold text-text">
        Order History
      </h2>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="rounded-xl border border-border bg-white p-5 transition-all duration-200 hover:shadow-sm"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface">
                  <Package className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-mono text-sm font-semibold text-text">
                    {order.id}
                  </p>
                  <p className="text-xs text-text-muted">{order.date}</p>
                </div>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColor[order.status]}`}
              >
                {order.status.charAt(0).toUpperCase() +
                  order.status.slice(1)}
              </span>
            </div>

            {/* Items */}
            <ul className="mt-4 space-y-1.5">
              {order.items.map((item) => (
                <li
                  key={item.productId}
                  className="flex justify-between text-sm"
                >
                  <span className="text-text-muted">
                    {item.name} x{item.quantity}
                  </span>
                  <span className="font-medium text-text">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-3">
              <span className="text-sm font-semibold text-text">
                Total: {formatPrice(order.total)}
              </span>
              {order.trackingNumber && (
                <span className="flex items-center gap-1 text-xs text-text-muted">
                  <ExternalLink className="h-3 w-3" />
                  Tracking: {order.trackingNumber}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {orders.length === 0 && (
        <div className="py-12 text-center text-sm text-text-muted">
          No orders yet.{" "}
          <Link href="/" className="cursor-pointer font-medium text-primary hover:text-secondary">
            Start shopping
          </Link>
        </div>
      )}
    </div>
  );
}
