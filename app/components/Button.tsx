import React from 'react'

function Button() {
  return (
    <div className='flex flex-col justify-center items-center my-20'>
      <p className='text-sm mb-1'>See personalized recommendations</p>
      <button className='my-2 px-12 py-1 border border-yellow-600 bg-gradient-to-b from-yellow-400 to-yellow-500 hover:bg-yellow-500 text-black text-center rounded-lg'>Sign In</button>
      <p className='mt-1 text-sm'>New Customer? <span className="text-sm text-teal-600 hover:text-amber-500 cursor-pointer">Start here.</span></p>
    </div>
  )
}

export default Button;