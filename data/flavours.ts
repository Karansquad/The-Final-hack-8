export type Flavour = {
  slug: string;
  name: string;
  image: string;
  tags: string[];
  kcal: number;
  price: number;
  colors: {
    bg: string;
    accent: string;
  };
  description: string;
  ingredients: string[];
  allergens: string[];
};

export const flavours: Flavour[] = [
  {
    slug: "strawberry-dream",
    name: "Strawberry Dream",
    image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&h=400&fit=crop&crop=center",
    tags: ["Fruity", "Classic", "Summer"],
    kcal: 180,
    price: 129,
    colors: {
      bg: "#FFF4EC",
      accent: "#E51E2A"
    },
    description: "Creamy strawberry ice cream made with real fruit and premium dairy",
    ingredients: ["Fresh Strawberries", "Cream", "Sugar", "Natural Vanilla"],
    allergens: ["Dairy", "Eggs"]
  },
  {
    slug: "chocolate-fudge",
    name: "Chocolate Fudge",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop&crop=center",
    tags: ["Rich", "Chocolate", "Indulgent"],
    kcal: 220,
    price: 159,
    colors: {
      bg: "#4A2C2A",
      accent: "#8B4513"
    },
    description: "Decadent chocolate ice cream with swirls of rich fudge",
    ingredients: ["Belgian Chocolate", "Cocoa Powder", "Cream", "Fudge Swirls"],
    allergens: ["Dairy", "Eggs", "Nuts"]
  },
  {
    slug: "vanilla-bean",
    name: "Vanilla Bean",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&h=400&fit=crop&crop=center",
    tags: ["Classic", "Creamy", "Premium"],
    kcal: 160,
    price: 119,
    colors: {
      bg: "#FDF8F5",
      accent: "#D4AF37"
    },
    description: "Pure Madagascar vanilla bean ice cream with visible specks",
    ingredients: ["Madagascar Vanilla Beans", "Cream", "Sugar", "Egg Yolks"],
    allergens: ["Dairy", "Eggs"]
  },
  {
    slug: "mint-chocolate-chip",
    name: "Mint Chocolate Chip",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop&crop=center",
    tags: ["Refreshing", "Mint", "Chocolate"],
    kcal: 190,
    price: 149,
    colors: {
      bg: "#C6F6D5",
      accent: "#059669"
    },
    description: "Cool mint ice cream with premium chocolate chips",
    ingredients: ["Fresh Mint", "Chocolate Chips", "Cream", "Natural Peppermint"],
    allergens: ["Dairy", "Eggs"]
  },
  {
    slug: "cookies-cream",
    name: "Cookies & Cream",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    tags: ["Cookie", "Creamy", "Popular"],
    kcal: 210,
    price: 169,
    colors: {
      bg: "#F3F4F6",
      accent: "#6B7280"
    },
    description: "Vanilla ice cream loaded with crushed chocolate cookies",
    ingredients: ["Chocolate Cookies", "Vanilla Ice Cream", "Cream", "Sugar"],
    allergens: ["Dairy", "Eggs", "Wheat", "Gluten"]
  },
  {
    slug: "salted-caramel",
    name: "Salted Caramel",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop&crop=center",
    tags: ["Sweet", "Salty", "Gourmet"],
    kcal: 200,
    price: 179,
    colors: {
      bg: "#FEF3C7",
      accent: "#D97706"
    },
    description: "Rich caramel ice cream with a hint of sea salt",
    ingredients: ["Caramel Sauce", "Sea Salt", "Cream", "Brown Sugar"],
    allergens: ["Dairy", "Eggs"]
  },
  {
    slug: "pistachio",
    name: "Pistachio",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop&crop=center",
    tags: ["Nutty", "Premium", "Mediterranean"],
    kcal: 195,
    price: 199,
    colors: {
      bg: "#D1FAE5",
      accent: "#059669"
    },
    description: "Creamy pistachio ice cream with real nut pieces",
    ingredients: ["Pistachio Nuts", "Cream", "Sugar", "Natural Almond Extract"],
    allergens: ["Dairy", "Eggs", "Nuts"]
  },
  {
    slug: "raspberry-ripple",
    name: "Raspberry Ripple",
    image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&h=400&fit=crop&crop=center",
    tags: ["Fruity", "Tart", "Swirl"],
    kcal: 175,
    price: 149,
    colors: {
      bg: "#FCE7F3",
      accent: "#EC4899"
    },
    description: "Vanilla ice cream with tangy raspberry swirls",
    ingredients: ["Fresh Raspberries", "Vanilla Ice Cream", "Sugar", "Lemon Juice"],
    allergens: ["Dairy", "Eggs"]
  }
];

export const baseOptions = [
  { id: "cone", name: "Waffle Cone", image: "/cone.svg", price: 20 },
  { id: "cup", name: "Paper Cup", image: "/cup.svg", price: 10 },
  { id: "waffle-cup", name: "Waffle Cup", image: "/waffle-cup.svg", price: 25 }
];

export const drizzleOptions = [
  { id: "chocolate", name: "Chocolate", image: "/chocolate-drizzle.svg", price: 30 },
  { id: "caramel", name: "Caramel", image: "/caramel-drizzle.svg", price: 30 },
  { id: "strawberry", name: "Strawberry", image: "/strawberry-drizzle.svg", price: 30 }
];

export const sprinkleOptions = [
  { id: "rainbow", name: "Rainbow", image: "/rainbow-sprinkles.svg", price: 20 },
  { id: "chocolate", name: "Chocolate", image: "/chocolate-sprinkles.svg", price: 20 },
  { id: "gold", name: "Gold", image: "/gold-sprinkles.svg", price: 35 }
];
