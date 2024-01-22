import { connect } from '@/dbConfig/dbConfig';
import Product from '@/models/productModel';
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function GET(request: NextRequest) {
  try {
    const query: string = request.nextUrl.searchParams.get('query') ?? '';
    const regex = new RegExp(escapeRegExp(query), 'i');

    // Example: Searching in multiple fields (name and description)
    const data = await Product.find({
      $or: [
        { name: { $regex: regex } },
        { description: { $regex: regex } },
        // Add more fields as needed
      ],
    });

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Function to escape special characters for regex
function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
