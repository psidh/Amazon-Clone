'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Login() {
  const router = useRouter();

  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const [loading, setLoading] = React.useState(true);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post('/api/users/login', user);

      console.log('Login Success', response.data);
      router.push('/profile');
    } catch (error: any) {
      console.log('Login Failed');
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
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
    <div className="flex flex-col my-16 justify-center items-center h-screen">
      <div className="flex flex-col border border-gray-300 py-4 px-8 rounded-lg 2xl w-[80%] md:w-[35%]">
        <h1 className="text-4xl my-8">Login</h1>

        <label htmlFor="email" className='mb-2 font-semibold'>
          Email
        </label>
        <input
          className="p-2 border border-gray-300 rounded-md mb-6 focus:outline-none "
          id="email"
          type="email"
          placeholder='Enter your email'
          value={user.email}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
        />
        <label htmlFor="password" className='mb-2 font-semibold'>Password</label>
        <input
          className="p-2 border border-gray-300 rounded-md mb-4 focus:outline-none "
          id="password"
          type="password"
          placeholder='Enter your password'
          value={user.password}
          onChange={(event) =>
            setUser({ ...user, password: event.target.value })
          }
        />

        <button
          onClick={onLogin}
          className="p-2 my-6 border rounded-xl transition duration-150 bg-[#FFD814]
      "
        >
          Login
        </button>
        <Link href={'/signup'}>New User? Signup</Link>
      </div>
    </div>
  );
}
