import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-gray-800 hover:text-gray-700 transition-colors">
            Revolt
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/categories" className="text-gray-600 hover:text-gray-800 transition-colors">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-gray-600 hover:text-gray-800 transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link href="/orders" className="text-gray-600 hover:text-gray-800 transition-colors">
                Orders
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Home</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/categories" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Browse Categories</h2>
            <p className="text-gray-600">Explore our wide range of product categories.</p>
          </Link>
          <Link href="/products" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">View Products</h2>
            <p className="text-gray-600">Check out our latest and most popular products.</p>
          </Link>
          <Link href="/orders" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your Orders</h2>
            <p className="text-gray-600">Track and manage your orders easily.</p>
          </Link>
        </div>
      </main>
    </div>
  );
}


export default page;