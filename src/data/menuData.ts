export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isVeg: boolean;
  isPopular?: boolean;
  spiceLevel?: 1 | 2 | 3;
}

export const menuCategories = [
  { id: "chicken", name: "Chicken Biryani", icon: "🍗" },
  { id: "mutton", name: "Mutton Biryani", icon: "🥩" },
  { id: "veg", name: "Veg Biryani", icon: "🥬" },
  { id: "starters", name: "Starters", icon: "🍢" },
  { id: "desserts", name: "Desserts", icon: "🍨" },
  { id: "beverages", name: "Beverages", icon: "🥤" },
];

export const menuItems: MenuItem[] = [
  // Chicken Biryani
  {
    id: "hyderabadi-chicken",
    name: "Hyderabadi Chicken Biryani",
    description: "Aromatic basmati rice layered with succulent chicken, slow-cooked in traditional dum style with secret spices.",
    price: 320,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600",
    category: "chicken",
    isVeg: false,
    isPopular: true,
    spiceLevel: 2,
  },
  {
    id: "lucknowi-chicken",
    name: "Lucknowi Chicken Biryani",
    description: "Delicate and fragrant biryani with tender chicken, infused with saffron and rose water.",
    price: 350,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600",
    category: "chicken",
    isVeg: false,
    spiceLevel: 1,
  },
  {
    id: "spicy-chicken",
    name: "Spicy Chicken Biryani",
    description: "For the bold - extra spicy biryani with green chilies and our signature hot masala blend.",
    price: 340,
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600",
    category: "chicken",
    isVeg: false,
    spiceLevel: 3,
  },
  // Mutton Biryani
  {
    id: "hyderabadi-mutton",
    name: "Hyderabadi Mutton Biryani",
    description: "Premium goat meat slow-cooked for 4 hours with aged basmati rice and 24 aromatic spices.",
    price: 420,
    image: "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=600",
    category: "mutton",
    isVeg: false,
    isPopular: true,
    spiceLevel: 2,
  },
  {
    id: "gosht-biryani",
    name: "Gosht Dum Biryani",
    description: "Royal recipe with tender mutton pieces, caramelized onions, and a hint of kewra.",
    price: 450,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600",
    category: "mutton",
    isVeg: false,
    spiceLevel: 2,
  },
  // Veg Biryani
  {
    id: "veg-dum",
    name: "Vegetable Dum Biryani",
    description: "Garden fresh vegetables and paneer cubes layered with fragrant basmati rice.",
    price: 250,
    image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=600",
    category: "veg",
    isVeg: true,
    isPopular: true,
    spiceLevel: 1,
  },
  {
    id: "paneer-biryani",
    name: "Paneer Tikka Biryani",
    description: "Marinated paneer tikka pieces with aromatic rice and creamy gravy.",
    price: 280,
    image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?w=600",
    category: "veg",
    isVeg: true,
    spiceLevel: 2,
  },
  {
    id: "mushroom-biryani",
    name: "Mushroom Biryani",
    description: "Button mushrooms and exotic spices come together in this earthy delight.",
    price: 270,
    image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=600",
    category: "veg",
    isVeg: true,
    spiceLevel: 1,
  },
  // Starters
  {
    id: "chicken-65",
    name: "Chicken 65",
    description: "Crispy fried chicken bites with curry leaves and spicy seasoning.",
    price: 220,
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=600",
    category: "starters",
    isVeg: false,
    isPopular: true,
    spiceLevel: 3,
  },
  {
    id: "seekh-kebab",
    name: "Seekh Kebab",
    description: "Minced lamb kebabs grilled on skewers with aromatic herbs.",
    price: 280,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600",
    category: "starters",
    isVeg: false,
    spiceLevel: 2,
  },
  {
    id: "paneer-tikka",
    name: "Paneer Tikka",
    description: "Chargrilled cottage cheese cubes marinated in tandoori spices.",
    price: 200,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600",
    category: "starters",
    isVeg: true,
    spiceLevel: 2,
  },
  // Desserts
  {
    id: "gulab-jamun",
    name: "Gulab Jamun",
    description: "Soft milk dumplings soaked in rose-flavored sugar syrup. (2 pcs)",
    price: 80,
    image: "https://images.unsplash.com/photo-1666190053387-ce0c9fe2c793?w=600",
    category: "desserts",
    isVeg: true,
  },
  {
    id: "kheer",
    name: "Rice Kheer",
    description: "Creamy rice pudding with cardamom, almonds, and saffron.",
    price: 100,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600",
    category: "desserts",
    isVeg: true,
  },
  {
    id: "phirni",
    name: "Phirni",
    description: "Traditional ground rice pudding set in earthen pots.",
    price: 90,
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600",
    category: "desserts",
    isVeg: true,
  },
  // Beverages
  {
    id: "mango-lassi",
    name: "Mango Lassi",
    description: "Creamy yogurt smoothie blended with fresh mango pulp.",
    price: 80,
    image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600",
    category: "beverages",
    isVeg: true,
    isPopular: true,
  },
  {
    id: "masala-chai",
    name: "Masala Chai",
    description: "Authentic Indian spiced tea with ginger and cardamom.",
    price: 40,
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600",
    category: "beverages",
    isVeg: true,
  },
  {
    id: "rose-sharbat",
    name: "Rose Sharbat",
    description: "Refreshing rose-flavored drink with basil seeds.",
    price: 60,
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600",
    category: "beverages",
    isVeg: true,
  },
];
