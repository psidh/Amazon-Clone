import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required.'],
  },
  address: {type: String},
  cart: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
    quantity: {
      type: Number,
      default: 0,
    },
  }],
  orders: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
    quantity: {
      type: Number,
      default: 0,
    },
  }],
  forgotPasswordToken: {
    type: String,
    default: '', 
  },
  forgotPasswordTokenExpiry: {
    type: Date,
  },
  verifyToken: {
    type: String,
    default: '',
  },
  verifyTokenExpiry: {
    type: Date,
  },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
