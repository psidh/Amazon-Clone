'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Product from '@/utils/interfaces/product';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import {toast,Toaster} from 'react-hot-toast';

function Cart() {
  const [cart, setCart] = useState<Array<Product>>([]);
  const [total, setTotal] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/cart`, {
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

        setCart(data);
        const totalPrice = data.reduce(
          (acc: any, item: any) => acc + item.price,
          0
        );
        setTotal(totalPrice);
      } catch (error) {
        console.error('Client error:', error);
      }
    };

    fetchData();
  }, []);

  const handleOrder = async () => {
    try {
      const response = await axios.post('/api/buy', cart);
      toast.success('Login Successful');
      router.push('/success');

    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className='bg-gray-100 h-screen'>
      <Toaster />
      <div className='flex flex-col lg:flex-row justify-between'>
        <div className='flex flex-col w-full lg:w-4/5  items-start my-8 md:mx-16 p-4 border rounded-md bg-white '>
          {cart.length > 0 ? (
            <h1 className='text-left md:text-3xl mb-4'>Shopping Cart</h1>
          ) : (
            <h1 className='text-left md:text-3xl mb-4'>Your cart is empty</h1>
          )}
          <hr />
          {Array.isArray(cart) && cart.length > 0 ? (
            cart.map((item) => (
              <div className='flex  justify-between items-center mt-4 '>
                <Image
                  src={`${item.image}`}
                  width={120}
                  height={120}
                  alt='iPhone Image'
                  className='mx-4'
                />

                <div className='flex flex-col justify-start items-start mx-4'>
                  <h1>{item.name}</h1>
                  <p className='text-xl font-bold'>₹{item.price}</p>
                  <Image
                    src={'/prime.png'}
                    width={50}
                    height={50}
                    alt='prime'
                  />
                  <p>
                    {' '}
                    <span className='font-semibold'>Size:</span>1TB
                  </p>
                  <hr />
                </div>
              </div>
            ))
          ) : (
            <div>
              <a
                href='/'
                className='text-2xl text-teal-600 hover:text-amber-500'
              >
                Shop Here
              </a>
            </div>
          )}
          <hr />
          <div className='ml-auto'>
            {/* Align content to the right */}
            <p className='text-3xl mx-4'>
              <span className='font-semibold'>Sub Total:</span> ₹
              {total.toFixed(2)}
            </p>
          </div>
        </div>

        <div className='flex flex-col lg:w-1/5 items-start my-8 mx-16 p-2 border rounded-md bg-white'>
          <p className='m-4'>
            <span className='font-semibold'>
              SubTotal ({cart.length} items):
            </span>{' '}
            ₹{total.toFixed(2)}{' '}
          </p>
          <button
            onClick={handleOrder}
            className='w-full py-1 my-2 bg-yellow-400 hover:bg-yellow-500 rounded-lg
      shadow-md'
          >
            Proceed to Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
