import getAllCategories from "@/app/actions/categories";
import productService from "@/app/actions/products";
import ProductList from "@/app/products/components/ProductList";


export default async function CategoryPage({ params }: { params: { categoryId: string } }) {
  const categoryId = parseInt(params.categoryId);
  const categories = await getAllCategories();
  const category = categories?.find(cat => cat.id === categoryId);
  const products = await productService.getProductsByCateogry(categoryId);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{category.name}</h1>
      <p className="text-gray-600 mb-8">{category.description}</p>
      <h2 className="text-2xl font-semibold mb-4">Products in this category:</h2>
      <ProductList products={products || []} />
    </div>
  );
}