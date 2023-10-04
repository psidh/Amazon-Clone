import React from 'react';

interface CardProps {
  title: string;
  image: string;
  description: string;
}

const InformationCard: React.FC<CardProps> = ({ title, image, description }) => (
  <div className="border p-4 m-2">
    <img src={image} alt={title} className="w-full h-full object-cover mb-2 " />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const Gallery: React.FC = () => {
  const cardData = [
    {
      title: 'Card 1',
      image: '/p1.jpg',
      description: 'Description for Card 1',
    },
    {
      title: 'Card 2',
      image: '/p2.jpg',
      description: 'Description for Card 2',
    },
    {
      title: 'Card 3',
      image: '/p3.jpg',
      description: 'Description for Card 3',
    },
    {
      title: 'Card 4',
      image: '/p4.jpg',
      description: 'Description for Card 4',
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mt-6">
        {cardData.map((card, index) => (
          <div key={index}>
            <InformationCard title={card.title} image={card.image} description={card.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
