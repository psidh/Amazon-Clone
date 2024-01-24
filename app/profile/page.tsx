'use client';
import { useEffect, useState } from 'react';
import User from '@/utils/interfaces/user';
import { toast, Toaster } from 'react-hot-toast';
import Loading from '@/components/loading';

export default function Profile() {
  const [user, setUser] = useState<User>();

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
        toast.dismiss(); // Dismiss the loading toast
        toast.success('Profile loaded successfully');
        toast.dismiss(); // Dismiss the loading toast
        setUser(data.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className='flex items-center justify-center my-12'>
      <div className='w-[50%] p-6 '>
        <Toaster />

        {user ? (
          <>
            <a href='/' className='text-lg text-teal-500 hover:text-amber-500'>
              Home
            </a>
            <h1 className='text-3xl font-semibold mb-6'>Your profile</h1>
            <div className='profile-card rounded-lg border border-slate-200'>
              <div className='card border-b p-4'>
                <h1>First Name</h1>
                <p>{user.firstname}</p>
              </div>
              <div className='card border-b p-4'>
                <h1>Last Name</h1>
                <p>{user.lastname}</p>
              </div>
              <div className='card border-b p-4'>
                <h1>Email</h1>
                <p>{user.email}</p>
              </div>
              <div className='card border-b p-4'>
                <h1>Address</h1>
                <p>{user.address}</p>
              </div>
              <div className='card border-b p-4'>
                <h1>Pincode</h1>
                <p>{user['pincode']}</p>
              </div>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </section>
  );
}
