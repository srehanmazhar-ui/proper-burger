import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://proper-burger.example"),
  title: {
    default: "Proper Burger Concepts",
    template: "%s | Proper Burger"
  },
  description:
    "Two approved responsive Proper Burger website concepts: Classic Burger Joint and Premium Black.",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
