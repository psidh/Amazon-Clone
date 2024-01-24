import {connect } from  "@/dbConfig/dbConfig"
import { NextResponse, NextRequest } from 'next/server'
import Product from '@/models/productModel'
import User from '@/models/userModel'
import { getDataFromToken } from '@/helpers/getDataFromToken';

connect();

export async function POST(request:  NextRequest) {
  try {
    const userID = await getDataFromToken(request);
    const user  = await User.findById({ _id : userID});

    if(!user){
      return NextResponse.json({message : "User not found"}, {status : 400})
    }

    const response = await request.json();
    const productID = response._id;

    const product = await Product.findById({_id : productID});

    if(!product){
      return NextResponse.json({message : "Product not found"}, {status : 400})
    }

    const orders  = {
      product : productID,
      quantity : 1
    }

    user.orders.push(orders);
    await user.save();
    return NextResponse.json({message : "Order placed successfully"}, {status : 200})   
    
  } catch (error: any) {
    return (NextResponse.json({error : error.message}, {status: 500}))
    
  }
}