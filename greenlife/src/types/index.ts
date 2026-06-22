export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  badge?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}