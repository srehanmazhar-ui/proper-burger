import type { Metadata } from "next";
import { siteDescription, siteName, siteTitle, siteUrl } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`
  },
  description: siteDescription,
  applicationName: siteName,
  category: "restaurant",
  keywords: [
    "Proper Burger",
    "smash burgers Calgary",
    "burgers Sage Hill",
    "smashburger Sage Hill",
    "loaded fries Calgary"
  ],
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName,
    title: siteTitle,
    description: siteDescription,
    url: "/premium"
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
