'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiMenu } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';
import { BsCart } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'react-hot-toast';
import axios from 'axios';
function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get('/api/logout');
      toast.success('Logout successful');
      router.push('/');
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const [user, setUser] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/profile`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setUser(data.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Toaster />
      <div className="flex justify-between items-center bg-[#131a22] py-1 px-4">
        <a href="/">
          <Image src={'/amazon.png'} width={80} height={10} alt="amazon logo" />
        </a>

        <div className="nav-class rounded-lg">
          <HiOutlineLocationMarker className="text-md text-white" />
          <div className="flex flex-col justify-start items-left px-2">
            <p className="text-sm text-gray-500">Deliver to</p>
            <p className="text-md font-semibold text-gray-200">India</p>
          </div>
        </div>

        <div className="flex justify-center w-1/2 items-center mx-2">
          <button className="py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded-l-sm text-black ">
            All
          </button>
          <input
            id="search"
            type="text"
            className="bg-white overflow-auto w-full flex-shrink pl-4 py-2 outline-none"
            placeholder="Search Amazon"
          />

          <button className="py-3 px-4  rounded-r-sm bg-[#febd69] hover:opacity-90">
            <FaSearch className="text-md text-black " />{' '}
          </button>
        </div>

        <div className="nav-class">
          <Image
            src={'/india.svg'}
            width={20}
            height={20}
            alt="amazon logo"
            className="mb-1 mr-1"
          ></Image>
          <div className="flex flex-col justify-start items-left">
            <p className="text-sm text-gray-200">Hindi</p>
          </div>
        </div>

        <div className="nav-class rounded-lg">
          <div className="flex flex-col justify-start items-left">
            {!user && <a href="/login">Login</a>}
            {user && <p onClick={logout}>Logout</p>}
            <a href="/profile" className="text-md font-semibold">
              Accounts & Lists
            </a>
          </div>
        </div>

        <div className="nav-class rounded-lg">
          <div className="flex flex-col justify-start items-left">
            <p className="text-sm text-gray-200">Returns</p>
            <p className="text-md text-gray-200 font-semibold">& Orders</p>
          </div>
        </div>

        <div className="nav-class rounded-lg">
          <div className="flex justify-end items-end text-white">
            <BsCart className="text-3xl text-white mb-2" />
          </div>
        </div>

        <div
          className="flex lg:hidden w-5 h-5 cursor-pointer text-white"
          onClick={toggleNav}
        >
          <FiMenu />
        </div>
      </div>

      {isNavOpen && ( // Render the navigation links if isNavOpen is true
        <div className="flex flex-col lg:hidden text-[#131a22]">
          <a className=" m-6" href="/">
            Home
          </a>
          <a className="m-6" href="/#resume">
            Location
          </a>
          <a className="m-6" href="/#blog">
            Accounts & Lists
          </a>
          <a className="m-6" href="/#footer">
            Returns & Orders
          </a>
          <a className="m-6" href="/#footer">
            Cart
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
