import React from 'react';

interface CardProps {
  title: string;
  images: string[];
  description: string;
}

const InformationCard: React.FC<CardProps> = ({ title, images, description }) => (
  <div className="border p-4 m-2">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>

    <div className="grid grid-cols-2 gap-2 mt-4">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`${title}-Image-${index}`} className="w-full h-full object-cover mb-2" />
      ))}
    </div>
  </div>
);

const Multi: React.FC = () => {
  const cardData = [
    {
      title: 'Nested Card 1',
      images: ['/g1.jpg', '/g2.jpg', '/g3.jpg', '/g4.jpg'],
      description: 'Description for Nested Card 1',
    },
    {
      title: 'Nested Card 2',
      images: ['/g5.jpg', '/g6.jpg', '/g7.jpg', '/g8.jpg'],
      description: 'Description for Nested Card 2',
    },
    {
      title: 'Nested Card 1',
      images: ['/g9.jpg', '/g10.jpg', '/g11.jpg', '/g12.jpg'],
      description: 'Description for Nested Card 1',
    },
    {
      title: 'Nested Card 2',
      images: ['/g13.jpg', '/g14.jpg', '/g15.jpg', '/g16.jpg'],
      description: 'Description for Nested Card 2',
    },
    // Add more cards as needed
  ];

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mt-6">
        {cardData.map((card, index) => (
          <div key={index}>
            <InformationCard title={card.title} images={card.images} description={card.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Multi;
