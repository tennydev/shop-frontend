import Link from "next/link";

const NavBar = () => {
  return (
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
  );
};

export default NavBar;