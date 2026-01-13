export interface Court {
  id: string;
  name: string;
  rating: number | null;
  onClick?: (id: string) => void;
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
