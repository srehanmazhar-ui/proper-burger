import type { Metadata } from "next";
import { ConceptSite } from "@/components/ConceptSite";
import { concepts } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Classic Burger Joint Concept",
  description:
    "Proper Burger Classic concept using Proper Red, Burger Cream, and Charcoal with a warm burger-joint identity."
};

export default function ClassicPage() {
  return <ConceptSite concept={concepts.classic} alternate={concepts.premium} />;
}
