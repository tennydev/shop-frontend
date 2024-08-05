import getAllCategories from "../actions/categories";
import CategoryList from "./components/CategoryList";

export default async function page() {
  const categories = await getAllCategories();

  return(
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Categories</h1>
      <CategoryList categories={categories || []} />
    </div>
  );
}