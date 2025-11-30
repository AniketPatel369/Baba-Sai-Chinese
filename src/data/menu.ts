
export interface MenuItem {
  name: string;
  half?: number;
  full?: number;
  image?: string;
}

export const menu: Record<string, MenuItem[]> = {
  "SOUP": [
    { name: "Manchau Soup", half: 80, image: "https://images.unsplash.com/photo-1625535608282-8f181a38f9e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxtYW5jaGF1JTIwc291cCUyMHxlbnwwfHx8fDE3NTIyMTQzMTN8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Hot & Sour Soup", half: 80, image: "https://images.unsplash.com/photo-1672667509942-4cbe8979ccc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOXx8YS1ib3dsLW9mLXNvdXAtd2l0aC1ub29kbGVzLWNhcnJvdHMtYW5kLWNlbGVyeS1LWUkyMUZYOUVXTXxlbnwwfHx8fDE3NTIyMTY0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Tomato Soup", half: 80, image: "https://images.unsplash.com/photo-1629978444632-9f63ba0eff47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0b21hdG8lMjBzb3VwfGVufDB8fHx8MTc1MjIxNjYyMXww&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Paneer Soup", full: 110, image: "https://images.unsplash.com/photo-1721223016672-b42b560b5402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNHx8bWFuY2h1cmlhbi1zb3VwfGVufDB8fHx8MTc1MjIxODkwN3ww&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Manchurian Soup", half: 80, image: "https://images.unsplash.com/photo-1572363644253-3daacc7acd0d?auto=format&fit=crop&w=1080&q=80" },
    { name: "Noodle's Soup", half: 80, image: "https://images.unsplash.com/photo-1600490036275-35f5f1656861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxub29kbGV8ZW58MHx8fHwxNzUyMjIyMjA2fDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Babycorn Soup", full: 120, image: "https://images.unsplash.com/photo-1665594051407-7385d281ad76?auto=format&fit=crop&w=1080&q=80" }
  ],
  "NOODLES": [
    { name: "Veg. Hongkong Noodles", full: 110, image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxob25na29uZyUyMG5vb2RsZXN8ZW58MHx8fHwxNzUyMjI0MDA0fDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Veg. Hakka Noodles", half: 80, full: 110, image: "https://images.unsplash.com/photo-1679279726940-be5ce80c632c?auto=format&fit=crop&w=1080&q=80" },
    { name: "Veg. Noodle Manchurian", half: 80, full: 110, image: "https://images.unsplash.com/photo-1547928576-b822bc410bdf?auto=format&fit=crop&w=1080&q=80" },
    { name: "Veg. Schezwan Noodles", half: 80, full: 110, image: "https://images.unsplash.com/photo-1741253671929-78e337693384?auto=format&fit=crop&w=1080&q=80" },
    { name: "Veg. Singapuri Noodles", full: 110, image: "https://images.unsplash.com/photo-1722853440598-75e66ace0a13?auto=format&fit=crop&w=1080&q=80" },
    { name: "Veg. Paneer Noodles", full: 160, image: "/food/veg-paneer-noodles.jpg" },
    { name: "Veg. Rice Noodles", full: 110, image: "/food/veg-rice-noodles.jpg" },
    { name: "Veg. Gravy Noodles", full: 120, image: "https://images.unsplash.com/photo-1666307628741-c65334fed027?auto=format&fit=crop&w=1080&q=80" }
  ],
  "BHEL": [
    { name: "Chinese Bhel", half: 80, full: 110, image: "https://images.unsplash.com/photo-1716535232838-cc7642aa19d9?auto=format&fit=crop&w=1080&q=80" },
    { name: "Bombay Bhel", half: 80, full: 110, image: "https://images.unsplash.com/photo-1716535232835-6d56282dfe8a?auto=format&fit=crop&w=1080&q=80" },
    { name: "Gravy Bhel", full: 120, image: "https://images.unsplash.com/photo-1714611446765-3e85644ea4ae?auto=format&fit=crop&w=1080&q=80" }
  ],
  "MANCHURIAN": [
    { name: "Veg. Manchurian Dry", half: 80, full: 110, image: "https://images.unsplash.com/photo-1515516969-d4008cc6241a?auto=format&fit=crop&w=1080&q=80" },
    { name: "Veg. Manchurian Gravy", half: 90, full: 120, image: "/food/veg-manchurian-gravy.jpg" },
    { name: "Veg. Manchurian 65", half: 80, full: 110, image: "https://images.unsplash.com/photo-1572363644253-3daacc7acd0d?auto=format&fit=crop&w=1080&q=80" },
    { name: "Schezwan Manchurian Dry", half: 80, full: 110, image: "https://images.unsplash.com/photo-1610545676806-14c7ab3ce782?auto=format&fit=crop&w=1080&q=80" },
    { name: "Schezwan Manchurian Gravy", half: 90, full: 120, image: "/food/schezwan-manchurian-gravy.jpg" }
  ],
  "PANEER": [
    { name: "Paneer Chilli Dry", half: 100, full: 160, image: "https://images.unsplash.com/photo-1701579231320-cc2f7acad3cd?auto=format&fit=crop&w=1080&q=80" },
    { name: "Paneer Chilli Gravy", half: 110, full: 170, image: "https://images.unsplash.com/photo-1690401769082-5f475f87fb22?auto=format&fit=crop&w=1080&q=80" },
    { name: "Paneer Chilli 65", full: 160, image: "https://images.unsplash.com/photo-1551881192-002e02ad3d87?auto=format&fit=crop&w=1080&q=80" },
    { name: "Paneer Manchurian Dry", full: 160, image: "/food/paneer-manchurian-dry.jpg" },
    { name: "Paneer Manchurian Gravy", full: 170, image: "https://images.unsplash.com/photo-1690403160225-3db8cc8babd5?auto=format&fit=crop&w=1080&q=80" }
  ],
  "RICE": [
    { name: "Veg. Rice", half: 80, full: 110, image: "https://images.unsplash.com/photo-1664717698774-84f62382613b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhLWJvd2wtb2YtcmljZS13aXRoLXZlZ2V0YWJsZXMtTVZNb2hKQmllbzR8ZW58MHx8fHwxNzUyMjEyNzczfDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Veg. Hong Kong Rice", full: 110, image: "https://images.unsplash.com/photo-1540100716001-4b432820e37f?auto=format&fit=crop&w=1080&q=80" },
    { name: "Veg. Machurian Rice", half: 80, full: 110, image: "https://images.unsplash.com/photo-1705174299330-939dd03cc864?auto=format&fit=crop&w=1080&q=80" },
    { name: "Veg. Singapuri Rice", full: 110, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1080&q=80" },
    { name: "Veg. Paneer Rice", full: 160, image: "https://images.unsplash.com/photo-1751618646882-4221d5e3b1c2?auto=format&fit=crop&w=1080&q=80" },
    { name: "Veg. Triple Rice", full: 170, image: "/food/veg-triple-rice.jpg" },
    { name: "Veg. Schezwan Rice", half: 80, full: 110, image: "/food/veg-schezwan-rice.jpg" },
    { name: "Veg. Combination Rice", half: 80, full: 110, image: "/food/veg-combination-rice.jpg" },
    { name: "Babycorn Rice", full: 120, image: "/food/babycorn-rice.jpg" }
  ]
};
    
