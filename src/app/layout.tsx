import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Proper Burger | Smashburgers in Sage Hill",
    template: "%s | Proper Burger"
  },
  description:
    "Fresh smashburgers, crispy chicken and loaded fries at Proper Burger in Sage Hill, Calgary.",
  icons: {
    icon: "/favicon.svg"
  },
  robots: {
    index: false,
    follow: false
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
