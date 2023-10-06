import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import arrow icons

interface SlideProps {
  image: string;
}

const Slide: React.FC<SlideProps> = ({ image }) => (
  <div className="">
    <Image src={image} width={1800} height={100} alt='Photos' className='w-auto h-auto'/>
  </div>
);

const Slides: React.FC = () => {
  const slidesData = [
    {
      image: "/slide/1.png"
    },
    {
      image: "/slide/2.png"
    },
    {
      image: "/slide/3.png"
    },
    {
      image: "/slide/4.png"
    },
  ];
  const CustomNextArrow: React.FC<any> = (props) => (
    <div {...props}>
      <FaChevronRight className="text-3xl text-white" />
    </div>
  );

  const CustomPrevArrow: React.FC<any> = (props) => (
    <div {...props}>
      <FaChevronLeft className="text-3xl text-white" />
    </div>
  );

  const settings = {
    dots: true,
    speed: 400,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1400,
  };

  

  return (
    <Slider {...settings}>
      {slidesData.map((slide, index) => (
        <div key={index}>
          <Slide image={slide.image} />
        </div>

      ))}
    </Slider>
  );
};

export default Slides;
