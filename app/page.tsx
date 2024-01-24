'use client';
import React from 'react';
import Secbar from '../components/Home/Secbar';
import Slides from '../components/Home/Slider';
import Gallery from '../components/Home/Gallery';
import Multi from '../components/Home/Multi';

const Home = () => {
  return (
    <div>
      <Secbar />
      <Slides />
      <Gallery />
      <Multi />
    </div>
  );
};

export default Home;
