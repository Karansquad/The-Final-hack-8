export type Store = {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  features: string[];
  image: string;
};

export const stores: Store[] = [
  {
    id: "downtown",
    name: "Downtown Scoop",
    address: "123 Main Street",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    phone: "(555) 123-4567",
    hours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM"
    },
    coordinates: {
      lat: 40.7589,
      lng: -73.9851
    },
    features: ["Dine-in", "Takeout", "Delivery", "Outdoor Seating"],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: "brooklyn",
    name: "Brooklyn Heights",
    address: "456 Brooklyn Bridge Blvd",
    city: "Brooklyn",
    state: "NY",
    zipCode: "11201",
    phone: "(555) 234-5678",
    hours: {
      monday: "11:00 AM - 9:00 PM",
      tuesday: "11:00 AM - 9:00 PM",
      wednesday: "11:00 AM - 9:00 PM",
      thursday: "11:00 AM - 9:00 PM",
      friday: "11:00 AM - 10:00 PM",
      saturday: "10:00 AM - 10:00 PM",
      sunday: "12:00 PM - 8:00 PM"
    },
    coordinates: {
      lat: 40.6962,
      lng: -73.9969
    },
    features: ["Dine-in", "Takeout", "Family Friendly", "Parking"],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: "queens",
    name: "Queens Plaza",
    address: "789 Queens Blvd",
    city: "Queens",
    state: "NY",
    zipCode: "11101",
    phone: "(555) 345-6789",
    hours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM"
    },
    coordinates: {
      lat: 40.7505,
      lng: -73.9934
    },
    features: ["Dine-in", "Takeout", "Delivery", "Wheelchair Accessible"],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: "manhattan",
    name: "Central Park",
    address: "321 Central Park West",
    city: "New York",
    state: "NY",
    zipCode: "10024",
    phone: "(555) 456-7890",
    hours: {
      monday: "9:00 AM - 10:00 PM",
      tuesday: "9:00 AM - 10:00 PM",
      wednesday: "9:00 AM - 10:00 PM",
      thursday: "9:00 AM - 10:00 PM",
      friday: "9:00 AM - 11:00 PM",
      saturday: "8:00 AM - 11:00 PM",
      sunday: "8:00 AM - 10:00 PM"
    },
    coordinates: {
      lat: 40.7829,
      lng: -73.9654
    },
    features: ["Dine-in", "Takeout", "Outdoor Seating", "Dog Friendly"],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: "bronx",
    name: "Bronx Zoo",
    address: "654 Bronx Park East",
    city: "Bronx",
    state: "NY",
    zipCode: "10460",
    phone: "(555) 567-8901",
    hours: {
      monday: "10:00 AM - 8:00 PM",
      tuesday: "10:00 AM - 8:00 PM",
      wednesday: "10:00 AM - 8:00 PM",
      thursday: "10:00 AM - 8:00 PM",
      friday: "10:00 AM - 9:00 PM",
      saturday: "9:00 AM - 9:00 PM",
      sunday: "9:00 AM - 8:00 PM"
    },
    coordinates: {
      lat: 40.8506,
      lng: -73.8786
    },
    features: ["Dine-in", "Takeout", "Family Friendly", "Parking"],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: "staten-island",
    name: "Staten Island Ferry",
    address: "987 Staten Island Blvd",
    city: "Staten Island",
    state: "NY",
    zipCode: "10301",
    phone: "(555) 678-9012",
    hours: {
      monday: "11:00 AM - 9:00 PM",
      tuesday: "11:00 AM - 9:00 PM",
      wednesday: "11:00 AM - 9:00 PM",
      thursday: "11:00 AM - 9:00 PM",
      friday: "11:00 AM - 10:00 PM",
      saturday: "10:00 AM - 10:00 PM",
      sunday: "12:00 PM - 8:00 PM"
    },
    coordinates: {
      lat: 40.6415,
      lng: -74.0776
    },
    features: ["Dine-in", "Takeout", "Waterfront", "Parking"],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center"
  }
];
