'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function SignUp() {
  const router = useRouter();

  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  const [password2, setPassword2] = React.useState('');

  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  const [loading, setLoading] = React.useState(false);

  const onSignUp = async () => {
    try {
      setLoading(true);
      const response = await axios.post('/api/signup', user);
      console.log('SignUp Success', response.data);
      router.push('/login');
      
    } catch (error: any) {
      console.log('SignUp Failed');
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (

      user.email.length > 0 &&
      user.password.length > 0 &&
      password2.length > 0 &&
      user.password === password2

    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user, password2]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="login">
        {loading ? (
          <h1 className="text-4xl my-8">Processing...</h1>
        ) : (
          <h1 className="text-4xl my-8">SignUp</h1>
        )}

        <label htmlFor="email" className="mb-2 font-semibold">
          Email
        </label>
        <input
          className="input"
          id="email"
          type="email"
          placeholder="Enter your email"
          value={user.email}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
        />

        <label htmlFor="password" className="mb-2 font-semibold">
          Password
        </label>
        <input
          className="input"
          id="password"
          type="password"
          placeholder="Enter your password"
          value={user.password}
          onChange={(event) =>
            setUser({ ...user, password: event.target.value })
          }
        />

        <label htmlFor="password2" className="mb-2 font-semibold">
          Re-enter Password
        </label>
        <input
          className="input"
          id="password2"
          type="password"
          placeholder="Re-enter your password"
          value={password2} // Corrected this line
          onChange={(event) => setPassword2(event.target.value)}
        />

        {buttonDisabled ? (
          <div className="flex flex-col">
            <button
              className="my-2 px-12 py-1 border text-gray-300 w-full bg-gray-500 rounded-lg"
              disabled
            >
              SignUp
            </button>
            <Link href={'/login'}>Already a User? Login</Link>
          </div>
        ) : (
          <div className="flex flex-col">
            <button onClick={onSignUp} className="auth">
              SignUp
            </button>
            <Link href={'/login'}>Already a User? Login</Link>
          </div>
        )}
      </div>
    </div>
  );
}
