const fallbackUrl = "https://proper-burger.vercel.app";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl).replace(/\/$/, "");
export const siteName = "Proper Burger";
export const siteTitle = "Proper Burger Sage Hill | Smash Burgers in Calgary";
export const siteDescription =
  "Fresh Alberta beef smash burgers, crispy chicken and loaded fries at Proper Burger inside Rollz Ice Cream & Desserts in Sage Hill, Calgary.";

export const orderUrl = process.env.NEXT_PUBLIC_ORDER_URL?.trim() || "";
