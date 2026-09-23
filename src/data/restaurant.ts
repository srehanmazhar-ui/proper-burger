export type MenuItem = {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  tag: string;
};

export type Concept = {
  id: "classic" | "premium";
  route: "/classic" | "/premium";
  optionLabel: string;
  alternateLabel: string;
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
export const venueAddress = "3950 Sage Hill Drive NW, Calgary";
export const instagramUrl =
  "https://www.instagram.com/rollzicecreamcalgary/?hl=en";
export const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=3950%20Sage%20Hill%20Drive%20NW%20Calgary";

export const burgers: MenuItem[] = [
  {
    name: "Single Smash",
    description:
      "A crisp-edged smashed beef patty with melted cheese and pickles on a soft toasted bun.",
    image: "/images/proper-single.jpg",
    imageAlt: "Proper Burger single smashburger with cheese and pickles.",
    tag: "The classic"
  },
  {
    name: "Double Smash",
    description:
      "Two smashed beef patties layered with melted cheese and pickles for a fuller bite.",
    image: "/images/proper-double.jpg",
    imageAlt: "Proper Burger double smashburger with melted cheese.",
    tag: "Crowd favourite"
  },
  {
    name: "Triple Smash",
    description:
      "Three smashed beef patties stacked with cheese for the biggest Proper Burger build.",
    image: "/images/proper-triple.jpg",
    imageAlt: "Proper Burger triple smashburger stacked with cheese.",
    tag: "Go all in"
  }
];

export const sides: MenuItem[] = [
  {
    name: "Crispy Chicken",
    description:
      "Golden, crunchy chicken with a creamy dip. Ask in store for today’s serving options.",
    image: "/images/proper-chicken.jpg",
    imageAlt: "Crispy chicken and fries with creamy dipping sauce.",
    tag: "Crispy favourite"
  },
  {
    name: "Loaded Fries",
    description:
      "Hot fries finished with a generous savoury topping. Today’s build is available in store.",
    image: "/images/proper-loaded-fries.jpg",
    imageAlt: "Proper Burger loaded fries with sauce and toppings.",
    tag: "Made for sharing"
  },
  {
    name: "Classic Fries",
    description:
      "Hot, golden fries ready to complete any burger order.",
    image: "/images/proper-fries.jpg",
    imageAlt: "Golden fries served in red and white checked paper.",
    tag: "Keep it classic"
  }
];

export const concepts: Record<Concept["id"], Concept> = {
  classic: {
    id: "classic",
    route: "/classic",
    optionLabel: "Classic Red",
    alternateLabel: "See Black & Silver",
    headline: "Hot. Crispy. Proper.",
    intro:
      "Fresh smashburgers with crisp edges, melted cheese and the kind of sides that make the whole table lean in.",
    heroImage: "/images/proper-triple.jpg",
    heroAlt: "Proper Burger smashburger photographed on a wooden board.",
    menuHeading: "Pick your smash.",
    menuIntro:
      "Start with one, two or three patties, then build the rest of the meal around it.",
    qualityHeading: "Straightforward food. Serious burger energy.",
    qualityCopy:
      "Proper Burger keeps the choice simple: smashed beef, crispy edges, melted cheese, punchy pickles and sides worth stealing."
  },
  premium: {
    id: "premium",
    route: "/premium",
    optionLabel: "Black & Silver",
    alternateLabel: "See Classic Red",
    headline: "Smashed. Stacked. Properly.",
    intro:
      "Crisp-edged smashburgers, stacked with intention and served without the unnecessary extras.",
    heroImage: "/images/proper-triple.jpg",
    heroAlt: "Proper Burger smashburger photographed on a wooden board.",
    menuHeading: "The Proper lineup.",
    menuIntro:
      "A focused menu for people who know exactly what they came for.",
    qualityHeading: "The crunch. The melt. The payoff.",
    qualityCopy:
      "From the first sear to the final stack, every part of the burger is there to deliver texture, heat and a seriously satisfying bite."
  }
};
