import { connect } from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import User from '@/models/userModel';

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { firstname, lastname, email, password, address, pincode } = reqBody;

    // console.log(reqBody);

    //check if user already exists
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: 'User already exists please login' },
        { status: 400 }
      );
    }

    // Hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      address,
      pincode,
    });

    const savedUser = await newUser.save();
       return NextResponse.json({
      message: 'User created successfully',
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
