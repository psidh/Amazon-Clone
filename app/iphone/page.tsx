'use client';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
function page() {
  const [iPhone, setiPhone] = useState('/iPhone.jpeg');

  const Black = () => {
    setiPhone('/iPhone.jpeg');
  };

  const Green = () => {
    setiPhone('/iPhoneG.jpeg');
  };

  const Blue = () => {
    setiPhone('/iPhoneB.jpeg');
  };
  const Yellow = () => {
    setiPhone('/iPhoneY.jpeg');
  };
  const Pink = () => {
    setiPhone('/iPhoneP.jpeg');
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row  py-20 px-10">
        <div className="flex lg:w-1/3 pb-20">
          {/* Set max height for the image container */}
          <div style={{ width: '100%', overflow: 'hidden' }}>
            <style jsx>{`
              @media (max-width: 600px) {
                div {
                  max-height: 300px; /* Adjust the value for smaller screens */
                }
              }

              @media (min-width: 601px) and (max-width: 1024px) {
                div {
                  max-height: 400px; /* Adjust the value for medium screens */
                }
              }
            `}</style>

            <Image
              src={iPhone}
              layout="responsive"
              width={400}
              height={300}
              objectFit="cover"
              alt="iPhone"
            />
          </div>
        </div>

        <div className="flex lg:w-3/6 sm:mt-10 lg:p-0 px-6">
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
            <div className="flex justify-left items-center py-2">
              <Image
                src={'/offer.jpeg'}
                width={20}
                height={10}
                alt="I"
                className="py-2"
              />
              <p className="text-sm font-semibold pl-2">
                Inclusive of all Taxes
              </p>
            </div>
            <div className="flex flex-col w-2/6 p-4 rounded-md shadow-md text-sm my-2 mb-4">
              <h2 className="font-semibold">No Cost EMI</h2>
              <p className="">
                Upto ₹8,330.81 EMI interest savings on select Credit Cards
              </p>
            </div>
            <hr />
            <Image
              src={'/amazon-logo-pack/policy.png'}
              width={450}
              height={70}
              alt="benefits"
              className="my-4"
            ></Image>
            <hr />
            <div className="flex my-4">
              <button
                className="font-semibold flex flex-col w-1/6 p-4 border text-sm m-4 hover:border-black "
                onClick={Black}
              >
                Black
              </button>
              <button
                className="font-semibold flex flex-col w-1/6 p-4 border text-sm m-4 hover:border-green-500 "
                onClick={Green}
              >
                Green
              </button>
              <button
                className="font-semibold flex flex-col w-1/6 p-4 border text-sm m-4 hover:border-pink-600 "
                onClick={Pink}
              >
                Pink
              </button>
              <button
                className="font-semibold flex flex-col w-1/6 p-4 border text-sm m-4 hover:border-blue-500 "
                onClick={Blue}
              >
                Blue
              </button>
              <button
                className="font-semibold flex flex-col w-1/6 p-4 border text-sm m-4 hover:border-yellow-500 "
                onClick={Yellow}
              >
                Yellow
              </button>
            </div>

            <div className="grid grid-cols-2 my-2">
              <div className="font-semibold">
                <p>Size</p>
                <p>Brand </p>
                <p>Model Name </p>
                <p>Network Service Provider </p>
                <p>Operating System </p>
                <p>Cellular Technology</p>
              </div>
              <div>
                <p>1TB</p>
                <p>Apple</p>
                <p>iPhone 15</p>
                <p>Unlocked</p>
                <p>iOS</p>
                <p>5G</p>
              </div>
            </div>

            <hr />
            <div className="my-2">
              <h3 className="font-semibold">About this Item</h3>
              <ul
                style={{ listStyleType: 'disc', paddingLeft: '20px' }}
                className="text-sm"
              >
                <li className="py-1">
                  FORGED IN TITANIUM — iPhone 15 Pro has a strong and light
                  aerospace-grade titanium design with a textured matte-glass
                  back. It also features a Ceramic Shield front that’s tougher
                  than any smartphone glass. And it’s splash, water, and dust
                  resistant.
                </li>
                <li className="py-1">
                  ADVANCED DISPLAY — The 6.1” Super Retina XDR display with
                  ProMotion ramps up refresh rates to 120Hz when you need
                  exceptional graphics performance. Dynamic Island bubbles up
                  alerts and Live Notifications. Plus, with Always-On display,
                  your Lock Screen stays glanceable, so you don’t have to tap it
                  to stay in the know.
                </li>
                <li className="py-1">
                  GAME-CHANGING A17 PRO CHIP — A Pro-class GPU makes mobile
                  games feel so immersive, with rich environments and realistic
                  characters. A17 Pro is also incredibly efficient and helps to
                  deliver amazing all-day battery life.
                </li>
                <li className="py-1">
                  POWERFUL PRO CAMERA SYSTEM — Get incredible framing
                  flexibility with 7 pro lenses. Capture super high-resolution
                  photos with more color and detail using the 48MP Main camera.
                  And take sharper close-ups from farther away.
                </li>
                <li className="py-1">
                  CUSTOMIZABLE ACTION BUTTON — Action button is a fast track to
                  your favorite feature. Just set the one you want, like Silent
                  mode, Camera, Voice Memo, Shortcut, and more. Then press and
                  hold to launch the action.
                </li>
              </ul>
            </div>
            <a
              href="https://apple.com/in/"
              target="_blank"
              className="mt-1 text-sm text-teal-600 hover:text-amber-500 cursor-pointer"
            >
              See more product Details
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:w-1/6">
          <div className="flex flex-col  items-start bg-gray-100 border p-4 rounded-t-lg">
            <p className="font-semibold">With Exchange</p>
            <p className="text-red-700">Up to ₹32,750.00 off</p>
          </div>
          <div className="flex flex-col items-start border p-4 rounded-b-lg">
            <p className="font-semibold ">Without Exchange</p>
            <p className="text-red-700 font-semibold">₹1,84,900</p>
            <p>
              {' '}
              <span className="mt-1 text-sm text-teal-700 hover:text-amber-500 cursor-pointer">
                FREE delivery
              </span>{' '}
              <span className="font-semibold">Sunday 8th, October.</span>{' '}
            </p>
            <a
              href="/"
              className="my-2 text-sm text-teal-600 hover:text-amber-500 cursor-pointer"
            >
              See details
            </a>
            <p>
              Or fastest delivery{' '}
              <span className="font-semibold">Saturday, 7 October.</span> Order
              within 10 hrs 12 mins.
              <span className="mt-1 text-sm text-teal-600 hover:text-amber-500 cursor-pointer">
                {' '}
                Details
              </span>
            </p>
            <p className="text-lg text-green-700 my-2">In Stock</p>

            <button className="text-sm w-full py-2 mb-1 mt-2 bg-yellow-400 rounded-full hover:bg-yellow-500 shadow-md">
              Add to Cart
            </button>
            <button className="text-sm w-full py-2 mt-1 bg-orange-400 rounded-full hover:bg-orange-500 shadow-md">
              Add to Cart
            </button>
          </div>

          <hr className="mt-4" />
          <button className="text-sm w-full py-2 mt-4 rounded-xl border text-left hover:shadow-md pl-3">
            Add to wish list
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
