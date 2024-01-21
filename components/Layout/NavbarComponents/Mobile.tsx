import React from 'react';

export default function Mobile() {
  return (
    <div>
      <div className='flex flex-col lg:hidden text-[#131a22]'>
        <a className=' m-6' href='/'>
          Home
        </a>
        <a className='m-6' href='/#resume'>
          Location
        </a>
        <a className='m-6' href='/#blog'>
          Accounts & Lists
        </a>
        <a className='m-6' href='/#footer'>
          Returns & Orders
        </a>
        <a className='m-6' href='/#footer'>
          Cart
        </a>
      </div>
    </div>
  );
}
