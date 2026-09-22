export type MenuItem = {
  name: string;
  description: string;
  category: "Burgers" | "Chicken" | "Sides" | "Drinks";
  price: string;
  image?: string;
  imageAlt?: string;
  tags?: string[];
};

export type Concept = {
  id: "classic" | "premium";
  route: "/classic" | "/premium";
  name: string;
  label: string;
  switchLabel: string;
  eyebrow: string;
  headline: string;
  intro: string;
  image: string;
  imageAlt: string;
  orderCta: string;
  heroNote: string;
  palette: string[];
  menuIntro: string;
  storyTitle: string;
  story: string[];
  locationNote: string;
  toneNotes: string[];
  highlights: string[];
  visitCards: { label: string; value: string; note: string }[];
};

export type Promo = {
  label: string;
  title: string;
  detail: string;
  priceLine: string;
  image: string;
  imageAlt: string;
};

export const confirmationRequired = "CLIENT CONFIRMATION REQUIRED";
export const publicPending = "Coming soon";
export const venueName = "Rollz Ice Cream & Desserts";
export const venueAddress = "3950 Sage Hill Drive NW";
export const instagramUrl = "https://www.instagram.com/rollzicecreamcalgary/?hl=en";
export const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=3950%20Sage%20Hill%20Drive%20NW%20Calgary";

export const promo: Promo = {
  label: "Meal Upgrade",
  title: "Make It A Meal",
  detail:
    "Add hot fries and a can of pop to any smashburger for the full Proper Burger meal.",
  priceLine: "+$3.99",
  image: "/images/meal-combo-cutout.png",
  imageAlt: "Fries and a can of pop for the burger meal upgrade."
};

export const menu: MenuItem[] = [
  {
    name: "Single Smash",
    description:
      "Fresh smashed beef, cheese, pickles, and a soft toasted bun. Built as the clean entry point to the burger menu.",
    category: "Burgers",
    price: "$6.49",
    image: "/images/burger-single-cutout.png",
    imageAlt: "Single smashburger with cheese and pickles.",
    tags: ["Smashburger", "Beef"]
  },
  {
    name: "Double Smash",
    description:
      "Two smashed patties with melted cheese, pickles, and a bigger bite for the core burger crowd.",
    category: "Burgers",
    price: "$10.99",
    image: "/images/burger-double-cutout.png",
    imageAlt: "Double smashburger with cheese and pickles.",
    tags: ["Popular", "Beef"]
  },
  {
    name: "Triple Smash",
    description:
      "Three smashed patties stacked with cheese for the most indulgent burger option shown on the Rollz burger promo.",
    category: "Burgers",
    price: "$12.99",
    image: "/images/burger-triple-cutout.png",
    imageAlt: "Triple smashburger with melted cheese and pickles.",
    tags: ["Loaded", "Beef"]
  },
  {
    name: "Crispy Chicken",
    description:
      "Golden, crispy chicken served with a creamy dipping sauce. Ask in store for today's chicken selection.",
    category: "Chicken",
    price: "",
    image: "/images/rollz-tender-dip.png",
    imageAlt: "Chicken tender dipped into sauce at Rollz.",
    tags: ["Chicken"]
  },
  {
    name: "Fries",
    description:
      "Hot, golden fries ready to stand beside any smashburger.",
    category: "Sides",
    price: "",
    tags: ["Side"]
  },
  {
    name: "Loaded Fries",
    description:
      "A loaded take on the classic side. Ask in store for today's build.",
    category: "Sides",
    price: "",
    tags: ["Loaded", "Fries"]
  },
  {
    name: "Make It A Meal",
    description:
      "Add fries and a can of pop to any smashburger.",
    category: "Sides",
    price: "+$3.99",
    image: "/images/meal-combo-cutout.png",
    imageAlt: "Fries and a can of pop for the meal upgrade.",
    tags: ["Combo", "Fries + pop"]
  },
  {
    name: "Shakes",
    description:
      "Pair your burger with a cold dessert drink from Rollz.",
    category: "Drinks",
    price: "",
    tags: ["Dessert"]
  },
  {
    name: "Can Pop",
    description:
      "The classic cold drink pairing for burgers and fries.",
    category: "Drinks",
    price: "",
    tags: ["Combo drink"]
  }
];

export const concepts: Record<"classic" | "premium", Concept> = {
  classic: {
    id: "classic",
    route: "/classic",
    name: "Proper Burger",
    label: "Classic Burger Joint",
    switchLabel: "View Premium",
    eyebrow: "Sage Hill / Calgary",
    headline: "Smashburgers at Rollz",
    intro:
      "Fresh smashburgers, loaded fries, crispy chicken, and an easy meal upgrade, served inside Rollz Ice Cream & Desserts.",
    image: "/images/classic-hero.png",
    imageAlt:
      "Classic burger joint counter with a burger and fries on a tray.",
    orderCta: confirmationRequired,
    heroNote: `Find us inside ${venueName} at ${venueAddress}.`,
    palette: ["#B22222", "#F7EAD9", "#1A1A1A"],
    menuIntro:
      "Fresh smashburgers, crispy sides, and an easy meal upgrade, served at Rollz Sage Hill.",
    storyTitle: "Made To Feel Proper",
    story: [
      "Proper Burger brings hot, crispy-edged smashburgers to the Rollz counter, making it easy to pair a savoury meal with the desserts Calgary already knows.",
      "Choose a Single, Double, or Triple Smash, add fries and a cold drink, then save room for something sweet."
    ],
    locationNote:
      "Find Proper Burger inside Rollz Ice Cream & Desserts at the Sage Hill location.",
    toneNotes: [
      "Smashed fresh to order",
      "Locally sourced Alberta beef",
      "Burgers and dessert in one stop"
    ],
    highlights: [
      "Single Smash $6.49",
      "Double Smash $10.99",
      "Triple Smash $12.99",
      "Meal upgrade +$3.99"
    ],
    visitCards: [
      {
        label: "Location",
        value: venueAddress,
        note: `Inside ${venueName} in Calgary.`
      },
      {
        label: "Service",
        value: "In-store",
        note: "Burger availability shown as in-store from the Instagram promo."
      },
      {
        label: "Order",
        value: "Visit in store",
        note: "Follow Rollz Calgary on Instagram for the latest menu updates."
      }
    ]
  },
  premium: {
    id: "premium",
    route: "/premium",
    name: "Proper Burger",
    label: "Premium Black",
    switchLabel: "View Classic",
    eyebrow: "Sage Hill / Calgary",
    headline: "The Smash Fix",
    intro:
      "Smashed Alberta beef, melted cheese, crisp pickles, loaded sides, and cold drinks, served at Rollz Sage Hill.",
    image: "/images/premium-hero.png",
    imageAlt:
      "Premium dark restaurant storefront at dusk with warm interior lighting.",
    orderCta: confirmationRequired,
    heroNote: `Proper Burger is served inside ${venueName} at ${venueAddress}.`,
    palette: ["#050505", "#171717", "#F5F2EC", "#8D949B"],
    menuIntro:
      "A focused lineup of smashed Alberta beef, crisp chicken, loaded sides, and classic cold drinks.",
    storyTitle: "A Sharper Storefront Presence",
    story: [
      "Proper Burger starts with fresh Alberta beef, smashed on the grill for crisp edges and stacked with melted cheese and pickles.",
      "It all comes together at Rollz Sage Hill, where burgers, fries, crispy chicken, cold drinks, and signature desserts share one counter."
    ],
    locationNote:
      "Visit the Rollz Sage Hill storefront for the Proper Burger menu and current availability.",
    toneNotes: [
      "Fresh Alberta beef",
      "Crispy smashed edges",
      "Built for the full meal"
    ],
    highlights: [
      "Fresh Alberta beef",
      "Double Smash $10.99",
      "Loaded fries + chicken",
      "Sage Hill location"
    ],
    visitCards: [
      {
        label: "Storefront",
        value: venueAddress,
        note: `Burger menu presented inside ${venueName}.`
      },
      {
        label: "Service",
        value: "In-store",
        note: "Hours, delivery radius, and pickup details still need final approval."
      },
      {
        label: "Reserve / Order",
        value: "Visit in store",
        note: "Follow Rollz Calgary on Instagram for the latest menu updates."
      }
    ]
  }
};
