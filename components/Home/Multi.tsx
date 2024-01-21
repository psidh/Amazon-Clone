import React from 'react';

interface CardProps {
  title: string;
  images: string[];
  description: string;
}

const InformationCard: React.FC<CardProps> = ({
  title,
  images,
  description,
}) => (
  <div className='border p-4 m-2'>
    <h3 className='text-xl font-semibold mb-2'>{title}</h3>
    <p className='text-sm text-gray-600'>{description}</p>

    <div className='grid grid-cols-2 gap-2 mt-4'>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${title}-Image-${index}`}
          className='w-full h-full object-cover mb-2'
        />
      ))}
    </div>
  </div>
);

const Multi: React.FC = () => {
  const cardData = [
    {
      title: 'Up to 75% off | Headphone',
      images: ['/home-page/grid1/g1.jpg', '/home-page/grid1/g2.jpg', '/home-page/grid1/g3.jpg', '/home-page/grid1/g4.jpg'],
      description: 'Amazing Discounts exclusively',
    },
    {
      title: 'Up to 60% off | Styles for men',
      images: ['/home-page/grid2/g5.jpg', '/home-page/grid2/g6.jpg', '/home-page/grid2/g7.jpg', '/home-page/grid2/g8.jpg'],
      description: 'Explore Tees, Shirts, and many more',
    },
    {
      title: 'Electronics | 55% off',
      images: ['/home-page/grid3/g9.jpg', '/home-page/grid3/g10.jpg', '/home-page/grid3/g11.jpg', '/home-page/grid3/g12.jpg'],
      description: 'Mircowaves, Washing Machines and more',
    },
    {
      title: 'Home appliances |Starts ₹199',
      images: ['/home-page/grid4/g13.jpg', '/home-page/grid4/g14.jpg', '/home-page/grid4/g15.jpg', '/home-page/grid4/g16.jpg'],
      description: 'Explore Home products',
    },
  ];

  return (
    <div>
      <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6'>
        {cardData.map((card, index) => (
          <div key={index}>
            <InformationCard
              title={card.title}
              images={card.images}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Multi;
