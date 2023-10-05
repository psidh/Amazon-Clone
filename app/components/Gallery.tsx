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
  <div className="border p-4 m-2 ">
    <a href={link}>
    <img src={image} alt={title} className="w-full h-full object-cover mb-2 " />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-teal-600 hover:text-amber-500 cursor-pointer">
      {description}
    </p>
    </a>
  </div>
);

const Gallery: React.FC = () => {
  const cardData = [
    {
      title: 'Great Indian Festival',
      image: '/p1.jpg',
      description: 'See all offers',
      link: '/'
    },
    {
      title: 'iPhone 15',
      image: '/iPhone.png',
      description: 'See all offers',
      link: '/iphone'
    },
    {
      title: 'Sports at ₹499',
      image: '/p3.jpg',
      description: 'See all offers',
      link: '/'
    },
    {
      title: 'Gym Equipment',
      image: '/p4.jpg',
      description: 'See all offers',
      link: '/'
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
              link={card.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
