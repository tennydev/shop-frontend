'use client'

import { useEffect, useState } from 'react';
import { fetchPastOrders } from '../actions/orders';
import { OrderWithSessionProducts } from '../types/index';
import { useUser } from '../context/UserContext';
import LoadingModal from '../components/LoadingModal';

export default function OrdersPage() {
  const [pastOrders, setPastOrders] = useState<OrderWithSessionProducts[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { userId } = useUser();

  useEffect(() => {
    async function loadPastOrders() {
      try {
        setIsLoading(true);
        const orders = await fetchPastOrders(userId);
        setPastOrders(orders);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadPastOrders();
  }, [userId]);

  return (
    <>
      {isLoading && <LoadingModal />}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Orders</h1>
        {pastOrders.map((order) => (
          <div key={order.id} className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-2">Order #{order.id}</h2>
            <p className="text-gray-600 mb-2">Status: {order.status}</p>
            <p className="text-gray-600 mb-2">Created: {new Date(order.createdAt).toLocaleString()}</p>
            <p className="text-gray-600 mb-2">Submitted: {order.submittedAt ? new Date(order.submittedAt).toLocaleString() : 'Not submitted'}</p>
            <p className="text-gray-600 mb-4">Total Amount: ${order.totalAmount.toFixed(2)}</p>
            <h3 className="text-xl font-semibold mb-2">Products:</h3>
            <ul className="list-disc list-inside">
              {order.products.map((product) => (
                <li key={product.id} className="text-gray-600">
                  {product.name} - Quantity: {product.count}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}