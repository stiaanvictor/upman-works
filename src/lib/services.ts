import {
  TreePine,
  Sprout,
  Hammer,
  Leaf,
  Scissors,
  type LucideIcon,
} from "lucide-react";

export type ServiceCategory = {
  slug: string;
  title: string;
  blurb: string;
  icon: LucideIcon;
  items: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "tree-felling",
    title: "Tree Felling",
    blurb:
      "Safe, skilled tree removal with the right equipment for the job — from single problem trees to full site clearing.",
    icon: TreePine,
    items: [
      "Tree felling",
      "Palm tree cutting",
      "Stump removal & uprooting",
      "Overhanging & overlapping branches",
      "Tree topping",
      "All types of chainsaw work",
      "Refuse hauled away on our own transport",
    ],
  },
  {
    slug: "artificial-grass",
    title: "Artificial Grass Installation",
    blurb:
      "Premium artificial lawns — properly prepped, neatly laid and built to last through Highveld sun and rain.",
    icon: Sprout,
    items: [
      "Site preparation & levelling",
      "Base laying & compaction",
      "Premium artificial grass supply",
      "Precision cutting & seaming",
      "Edging & secure fixing",
      "Brushing, infill & finishing",
    ],
  },
];

export const homeFeaturedServices: {
  title: string;
  blurb: string;
  icon: LucideIcon;
  href: string;
  image: string;
}[] = [
  {
    title: "Tree Felling",
    blurb:
      "From single overhanging branches to full removal — quick, clean and safe.",
    icon: TreePine,
    href: "/services#tree-felling",
    image: "/services/tree-felling.png",
  },
  {
    title: "Artificial Grass Installation",
    blurb:
      "Premium artificial lawns laid neatly — perfect, low-maintenance green all year.",
    icon: Sprout,
    href: "/services#artificial-grass",
    image: "/services/artificial-grass.png",
  },
];

export const valueProps = [
  {
    title: "Own Equipment & Transport",
    body: "Chainsaws, tools and trucks — we arrive ready and clear the site as we go.",
    icon: Hammer,
  },
  {
    title: "Based in Randburg",
    body: "Locally based and on the road across Gauteng. Straight talk, fair quotes, and real follow-through.",
    icon: Leaf,
  },
  {
    title: "Free Quotes",
    body: "Send a quick message — we'll come back with a clear, honest quote, no surprises.",
    icon: Scissors,
  },
];
