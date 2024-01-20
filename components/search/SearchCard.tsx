import Image from 'next/image'
import getDate from '@/utils/getDate';
export default function SearchCard() {
  
  const string = getDate();
  
  return (
    <>
      <section className='flex justify-items-start bg-gray-100 rounded-lg p-4 m-4'>
        <div>
          <Image src={'/iPhoneG.jpeg'} width={240} height={240} alt='iPhone Green Color' className='rounded-lg mr-4' />
        </div>
        <div className='flex flex-col items-start'>
          <h1 className='text-2xl mv-4'>Apple iPhone 14 (256 GB) Green</h1>
          <p className='text-xl font-semibold mb-2'><span className='text-gray-500 text-sm font-normal'>M.R.P</span> ₹79,900.00 <span className='line-through text-gray-400 text-sm font-normal'> ₹89,900.00</span></p>
          <p className='mb-2'>Save extra with No Cost EMI</p>
          <Image src={'/prime.png'} width={60} height={60} alt='prime icon' className='mb-2' />
          <p className=''>FREE Delivery <span className='font-semibold'>{string}</span></p>
        </div>  
      </section>
    </>
  )
}
