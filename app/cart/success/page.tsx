import React from 'react'

export default function success() {
  return (
    <div className='flex flex-col items-center justify-center my-24'>
      <div className='p-4 border-green-600 border-2 rounded-lg w-[50%]'>
        <div className=''>
          <div className='flex justify-start items-start space-x-4'>
            <img src="/amazon-icons/tick.png" alt="" className='w-1/12 h-1/12' />
            <h1 className='text-2xl my-4 font-semibold'>Your Order has been placed !</h1>
          </div>
          <h2 className='text-lg my-4 font-normal'>Thank you for ordering from Amazon</h2>
        </div>
        <div className='flex justify-between space-x-4'>
          <a href="/orders" className='success'>View Orders</a>
          <a href="/profile" className='success'>Your Profile</a>
          <a href="/cart" className='success'>Your Cart</a>
        </div>
      </div>
    </div>
  )
}
