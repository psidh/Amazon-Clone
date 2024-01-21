'use client';
import React, { useState } from 'react';

function Secbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  return (
    <div className='flex flex-row justify-start items-center bg-[#232f3e] py-2 px-4 text-white'>
      <div className='hidden sm:flex'>
        <div className='text-sm flex flex-row justify-between items-center bg-[#232f3e] py-1 px-2'>
          <p className='px-2'>All</p>
          <p className='px-2'>Today's Deals</p>
          <p className='px-2'>Customer Service</p>
          <p className='px-2'>Registry</p>
          <p className='px-2'>Gift Cards</p>
          <p className='px-2'>Sell</p>
        </div>
      </div>

      <div
        onClick={toggleNav}
        className='sm:hidden  show w-5 h-5 cursor-pointer text-white'
        role='button'
      >
        {/* Consider using a hamburger menu icon here */}☰
      </div>

      {isNavOpen && (
        <div className='sm:hidden'>
          <div className='text-sm md:flex-row justify-between items-center bg-[#232f3e] py-2 px-2'>
            <p className='px-2 sm:p-2 '>All</p>
            <p className='px-2 sm:p-2 '>Today's Deals</p>
            <p className='px-2 sm:p-2 '>Customer Service</p>
            <p className='px-2 sm:p-2 '>Registry</p>
            <p className='px-2 sm:p-2 '>Gift Cards</p>
            <p className='px-2 sm:p-2 '>Sell</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Secbar;
