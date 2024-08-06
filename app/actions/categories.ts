import { ApiResponse, Category } from "../types"

const getAllCategories = async (): Promise<Category[] | null> => {
  try {
    const response = await fetch('http://localhost:8080/categories')

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const res = await response.json();
    return res.data;
    
  } catch (error:any) {
    console.error("Failed to fetch categories:", error);
    return [];
  }
}

export default getAllCategories;