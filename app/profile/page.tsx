'use client';
import { useEffect, useState } from 'react';
import User from '@/utils/interfaces/user';

export default function Profile() {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/profile`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          console.error('Server error:', response);
          console.error('Failed to fetch data from the server');
          return;
        }

        const data = await response.json();
        console.log('Response:', data.data);
        setUser(data.data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="flex flex-col justify-center items-center h-screen">
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <div>
          <h1>Welcome</h1>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Failed to load user data.</p>
      )}
    </section>
  );
}
