import React from 'react'
import { IoIosTime } from 'react-icons/io';
import { MdCategory } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';


const Post = ({data}) => {

  const navigate = useNavigate()

  return (
    <div className='dark:bg-black rounded-2xl p-4 border bg-white dark:border-white flex flex-col'>
      <div className='rounded-2xl w-full h-52'>
        <img src={data.thumbnail} alt="" className='object-cover w-full h-full rounded-2xl'/>
      </div>
      <h1 className='p-4 text-xl font-semibold'>{data.title}</h1>
      <p className='p-4 text-xl font-medium flex items-center gap-3'><MdCategory/>{data.category}</p>
      <p className='flex-grow p-4 font-normal text-xl flex items-center gap-3'><IoIosTime /> {data.deadline.split('T')[0]}</p>
      <button onClick={() => navigate(`/post/${data._id}`)} className='bg-blue-400 btn hover:bg-blue-400 text-white text-xl font-semibold rounded-md'>View Details</button>
    </div>
  )
}


const Volunteer = ({data}) => {

  const navigate = useNavigate()

  const data_six = data.length > 6 ? data.slice(0,6) : data;
  // console.log(data_six);

  return (
    <div className='w-[95%] mx-auto space-y-10 dark:text-white'>
      <h1 className='text-center text-4xl md:text-7xl font-semibold'>VOLUNTEER NEEDS NOW</h1>
      <p className='text-center font-normal text-xl'>Want to be volunteer? Go through our latest volunteer hiring posts.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          data_six.map((data, i) => <Post key={i} data={data}/>)
        }
      </div>
      <div className='flex items-center justify-center'>
        <button onClick={() => navigate('/need-volunteer')} className='bg-green-500 py-4 px-5 rounded-full btn hover:bg-green-500 text-white font-semibold'>See All</button>
      </div>
    </div>
  )
}

export default Volunteer