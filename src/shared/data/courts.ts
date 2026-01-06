import { Court } from '../types/court';

export const mockCourts: Court[] = [
  {
    id: '1',
    title: 'Premium Tennis Court A',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400',
    address: '123 Sports Complex Ave, Downtown',
    price: 45,
    rating: 4.8
  },
  {
    id: '2',
    title: 'Basketball Court Elite',
    imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400',
    address: '456 Athletic Center Blvd, Midtown',
    price: 35,
    rating: 4.6
  },
  {
    id: '3',
    title: 'Badminton Hall Pro',
    imageUrl: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400',
    address: '789 Recreation St, Eastside',
    price: 28,
    rating: 4.7
  },
  {
    id: '4',
    title: 'Tennis Court Classic',
    imageUrl: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400',
    address: '321 Game Point Lane, Westfield',
    price: 40,
    rating: 4.5
  },
  {
    id: '5',
    title: 'Indoor Soccer Arena',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400',
    address: '654 Football Plaza, Northgate',
    price: 55,
    rating: 4.9
  },
  {
    id: '6',
    title: 'Squash Court Premium',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    address: '987 Racquet Club Dr, Southshore',
    price: 38,
    rating: 4.4
  },
  {
    id: '7',
    title: 'Volleyball Court Indoor',
    imageUrl: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=400',
    address: '147 Spike Avenue, Central Park',
    price: 32,
    rating: 4.6
  },
  {
    id: '8',
    title: 'Tennis Court Deluxe',
    imageUrl: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=400',
    address: '258 Grand Slam Road, Uptown',
    price: 50,
    rating: 4.8
  },
  {
    id: '9',
    title: 'Basketball Court Standard',
    imageUrl: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=400',
    address: '369 Dunk Street, Old Town',
    price: 25,
    rating: 4.2
  },
  {
    id: '10',
    title: 'Badminton Court Express',
    imageUrl: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400',
    address: '741 Shuttle Lane, New District',
    price: 22,
    rating: 4.3
  },
  {
    id: '11',
    title: 'Futsal Court Pro',
    imageUrl: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400',
    address: '852 Futsal Plaza, Sports Zone',
    price: 42,
    rating: 4.7
  },
  {
    id: '12',
    title: 'Table Tennis Hall',
    imageUrl: 'https://images.unsplash.com/photo-1609906851638-9b0e6bdee9cd?w=400',
    address: '963 Ping Pong Boulevard, Game Center',
    price: 18,
    rating: 4.1
  },
  {
    id: '13',
    title: 'Tennis Court Outdoor',
    imageUrl: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400',
    address: '159 Fresh Air Court, Garden District',
    price: 30,
    rating: 4.4
  },
  {
    id: '14',
    title: 'Multi-Sport Arena',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    address: '753 Versatile Way, Sports Complex',
    price: 48,
    rating: 4.6
  },
  {
    id: '15',
    title: 'Basketball Court Outdoor',
    imageUrl: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?w=400',
    address: '486 Street Ball Avenue, Urban Park',
    price: 20,
    rating: 4.0
  },
  {
    id: '16',
    title: 'Pickleball Court',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400',
    address: '357 Pickle Drive, Community Center',
    price: 26,
    rating: 4.5
  },
  {
    id: '17',
    title: 'Handball Court Indoor',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    address: '680 Palm Court, Fitness Plaza',
    price: 35,
    rating: 4.3
  },
  {
    id: '18',
    title: 'Tennis Court VIP',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400',
    address: '791 Luxury Sports Lane, Elite Club',
    price: 65,
    rating: 4.9
  },
  {
    id: '19',
    title: 'Padel Court Modern',
    imageUrl: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400',
    address: '842 Padel Paradise, Modern Sports',
    price: 44,
    rating: 4.7
  },
  {
    id: '20',
    title: 'Basketball Court Premium',
    imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400',
    address: '935 Championship Court, Victory Complex',
    price: 52,
    rating: 4.8
  }
];

// Utility function to get court by ID
export const getCourtById = (id: string | number): Court | undefined => {
  return mockCourts.find(court => court.id === id);
};

// Utility function to filter courts by price range
export const getCourtsByPriceRange = (minPrice: number, maxPrice: number): Court[] => {
  return mockCourts.filter(court => court.price >= minPrice && court.price <= maxPrice);
};

// Utility function to filter courts by rating
export const getCourtsByMinRating = (minRating: number): Court[] => {
  return mockCourts.filter(court => court.rating && court.rating >= minRating);
};

// Utility function to search courts by title or address
export const searchCourts = (query: string): Court[] => {
  const lowercaseQuery = query.toLowerCase();
  return mockCourts.filter(court => 
    court.title.toLowerCase().includes(lowercaseQuery) ||
    court.address.toLowerCase().includes(lowercaseQuery)
  );
};
