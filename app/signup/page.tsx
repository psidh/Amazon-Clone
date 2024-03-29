'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import signUpUser from '@/utils/authentication/signup';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

export default function SignUp() {
  const router = useRouter();

  const [user, setUser] = React.useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    address: '',
    pincode: '',
  });

  const [password2, setPassword2] = React.useState('');
  const [buttonDisabled, setButtonDisabled] = React.useState(true);


  const signUpUser = async () => {
    try {
      toast.loading('Waiting...', {
        duration: 2000,
      });
      const response = await axios.post('/api/signup', user);
      toast.success('SignUp successful');
      router.push('/login');
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    if (
      user.firstname.length > 0 &&
      user.lastname.length > 0 &&
      user.email.length > 0 &&
      user.address.length > 0 &&
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
    <div className='flex flex-col justify-center items-center my-24'>
      <div className='login'>
        <Toaster />
        <h1 className='text-4xl my-8'>SignUp</h1>
        <div className='flex space-x-5 items-center'>
          <div className='flex flex-col w-full'>
            <label className='mb-2 font-semibold'>First Name</label>
            <input
              className='input'
              id='firstname'
              type='text'
              placeholder='Enter your first name'
              value={user.firstname}
              onChange={(event) =>
                setUser({ ...user, firstname: event.target.value })
              }
            />
          </div>

          <div className='flex flex-col w-full'>
            <label className='mb-2 font-semibold'>Last Name</label>
            <input
              className='input'
              id='lastname'
              type='text'
              placeholder='Enter your last name'
              value={user.lastname}
              onChange={(event) =>
                setUser({ ...user, lastname: event.target.value })
              }
            />
          </div>
        </div>

        <div className='flex space-x-5 items-center'>
          <div className='flex flex-col w-full'>
            <label className='mb-2 font-semibold'>Address</label>
            <textarea
              className='input'
              id='address'
              placeholder='Enter your address'
              rows={3}
              cols={30}
              value={user.address}
              onChange={(event) =>
                setUser({ ...user, address: event.target.value })
              }
            />
          </div>

          <div className='flex flex-col w-full'>
            <label className='mb-2 font-semibold'>Pincode</label>
            <input
              className='input'
              id='pincode'
              type='text'
              placeholder='Enter your pincode'
              value={user.pincode}
              onChange={(event) =>
                setUser({ ...user, pincode: event.target.value })
              }
            />
          </div>
        </div>

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

        <label htmlFor='password2' className='mb-2 font-semibold'>
          Re-enter Password
        </label>
        <input
          className='input'
          id='password2'
          type='password'
          placeholder='Re-enter your password'
          value={password2} // Corrected this line
          onChange={(event) => setPassword2(event.target.value)}
        />

        {buttonDisabled ? (
          <div className='flex flex-col'>
            <button
              className='my-2 px-12 py-1 border text-gray-300 w-full bg-gray-500 rounded-lg'
              disabled
            >
              SignUp
            </button>
            <Link href={'/login'}>Already a User? Login</Link>
          </div>
        ) : (
          <div className='flex flex-col'>
            <button onClick={signUpUser} className='auth'>
              SignUp
            </button>
            <Link href={'/login'}>Already a User? Login</Link>
          </div>
        )}
      </div>
    </div>
  );
}
