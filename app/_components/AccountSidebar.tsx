"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Package,
  Heart,
  MapPin,
  Bell,
  User,
  LogOut,
} from "lucide-react";

const navItems = [
  { label: "Overview", href: "/account", icon: User },
  { label: "Orders", href: "/account/orders", icon: Package },
  { label: "Wishlist", href: "/account/wishlist", icon: Heart },
  { label: "Addresses", href: "/account/addresses", icon: MapPin },
  { label: "Notifications", href: "/account/notifications", icon: Bell },
];

export function AccountSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full shrink-0 lg:w-56">
      <nav aria-label="Account navigation">
        <ul className="flex gap-1 overflow-x-auto pb-2 lg:flex-col lg:overflow-x-visible lg:pb-0">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex cursor-pointer items-center gap-2.5 whitespace-nowrap rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-text-muted hover:bg-surface hover:text-text"
                  }`}
                >
                  <item.icon className="h-4 w-4 shrink-0" />
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li className="mt-auto hidden lg:block lg:pt-4 lg:border-t lg:border-border">
            <button
              type="button"
              className="flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-text-muted transition-colors duration-200 hover:bg-error/5 hover:text-error"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
