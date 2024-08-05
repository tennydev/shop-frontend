import { ApiResponse, Category, Product } from "../types"

const getAllProducts = async (): Promise<Product[] | null> => {
  try {
    const response = await fetch('http://localhost:8080/products')

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

const getProductsByCateogry = async (categoryId : Number): Promise<Product[] | null> => {
  try {
    const response = await fetch(`http://localhost:8080/categories/${categoryId}`);
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
  getProductsByCateogry
};

export default productService;