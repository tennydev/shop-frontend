import productService from "../actions/products";
import ProductList from "./components/ProductList";

export default async function page() {
  const products = await productService.getAllProducts();
  
  return(
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <ProductList products={ products || []}/>
    </div>
  );
}