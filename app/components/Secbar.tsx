import React from 'react';
import Image from 'next/image';
import  {AiOutlineMenu} from "react-icons/ai"
function Secbar() {
  return (
    <div className="flex flex-row justify-start items-center bg-[#232f3e] py-2 px-4 text-white">
      <AiOutlineMenu />
      <div className='text-sm  flex flex-row justify-between items-center bg-[#232f3e] py-1 px-2'>
      <p className='px-2'>All</p>
      <p className='px-2'>Today's Deals</p>
      <p className='px-2'>Customer Service</p>
      <p className='px-2'>Registry</p>
      <p className='px-2'>Gift Cards</p>
      <p className='px-2'>Sell</p>
      </div>
    </div>
  );
}

export default Secbar;


