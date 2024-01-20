import { Document, Schema } from 'mongoose';

interface User extends Document {
  email: string;
  password: string;
  address?: string;
  cart: CartItem[];
  orders: OrderItem[];
  forgotPasswordToken: string;
  forgotPasswordTokenExpiry: Date;
  verifyToken: string;
  verifyTokenExpiry: Date;
}

interface CartItem {
  product: Schema.Types.ObjectId;
  quantity: number;
}

interface OrderItem {
  product: Schema.Types.ObjectId;
  quantity: number;
}

export default User;
