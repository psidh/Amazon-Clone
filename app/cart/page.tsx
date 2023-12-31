import React from 'react';
import Image from 'next/image';

function Cart() {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col w-full lg:w-4/5  items-start my-8 md:mx-16 p-4 border rounded-md bg-white ">
          <h1 className="text-left md:text-3xl mb-4">Shopping Cart</h1>
          <hr />
          <div className="flex  justify-between items-center mt-4 ">
            <Image
              src={'/iPhone.png'}
              width={120}
              height={120}
              alt="iPhone Image"
              className="mx-4"
            />

            <div className="flex flex-col justify-start items-start mx-4">
              <h1>Apple iPhone 15</h1>
              <p className="text-xl font-bold">₹89,900.00</p>
              <Image src={'/prime.png'} width={50} height={50} alt="prime" />
              <p>
                {' '}
                <span className="font-semibold">Colour:</span>Black
              </p>
              <p>
                {' '}
                <span className="font-semibold">Size:</span>1TB
              </p>
              <hr />
            </div>
          </div>
          <hr />
          <div className="ml-auto">
            {/* Align content to the right */}
            <p className="text-3xl mx-4">
              <span className="font-semibold">Sub Total:</span> ₹89,900.00
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:w-1/5 items-start my-8 mx-16 p-2 border rounded-md bg-white">
        <p className='m-4'>
          <span className="font-semibold">SubTotal (1 items):</span>₹89,900.00{' '}
        </p>
        <button className='w-full py-1 my-2 bg-yellow-400 hover:bg-yellow-500 rounded-lg
        shadow-md'>Proceed to Buy</button>
      </div>
      </div>
      
    </div>
  );
}

export default Cart;
