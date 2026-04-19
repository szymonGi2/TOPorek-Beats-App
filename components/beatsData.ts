// export const beatsData = [
//   { id: 1, title: "Midnight Vibes", imageSrc: "icon.png", price: 19.99 },
//   { id: 2, title: "Summer Groove", imageSrc: "icon.png", price: 24.99 },
//   { id: 3, title: "Chill Beats", imageSrc: "icon.png", price: 14.99 },
//   { id: 4, title: "Bass Heavy", imageSrc: "icon.png", price: 29.99 },
//   { id: 5, title: "Smooth Flow", imageSrc: "icon.png", price: 22.99 },
//   { id: 6, title: "BoomBap Beat", imageSrc: "icon.png", price: 17.99 },
// ];

export interface Beat {
  id: string; // Unikalny identyfikator (np. "1", "2")
  title: string; // Nazwa bitu
  genre: string; // Gatunek (np. "Trap", "Oldschool")
  bpm: number; // Tempo (liczba, nie tekst!)
  releaseDate: string; // Data (np. "12.04.2026")
  image: string; // Typ dla obrazków lokalnych (require)
  price: number; // Cena bitu
  audioUrl?: string; // Opcjonalne: link do pliku dźwiękowego
}

// export const beatsData: Beat[] = [
//   {
//     id: "1",
//     title: "Night City",
//     genre: "Synthwave / Trap",
//     bpm: 140,
//     releaseDate: "01.01.2026",
//     image: require(".././assets/images/icon.png"),
//     price: 19.99,
//   },
//   {
//     id: "2",
//     title: "Chill Sunset",
//     genre: "Lo-fi",
//     bpm: 85,
//     releaseDate: "15.02.2026",
//     image: require(".././assets/images/icon.png"),
//     price: 24.99,
//   },
//   {
//     id: "3",
//     title: "Midnight Vibes",
//     genre: "Trap",
//     bpm: 120,
//     releaseDate: "01.03.2026",
//     image: require(".././assets/images/icon.png"),
//     price: 19.99,
//   },
//   {
//     id: "4",
//     title: "Summer Groove",
//     genre: "Hip-Hop",
//     bpm: 95,
//     releaseDate: "15.03.2026",
//     image: require(".././assets/images/icon.png"),
//     price: 24.99,
//   },
//   {
//     id: "5",
//     title: "Chill Beats",
//     genre: "Lo-fi",
//     bpm: 80,
//     releaseDate: "01.04.2026",
//     image: require(".././assets/images/icon.png"),
//     price: 14.99,
//   },
//   {
//     id: "6",
//     title: "Bass Heavy",
//     genre: "Trap",
//     bpm: 130,
//     releaseDate: "15.04.2026",
//     image: require(".././assets/images/icon.png"),
//     price: 29.99,
//   },
//   {
//     id: "7",
//     title: "Smooth Flow",
//     genre: "R&B",
//     bpm: 90,
//     releaseDate: "01.05.2026",
//     image: require(".././assets/images/icon.png"),
//     price: 22.99,
//   },
//   {
//     id: "8",
//     title: "BoomBap Beat",
//     genre: "Hip-Hop",
//     bpm: 100,
//     releaseDate: "15.05.2026",
//     image: require(".././assets/images/icon.png"),
//     price: 17.99,
//   },
//   // Dodawaj kolejne bity tutaj...
// ];
