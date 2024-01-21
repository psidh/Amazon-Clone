'use client';
import React from 'react';
import Secbar from '../components/Home/Secbar';
import Slides from '../components/Home/Slider';
import Gallery from '../components/Home/Gallery';
import Multi from '../components/Home/Multi';
import Button from '../components/Home/Button';

const Home = () => {
  return (
    <div>
      <Secbar />
      <Slides />
      <Gallery />
      <Multi />
      <Button />
    </div>
  );
};

export default Home;
