export interface Court {
  id: string | number;
  title: string;
  imageUrl?: string;
  onClick?: (id: string) => void;
  address: string;
  price: number;
  rating?: number;
  category: string;
}