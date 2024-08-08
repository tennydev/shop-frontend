import {Product } from "../types"

const getAllProducts = async (): Promise<Product[] | null> => {
  try {
    const response = await fetch('http://34.46.162.6/products')

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const res = await response.json();
    return res.data;
    
  } catch (error:any) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}

const getProductById = async (productId: number): Promise<Product | null> => {
  try {
    const response = await fetch(`http://34.46.162.6/products/${productId}`, {
      headers: {
        'Content-Type': 'application/json',
        'X-RVLT-userId': '1'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const res = await response.json();
    return res.data;
    
  } catch (error: any) {
    console.error("Failed to fetch product:", error);
    return null;
  }
}

const getProductsByCateogry = async (categoryId : Number): Promise<Product[] | null> => {
  try {
    const response = await fetch(`http://34.46.162.6/categories/${categoryId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const res = await response.json();
    return res.data;
  } catch (error:any) {
    console.error("Failed to fetch product's categories:", error);
    return null;
  }
}

const productService = {
  getAllProducts, 
  getProductsByCateogry,
  getProductById
};

export default productService;