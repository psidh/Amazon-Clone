'use client';
// Import necessary modules and components
import getDate from '@/utils/getDate';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Product from '@/utils/interfaces/product';

// Initialize productProps as an empty object
const productProps = {
  name: '',
  description: '',
  price: 0,
  category: '',
  brand: '',
  image: '',
  quantity: 0,
};

// Define the page component
export default function SearchResultsPage({ params }: { params: { id: string } }) {

  const [searchResults, setSearchResults] = useState<Array<Product>>([]);
  const router = useRouter();
  const string = getDate();
  // console.log("Params: ",params.id);

  // const encodedQuery = encodeURIComponent(params.toString());
  // console.log(encodedQuery);
  

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(`/api/search?query=${params?.id}`, {
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
        // console.log(data);
        
        setSearchResults(data);
      };

      fetchData();
    } catch (error) {
      console.error('Client error:', error);
    }
  }, []); 

  return (
    <div className='h-screen'>
      <h1 className='text-2xl font-bold mb-4'>Search Results</h1>
      <div className='grid sm:grid-cols-2'>
        {searchResults.map((result) => (
          <section key={result.name} className='flex justify-items-start bg-gray-100 rounded-lg p-4 m-4'>
            {/* <div>
              <Image src={result.image} width={240} height={240} alt='Product Image' className='rounded-lg mr-4' />
            </div> */}
            <div className='flex flex-col items-start'>
              <h1 className='text-2xl mv-4'>{result.name}</h1>
              <p className='text-xl font-semibold mb-2'>
                <span className='text-gray-500 text-sm font-normal'>M.R.P</span> ₹{result.price.toFixed(2)}{' '}
              </p>
              <p className='mb-2'>Save extra with No Cost EMI</p>
              <Image src={'/prime.png'} width={60} height={60} alt='Prime icon' className='mb-2' />
              <p className=''>FREE Delivery <span className='font-semibold'>{string}</span></p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
