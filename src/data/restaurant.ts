export type MenuItem = {
  name: string;
  description: string;
  category: "Burgers" | "Sides" | "Drinks";
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

export const confirmationRequired = "CLIENT CONFIRMATION REQUIRED";
export const publicPending = "Coming soon";

export const menu: MenuItem[] = [
  {
    name: "Proper Classic Burger",
    description:
      "A signature beef burger slot for the house build, sauce, garnish, and final photography.",
    category: "Burgers",
    tags: ["Signature", "Beef"]
  },
  {
    name: "Cheese Burger",
    description:
      "A classic cheese-led build designed to be easy to scan, easy to order, and easy to feature.",
    category: "Burgers",
    tags: ["Core menu"]
  },
  {
    name: "Chicken Burger",
    description:
      "A chicken option prepared for the final grilled or crispy direction and sauce profile.",
    category: "Burgers",
    tags: ["Chicken"]
  },
  {
    name: "Loaded Burger",
    description:
      "A premium or indulgent build reserved for the confirmed hero item, upsell, or limited special.",
    category: "Burgers",
    tags: ["Feature"]
  },
  {
    name: "Fries",
    description:
      "A core side slot for fries, seasoning, dipping sauce, and confirmed portion options.",
    category: "Sides",
    tags: ["Side"]
  },
  {
    name: "Sauces",
    description:
      "A small sauce section that can hold house sauce, dips, and any branded flavor names.",
    category: "Sides",
    tags: ["Add-on"]
  },
  {
    name: "Shakes",
    description:
      "A dessert drink area ready for confirmed shake flavors and any seasonal specials.",
    category: "Drinks",
    tags: ["Drinks"]
  },
  {
    name: "Soft Drinks",
    description:
      "A simple drinks area for confirmed beverages, combos, and delivery platform listings.",
    category: "Drinks",
    tags: ["Drinks"]
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
    headline: "Classic Burger Joint",
    intro:
      "A warm, confident burger-joint website built around red counters, cream surfaces, simple choices, and a direct path from craving to order.",
    image: "/images/classic-hero.png",
    imageAlt:
      "Classic burger joint counter with a burger and fries on a tray.",
    orderCta: confirmationRequired,
    heroNote: "Menu, locations, and ordering are structured for launch once client details are confirmed.",
    palette: ["#B22222", "#F7EAD9", "#1A1A1A"],
    menuIntro:
      "A clean customer-facing menu structure with prices intentionally held until the final client menu is approved.",
    storyTitle: "Made To Feel Proper",
    story: [
      "This direction leans into the comfort of a classic burger counter: quick decisions, bold appetite cues, and a warm welcome.",
      "The visual system uses strong red accents, cream surfaces, tactile dividers, and straightforward language so customers can scan, choose, and act."
    ],
    locationNote:
      "Locations, address details, hours, delivery links, and phone/WhatsApp contact are pending client confirmation.",
    toneNotes: [
      "Warm classic burger-joint character",
      "Fast scanning for menu and ordering",
      "Red and cream identity preserved"
    ],
    highlights: [
      "Counter-service energy",
      "Bold menu cards",
      "Family-friendly feel",
      "Fast order path"
    ],
    visitCards: [
      {
        label: "Location",
        value: publicPending,
        note: "Address and map link will be added after confirmation."
      },
      {
        label: "Hours",
        value: publicPending,
        note: "Daily service hours and holiday hours will be added."
      },
      {
        label: "Order",
        value: publicPending,
        note: "Ordering button will connect to the approved platform."
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
    headline: "Premium Black",
    intro:
      "A premium storefront-led concept with a darker, sharper mood: cinematic first impression, refined menu presentation, and a polished path to ordering.",
    image: "/images/premium-hero.png",
    imageAlt:
      "Premium dark restaurant storefront at dusk with warm interior lighting.",
    orderCta: confirmationRequired,
    heroNote: "Built as a refined storefront concept while exact operating details remain ready to drop in.",
    palette: ["#050505", "#171717", "#F5F2EC", "#8D949B"],
    menuIntro:
      "The menu architecture is shared with the classic concept, then presented with a more editorial, premium rhythm.",
    storyTitle: "A Sharper Storefront Presence",
    story: [
      "This direction treats the storefront as the brand anchor: composed, minimal, and built for a premium first impression.",
      "Dark surfaces, steel-grey detail, generous spacing, and cinematic imagery help the same restaurant content feel more elevated."
    ],
    locationNote:
      "Storefront address, service area, opening hours, ordering platform, and contact channels are pending client confirmation.",
    toneNotes: [
      "Premium modern cinematic look",
      "Storefront-led first impression",
      "Black identity preserved"
    ],
    highlights: [
      "Storefront-first hero",
      "Minimal dark palette",
      "Editorial menu rhythm",
      "Premium order flow"
    ],
    visitCards: [
      {
        label: "Storefront",
        value: publicPending,
        note: "Address, map link, and storefront photography can be added."
      },
      {
        label: "Service",
        value: publicPending,
        note: "Hours, delivery radius, and pickup details will be confirmed."
      },
      {
        label: "Reserve / Order",
        value: publicPending,
        note: "Final CTA can route to ordering, WhatsApp, or reservation."
      }
    ]
  }
};
