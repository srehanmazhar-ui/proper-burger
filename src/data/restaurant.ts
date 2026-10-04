export type MenuItem = {
  name: string;
  description: string;
  image: string;
  premiumImage?: string;
  imageAlt: string;
  tag: string;
  price?: string;
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

export const burgers: MenuItem[] = [
  {
    name: "Single Smash",
    description:
      "One smashed Alberta beef patty with cheese, pickles, onions and Proper Sauce on a toasted Martin’s potato bun.",
    image: "/images/proper-double.jpg",
    premiumImage: "/images/proper-double-black.png",
    imageAlt: "Proper Burger single smashburger with cheese and pickles.",
    tag: "The classic",
    price: "$9.99"
  },
  {
    name: "Double Smash",
    description:
      "Two smashed Alberta beef patties with cheese, pickles, onions and Proper Sauce on a toasted Martin’s potato bun.",
    image: "/images/proper-single.jpg",
    premiumImage: "/images/proper-single-black.png",
    imageAlt: "Proper Burger double smashburger with melted cheese.",
    tag: "Crowd favourite",
    price: "$10.99"
  },
  {
    name: "The OG Double",
    description:
      "Two Alberta beef patties with lettuce, tomato, onion, pickles, cheese and Proper Sauce on a buttered sesame bun.",
    image: "/images/og-double.jpg",
    premiumImage: "/images/og-double-black.png",
    imageAlt: "Proper Burger OG Double with two smashed beef patties and fresh toppings.",
    tag: "The signature",
    price: "$12.99"
  },
  {
    name: "Triple Smash",
    description:
      "Three smashed Alberta beef patties stacked with cheese, pickles and Proper Sauce on a toasted bun.",
    image: "/images/proper-triple.jpg",
    premiumImage: "/images/proper-triple-black.png",
    imageAlt: "Proper Burger triple smashburger stacked with cheese.",
    tag: "Go all in",
    price: "OG +$3.50"
  },
  {
    name: "Cluckin’ Hot",
    description:
      "Crispy chicken with lettuce, pickles, garlic sauce and Proper Sauce on a toasted butter bun.",
    image: "/images/cluckin-hot.jpg",
    premiumImage: "/images/cluckin-hot-black.png",
    imageAlt: "Proper Burger Cluckin’ Hot crispy chicken burger.",
    tag: "Spicy chicken",
    price: "$12.99"
  },
  {
    name: "The Plant Stack",
    description:
      "A veggie patty and potato patty with lettuce, tomato, onion, hot sauce and Proper Sauce on a butter bun.",
    image: "/images/plant-stack.jpg",
    premiumImage: "/images/plant-stack-black.png",
    imageAlt: "Proper Burger Plant Stack veggie burger.",
    tag: "Plant powered",
    price: "$10.99"
  }
];

export const additionalMenuItems = [
  {
    name: "The OG Chicken",
    description: "Crispy chicken, lettuce, pickles, garlic sauce and Proper Sauce on a toasted butter bun.",
    price: "$12.99"
  },
  {
    name: "3 Cluckin’ Strips & Fries",
    description: "Three crispy chicken strips, fries and sweet-and-sour sauce.",
    price: "$12.99"
  }
];

export const sides: MenuItem[] = [
  {
    name: "Classic Fries",
    description:
      "Crinkle-cut fries seasoned with sea salt.",
    image: "/images/proper-fries.jpg",
    premiumImage: "/images/proper-fries-black.png",
    imageAlt: "Golden crinkle-cut fries seasoned with sea salt.",
    tag: "The essential",
    price: "$5.99"
  },
  {
    name: "Truffle Fries",
    description:
      "Crinkle fries with house truffle aioli, parmesan and chives.",
    image: "/images/truffle-fries.jpg",
    premiumImage: "/images/truffle-fries-black.png",
    imageAlt: "Proper Burger truffle fries with aioli, parmesan and herbs.",
    tag: "House favourite",
    price: "$8.99"
  },
  {
    name: "Cheezy Fries",
    description:
      "Crinkle fries covered with melted cheese sauce, crunchy cheezies and chives.",
    image: "/images/cheezy-fries.jpg",
    premiumImage: "/images/cheezy-fries-black.png",
    imageAlt: "Proper Burger Cheezy Fries with melted cheese sauce.",
    tag: "Extra cheezy",
    price: "$8.99"
  },
  {
    name: "Firecracker Fries",
    description:
      "Crinkle fries with crispy onions, jalapeños and Proper Sauce.",
    image: "/images/firecracker-fries.jpg",
    premiumImage: "/images/firecracker-fries-black.png",
    imageAlt: "Proper Burger Firecracker Fries with jalapeños and onions.",
    tag: "Turn up the heat",
    price: "$8.99"
  },
  {
    name: "Smash-Loaded Fries",
    description:
      "Crinkle fries loaded with Alberta beef, cheese, pickles and Proper Sauce.",
    image: "/images/proper-loaded-fries.jpg",
    premiumImage: "/images/proper-loaded-fries-black.png",
    imageAlt: "Proper Burger Smash-Loaded Fries with beef, cheese and pickles.",
    tag: "Fully loaded",
    price: "$13.99"
  },
  {
    name: "Chicken Loaded Fries",
    description:
      "Crinkle fries loaded with crispy chicken, pickles and house sauce.",
    image: "/images/chicken-loaded-fries.jpg",
    premiumImage: "/images/chicken-loaded-fries-black.png",
    imageAlt: "Proper Burger Chicken Loaded Fries with crispy chicken and sauces.",
    tag: "Chicken loaded",
    price: "$13.99"
  }
];

export const dessert: MenuItem = {
  name: "Strawberry Chocolate Kunafa Cup",
  description:
    "Fresh strawberries layered with chocolate and finished with a pistachio kunafa crunch from Rollz Ice Cream & Desserts.",
  image: "/images/kunafa-cup.jpg",
  premiumImage: "/images/kunafa-cup-black.png",
  imageAlt: "Strawberry chocolate kunafa dessert cup from Rollz Ice Cream and Desserts.",
  tag: "Sweet finish"
};

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
