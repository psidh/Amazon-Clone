import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

async function connectToDatabase() {
  try {
    await connect();
    console.log('Connected to the database successfully');
  } catch (error) {
    console.error('Error connecting to the database', error);
    throw new Error('Database connection error');
  }
}

export async function POST(request: NextRequest) {
  await connectToDatabase();

  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    // Check if user exists
    const user = await User.findOne({ email });
    console.log('User:', user);

    if (!user) {
      return NextResponse.json(
        { error: 'User does not exist' },
        { status: 400 }
      );
    }
    console.log('User exists');

    const validPassword = await bcryptjs.compare(password, user.password);

    if (!validPassword) {
      console.log('Invalid password');
      return NextResponse.json({ error: 'Invalid password' }, { status: 400 });
    }

    // Create token data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    // Create token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: '1h',
    });

    const response = NextResponse.json({
      message: 'Login successful',
      success: true,
    });

    response.cookies.set('token', token, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    console.error('Error during request:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
