'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import productService from '@/app/actions/products';
import { Product } from '@/app/types';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star } from 'lucide-react';
import { useUser } from '@/app/context/UserContext';
import LoadingModal from '@/app/components/LoadingModal';

export default function Page() {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useUser();

  useEffect(() => {
    async function loadProduct() {
      setLoading(true);
      try {
        const fetchedProduct = await productService.getProductById(Number(productId));
        setProduct(Array.isArray(fetchedProduct) ? fetchedProduct[0] : fetchedProduct);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  const handleToggleWishlist = () => {
    if (product) {
      if (isInWishlist(product.id)) {
        removeFromWishlist(product.id);
      } else {
        addToWishlist(product);
      }
    }
  };

  if (loading) {
    return <LoadingModal />;
  }

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-xl text-gray-600 mb-4">${product.price}</p>
      <p className="mb-4">In Stock: {product.inStock}</p>
      <div className="flex space-x-4">
        <Button onClick={handleAddToCart}>
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
        <Button onClick={handleToggleWishlist} variant={isInWishlist(product.id) ? "default" : "outline"}>
          <Star className={`mr-2 h-4 w-4 ${isInWishlist(product.id) ? "text-yellow-400 fill-yellow-400" : ""}`} />
          {isInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
        </Button>
      </div>
    </div>
  );
}