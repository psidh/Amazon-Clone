import { connect } from '@/dbConfig/dbConfig';
import Product from '@/models/productModel';
import { NextRequest, NextResponse } from 'next/server';

connect();


export async function GET(request: NextRequest) {
  try {
    const query = request.nextUrl.searchParams.get('query');
    const data = await Product.find({name : query});
    console.log(data);
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}