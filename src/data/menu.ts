export interface MenuItem {
  name: string;
  half?: number;
  full?: number;
  image?: string;
}

export const menu: Record<string, MenuItem[]> = {
  "SOUP": [
    { name: "Manchau Soup", half: 70, image: "https://placehold.co/100x100.png" },
    { name: "Hot & Sour Soup", half: 70, image: "https://placehold.co/100x100.png" },
    { name: "Tomato Soup", half: 70, image: "https://placehold.co/100x100.png" },
    { name: "Paneer Soup", full: 100, image: "https://placehold.co/100x100.png" },
    { name: "Manchurian Soup", half: 70, image: "https://placehold.co/100x100.png" },
    { name: "Noodle's Soup", half: 70, image: "https://placehold.co/100x100.png" },
    { name: "Babycorn Soup", full: 120, image: "https://placehold.co/100x100.png" }
  ],
  "NOODLES": [
    { name: "Veg. Hongkong Noodles", full: 100, image: "https://placehold.co/100x100.png" },
    { name: "Veg. Hakka Noodles", half: 70, full: 100, image: "https://placehold.co/100x100.png" },
    { name: "Veg. Noodle Manchurian", half: 70, full: 100, image: "https://placehold.co/100x100.png" },
    { name: "Veg. Schezwan Noodles", half: 70, full: 100, image: "https://placehold.co/100x100.png" },
    { name: "Veg. Singapuri Noodles", full: 100, image: "https://placehold.co/100x100.png" },
    { name: "Veg. Paneer Noodles", full: 150, image: "https://placehold.co/100x100.png" },
    { name: "Veg. Rice Noodles", full: 100, image: "https://placehold.co/100x100.png" },
    { name: "Veg. Gravy Noodles", full: 100, image: "https://placehold.co/100x100.png" }
  ],
  "BHEL": [
    { name: "Chinese Bhel", half: 70, full: 100, image: "https://placehold.co/100x100.png" },
    { name: "Bombay Bhel", half: 70, full: 100, image: "https://placehold.co/100x100.png" },
    { name: "Gravy Bhel", full: 100, image: "https://placehold.co/100x100.png" }
  ],
  "MANCHURIAN": [
    { name: "Veg. Manchurian Dry", half: 70, full: 100, image: "https://placehold.co/100x100.png" },
    { name: "Veg. Manchurian Gravy", half: 70, full: 100, image: "https://placehold.co/100x100.png" },
    { name: "Veg. Manchurian 65", half: 70, full: 100, image: "https://placehold.co/100x100.png" },
    { name: "Schezwan Manchurian Dry", half: 70, full: 100, image: "https://placehold.co/100x100.png" },
    { name: "Schezwan Manchurian Gravy", half: 70, full: 100, image: "https://placehold.co/100x100.png" }
  ],
  "PANEER": [
    { name: "Paneer Chilli Dry", half: 90, full: 140, image: "https://placehold.co/100x100.png" },
    { name: "Paneer Chilli Gravy", half: 90, full: 140, image: "https://placehold.co/100x100.png" },
    { name: "Paneer Chilli 65", full: 140, image: "https://placehold.co/100x100.png" },
    { name: "Paneer Manchurian Dry", full: 150, image: "https://placehold.co/100x100.png" },
    { name: "Paneer Manchurian Gravy", full: 150, image: "https://placehold.co/100x100.png" }
  ],
  "RICE": [
    { name: "Veg. Rice", half: 70, full: 100, image: "https://placehold.co/100x100.png" },
    { name: "Veg. Hong Kong Rice", full: 100, image: "https://placehold.co/100x100.png" },
    { name: "Veg. Machurian Rice", half: 70, full: 100, image: "https://placehold.co/100x100.png" },
    { name: "Veg. Singapuri Rice", full: 100, image: "https://placehold.co/100x100.png" },
    { name: "Veg. Paneer Rice", full: 140, image: "https://placehold.co/100x100.png" },
    { name: "Veg. Triple Rice", full: 150, image: "https://placehold.co/100x100.png" },
    { name: "Veg. Schezwan Rice", half: 70, full: 100, image: "https://placehold.co/100x100.png" },
    { name: "Veg. Combination Rice", half: 70, full: 100, image: "https://placehold.co/100x100.png" },
    { name: "Babycorn Rice", full: 120, image: "https://placehold.co/100x100.png" }
  ]
};
