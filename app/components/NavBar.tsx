'use client'

import Link from "next/link";
import { useUser } from "../context/UserContext";
import { useState, useEffect } from "react";
import { fetchUserInfo } from "../actions/user";
import { User } from "../types";

const NavBar = () => {
  const { userId, cart } = useUser();
  const [user, setUser] = useState<User | null>(null);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    if (userId) {
      fetchUserInfo(userId)
        .then(userData => setUser(userData))
        .catch(error => console.error('Failed to fetch user info:', error));
    }
  }, [userId]);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-gray-800 hover:text-gray-700 transition-colors">
          Logo
        </Link>
        <ul className="flex space-x-6 items-center">
          {user && (
            <li>
              <Link href="/profile" className="text-gray-600 hover:text-gray-800 transition-colors">
                {user.firstName} 
              </Link>
            </li>
          )}
          <li>
            <Link href="/orders" className="text-gray-600 hover:text-gray-800 transition-colors">
              Orders
            </Link>
          </li>
          <li>
            <Link href="/cart" className="text-gray-600 hover:text-gray-800 transition-colors">
              Cart: {cartItemCount}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;