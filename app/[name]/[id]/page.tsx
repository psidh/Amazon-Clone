'use client';
// Import necessary modules and components
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Product from '@/utils/interfaces/product';
import Image from 'next/image';
import Date from '@/utils/getDate';
import toast, { Toaster } from 'react-hot-toast';

// Define the ProductDetail component
const ProductDetail = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const today = Date()[0];
  const tomorrow = Date()[1];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/search/product?id=${params?.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          console.error('Server error:', response);
          console.error('Failed to fetch data from the server');
          return;
        }

        const data = await response.json();
        setProduct(data[0]);
      } catch (error) {
        console.error('Client error:', error);
      }
    };

    fetchData();
  }, [params?.id]);

  const handleAddToCart = async() => {
    try {
        const response = await fetch('/api/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(product),
        });

        if (!response.ok) {
          console.error('Server error:', response);
          console.error('Failed to fetch data from the server');
          return;
        }
        toast.success('Added to cart');
    } catch (error: any) {
      console.log(error.message);
    }
    router.push('/');
  };

  const handleBuyNow = () => {
    router.push('/');
  };

  const handleWishList = () => {
    router.push('/');
  }


  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <div className='flex flex-col justify-center xl:flex-row  py-20 px-10'>
      <Toaster />
      <div className='flex lg:w-1/3 sm:pb-10 container mx-auto'>
        {/* Set max height for the image container */}
        <div className='w-full overflow-hidden sm:pb-10'>
          <Image
            src={product.image}
            layout='responsive'
            width={500}
            height={1200}
            objectFit='cover'
            alt='iPhone'
            className='w-full h-full'
          />
        </div>
      </div>

      <div className='flex lg:w-3/6 lg:px-4 container mx-auto'>
        <div className='flex flex-col lg:flex-grow sm:flex-shrink'>
          <h1 className='text-2xl'>{(product.name).toUpperCase()}</h1>
          <a
            href={`https://${product.brand}.com/`}
            className='text-sm text-teal-600 hover:text-amber-600 pb-2'
          >
            Visit the {product.brand} Store
          </a>
          <hr />
          <p className='text-3xl font-normal py-4'>₹{product.price}</p>
          <Image src={'/prime.png'} width={60} height={10} alt='I' />
          <p className='text-sm'>Inclusive of all Taxes</p>
          <p className='text-center text-sm py-4'>
            Now, <span className='font-semibold'>buy more in 1-click</span>{' '}
            with Amazon Pay Later.
          </p>
          <hr />
          <div className='flex justify-left items-center py-2'>
            <Image
              src={'/offer.jpeg'}
              width={20}
              height={10}
              alt='I'
              className='py-2'
            />
            <p className='text-sm font-semibold pl-2'>
              Inclusive of all Taxes
            </p>
          </div>
          <div className='flex flex-col w-2/6 p-4 rounded-md shadow-md text-sm my-2 mb-4'>
            <h2 className='font-semibold'>No Cost EMI</h2>
            <p className=''>
              Upto ₹{product.price / 12} EMI interest savings on select Credit Cards
            </p>
          </div>
          <hr />
          <Image
            src={'/amazon-logo-pack/policy.png'}
            width={450}
            height={70}
            alt='benefits'
            className='my-4'
          ></Image>
          <hr />

          <div className='grid grid-cols-2 my-2'>
            <div className='font-semibold'>
              <p>Size</p>
              <p>Brand </p>
              <p>Model Name </p>
              <p>Network Service Provider </p>
              <p>Operating System </p>
              <p>Cellular Technology</p>
            </div>
            <div>
              <p>1TB</p>
              <p>{product.brand}</p>
              <p>{product.name}</p>
              <p>Unlocked</p>
              <p>iOS</p>
              <p>5G</p>
            </div>
          </div>

          <hr />
          <div className='my-2'>
            <h3 className='font-semibold'>About this Item</h3>
            <ul
              style={{ listStyleType: 'disc', paddingLeft: '20px' }}
              className='text-sm'
            >
              <li className='py-1 text-justify'>
                FORGED IN TITANIUM — {product.name} has a strong and light
                aerospace-grade titanium design with a textured matte-glass
                back. It also features a Ceramic Shield front that’s tougher
                than any smartphone glass. And it’s splash, water, and dust
                resistant.
              </li>
              <li className='py-1 text-justify'>
                ADVANCED DISPLAY — The 6.1” Super Retina XDR display with
                ProMotion ramps up refresh rates to 120Hz when you need
                exceptional graphics performance. Dynamic Island bubbles up
                alerts and Live Notifications. Plus, with Always-On display,
                your Lock Screen stays glanceable, so you don’t have to tap it
                to stay in the know.
              </li>
              <li className='py-1 text-justify'>
                GAME-CHANGING A17 PRO CHIP — A Pro-class GPU makes mobile
                games feel so immersive, with rich environments and realistic
                characters. A17 Pro is also incredibly efficient and helps to
                deliver amazing all-day battery life.
              </li>
              <li className='py-1 text-justify'>
                POWERFUL PRO CAMERA SYSTEM — Get incredible framing
                flexibility with 7 pro lenses. Capture super high-resolution
                photos with more color and detail using the 48MP Main camera.
                And take sharper close-ups from farther away.
              </li>
              <li className='py-1 text-justify'>
                CUSTOMIZABLE ACTION BUTTON — Action button is a fast track to
                your favorite feature. Just set the one you want, like Silent
                mode, Camera, Voice Memo, Shortcut, and more. Then press and
                hold to launch the action.
              </li>
            </ul>
          </div>
          <a
            href={`https://${product.brand}.com/`}
            target='_blank'
            className='my-2 text-sm text-teal-600 hover:text-amber-500 cursor-pointer'
          >
            See more product Details
          </a>
        </div>
      </div>

      <div className='flex flex-col lg:w-1/6 container mx-auto'>
        <div className='flex flex-col  items-start bg-gray-100 border p-4 rounded-t-lg'>
          <p className='font-semibold'>With Exchange</p>
          <p className='text-red-700'>Up to ₹{product.price / 2} off</p>
        </div>
        <div className='flex flex-col items-start border p-4 rounded-b-lg'>
          <p className='font-semibold '>Without Exchange</p>
          <p className='text-red-700 font-semibold'>₹{product.price}</p>
          <p>
            {' '}
            <span className='mt-1 text-sm text-teal-700'>
              FREE delivery
            </span>{' '}
            <span className='font-semibold'> {tomorrow[0]} {" "} {tomorrow[1]}</span>{' '}
          </p>
          <p className='my-2 text-sm text-teal-600 hover:text-amber-500 cursor-pointer'>
            See details
          </p>
          <p>
            Or fastest delivery{' '}
            <span className='font-semibold'> {today[0]} {" "} {today[1]}</span> Order
            within 10 hrs 12 mins.
            <span className='mt-1 text-sm text-teal-600 hover:text-amber-500 cursor-pointer'>
              {' '}
              Details
            </span>
          </p>
          <p className='text-lg text-green-700 my-2'>In Stock</p>
          <button
            onClick={handleAddToCart}
            className='text-sm w-full py-2 mb-1 mt-2 bg-yellow-400 rounded-full hover:bg-yellow-500 shadow-md'
          >
            Add to Cart
          </button>
          <button 
            onClick={handleBuyNow}
            className='text-sm w-full py-2 mt-1 bg-orange-400 rounded-full hover:bg-orange-500 shadow-md'>
            Buy Now
          </button>
        </div>

        <hr className='mt-4' />
        <button 
          onClick={handleWishList}
          className='text-sm w-full py-2 mt-4 rounded-xl border text-left hover:shadow-md pl-3'>
          Add to wish list
        </button>
      </div>
    </div>
  </div>
      );
};

export default ProductDetail;
