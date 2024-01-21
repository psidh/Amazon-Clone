import { connect } from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import Product from '@/models/productModel';
connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const products = Array.isArray(reqBody) ? reqBody : [reqBody];

    const savedProducts = await Promise.all(
      products.map(async (productData) => {
        const { name } = productData;
        const existingProduct = await Product.findOne({ name });

        if (existingProduct) {
          return { error: `Product "${name}" already exists` };
        }

        const newProduct = new Product(productData);
        return newProduct.save();
      })
    );

    return NextResponse.json({
      message: 'Products created successfully',
      success: true,
      savedProducts,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
