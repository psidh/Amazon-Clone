import React from 'react';

interface CardProps {
  title: string;
  image: string;
  description: string;
}

const InformationCard: React.FC<CardProps> = ({
  title,
  image,
  description,
}) => (
  <div className="border p-4 m-2 ">
    <img src={image} alt={title} className="w-full h-full object-cover mb-2 " />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-teal-600 hover:text-amber-500 cursor-pointer">
      {description}
    </p>
  </div>
);

const Gallery: React.FC = () => {
  const cardData = [
    {
      title: 'Great Indian Festival',
      image: '/p1.jpg',
      description: 'See all offers',
    },
    {
      title: 'Smartwatch starts at ₹1,999',
      image: '/p2.jpg',
      description: 'See all offers',
    },
    {
      title: 'Sports at ₹499',
      image: '/p3.jpg',
      description: 'See all offers',
    },
    {
      title: 'Gym Equipment',
      image: '/p4.jpg',
      description: 'See all offers',
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mt-6">
        {cardData.map((card, index) => (
          <div key={index}>
            <InformationCard
              title={card.title}
              image={card.image}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
