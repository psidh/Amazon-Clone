'use client';
import React, { useEffect } from 'react';
import products from '@/data/data';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export default function upload() {
  const data = products;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.post(`/api/upload`, data);
  //       toast.success('Upload successful', { duration: 3000 });
  //       console.log(data);
  //     } catch (error) {
  //       console.error('Error:', error);
  //       toast.error('Error uploading data');
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <Toaster />
      Uploading...
    </div>
  );
}
