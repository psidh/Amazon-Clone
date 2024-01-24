import Image from 'next/image';
export default function Language() {
  return (
    <div>
      <div className='nav-class'>
        <Image
          src={'/amazon-icons/india.png'}
          width={20}
          height={20}
          alt='amazon logo'
          className='mb-1 mr-1'
        ></Image>
        <div className='flex flex-col justify-start items-left'>
          <p className='text-sm text-gray-200'>Hindi</p>
        </div>
      </div>
    </div>
  );
}
