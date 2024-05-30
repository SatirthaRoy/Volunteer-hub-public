import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <div className='fixed top-0 left-0 h-screen w-screen'>
        <img src="https://agentestudio.com/uploads/post/image/69/main_how_to_design_404_page.png" alt="" className='object-cover size-full'/>
      </div>
      <div className='fixed w-screen bottom-20 flex justify-center'>
        <Link to='/' className='px-5 bg-yellow-700 text-white font-bold text-2xl btn hover:bg-yellow-700 rounded-full'>BACK TO HOME</Link>
      </div>
      
    </>
    
  )
}

export default Error