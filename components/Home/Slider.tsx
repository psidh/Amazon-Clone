
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import arrow icons

interface SlideProps {
  image: string;
}

const Slide: React.FC<SlideProps> = ({ image }) => (
  <div className='md:visible invisible'>
    <img src={image} alt='Photos' className='w-full h-1/2' />
  </div>
);

const Slides: React.FC = () => {
  const slidesData = [
    {
      image: '/slide/1.png',
    },
    {
      image: '/slide/2.png',
    },
    {
      image: '/slide/3.png',
    },
    {
      image: '/slide/4.png',
    },
  ];
  const CustomNextArrow: React.FC<any> = (props) => (
    <div {...props} className='md:visible invisible'>
      <FaChevronRight className='text-3xl text-white' />
    </div>
  );

  const CustomPrevArrow: React.FC<any> = (props) => (
    <div {...props} className='md:visible invisible'>
      <FaChevronLeft className='text-3xl text-white' />
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
    <section className='md:visible invisible'>
    <Slider {...settings}>
      {slidesData.map((slide, index) => (
        <div key={index}>
          <Slide image={slide.image} />
        </div>
      ))}
    </Slider>
    </section>
  );
};

export default Slides;
