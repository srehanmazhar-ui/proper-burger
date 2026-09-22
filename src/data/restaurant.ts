export type MenuItem = {
  name: string;
  description: string;
  category: "Burgers" | "Sides" | "Drinks";
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

export const promo: Promo = {
  label: "Burger Launch Promo",
  title: "Make It A Meal",
  detail:
    "Add fries and a can of pop to any smashburger. A simple upsell that makes the burger launch feel complete.",
  priceLine: "+$3.99",
  image: "/images/meal-fries-pop.png",
  imageAlt: "Fries and a can pop from the Rollz burger meal promo artwork."
};

export const menu: MenuItem[] = [
  {
    name: "Single Smash",
    description:
      "Fresh smashed beef, cheese, pickles, and a soft toasted bun. Built as the clean entry point to the burger menu.",
    category: "Burgers",
    price: "$6.49",
    image: "/images/burger-single.png",
    imageAlt: "Single smashburger with cheese and pickles from the Rollz promo artwork.",
    tags: ["Smashburger", "Beef"]
  },
  {
    name: "Double Smash",
    description:
      "Two smashed patties with melted cheese, pickles, and a bigger bite for the core burger crowd.",
    category: "Burgers",
    price: "$10.99",
    image: "/images/burger-double.png",
    imageAlt: "Double smashburger with cheese and pickles from the Rollz promo artwork.",
    tags: ["Popular", "Beef"]
  },
  {
    name: "Triple Smash",
    description:
      "Three smashed patties stacked with cheese for the most indulgent burger option shown on the Rollz burger promo.",
    category: "Burgers",
    price: "$12.99",
    image: "/images/burger-triple.png",
    imageAlt: "Triple smashburger with melted cheese and pickles from the Rollz promo artwork.",
    tags: ["Loaded", "Beef"]
  },
  {
    name: "Double Smash Fix",
    description:
      "A featured double smash item promoted through Calgary food content. Great candidate for the home page hero callout.",
    category: "Burgers",
    price: "$11.99",
    image: "/images/burger-double.png",
    imageAlt: "Double smashburger used as the visual reference for the Double Smash Fix.",
    tags: ["Featured", "Social pick"]
  },
  {
    name: "Chicken Items",
    description:
      "Chicken options referenced by local food coverage, ready to hold tenders, chicken burger, or crispy chicken details.",
    category: "Burgers",
    price: "Confirm",
    image: "/images/rollz-tender-dip.png",
    imageAlt: "Chicken tender dipped into sauce at Rollz.",
    tags: ["Chicken"]
  },
  {
    name: "Fries",
    description:
      "Crispy fries positioned as the default side for combos and the base for loaded fries.",
    category: "Sides",
    price: "Confirm",
    image: "/images/meal-fries-pop.png",
    imageAlt: "Fries and pop from the Rollz meal promo artwork.",
    tags: ["Side"]
  },
  {
    name: "Loaded Fries",
    description:
      "A menu feature mentioned in local coverage, ideal for a photo-led section once final toppings are confirmed.",
    category: "Sides",
    price: "Confirm",
    image: "/images/rollz-tender-dip.png",
    imageAlt: "Food close-up from Rollz used as a visual cue for sides and sauces.",
    tags: ["Loaded", "Fries"]
  },
  {
    name: "Make It A Meal",
    description:
      "Add fries and a can of pop to any burger. Rollz promo copy lists add-ons at $0.50 each.",
    category: "Sides",
    price: "+$3.99",
    image: "/images/meal-fries-pop.png",
    imageAlt: "Fries and can pop meal upgrade from the Rollz promo artwork.",
    tags: ["Combo", "Fries + pop"]
  },
  {
    name: "Shakes",
    description:
      "Dessert drinks can connect the burger concept back to the existing Rollz ice cream audience.",
    category: "Drinks",
    price: "Confirm",
    tags: ["Dessert"]
  },
  {
    name: "Can Pop",
    description:
      "Included in the meal upgrade and available as the simple drink pairing for burgers and fries.",
    category: "Drinks",
    price: "Confirm",
    image: "/images/meal-fries-pop.png",
    imageAlt: "Can pop shown with fries in the Rollz meal promo artwork.",
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
    eyebrow: "Approved Direction A",
    headline: "Smashburgers at Rollz",
    intro:
      "A warm burger-joint concept for Rollz Ice Cream & Desserts: fresh smashburgers, loaded fries, chicken items, and a simple meal upgrade built for walk-in traffic.",
    image: "/images/classic-hero.png",
    imageAlt:
      "Classic burger joint counter with a burger and fries on a tray.",
    orderCta: confirmationRequired,
    heroNote: `Now framed around ${venueName} at ${venueAddress}. Final ordering link and hours can drop in before launch.`,
    palette: ["#B22222", "#F7EAD9", "#1A1A1A"],
    menuIntro:
      "Built from the Rollz Instagram burger posts. Promo-sensitive items can be adjusted once the client confirms the final permanent menu.",
    storyTitle: "Made To Feel Proper",
    story: [
      "This direction makes the burger concept feel like a natural extension of Rollz: ice cream energy, counter-service speed, and bold smashburger appetite.",
      "The red and cream system supports the actual menu content: Single Smash, Double Smash, Triple Smash, loaded fries, chicken items, and meal upgrades."
    ],
    locationNote:
      "The Sage Hill location is ready to show. Final hours, phone/WhatsApp, and ordering link can be added once approved.",
    toneNotes: [
      "Warm classic burger-joint character",
      "Smashburger pricing front and center",
      "Rollz location context included"
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
        value: publicPending,
        note: "Ordering link, phone, or delivery platform still needs client confirmation."
      }
    ]
  },
  premium: {
    id: "premium",
    route: "/premium",
    name: "Proper Burger",
    label: "Premium Black",
    switchLabel: "View Classic",
    eyebrow: "Approved Direction B",
    headline: "The Smash Fix",
    intro:
      "A sharper storefront-led concept for the same Rollz burger launch: Alberta beef, Double Smash Fix, loaded fries, chicken items, and a premium black presentation.",
    image: "/images/premium-hero.png",
    imageAlt:
      "Premium dark restaurant storefront at dusk with warm interior lighting.",
    orderCta: confirmationRequired,
    heroNote: "Uses the real Rollz Sage Hill location and social menu cues while leaving logo, final hours, and ordering link open.",
    palette: ["#050505", "#171717", "#F5F2EC", "#8D949B"],
    menuIntro:
      "Uses the same real burger content, styled with a more premium rhythm for a client-facing alternative.",
    storyTitle: "A Sharper Storefront Presence",
    story: [
      "This direction treats the burger offer as a more premium add-on inside Rollz Ice Cream & Desserts, with the storefront and food photography doing more of the selling.",
      "Dark surfaces, steel-grey detail, and cinematic spacing make Double Smash Fix, loaded fries, chicken items, and Alberta beef feel more elevated."
    ],
    locationNote:
      "The Rollz Sage Hill storefront is confirmed. Hours, delivery radius, and final ordering path still need approval.",
    toneNotes: [
      "Premium modern cinematic look",
      "Alberta beef message highlighted",
      "Black identity preserved"
    ],
    highlights: [
      "Fresh Alberta beef",
      "Double Smash Fix $11.99",
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
        value: publicPending,
        note: "Final CTA can route to ordering, WhatsApp, or delivery."
      }
    ]
  }
};
