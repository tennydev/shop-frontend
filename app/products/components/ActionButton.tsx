'use client'

import { useUser } from "@/app/context/UserContext";
import { Product } from "@/app/types";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";

interface ActionButtonProps {
  product: Product;
  action: 'cart' | 'wishlist';
}

const ActionButton: React.FC<ActionButtonProps> = ({ product, action }) => {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useUser();

  const handleClick = () => {
    if (action === 'cart') {
      addToCart(product);
    } else if (action === 'wishlist') {
      if (isInWishlist(product.id)) {
        removeFromWishlist(product.id);
      } else {
        addToWishlist(product);
      }
    }
  };

  return (
    <Button 
      onClick={handleClick}
      variant={action === 'wishlist' && isInWishlist(product.id) ? "default" : "outline"}
      size="icon"
    >
      {action === 'cart' ? <ShoppingCart className="h-4 w-4" /> : 
        <Star className={`h-4 w-4 ${isInWishlist(product.id) ? "text-yellow-400 fill-yellow-400" : ""}`} />}
    </Button>
  );
};

export default ActionButton;