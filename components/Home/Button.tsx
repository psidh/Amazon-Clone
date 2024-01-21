// Import necessary modules
import { useEffect, useState } from 'react';
import User from '@/utils/interfaces/user';

// Button component
function Button() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/profile`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setUser(data.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    !user && (
      <div className='flex flex-col justify-center items-center my-20'>
        <p className='text-sm mb-1'>See personalized recommendations</p>
        <a href='/login'>
          <button className='auth'>Sign In</button>
        </a>
        <p className='mt-1 text-sm'>
          New Customer? <span className='underline'>Start here.</span>
        </p>
      </div>
    )
  );
}

export default Button;
