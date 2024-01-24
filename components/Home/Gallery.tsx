import React from 'react';

interface CardProps {
  title: string;
  image: string;
  description: string;
  link: string;
}

const InformationCard: React.FC<CardProps> = ({
  title,
  image,
  description,
  link,
}) => (
  <div className='border p-4 m-2 '>
    <a href={link}>
      <img
        src={image}
        alt={title}
        className='w-full h-full object-cover mb-2 '
      />
      <h3 className='text-lg font-semibold mb-2'>{title}</h3>
      <p className='text-sm text-teal-600 hover:text-amber-500 cursor-pointer'>
        {description}
      </p>
    </a>
  </div>
);

const Gallery: React.FC = () => {
  const cardData = [
    {
      title: 'Great Indian Festival',
      image: '/home-page/grid5/p1.jpg',
      description: 'See all offers',
      link: '/',
    },
    {
      title: 'iPhone 15',
      image: '/products/iPhone.jpeg',
      description: 'See all offers',
      link: '/search/iphone',
    },
    {
      title: 'Sports at ₹499',
      image: '/home-page/grid5/p3.jpg',
      description: 'See all offers',
      link: '/',
    },
    {
      title: 'Gym Equipment',
      image: '/home-page/grid5/p4.jpg',
      description: 'See all offers',
      link: '/',
    },
  ];

  return (
    <div>
      <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:mt-6'>
        {cardData.map((card, index) => (
          <div key={index}>
            <InformationCard
              title={card.title}
              image={card.image}
              description={card.description}
              link={card.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
