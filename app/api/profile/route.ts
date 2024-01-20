import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import { getDataFromToken } from '@/helpers/getDataFromToken';
connect();

export async function GET(request: NextRequest) {
  try {
    // const reqBody = await request.json();
    // const { email } = reqBody;
    // console.log(reqBody);

    // //check if user exists
    // const user = await User.findOne({ email });
    // return NextResponse.json(user);
    const userID = await getDataFromToken(request);
    const user = await User.findOne({_id: userID}).select('-password');

    return NextResponse.json({
      message: 'User found',
      data: user,
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
