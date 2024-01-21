import { BsCart } from 'react-icons/bs'

export default function Cart() {
  return (
    <div>
      <div className='nav-class rounded-lg'>
          <div className='flex justify-end items-end text-white'>
            <BsCart className='text-3xl text-white mb-2' />
          </div>
        </div>
    </div>
  )
}
