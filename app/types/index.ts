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

export interface ApiResponse<T>{
  status: {
    httpStatusCode: string;
    serverStatusCode: string;
    message: string;
  };
  data: T
}

