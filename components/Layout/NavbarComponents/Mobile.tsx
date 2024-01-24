import React from 'react';
import logoutUser from '@/utils/authentication/logout';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const Mobile = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await logoutUser(router, toast);
  };

  return (
    <div>
      <div className='flex flex-col lg:hidden text-white bg-[#131a22]'>
        <a className='m-4' href='/'>
          Home
        </a>
        <a className='m-4' href='/profile'>
          Accounts & Lists
        </a>
        <a className='m-4' href='/orders'>
          Returns & Orders
        </a>
        <a className='m-4' href='/cart'>
          Cart
        </a>
        <p className='m-4' onClick={handleLogout}>Logout</p>
      </div>
    </div>
  );
};

export default Mobile;
