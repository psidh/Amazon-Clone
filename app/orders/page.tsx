'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
export default function page() {
  const [orders, setOrders] = useState<Array<any>>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/orders`, {
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
        // console.log(data[0].product);
        
        setOrders(data);
      } catch (error) {
        console.error('Client error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='bg-gray-100'>
      <div className='flex flex-col lg:flex-row justify-between'>
        <div className='flex flex-col w-full lg:w-4/5  items-start my-8 md:mx-16 p-4 border rounded-md bg-white '>
          <h1 className='text-4xl m-4'>Orders</h1>
          {orders.map((order) => (
            <div key={order.product.id} className='flex my-6 justify-between items-center '>
              <Image
                src={order.product.image}
                width={140}
                height={140}
                alt='Order Image'
                className='mr-6'
              />

              <div className='flex flex-col justify-between items-start mr-4'>
                <h1 className='text-xl font-semibold'>{order.product.name}</h1>
                <p className='text-lg'>{order.product.description}</p>
                <p className='text-sm'>{order.product.category}</p>
                <p className='text-xl font-semibold'>₹{order.product.price}</p>
                <Image
                  src={'/amazon-icons/prime.png'}
                  width={50}
                  height={50}
                  alt='prime'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
