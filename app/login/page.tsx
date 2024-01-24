'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

export default function Login() {
  const router = useRouter();

  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  const onLogin = async () => {
    try {
      toast.loading('Waiting...', {
        duration: 2000,
      });
      const response = await axios.post('/api/login', user);
      toast.success('Login Successful');
      router.push('/');
    } catch (error: any) {
      toast.error('Email or Password seems to be incorrect. Please try again');
      console.log(error);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className='flex flex-col justify-center items-center my-24 bg-gray-100'>
      <div className='login'>
        <Toaster />
        <h1 className='text-4xl my-8'>Login</h1>

        <label htmlFor='email' className='mb-2 font-semibold'>
          Email
        </label>
        <input
          className='input'
          id='email'
          type='email'
          placeholder='Enter your email'
          value={user.email}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
        />

        <label htmlFor='password' className='mb-2 font-semibold'>
          Password
        </label>
        <input
          className='input'
          id='password'
          type='password'
          placeholder='Enter your password'
          value={user.password}
          onChange={(event) =>
            setUser({ ...user, password: event.target.value })
          }
        />
        {buttonDisabled ? (
          <div className='flex flex-col'>
            <button
              className='my-2 px-12 py-1 border text-gray-300 w-full bg-gray-500 rounded-lg'
              disabled
            >
              Login
            </button>
            <Link href={'/signup'}>New User? SignUp</Link>
          </div>
        ) : (
          <div className='flex flex-col'>
            <button onClick={onLogin} className='auth'>
              Login
            </button>
            <Link href={'/signup'}>New User? SignUp</Link>
          </div>
        )}
      </div>
    </div>
  );
}
