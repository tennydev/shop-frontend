import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Link href="/categories" className=" rounded-lg shadow-md p-4 hover:shadow-lg transition-all border border-gray-200 hover:border-gray-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Browse Categories</h2>
            <p className="text-sm text-gray-600">Explore our wide range of product categories.</p>
          </Link>
          <Link href="/products" className=" rounded-lg shadow-md p-4 hover:shadow-lg transition-all border border-gray-200 hover:border-gray-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">View Products</h2>
            <p className="text-sm text-gray-600">Check out our latest and most popular products.</p>
          </Link>
          <Link href="/orders" className=" rounded-lg shadow-md p-4 hover:shadow-lg transition-all border border-gray-200 hover:border-gray-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Your Orders</h2>
            <p className="text-sm text-gray-600">Track and manage your orders easily.</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default page;