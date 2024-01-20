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
    <section className="flex items-center justify-center h-screen">
      <div className='w-[50%] p-6 '>
        {loading ? (
          <p className="text-lg font-semibold">Loading...</p>
        ) : user ? (
          <>
          <h1 className='text-3xl font-semibold mb-6'>Your profile</h1>
          <div className="profile-card rounded-lg border border-slate-200">
            
            <div className="card border-b p-4">
              <h1>First Name</h1>
              <p>{user.firstname}</p>
            </div>
            <div className="card border-b p-4">
              <h1>Last Name</h1>
              <p>{user.lastname}</p>
            </div>
            <div className="card border-b p-4">
              <h1>Email</h1>
              <p>{user.email}</p>
            </div>
            <div className="card border-b p-4">
              <h1>Address</h1>
              <p>{user.address}</p>
            </div>
            <div className="card border-b p-4">
              <h1>Pincode</h1>
              <p>{user['pincode']}</p>
            </div>
          </div>
          </>
        ) : (
          <p className="text-lg font-semibold">Failed to load user data.</p>
        )}
      </div>
    </section>
  );
}
