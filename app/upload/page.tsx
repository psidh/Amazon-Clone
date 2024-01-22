'use client';
import React, { useEffect } from 'react';
import products from '@/data/data';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export default function upload() {
  const data = products;

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <Toaster />
      Uploading...
    </div>
  );
}
