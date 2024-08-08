'use client'

import { useUser } from "@/app/context/UserContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  const { wishlist, removeFromWishlist } = useUser();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      <h2 className="text-2xl font-semibold mb-4">Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishlist.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow relative">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              <div className="mt-2 flex justify-between items-center">
                <Button asChild variant="outline">
                  <Link href={`/products/${product.id}`}>View Product</Link>
                </Button>
                <Button onClick={() => removeFromWishlist(product.id)} variant="destructive">
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}