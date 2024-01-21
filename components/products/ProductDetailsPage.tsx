// ProductDetailPage.tsx
import React from 'react';
import { useRouter } from 'next/navigation';

interface ProductDetailProps {
  name: string;
  description: string;
  price: number;
  
}

const ProductDetailPage: React.FC<ProductDetailProps> = ({ name, description, price }) => {
  const router = useRouter();

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>Price: ${price.toFixed(2)}</p>
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
};

export default ProductDetailPage;
