import React from 'react';
import Image from 'next/image';
function Footer() {
  return (
    <div className="bg-[#131a22] text-gray-200">
      <div className="grid sm:grid-cols-1 sm:mx-4 sm:px-8 sm:py-10 md:grid-cols-2 md:mx-16 md:p-14 lg:grid-cols-4 lg:mx-32 lg:p-20 ">
        <div className="footer-link">
          <h1 className="text-md font-semibold pb-2 ">Get to Know Us</h1>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Science</p>
        </div>

        <div className="footer-link">
          <h1 className="text-md font-semibold pb-2 ">Connect with Us</h1>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>

        <div className="footer-link">
          <h1 className="text-md font-semibold pb-2 ">Sell on Amazon</h1>
          <p>Sell under Amazon Accelerator</p>
          <p>Protect and Build Your Brand</p>
          <p>Amazon Global Selling</p>
          <p>Become an Affiliate</p>
          <p>Fulfilment by Amazon</p>
          <p>Advertise Your Products</p>
        </div>

        <div className="footer-link">
          <h1 className="text-md font-semibold pb-2 ">Let Us Help You</h1>
          <p>COVID-19 and Amazon</p>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>100% Purchase Protection</p>
          <p>Amazon App Download</p>
          <p>Help</p>
        </div>
      </div>

      <div className="mx-32 pb-12 text-gray-200 flex flex-col items-center justify-center">
        <div
          className="flex justify-center items-center
        "
        >
          <p className="px-2 hover:underline underline-offset-2">
            Conditions of Use & Sale
          </p>
          <p className="px-2 hover:underline underline-offset-2">
            {' '}
            Privacy Notice{' '}
          </p>
          <p className="px-2 hover:underline underline-offset-2">
            {' '}
            Interest-Based Ads{' '}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <p className="px-2">
            © 1996-2023, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
      <div className="bg-black p-8 text-gray-200 flex flex-col items-center justify-center">
        <a href="/">
        <Image
          src={'/amazon-logo-pack/amazon-logo-white.png'}
          alt="logo"
          width={100}
          height={20}
          className="my-2"
        />
        </a>

      </div>
    </div>
  );
}

export default Footer;




