
export interface MenuItem {
  name: string;
  half?: number;
  full?: number;
  image?: string;
}

export const menu: Record<string, MenuItem[]> = {
  "SOUP": [
    { name: "Manchau Soup", half: 70, image: "https://images.unsplash.com/photo-1625535608282-8f181a38f9e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxtYW5jaGF1JTIwc291cCUyMHxlbnwwfHx8fDE3NTIyMTQzMTN8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Hot & Sour Soup", half: 70, image: "https://images.unsplash.com/photo-1672667509942-4cbe8979ccc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOXx8YS1ib3dsLW9mLXNvdXAtd2l0aC1ub29kbGVzLWNhcnJvdHMtYW5kLWNlbGVyeS1LWUkyMUZYOUVXTXxlbnwwfHx8fDE3NTIyMTY0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Tomato Soup", half: 70, image: "https://images.unsplash.com/photo-1629978444632-9f63ba0eff47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0b21hdG8lMjBzb3VwfGVufDB8fHx8MTc1MjIxNjYyMXww&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Paneer Soup", full: 100, image: "https://images.unsplash.com/photo-1721223016672-b42b560b5402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNHx8bWFuY2h1cmlhbi1zb3VwfGVufDB8fHx8MTc1MjIxODkwN3ww&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Manchurian Soup", half: 70, image: "https://images.unsplash.com/photo-1628585352638-6a371453b344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtYW5jaHVyaWFuJTIwc291cHxlbnwwfHx8fDE3NTIyMjQwMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Noodle's Soup", half: 70, image: "https://images.unsplash.com/photo-1591814468924-caf88d356239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxub29kbGUlMjBzb3VwfGVufDB8fHx8MTc1MjIyNDAwM3ww&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Babycorn Soup", full: 120, image: "https://images.unsplash.com/photo-1628585352638-6a371453b344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxiYWJ5Y29ybiUyMHNvdXB8ZW58MHx8fHwxNzUyMjI0MDA0fDA&ixlib=rb-4.1.0&q=80&w=1080" }
  ],
  "NOODLES": [
    { name: "Veg. Hongkong Noodles", full: 100, image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxob25na29uZyUyMG5vb2RsZXN8ZW58MHx8fHwxNzUyMjI0MDA0fDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Veg. Hakka Noodles", half: 70, full: 100, image: "https://images.unsplash.com/photo-1647434793693-855521def287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxoYWtrYSUyMG5vb2RsZXN8ZW58MHx8fHwxNzUyMjI0MDA1fDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Veg. Noodle Manchurian", half: 70, full: 100, image: "https://images.unsplash.com/photo-1618439369102-48a56aa22863?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxub29kbGUlMjBtYW5jaHVyaWFufGVufDB8fHx8MTc1MjIyNDAwNXww&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Veg. Schezwan Noodles", half: 70, full: 100, image: "https://images.unsplash.com/photo-1606196245638-d6d3969a531f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzY2hlemRhbiUyMG5vb2RsZXN8ZW58MHx8fHwxNzUyMjI0MDA2fDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Veg. Singapuri Noodles", full: 100, image: "https://images.unsplash.com/photo-1552611052-33e04de081de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzaW5nYXB1cmklMjBub29kbGVzfGVufDB8fHx8MTc1MjIyNDAwN3ww&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Veg. Paneer Noodles", full: 150, image: "https://images.unsplash.com/photo-1658463990393-972134b22c83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjBub29kbGVzfGVufDB8fHx8MTc1MjIyNDAwOHww&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Veg. Rice Noodles", full: 100, image: "https://images.unsplash.com/photo-1569718212165-d803422693cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyaWNlJTIwbm9vZGxlc3xlbnwwfHx8fDE3NTIyMjQwMDh8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Veg. Gravy Noodles", full: 100, image: "https://images.unsplash.com/photo-1597829147514-2a62e08a8a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxncmF2eSUyMG5vb2RsZXN8ZW58MHx8fHwxNzUyMjI0MDA5fDA&ixlib=rb-4.1.0&q=80&w=1080" }
  ],
  "BHEL": [
    { name: "Chinese Bhel", half: 70, full: 100, image: "https://images.unsplash.com/photo-1604382354936-07c5d9983d34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwYmhlbHxlbnwwfHx8fDE3NTIyMjQwMDl8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Bombay Bhel", half: 70, full: 100, image: "https://images.unsplash.com/photo-1589301760014-d929f39791e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxib21iYXklMjBiaGVsfGVufDB8fHx8MTc1MjIyNDAxMHww&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Gravy Bhel", full: 100, image: "https://images.unsplash.com/photo-1628585352638-6a371453b344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxncmF2eSUyMGJoZWx8ZW58MHx8fHwxNzUyMjI0MDExfDA&ixlib=rb-4.1.0&q=80&w=1080" }
  ],
  "MANCHURIAN": [
    { name: "Veg. Manchurian Dry", half: 70, full: 100, image: "https://images.unsplash.com/photo-1604382354936-07c5d9983d34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtYW5jaHVyaWFuJTIwZHJ5fGVufDB8fHx8MTc1MjIyNDAxMXww&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Veg. Manchurian Gravy", half: 70, full: 100, image: "https://images.unsplash.com/photo-1618439369102-48a56aa22863?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtYW5jaHVyaWFuJTIwZ3Jhdnl8ZW58MHx8fHwxNzUyMjI0MDEyfDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Veg. Manchurian 65", half: 70, full: 100, image: "https://images.unsplash.com/photo-1563245365-68936663f044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtYW5jaHVyaWFuJTIwNjV8ZW58MHx8fHwxNzUyMjI0MDEyfDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Schezwan Manchurian Dry", half: 70, full: 100, image: "https://images.unsplash.com/photo-1606196245638-d6d3969a531f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzY2hlemRhbiUyMG1hbmNodXJpYW4lMjBkcnl8ZW58MHx8fHwxNzUyMjI0MDEzfDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Schezwan Manchurian Gravy", half: 70, full: 100, image: "https://images.unsplash.com/photo-1597829147514-2a62e08a8a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzY2hlemRhbiUyMG1hbmNodXJpYW4lMjBncmF2eXxlbnwwfHx8fDE3NTIyMjQwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080" }
  ],
  "PANEER": [
    { name: "Paneer Chilli Dry", half: 90, full: 140, image: "https://images.unsplash.com/photo-1599451481393-271587ba2bd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjBjaGlsbGklMjBkcnl8ZW58MHx8fHwxNzUyMjI0MDE0fDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Paneer Chilli Gravy", half: 90, full: 140, image: "https://images.unsplash.com/photo-1565299480-927801923190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjBjaGlsbGklMjBncmF2eXxlbnwwfHx8fDE3NTIyMjQwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Paneer Chilli 65", full: 140, image: "https://images.unsplash.com/photo-1563245365-68936663f044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjBjaGlsbGklMjA2NXxlbnwwfHx8fDE3NTIyMjQwMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Paneer Manchurian Dry", full: 150, image: "https://images.unsplash.com/photo-1631292782298-a729221b017b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjBtYW5jaHVyaWFuJTIwZHJ5fGVufDB8fHx8MTc1MjIyNDAxNnww&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Paneer Manchurian Gravy", full: 150, image: "https://images.unsplash.com/photo-1631292782298-a729221b017b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjBtYW5jaHVyaWFuJTIwZ3Jhdnl8ZW58MHx8fHwxNzUyMjI0MDE3fDA&ixlib=rb-4.1.0&q=80&w=1080" }
  ],
  "RICE": [
    { name: "Veg. Rice", half: 70, full: 100, image: "https://images.unsplash.com/photo-1664717698774-84f62382613b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhLWJvd2wtb2YtcmljZS13aXRoLXZlZ2V0YWJsZXMtTVZNb2hKQmllbzR8ZW58MHx8fHwxNzUyMjEyNzczfDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Veg. Hong Kong Rice", full: 100, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxob25nJTIwa29uZyUyMHJpY2V8ZW58MHx8fHwxNzUyMjI0MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Veg. Machurian Rice", half: 70, full: 100, image: "https://images.unsplash.com/photo-1631292782298-a729221b017b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtYW5jaHVyaWFuJTIwcmljZXxlbnwwfHx8fDE3NTIyMjQwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Veg. Singapuri Rice", full: 100, image: "https://images.unsplash.com/photo-1583495892419-74e7c36a4959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzaW5nYXB1cmklMjByaWNlfGVufDB8fHx8MTc1MjIyNDA0N3ww&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Veg. Paneer Rice", full: 140, image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjByaWNlfGVufDB8fHx8MTc1MjIyNDA0OHww&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Veg. Triple Rice", full: 150, image: "https://images.unsplash.com/photo-1631292782298-a729221b017b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0cmlwbGUlMjByaWNlfGVufDB8fHx8MTc1MjIyNDA0OXww&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Veg. Schezwan Rice", half: 70, full: 100, image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzY2hlemRhbiUyMHJpY2V8ZW58MHx8fHwxNzUyMjI0MDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Veg. Combination Rice", half: 70, full: 100, image: "https://images.unsplash.com/photo-1596560544141-f0239cb93e10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjb21iaW5hdGlvbiUyMHJpY2V8ZW58MHx8fHwxNzUyMjI0MDUwfDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Babycorn Rice", full: 120, image: "https://images.unsplash.com/photo-1628585352638-6a371453b344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxiYWJ5Y29ybiUyMHJpY2V8ZW58MHx8fHwxNzUyMjI0MDUxfDA&ixlib=rb-4.1.0&q=80&w=1080" }
  ]
};
    