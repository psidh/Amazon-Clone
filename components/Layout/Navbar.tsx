'use client';
import { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import logoutUser from '@/utils/authentication/logout';
import Mobile from './NavbarComponents/Mobile';
import Logo from './NavbarComponents/Logo';
import Deliver from './NavbarComponents/Deliver';
import Search from './NavbarComponents/Search';
import Language from './NavbarComponents/Language';
import LogoutAccounts from './NavbarComponents/LogoutAccounts';
import ReturnsOrders from './NavbarComponents/ReturnsOrders';
import Cart from './NavbarComponents/Cart';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const router = useRouter();

  const handleLogout = async () => {
    await logoutUser(router, toast);
  };

  const [isloggedIn, setisloggedIn] = useState(false);

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
        console.log(data);

        if (data.message) {
          console.log(data.message);

          setisloggedIn(true);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* <Toaster /> */}
      <div className='flex justify-between items-center bg-[#131a22] py-1 px-4'>
        <Logo />
        <Deliver />
        <Search />
        <Language />
        {isloggedIn ? (
          <LogoutAccounts handleLogout={handleLogout} />
        ) : (
          <a href="/login" className="text-white pr-1 mb-1">Login</a>
        )}

        <ReturnsOrders />
        <Cart />

        <div
          className='flex lg:hidden w-5 h-5 cursor-pointer text-white'
          onClick={toggleNav}
        >
          <FiMenu />
        </div>
      </div>

      {isNavOpen && ( // Render the navigation links if isNavOpen is true
        <Mobile />
      )}
    </div>
  );
}

export default Navbar;
