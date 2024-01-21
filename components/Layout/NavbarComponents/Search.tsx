'use client';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  const router = useRouter();
  const handleSearch = () => {
    router.push(`/${searchQuery}`);
  };

  return (
    <div className='w-[70%] py-2 flex justify-center items-center mx-2'>
      <button
        className='py-3 px-4 bg-gray-200 hover:bg-gray-300 rounded-l-sm text-black'
        onClick={handleSearch}
      >
        All
      </button>
      <input
        id='search'
        type='text'
        className='bg-white overflow-auto w-full flex-shrink pl-4 py-3 outline-none'
        placeholder='Search Amazon'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <button
        className='py-4 px-4 rounded-r-sm bg-[#febd69] hover:opacity-90'
        onClick={handleSearch}
      >
        <FaSearch className='text-md text-black' />
      </button>
    </div>
  );
}
