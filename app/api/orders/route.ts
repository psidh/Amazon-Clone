import { getDataFromToken } from '@/helpers/getDataFromToken';
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/userModel';
import Product from '@/models/productModel';

export async function GET(request: NextRequest) {
  try {
    const userID = await getDataFromToken(request);

    if (userID) {
      const user = await User.findOne({ _id: userID });

      const orderItems = user?.orders;
      
      if (orderItems && orderItems.length > 0) {
        const productIDs = orderItems.map((item:any) => item.product);

        const products = await Product.find({ _id: { $in: productIDs } });


        return NextResponse.json(products);
      } else {
        return NextResponse.json({ message: 'No orders' }, { status: 200 });
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
