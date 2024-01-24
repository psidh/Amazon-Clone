import React from 'react';

export default function Mobile() {
  return (
    <div>
      <div className='flex flex-col lg:hidden text-white bg-[#131a22]'>
        <a className=' m-6' href='/'>
          Home
        </a>
        <a className='m-6' href='/profile'>
          Accounts & Lists
        </a>
        <a className='m-6' href='/orders'>
          Returns & Orders
        </a>
        <a className='m-6' href='/cart'>
          Cart
        </a>
      </div>
    </div>
  );
}
