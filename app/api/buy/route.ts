import { getDataFromToken } from '@/helpers/getDataFromToken';
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/userModel';

interface ICartItem {
  product: {
    _id: string; // adjust the type based on your actual model
  };
  quantity: number;
}

export async function POST(request: NextRequest) {
  try {
    const userID = await getDataFromToken(request);

    const user = await User.findById({ _id: userID });

    if (!user || !user.cart || user.cart.length === 0) {
      return NextResponse.json({ message: 'Cart is empty' }, { status: 400 });
    }

    const orderItems = user.cart.map((cartItem: ICartItem) => ({
      product: cartItem.product._id,
      quantity: cartItem.quantity || 1,
    }));

    user.orders.push(...orderItems);
    user.cart = [];

    await user.save();

    return NextResponse.json(
      { message: 'Order placed successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
