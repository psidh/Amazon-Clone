import React from 'react';
import Image from 'next/image';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FaSearch } from 'react-icons/fa';
import { BsCart } from 'react-icons/bs';
import { useState } from 'react';
function Navbar() {
  return (
    <div className="flex justify-items items center bg-[#131a22] py-2 px-4">
      <a href="/">
        <Image
          src={'/amazon.png'}
          width={100}
          height={10}
          alt="amazon logo"
          className="mr-2"
        />
      </a>

      <div className="flex justify-center items-center px-2 hover:border hover:border-white  mx-2">
        <HiOutlineLocationMarker className="text-md text-white" />
        <div className="flex flex-col justify-start items-left px-2">
          <p className="text-sm text-gray-500">Deliver to</p>
          <p className="text-md font-semibold text-gray-200">India</p>
        </div>
      </div>

      <div className="flex justify-items-start px-2">
        <button className="py-1 px-6 bg-gray-200 hover:bg-gray-300 rounded-l-sm text-black ">
          All
        </button>
        <input
          id="search"
          type="text"
          className="bg-white lg:w-[600px] flex-shrink  pl-4 outline-none"
          placeholder="Search Amazon"
        />

        <button className="py-1 px-4 w-32px rounded-r-sm bg-[#febd69] hover:opacity-90">
          <FaSearch className="text-md text-black " />{' '}
        </button>
      </div>

      <div className="flex justify-bottom items-end px-2 hover:border hover:border-white">
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

      <div className="flex justify-bottom items-end px-2 hover:border hover:border-white">
        <div className="flex flex-col justify-start items-left">
          <p className="text-sm text-gray-200">Hello, sign in</p>
          <p className="text-md text-gray-200 font-semibold">
            Accounts & Lists
          </p>
        </div>
      </div>
      <div className="flex justify-bottom items-end px-2 hover:border hover:border-white">
        <div className="flex flex-col justify-start items-left">
          <p className="text-sm text-gray-200">Returns</p>
          <p className="text-md text-gray-200 font-semibold">& Orders</p>
        </div>
      </div>

      <div className="flex justify-end items-end px-2 hover:border hover:border-white">
        <div className="flex justify-end items-end text-white">
          <BsCart className="text-3xl text-white mb-2" />
          <p className="text-md text-gray-200 font-semibold">& Orders</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
