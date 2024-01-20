
function Button() {
  return (
    <div className='flex flex-col justify-center items-center my-20'>
      <p className='text-sm mb-1'>See personalized recommendations</p>
      <a href="/login"><button className='auth'>Sign In</button></a> 
      <p className='mt-1 text-sm'>New Customer? <span className="underlines">Start here.</span></p>
    </div>
  )
}

export default Button;