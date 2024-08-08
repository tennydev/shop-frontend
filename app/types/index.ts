export interface Category {
  id: number;
  name: string;
  description: string;
  active: boolean;
}

export interface Product {
  id: number;
  name: string;
  inStock: number;
  price: number;
}

export interface ProductInOrder {
  id: number;
  name: string;
  count: number;
}

export interface OrderWithSessionProducts {
  id: number;
  status: string;
  createdAt: string;
  submittedAt: string | null;
  totalAmount: number;
  products: ProductInOrder[];
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}