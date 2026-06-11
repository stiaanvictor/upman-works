export const site = {
  name: "Upman Works",
  tagline: "Tree Felling & Artificial Grass — Done Right.",
  phone: "076 070 9479",
  phoneIntl: "+27760709479",
  whatsappNumber: "27760709479",
  facebook: "https://www.facebook.com/mike.isah.800106/",
  location: "Randburg, Gauteng",
  serviceArea: "All of Gauteng",
} as const;

export function waLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
