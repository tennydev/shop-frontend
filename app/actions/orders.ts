import { OrderWithSessionProducts } from '../types/index';

export async function fetchPastOrders(userId: string): Promise<OrderWithSessionProducts[]> {
  try {
    const response = await fetch(`http://34.46.162.6/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          userId: userId
        }
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data.data.previousOrders.map((order: any) => ({
      id: order.id,
      status: order.status,
      createdAt: order.createdAt,
      submittedAt: order.submittedAt,
      totalAmount: order.totalAmount,
      products: order.products.map((product: any) => ({
        id: product.id,
        name: product.name,
        count: product.count
      }))
    }));
  } catch (error) {
    throw error;
  }
}