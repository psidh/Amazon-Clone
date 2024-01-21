interface Product {
  _id(_id: any): unknown;
  name: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  image: string;
  quantity: number;
  rating: number;
}

export default Product;
