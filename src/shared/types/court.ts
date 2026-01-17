export interface CourtQueryParams {
  search: string;
  sportType: number[] | string[];
  amenities: number[] | string[];
  priceRange: { min: number; max: number };
  rating: number;
}
export interface CourtResponse {
  id: string;
  name: string;
  rating: number | null;
  address: string;
  hourlyPrice: number; // Prisma Decimal serialized as string
  eventSurcharge?: number | null;
  isAvailable: boolean;
  isIndoor: boolean;
  categories?: { name: string }[];
  facilities?: { name: string }[];
  images?: { imageUrl: string }[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Court extends CourtResponse {
  onClick: (id: string) => void;
}
