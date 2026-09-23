import type { Metadata } from "next";
import { ConceptSite } from "@/components/ConceptSite";
import { concepts } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Smashburgers in Sage Hill",
  description:
    "Fresh smashburgers, crispy chicken and loaded fries at Proper Burger in Sage Hill, Calgary."
};

export default function ClassicPage() {
  return <ConceptSite concept={concepts.classic} alternate={concepts.premium} />;
}
