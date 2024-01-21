'use client';
import { BsCart } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
function Cart() {
  const router = useRouter();
  const cart = () => {
    router.push('/cart');
  };
  return (
    <div>
      <div className='nav-class rounded-lg' onClick={cart}>
        <div className='flex justify-end items-end text-white'>
          <BsCart className='text-3xl text-white mb-2' />
        </div>
      </div>
    </div>
  );
}

export default Cart;
