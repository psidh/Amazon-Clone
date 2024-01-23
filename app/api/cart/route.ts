import { getDataFromToken } from '@/helpers/getDataFromToken';
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/userModel';
import Product from '@/models/productModel';

export async function GET(request: NextRequest) {
  try {
    const userID = await getDataFromToken(request);

    if (userID) {
      const user = await User.findOne({ _id: userID });

      const cartItems = user?.cart;

      if (cartItems && cartItems.length > 0) {
        // Extract product IDs from cartItems
        const productIDs = cartItems.map((item: any) => item.product);

        // Retrieve product details using the IDs
        const products = await Product.find({ _id: { $in: productIDs } });

        return NextResponse.json(products);
      } else {
        return NextResponse.json({ message: 'Cart is empty' }, { status: 200 });
      }
    } else {
      return NextResponse.json(
        { message: 'user or product does not exist' },
        { status: 500 }
      );
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
