"use client"
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
function page() {
  const [iPhone , setiPhone] = useState('/iPhone.jpeg');

  const Black =() => {
    setiPhone('/iPhone.jpeg')
  }

  const Green =() => {
    setiPhone('/iPhoneG.jpeg')
  }

  const Blue =() => {
    setiPhone('/iPhoneB.jpeg')
  }
  const Yellow =() => {
    setiPhone('/iPhoneY.jpeg')
  }
  const Pink =() => {
    setiPhone('/iPhoneP.jpeg')
  }

  return (
    <div>
      <div className="flex flex-row py-20 px-10">
        <div className="flex w-1/3 ">
          {/* Set max height for the image container */}
          <div style={{ maxHeight: '500px', width: '100%' }}>
            <Image src={iPhone} layout="responsive" width={500} height={1200} objectFit="cover" alt="I" />
          </div>
        </div>

        <div className="flex  w-3/6 px-6">
          <div className="flex flex-col flex-grow">
            <h1 className="text-2xl">Apple iPhone 15 (1TB) - Titanium</h1>
            <a
              href="https://apple.com/in/"
              className="text-sm text-teal-600 hover:text-amber-600 pb-2"
            >
              Visit the Apple Store
            </a>
            <hr />
            <p className="text-3xl font-normal py-4">₹1,84,900</p>
            <Image src={'/prime.png'} width={60} height={10} alt="I" />
            <p className="text-sm">Inclusive of all Taxes</p>
            <p className="text-center text-sm py-4">
              Now, <span className="font-semibold">buy more in 1-click</span>{' '}
              with Amazon Pay Later.
            </p>

            <hr />
            <div className="flex justify-between items-center">
              <Image
                src={'/offer.jpeg'}
                width={20}
                height={10}
                alt="I"
                className="py-2"
              />
              <p className="text-sm font-semibold">Inclusive of all Taxes</p>
            </div>
            
            <div className='flex flex-col w-2/6 p-4 rounded-md shadow-md text-sm my-2 mb-4'>
              <h2 className='font-semibold'>No Cost EMI</h2>
              <p className=''>Upto ₹8,330.81 EMI interest savings on select Credit Cards</p>
            </div>

            <hr />
            <Image src={'/amazon-logo-pack/policy.png'} width={450} height={70} alt='benefits' className='my-4'></Image> 
            <hr />
            
            <div className='flex '>
              <button className='font-semibold flex flex-col w-1/6 p-4 border text-sm m-4 hover:border-black ' onClick={Black}>Black</button>
              <button className='font-semibold flex flex-col w-1/6 p-4 border text-sm m-4 hover:border-green-500 ' onClick={Green}>Green</button>
              <button className='font-semibold flex flex-col w-1/6 p-4 border text-sm m-4 hover:border-pink-600 ' onClick={Pink}>Pink</button>
              <button className='font-semibold flex flex-col w-1/6 p-4 border text-sm m-4 hover:border-blue-500 ' onClick={Blue}>Blue</button>
              <button className='font-semibold flex flex-col w-1/6 p-4 border text-sm m-4 hover:border-yellow-500 ' onClick={Yellow}>Yellow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
