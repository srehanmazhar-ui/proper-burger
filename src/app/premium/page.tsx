import type { Metadata } from "next";
import { ConceptSite } from "@/components/ConceptSite";
import { concepts, instagramUrl, venueAddress, venueName } from "@/data/restaurant";
import { siteDescription, siteName, siteTitle, siteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: siteTitle },
  description: siteDescription,
  alternates: { canonical: "/premium" },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/premium"
  }
};

export default function PremiumPage() {
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteName,
    url: `${siteUrl}/premium`,
    image: `${siteUrl}/images/og-double-black.png`,
    description: siteDescription,
    priceRange: "$$",
    servesCuisine: ["Smash Burgers", "Burgers", "Chicken", "Loaded Fries"],
    address: {
      "@type": "PostalAddress",
      streetAddress: venueAddress.replace(", Calgary", ""),
      addressLocality: "Calgary",
      addressRegion: "AB",
      addressCountry: "CA"
    },
    containedInPlace: {
      "@type": "FoodEstablishment",
      name: venueName
    },
    sameAs: [instagramUrl],
    hasMenu: `${siteUrl}/premium#menu`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema).replace(/</g, "\\u003c") }}
      />
      <ConceptSite concept={concepts.premium} />
    </>
  );
}
