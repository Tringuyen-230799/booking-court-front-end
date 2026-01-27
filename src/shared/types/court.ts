export interface CourtQueryParams {
  search: string;
  sportTypes: number[] | string[];
  amenities: number[] | string[];
  min: number;
  max: number;
  rating: number;
  page?: number;
  limit?: number;
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
  description?: string | null;
}

export interface Court extends CourtResponse {
  onClick: (id: string) => void;
}