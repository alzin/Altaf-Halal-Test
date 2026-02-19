import Link from "next/link";
import { Package, Heart, MapPin, Bell, ChevronRight } from "lucide-react";
import { orders, addresses } from "../_data/mock";

const quickLinks = [
  {
    label: "Orders",
    href: "/account/orders",
    icon: Package,
    description: `${orders.length} orders`,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    label: "Wishlist",
    href: "/account/wishlist",
    icon: Heart,
    description: "3 saved items",
    color: "text-cta",
    bg: "bg-cta/10",
  },
  {
    label: "Addresses",
    href: "/account/addresses",
    icon: MapPin,
    description: `${addresses.length} saved`,
    color: "text-success",
    bg: "bg-success/10",
  },
  {
    label: "Notifications",
    href: "/account/notifications",
    icon: Bell,
    description: "2 unread",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
];

export default function AccountOverviewPage() {
  return (
    <div>
      {/* Greeting */}
      <div className="mb-8 rounded-xl border border-border bg-gradient-to-r from-surface to-white p-6">
        <p className="text-sm text-text-muted">Welcome back,</p>
        <h2 className="font-heading text-xl font-bold text-text">
          Altaf Ahmad
        </h2>
        <p className="mt-1 text-sm text-text-muted">
          Member since January 2024
        </p>
      </div>

      {/* Quick links */}
      <div className="grid gap-4 sm:grid-cols-2">
        {quickLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex cursor-pointer items-center gap-4 rounded-xl border border-border bg-white p-5 transition-all duration-200 hover:border-primary/20 hover:shadow-md hover:-translate-y-0.5"
          >
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.bg}`}
            >
              <item.icon className={`h-6 w-6 ${item.color}`} />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-text">{item.label}</p>
              <p className="text-sm text-text-muted">{item.description}</p>
            </div>
            <ChevronRight className="h-5 w-5 text-text-muted" />
          </Link>
        ))}
      </div>

      {/* Recent order */}
      {orders.length > 0 && (
        <div className="mt-8">
          <h3 className="mb-4 font-heading text-lg font-semibold text-text">
            Recent Order
          </h3>
          <div className="rounded-xl border border-border bg-white p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="font-mono text-sm font-semibold text-text">
                  {orders[orders.length - 1].id}
                </p>
                <p className="text-sm text-text-muted">
                  {orders[orders.length - 1].date}
                </p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  orders[orders.length - 1].status === "processing"
                    ? "bg-warning/10 text-warning"
                    : orders[orders.length - 1].status === "shipped"
                      ? "bg-primary/10 text-primary"
                      : orders[orders.length - 1].status === "delivered"
                        ? "bg-success/10 text-success"
                        : "bg-error/10 text-error"
                }`}
              >
                {orders[orders.length - 1].status.charAt(0).toUpperCase() +
                  orders[orders.length - 1].status.slice(1)}
              </span>
            </div>
            <div className="mt-3 text-sm text-text-muted">
              {orders[orders.length - 1].items.length} items ·{" "}
              ¥{orders[orders.length - 1].total.toLocaleString()}
            </div>
            <Link
              href="/account/orders"
              className="mt-3 inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-primary transition-colors duration-200 hover:text-secondary"
            >
              View all orders <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
