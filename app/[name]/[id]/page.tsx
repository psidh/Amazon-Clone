'use client';
// Import necessary modules and components
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Product from '@/utils/interfaces/product';

// Define the ProductDetail component
const ProductDetail = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/search/product?id=${params?.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          console.error('Server error:', response);
          console.error('Failed to fetch data from the server');
          return;
        }

        const data = await response.json();
        setProduct(data[0]);
      } catch (error) {
        console.error('Client error:', error);
      }
    };

    fetchData();
  }, [params?.id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-4">
            Price: ₹{product.price.toFixed(2)}
          </p>
          <p className="text-lg mb-4">Brand: {product.brand}</p>
          <p className="text-lg mb-4">Category: {product.category}</p>
          <p className="text-lg mb-4">Rating: {product.rating}</p>
          <p className="text-lg mb-4">
            Quantity available: {product.quantity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
