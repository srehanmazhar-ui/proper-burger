import type { Metadata } from "next";
import { ConceptSite } from "@/components/ConceptSite";
import { concepts } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Proper Burger — Black & Silver",
  description:
    "Crisp-edged smashburgers and loaded sides at Proper Burger in Sage Hill, Calgary."
};

export default function PremiumPage() {
  return <ConceptSite concept={concepts.premium} alternate={concepts.classic} />;
}
