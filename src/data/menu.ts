export interface MenuItem {
  name: string;
  prices?: number[];
  category: string;
}

export const menuCategories = ["Soup", "Noodles", "Manchurian", "Bhel", "Paneer", "Rice"];

export const menuItems: MenuItem[] = [
  // Soup
  { name: "Veg. Manchow Soup", prices: [70], category: "Soup" },
  { name: "Veg. Hot & Sour Soup", prices: [70], category: "Soup" },
  { name: "Tomato Soup", prices: [60], category: "Soup" },

  // Noodles
  { name: "Veg. Hakka Noodles", prices: [70, 100], category: "Noodles" },
  { name: "Veg. Schezwan Noodles", prices: [80, 110], category: "Noodles" },
  { name: "Singapore Noodles", prices: [90, 120], category: "Noodles" },
  { name: "Chilli Garlic Noodles", prices: [80, 110], category: "Noodles" },

  // Manchurian
  { name: "Veg. Manchurian Dry", prices: [80, 120], category: "Manchurian" },
  { name: "Veg. Manchurian Gravy", prices: [90, 130], category: "Manchurian" },
  { name: "Gobi Manchurian", prices: [80, 120], category: "Manchurian" },

  // Bhel
  { name: "Chinese Bhel", prices: [60], category: "Bhel" },
  { name: "Dry Bhel", prices: [50], category: "Bhel" },

  // Paneer
  { name: "Paneer Chilli Dry", prices: [100, 150], category: "Paneer" },
  { name: "Paneer Chilli Gravy", prices: [110, 160], category: "Paneer" },
  { name: "Paneer 65", prices: [120], category: "Paneer" },

  // Rice
  { name: "Veg. Fried Rice", prices: [70, 100], category: "Rice" },
  { name: "Schezwan Fried Rice", prices: [80, 110], category: "Rice" },
  { name: "Triple Schezwan Rice", prices: [120], category: "Rice" },
];
