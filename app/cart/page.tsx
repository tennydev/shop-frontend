'use client'

import { useUser } from "@/app/context/UserContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Page() {
  const { cart, removeFromCart, updateQuantity } = useUser();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // mock call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert('Order submitted successfully!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price}</p>
              </div>
              <div className="flex items-center">
                <Button 
                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  variant="outline"
                  size="sm"
                >
                  -
                </Button>
                <span className="mx-2">{item.quantity}</span>
                <Button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  variant="outline"
                  size="sm"
                >
                  +
                </Button>
                <Button 
                  onClick={() => removeFromCart(item.id)}
                  variant="destructive"
                  size="sm"
                  className="ml-4"
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h2>
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Order'}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}