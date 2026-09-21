export type MenuItem = {
  name: string;
  description: string;
  price: string;
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
  palette: string[];
  menuIntro: string;
  storyTitle: string;
  story: string[];
  locationNote: string;
  toneNotes: string[];
};

export const confirmationRequired = "CLIENT CONFIRMATION REQUIRED";

export const menu: MenuItem[] = [
  {
    name: "Proper Classic Burger",
    description:
      "A signature beef burger structure ready for the confirmed recipe, sauces, and build details.",
    price: confirmationRequired,
    tags: ["Signature", "Beef"]
  },
  {
    name: "Cheese Burger",
    description:
      "A familiar cheeseburger option with final cheese, garnish, and sauce specification pending.",
    price: confirmationRequired,
    tags: ["Core menu"]
  },
  {
    name: "Chicken Burger",
    description:
      "A chicken burger slot prepared for the confirmed grilled or crispy preparation.",
    price: confirmationRequired,
    tags: ["Chicken"]
  },
  {
    name: "Fries",
    description:
      "Classic side item with seasoning, portion size, and serving style awaiting client approval.",
    price: confirmationRequired,
    tags: ["Side"]
  },
  {
    name: "Shakes",
    description:
      "Dessert drink category prepared for confirmed flavors, names, and photography direction.",
    price: confirmationRequired,
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
      "A warm, confident restaurant site built around Proper Red, Burger Cream, and Charcoal: familiar, appetite-led, and easy to use on the move.",
    image: "/images/classic-hero.png",
    imageAlt:
      "Classic burger joint counter with a burger and fries on a tray.",
    orderCta: confirmationRequired,
    palette: ["#B22222", "#F7EAD9", "#1A1A1A"],
    menuIntro:
      "The structure below is production-ready while the exact recipes, prices, and category names remain open for confirmation.",
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
      "A cinematic storefront-led website concept using black, charcoal, soft white, and steel grey for a more refined burger experience.",
    image: "/images/premium-hero.png",
    imageAlt:
      "Premium dark restaurant storefront at dusk with warm interior lighting.",
    orderCta: confirmationRequired,
    palette: ["#050505", "#171717", "#F5F2EC", "#8D949B"],
    menuIntro:
      "The menu architecture is shared with the classic concept, then styled for a more editorial premium presentation.",
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
    ]
  }
};
