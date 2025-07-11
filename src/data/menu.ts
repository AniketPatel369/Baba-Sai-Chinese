export interface MenuItem {
  name: string;
  half?: number;
  full?: number;
  image?: string;
}

const newImage = "https://images.unsplash.com/photo-1664717698774-84f62382613b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhLWJvd2wtb2YtcmljZS13aXRoLXZlZ2V0YWJsZXMtTVZNb2hKQmllbzR8ZW58MHx8fHwxNzUyMjEyNzczfDA&ixlib=rb-4.1.0&q=80&w=1080";

export const menu: Record<string, MenuItem[]> = {
  "SOUP": [
    { name: "Manchau Soup", half: 70, image: newImage },
    { name: "Hot & Sour Soup", half: 70, image: newImage },
    { name: "Tomato Soup", half: 70, image: newImage },
    { name: "Paneer Soup", full: 100, image: newImage },
    { name: "Manchurian Soup", half: 70, image: newImage },
    { name: "Noodle's Soup", half: 70, image: newImage },
    { name: "Babycorn Soup", full: 120, image: newImage }
  ],
  "NOODLES": [
    { name: "Veg. Hongkong Noodles", full: 100, image: newImage },
    { name: "Veg. Hakka Noodles", half: 70, full: 100, image: newImage },
    { name: "Veg. Noodle Manchurian", half: 70, full: 100, image: newImage },
    { name: "Veg. Schezwan Noodles", half: 70, full: 100, image: newImage },
    { name: "Veg. Singapuri Noodles", full: 100, image: newImage },
    { name: "Veg. Paneer Noodles", full: 150, image: newImage },
    { name: "Veg. Rice Noodles", full: 100, image: newImage },
    { name: "Veg. Gravy Noodles", full: 100, image: newImage }
  ],
  "BHEL": [
    { name: "Chinese Bhel", half: 70, full: 100, image: newImage },
    { name: "Bombay Bhel", half: 70, full: 100, image: newImage },
    { name: "Gravy Bhel", full: 100, image: newImage }
  ],
  "MANCHURIAN": [
    { name: "Veg. Manchurian Dry", half: 70, full: 100, image: newImage },
    { name: "Veg. Manchurian Gravy", half: 70, full: 100, image: newImage },
    { name: "Veg. Manchurian 65", half: 70, full: 100, image: newImage },
    { name: "Schezwan Manchurian Dry", half: 70, full: 100, image: newImage },
    { name: "Schezwan Manchurian Gravy", half: 70, full: 100, image: newImage }
  ],
  "PANEER": [
    { name: "Paneer Chilli Dry", half: 90, full: 140, image: newImage },
    { name: "Paneer Chilli Gravy", half: 90, full: 140, image: newImage },
    { name: "Paneer Chilli 65", full: 140, image: newImage },
    { name: "Paneer Manchurian Dry", full: 150, image: newImage },
    { name: "Paneer Manchurian Gravy", full: 150, image: newImage }
  ],
  "RICE": [
    { name: "Veg. Rice", half: 70, full: 100, image: newImage },
    { name: "Veg. Hong Kong Rice", full: 100, image: newImage },
    { name: "Veg. Machurian Rice", half: 70, full: 100, image: newImage },
    { name: "Veg. Singapuri Rice", full: 100, image: newImage },
    { name: "Veg. Paneer Rice", full: 140, image: newImage },
    { name: "Veg. Triple Rice", full: 150, image: newImage },
    { name: "Veg. Schezwan Rice", half: 70, full: 100, image: newImage },
    { name: "Veg. Combination Rice", half: 70, full: 100, image: newImage },
    { name: "Babycorn Rice", full: 120, image: newImage }
  ]
};
