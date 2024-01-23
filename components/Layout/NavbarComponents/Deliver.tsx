import { HiOutlineLocationMarker } from 'react-icons/hi';

export default function Deliver() {
  return (
    <div className='nav-class'>
      <HiOutlineLocationMarker className=' text-white text-xl' />
      <div className='flex flex-col justify-start items-left'>
        <p className='text-sm text-gray-500'>Deliver to</p>
        <p className='text-md font-semibold text-gray-200'>India</p>
      </div>
    </div>
  );
}
