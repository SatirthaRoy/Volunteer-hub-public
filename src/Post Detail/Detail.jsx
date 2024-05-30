import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const Detail = () => {

  const data = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className='w-[95%] mx-auto mt-5 space-y-5 dark:text-white grid md:grid-cols-2 grid-cols-1 gap-4'>
      <div className='w-full space-y-6'>
        <img src={data.thumbnail} alt="" className='object-cover w-full rounded-3xl'/>
        <h1 className='text-3xl font-semibold'>{data.title}</h1>
        <div className="divider dark:before:bg-white dark:after:bg-white"></div> 
        <h1 className='text-xl font-semibold'>Description</h1>
        <p className='text-base font-medium'>{data.description}</p>
      </div>
      <div>
        <h1 className='text-xl font font-semibold'>Category: <span className='font-normal'>{data.category}</span></h1>
        <div className="divider dark:before:bg-white dark:after:bg-white"></div> 
        <h1 className='text-xl font font-semibold'>Location: <span className='font-normal'>{data.location}</span></h1>
        <div className="divider dark:before:bg-white dark:after:bg-white"></div> 
        <h1 className='text-xl font font-semibold'>Volunteers needed: <span className='font-normal'>{data.volunteers}</span></h1>
        <div className="divider dark:before:bg-white dark:after:bg-white"></div> 
        <h1 className='text-xl font font-semibold'>Deadline: <span className='font-normal'>{data.deadline.split('T')[0]}</span></h1>
        <div className="divider dark:before:bg-white dark:after:bg-white"></div> 
        <button onClick={() => {
            if(!data.volunteers) {
              Swal.fire({
                icon: "error",
                title: "No more volunteer is needed."
              });
            }else {
              navigate(`/requesttobevolunteer/${data._id}`);
            }
          }} className='bg-blue-500 text-white font-semibold p-4 rounded-xl btn hover:bg-blue-500'>Be a Voulunteer</button>
      </div>
      
    </div>
  )
}

export default Detail