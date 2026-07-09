export interface Destination {
  id: string;
  name: string;
  slug: string;
  category: "beach" | "nature" | "resort" | "church" | "island" | "restaurant" | "attraction";
  image: string;
  description: string;
  fullDescription: string;
  location: string;
  openingHours: string;
  entranceFee: string;
  bestTimeToVisit: string;
  tips: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  rating: number;
  featured: boolean;
}

export interface Hotel {
  id: string;
  name: string;
  image: string;
  priceRange: string;
  rating: number;
  reviewCount: number;
  amenities: string[];
  description: string;
  location: string;
  bookingUrl?: string;
  featured: boolean;
}

export interface Activity {
  id: string;
  name: string;
  icon: string;
  description: string;
  price: string;
  duration: string;
  difficulty: "easy" | "moderate" | "challenging";
  image: string;
}

export interface Food {
  id: string;
  name: string;
  description: string;
  image: string;
  type: "seafood" | "local" | "dessert" | "drink";
  price: string;
  whereTryIt: string;
}

export interface Review {
  id: string;
  name: string;
  country: string;
  avatar: string;
  rating: number;
  date: string;
  review: string;
  destination: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
}

export interface TransportOption {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}
