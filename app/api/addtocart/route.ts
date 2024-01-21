import { getDataFromToken } from '@/helpers/getDataFromToken';
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/userModel';
import Product from '@/models/productModel';

export async function POST(request: NextRequest) {
  try {
    const userID = await getDataFromToken(request);

    if(userID) {
      const reqBody = await request.json();
      
      const productID  = reqBody._id;
      const user = await User.findOne({_id: userID });
      const product = await Product.findOne({_id: productID });
      console.log(productID);
      
      if(user && product) {
        const cartItem = {
          product: product._id,
          // quantity: quantity,
        };
        user.cart.push(cartItem);
        await user.save();
        return NextResponse.json({ message: 'Product added to cart' }, { status: 200 });      
      } else{
        return NextResponse.json({ message: 'maybe userid and product id are different' }, { status: 500 });
      }
      
    }else{
      return NextResponse.json({ message: 'Session Expired, Login Again' }, { status: 404 });

    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
