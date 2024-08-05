import { Category } from "@/app/types";
import Link from 'next/link';

interface CategoryListProps {
  categories: Category[];
}

const CategoryList = ({ categories }: CategoryListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/categories/${category.id}`}
          className="block"
        >
          <button
            className="w-full text-left bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300 ease-in-out"
          >
            <h2 className="text-xl font-semibold">{category.name}</h2>
            <p className="text-gray-600">{category.description}</p>
          </button>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;