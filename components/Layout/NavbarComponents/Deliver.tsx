import { HiOutlineLocationMarker } from 'react-icons/hi';

export default function Deliver() {
  return (
    <div className='nav-class rounded-lg'>
      <HiOutlineLocationMarker className='text-md text-white' />
      <div className='flex flex-col justify-start items-left px-2'>
        <p className='text-sm text-gray-500'>Deliver to</p>
        <p className='text-md font-semibold text-gray-200'>India</p>
      </div>
    </div>
  );
}
