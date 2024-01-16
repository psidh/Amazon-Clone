'use client'
import Secbar from '@/components/Secbar';
import Slides from '@/components/Slider';
import Gallery from '@/components/Gallery';
import Multi from '@/components/Multi';
import Button from '@/components/Button';

const  Home = () => {
  return (
    <div>
      <Secbar />
      <Slides />
      <Gallery />
      <Multi />
      <Button />
    </div>
  );
}


export default Home;