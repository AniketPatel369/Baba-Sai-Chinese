export interface MenuItem {
  name: string;
  half?: number;
  full?: number;
}

export const menu: Record<string, MenuItem[]> = {
  "SOUP": [
    { name: "Manchau Soup", half: 70 },
    { name: "Hot & Sour Soup", half: 70 },
    { name: "Tomato Soup", half: 70 },
    { name: "Paneer Soup", full: 100 },
    { name: "Manchurian Soup", half: 70 },
    { name: "Noodle's Soup", half: 70 },
    { name: "Babycorn Soup", full: 120 }
  ],
  "NOODLES": [
    { name: "Veg. Hongkong Noodles", full: 100 },
    { name: "Veg. Hakka Noodles", half: 70, full: 100 },
    { name: "Veg. Noodle Manchurian", half: 70, full: 100 },
    { name: "Veg. Schezwan Noodles", half: 70, full: 100 },
    { name: "Veg. Singapuri Noodles", full: 100 },
    { name: "Veg. Paneer Noodles", full: 150 },
    { name: "Veg. Rice Noodles", full: 100 },
    { name: "Veg. Gravy Noodles", full: 100 }
  ],
  "BHEL": [
    { name: "Chinese Bhel", half: 70, full: 100 },
    { name: "Bombay Bhel", half: 70, full: 100 },
    { name: "Gravy Bhel", full: 100 }
  ],
  "MANCHURIAN": [
    { name: "Veg. Manchurian Dry", half: 70, full: 100 },
    { name: "Veg. Manchurian Gravy", half: 70, full: 100 },
    { name: "Veg. Manchurian 65", half: 70, full: 100 },
    { name: "Schezwan Manchurian Dry", half: 70, full: 100 },
    { name: "Schezwan Manchurian Gravy", half: 70, full: 100 }
  ],
  "PANEER": [
    { name: "Paneer Chilli Dry", half: 90, full: 140 },
    { name: "Paneer Chilli Gravy", half: 90, full: 140 },
    { name: "Paneer Chilli 65", full: 140 },
    { name: "Paneer Manchurian Dry", full: 150 },
    { name: "Paneer Manchurian Gravy", full: 150 }
  ],
  "RICE": [
    { name: "Veg. Rice", half: 70, full: 100 },
    { name: "Veg. Hong Kong Rice", full: 100 },
    { name: "Veg. Machurian Rice", half: 70, full: 100 },
    { name: "Veg. Singapuri Rice", full: 100 },
    { name: "Veg. Paneer Rice", full: 140 },
    { name: "Veg. Triple Rice", full: 150 },
    { name: "Veg. Schezwan Rice", half: 70, full: 100 },
    { name: "Veg. Combination Rice", half: 70, full: 100 },
    { name: "Babycorn Rice", full: 120 }
  ]
};
