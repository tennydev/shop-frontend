import { User } from '../types';

export async function fetchUserInfo(userId: string): Promise<User> {
  try {
    const response = await fetch(`http://34.46.162.6/users/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching user info:', error);
    throw error;
  }
}