export type MenuPrice = string | { label: string; amount: string }[];

export type MenuItem = {
  name: string;
  description?: string;
  price: MenuPrice;
};

type FeaturedMenuItem = MenuItem & {
  image: string;
  imageAlt: string;
  tag?: string;
};

export type Concept = {
  id: "premium";
  route: "/premium";
  optionLabel: string;
  headline: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  menuHeading: string;
  menuIntro: string;
  qualityHeading: string;
  qualityCopy: string;
};

export const venueName = "Rollz Ice Cream & Desserts";
export const venueAddress = "#910, 3950 Sage Hill Drive NW, Calgary";
export const instagramUrl =
  "https://www.instagram.com/rollzicecreamcalgary/?hl=en";
export const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=%23910%203950%20Sage%20Hill%20Drive%20NW%20Calgary";

export const burgers: FeaturedMenuItem[] = [
  {
    name: "Proper Smash",
    description: "Smashed Alberta beef with cheese, pickles, onions and Proper Sauce on a toasted bun.",
    image: "/images/og-double-black.png",
    imageAlt: "Double beef smashburger on a sesame-seed bun.",
    tag: "Beef",
    price: [
      { label: "Double", amount: "$10.99" },
      { label: "Single", amount: "$8.99" }
    ]
  },
  {
    name: "Crispy Chicken",
    description: "Available regular or spicy.",
    image: "/images/cluckin-hot-black.png",
    imageAlt: "Crispy chicken burger on a sesame-seed bun.",
    tag: "Chicken",
    price: "$11.99"
  },
  {
    name: "Spicy Veggie Burger",
    image: "/images/plant-stack-black.png",
    imageAlt: "Veggie burger on a sesame-seed bun.",
    tag: "Veggie",
    price: "$9.99"
  }
];

export const smashOptions: MenuItem[] = [
  {
    name: "Oklahoma Smash",
    price: [
      { label: "Double", amount: "$11.99" },
      { label: "Single", amount: "$9.99" }
    ]
  },
  {
    name: "Truffle Smash",
    price: [
      { label: "Double", amount: "$11.99" },
      { label: "Single", amount: "$9.99" }
    ]
  },
  { name: "Extra Patty", price: "+$3.99" }
];

export const chickenAndMore: MenuItem[] = [
  { name: "Chicken Strips & Fries", description: "3 pieces.", price: "$12.99" },
  {
    name: "Wings",
    description: "BBQ, Garlic Parmesan, Chipotle, Gochujang, Lemon Pepper or Plain.",
    price: [
      { label: "6 pieces", amount: "$11.99" },
      { label: "12 pieces", amount: "$21.99" }
    ]
  }
];

export const sides: FeaturedMenuItem[] = [
  {
    name: "Fries",
    description: "Crinkle-cut fries seasoned with sea salt.",
    image: "/images/proper-fries-black.png",
    imageAlt: "Golden crinkle-cut fries seasoned with sea salt.",
    price: "$4.95"
  },
  {
    name: "Truffle Fries",
    description: "Crinkle fries with house truffle aioli, parmesan and chives.",
    image: "/images/truffle-fries-black.png",
    imageAlt: "Proper Burger truffle fries with aioli, parmesan and herbs.",
    price: "$8.99"
  },
  {
    name: "Spicy Fries",
    image: "/images/firecracker-fries-black.png",
    imageAlt: "Proper Burger spicy fries.",
    price: "$9.99"
  }
];

export const otherSides: MenuItem[] = [
  { name: "Onion Rings", price: "$4.95" },
  { name: "Loaded Fries", description: "Choice of chicken or smash.", price: "$14.99" }
];

export const desserts: MenuItem[] = [
  {
    name: "Funnel Cake",
    description: "Strawberry, Biscoff or Oreo. Dine-in only.",
    price: "$12.99"
  },
  {
    name: "Chocolate Strawberry Kunafa",
    price: [
      { label: "Small", amount: "$20.99" },
      { label: "Large", amount: "$24.99" }
    ]
  }
];

export const coffee: MenuItem[] = [
  { name: "Signature Hot Chocolate", price: "$5.99" },
  { name: "Cappuccino", price: "$3.99" },
  { name: "Coffee", price: "$2.99" }
];

export const concepts: Record<Concept["id"], Concept> = {
  premium: {
    id: "premium",
    route: "/premium",
    optionLabel: "Black & Silver",
    headline: "Smashed. Stacked. Properly.",
    intro:
      "Crisp-edged smashburgers, stacked with intention and served without the unnecessary extras.",
    heroImage: "/images/og-double-black.png",
    heroAlt: "Proper Burger OG Double photographed on a wooden board.",
    menuHeading: "The Proper lineup.",
    menuIntro:
      "A focused menu for people who know exactly what they came for.",
    qualityHeading: "The crunch. The melt. The payoff.",
    qualityCopy:
      "From the first sear to the final stack, every part of the burger is there to deliver texture, heat and a seriously satisfying bite."
  }
};
