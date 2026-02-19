import { Bell, Package, Tag, Megaphone } from "lucide-react";

const notifications = [
  {
    id: "n1",
    type: "order" as const,
    title: "Order Shipped",
    message: "Your order ORD-20240210 has been shipped and is on its way.",
    time: "2 hours ago",
    read: false,
  },
  {
    id: "n2",
    type: "promo" as const,
    title: "Ramadan Sale Starting Soon",
    message:
      "Get ready for our biggest sale of the year. Up to 30% off on selected items.",
    time: "1 day ago",
    read: false,
  },
  {
    id: "n3",
    type: "stock" as const,
    title: "Back in Stock: Beef Mince",
    message:
      "Good news! Beef Mince (Halal) is back in stock. Order now before it sells out.",
    time: "3 days ago",
    read: true,
  },
  {
    id: "n4",
    type: "order" as const,
    title: "Order Delivered",
    message: "Your order ORD-20240201 has been delivered. Enjoy your meal!",
    time: "2 weeks ago",
    read: true,
  },
];

const iconMap = {
  order: Package,
  promo: Megaphone,
  stock: Tag,
};

const colorMap = {
  order: { icon: "text-primary", bg: "bg-primary/10" },
  promo: { icon: "text-cta", bg: "bg-cta/10" },
  stock: { icon: "text-success", bg: "bg-success/10" },
};

export default function NotificationsPage() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-heading text-lg font-semibold text-text">
          Notifications
        </h2>
        <button
          type="button"
          className="cursor-pointer text-sm font-medium text-primary transition-colors duration-200 hover:text-secondary"
        >
          Mark all as read
        </button>
      </div>

      <div className="space-y-2">
        {notifications.map((notif) => {
          const Icon = iconMap[notif.type];
          const color = colorMap[notif.type];
          return (
            <div
              key={notif.id}
              className={`flex gap-4 rounded-xl border p-4 transition-colors duration-200 ${
                notif.read
                  ? "border-border bg-white"
                  : "border-primary/20 bg-primary/5"
              }`}
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${color.bg}`}
              >
                <Icon className={`h-5 w-5 ${color.icon}`} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-semibold text-text">
                    {notif.title}
                  </p>
                  {!notif.read && (
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  )}
                </div>
                <p className="mt-0.5 text-sm text-text-muted">
                  {notif.message}
                </p>
                <p className="mt-1.5 text-xs text-text-muted">{notif.time}</p>
              </div>
            </div>
          );
        })}
      </div>

      {notifications.length === 0 && (
        <div className="flex flex-col items-center py-12 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-surface">
            <Bell className="h-8 w-8 text-primary" />
          </div>
          <p className="text-sm text-text-muted">
            No notifications yet. We&apos;ll keep you posted!
          </p>
        </div>
      )}
    </div>
  );
}
