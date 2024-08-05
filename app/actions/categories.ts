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

const getCategoryById = async (id:number): Promise<Category | null> => {
  try {
    const response = await fetch(`http://localhost:8080/categories/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const res = await response.json();
    return res.data;
  } catch (error:any) {
    console.error(`Failed to fetch category id ${id} :`, error);
    return null;
  }
}




export default getAllCategories;