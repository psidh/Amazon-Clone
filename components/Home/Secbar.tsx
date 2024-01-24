'use client';
import React, { useState } from 'react';

function Secbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  return (
    <div className='bg-[#232f3e] px-4 py-2 text-white'>
      <div className='hidden sm:flex'>
        <div className='text-sm flex flex-row justify-between items-center bg-[#232f3e]'>
          <p className='mx-2'>All</p>
          <p className='mx-2'>Today's Deals</p>
          <p className='mx-2'>Customer Service</p>
          <p className='mx-2'>Registry</p>
          <p className='mx-2'>Gift Cards</p>
          <p className='mx-2'>Sell</p>
        </div>
      </div>

      <div
        onClick={toggleNav}
        className='sm:hidden show w-5 h-5 cursor-pointer text-white'
        role='button'
      >☰
      </div>

      {isNavOpen && (
        <div className='sm:hidden'>
          <div className='text-sm md:flex-row justify-between items-center bg-[#232f3e]'>
            <p>All</p>
            <p>Today's Deals</p>
            <p>Customer Service</p>
            <p>Registry</p>
            <p>Gift Cards</p>
            <p>Sell</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Secbar;
