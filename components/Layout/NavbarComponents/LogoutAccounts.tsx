'use client';
import { useState } from 'react';

interface LogoutAccountsProps {
  handleLogout: () => void;
}

const LogoutAccounts: React.FC<LogoutAccountsProps> = ({ handleLogout }) => {
  


  return (
    <div>
      <div className='nav-class rounded-lg'>
        <div className='flex flex-col justify-start items-left'>
          <p onClick={handleLogout}>Logout</p>
          <a href='/profile' className='text-md font-semibold'>
            Accounts & Lists
          </a>
        </div>
      </div>
    </div>
  );
};

export default LogoutAccounts;
