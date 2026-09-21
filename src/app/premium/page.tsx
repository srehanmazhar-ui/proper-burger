import type { Metadata } from "next";
import { ConceptSite } from "@/components/ConceptSite";
import { concepts } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Premium Black Concept",
  description:
    "Proper Burger Premium Black concept with a storefront-led cinematic identity and refined restaurant structure."
};

export default function PremiumPage() {
  return <ConceptSite concept={concepts.premium} alternate={concepts.classic} />;
}
