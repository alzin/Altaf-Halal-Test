import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const footerLinks = {
  shop: [
    { label: "Fresh Meat", href: "/c/fresh-meat" },
    { label: "Spices & Seasonings", href: "/c/spices-seasonings" },
    { label: "Rice & Grains", href: "/c/rice-grains" },
    { label: "Frozen Foods", href: "/c/frozen-foods" },
    { label: "Pantry Staples", href: "/c/pantry-staples" },
    { label: "Snacks & Sweets", href: "/c/snacks-sweets" },
  ],
  support: [
    { label: "Contact Us", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Shipping Info", href: "#" },
    { label: "Returns & Refunds", href: "#" },
    { label: "Halal Certification", href: "#" },
  ],
  account: [
    { label: "My Orders", href: "/account/orders" },
    { label: "Wishlist", href: "/account/wishlist" },
    { label: "Addresses", href: "/account/addresses" },
    { label: "Notifications", href: "/account/notifications" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Altaf Halal Food"
                width={36}
                height={36}
                className="h-9 w-9 rounded-lg object-contain"
              />
              <div>
                <p className="text-sm font-bold leading-tight text-text font-heading">
                  Altaf Halal Food
                </p>
                <p className="text-[10px] leading-tight text-text-muted">
                  Premium Halal Groceries
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              Your trusted source for certified halal groceries in Japan.
              Quality ingredients delivered to your door.
            </p>
            <div className="mt-5 space-y-2.5">
              <div className="flex items-start gap-2 text-sm text-text-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Shibuya-ku, Tokyo, Japan</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-muted">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>03-1234-5678</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-muted">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>hello@altafhalalfood.jp</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-muted">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                <span>Mon – Sat: 9:00 – 20:00</span>
              </div>
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold text-text">
              Shop
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="cursor-pointer text-sm text-text-muted transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold text-text">
              Support
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="cursor-pointer text-sm text-text-muted transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account links */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold text-text">
              My Account
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.account.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="cursor-pointer text-sm text-text-muted transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-text-muted sm:flex-row">
          <p>&copy; 2026 Altaf Halal Food. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="cursor-pointer transition-colors duration-200 hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="cursor-pointer transition-colors duration-200 hover:text-primary">
              Terms of Service
            </Link>
            <Link href="#" className="cursor-pointer transition-colors duration-200 hover:text-primary">
              Tokushoho
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
