import { Document, Schema } from 'mongoose';

interface User extends Document {
  firstname: String;
  lastname: String;
  email: String;
  password: String;
  address: String;
  pincode: String;
  cart: CartItem[];
  orders: OrderItem[];
  forgotPasswordToken: String;
  forgotPasswordTokenExpiry: Date;
  verifyToken: String;
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
