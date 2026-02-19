import type { Metadata } from "next";
import { Nunito_Sans, Varela_Round } from "next/font/google";
import { CartProvider } from "./_context/CartContext";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { CartDrawer } from "./_components/CartDrawer";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700"],
});

const varelaRound = Varela_Round({
  subsets: ["latin"],
  variable: "--font-varela",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Altaf Halal Food | Premium Halal Groceries in Japan",
  description:
    "Shop certified halal meat, spices, pantry staples, and fresh produce. Fast delivery across Japan.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${varelaRound.variable} font-body antialiased`}
      >
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
