import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import useData from '../../Utils/useData';
import {
  Card,
} from "@material-tailwind/react";
import Dead from './Dead';

// myAxios
import useAxios from '../../Utils/useAxios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const Addvolunteer = () => {

  const [date, setDate] = useState(new Date());
  const myAxios = useAxios();

  const {user} = useData();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    values: {
      name: user?.displayName,
      email: user?.email
    }
  })

  const onSubmit = (data, e) =>{
    // console.log(data);
    data.uid = user.uid;
    data.deadline = date;
    data.volunteers = Number(data.volunteers);
    const form = e.target;
    // console.log(form);
    // console.log(data);
    myAxios.post('/add', data)
    .then(res => {
      console.log(res.data);
      Swal.fire({
        title: "Post Added successfully",
        showConfirmButton: false,
        timer: 1500,
        icon: "success"
      });
      form.reset();
    })
   
  }

  return (
    <div className='lg:w-3/5 md:w-10/12 w-[95%] mx-auto bg-white dark:bg-black  py-14 px-3 md:px-9 items-center justify-center rounded-3xl mt-10'>
      <Helmet>
        <title>Add Volunteer</title>
      </Helmet>
      <Card color="transparent" shadow={false} className=''>
        <h1 className='font-semibold text-4xl text-black dark:text-white'>Post Details</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)} className='mt-11 space-y-10'>
          {/* input field */}
          <div className='flex md:flex-row flex-col w-full gap-4'>
            <label htmlFor="" className='flex-1 flex flex-col gap-4'>
              <h1 className='dark:text-white font-bold text-xl text-black'>Thumbnail URL</h1>
              <input type="text" placeholder='http://example.com' className='p-4 rounded-xl border border-gray-500' {...register('thumbnail', {required: true})}/>
              {errors.thumbnail?.type === 'required' && <span className='text-red-400'>This field is required.</span>}
            </label>

            <label htmlFor="" className='flex-1 flex flex-col gap-4'>
              <h1 className='dark:text-white font-bold text-xl text-black'>Post Title</h1>
              <input type="text" placeholder='Title' className='p-4 rounded-xl border border-gray-500' {...register('title', {required: true})}/>
              {errors.title?.type === 'required' && <span className='text-red-400'>This field is required.</span>}
            </label>  
          </div>
          
          
            <label htmlFor="" className='flex flex-col gap-4'>
              <h1 className='dark:text-white font-bold text-xl text-black'>Description</h1>
              <textarea type="text" placeholder='description' className='p-4 rounded-xl border border-gray-500' {...register('description', {required: true})}/>
              {errors.description?.type === 'required' && <span className='text-red-400'>This field is required.</span>}
            </label>
          <div className='flex md:flex-row flex-col w-full gap-4'>
            <label htmlFor="" className='flex-1 flex flex-col gap-4'>
              <h1 className='dark:text-white font-bold text-xl text-black'>Category</h1>
              <input type="text" placeholder='category' className='p-4 rounded-xl border border-gray-500' {...register('category', {required: true})}/>
              {errors.category?.type === 'required' && <span className='text-red-400'>This field is required.</span>}
            </label>  
          

            <label htmlFor="" className='flex-1 flex flex-col gap-4'>
              <h1 className='dark:text-white font-bold text-xl text-black'>Location</h1>
              <input type="text" placeholder='location' className='p-4 rounded-xl border border-gray-500' {...register('location', {required: true})}/>
              {errors.location?.type === 'required' && <span className='text-red-400'>This field is required.</span>}
            </label> 
          </div>

          <div className='flex md:flex-row flex-col w-full gap-4'>
            <label htmlFor="" className='flex-1 flex flex-col gap-4'>
              <h1 className='dark:text-white font-bold text-xl text-black'>Need Volunteers</h1>
              <input type="number" placeholder='Number' className='p-4 rounded-xl border border-gray-500' {...register('volunteers', {required: true})}/>
              {errors.volunteers?.type === 'required' && <span className='text-red-400'>This field is required.</span>}
            </label> 

            <label htmlFor="" className='flex-1 block space-y-4'>
              <h1 className='dark:text-white font-bold text-xl text-black'>Deadline</h1>
              <Dead date={date} setDate={setDate}/>
              {errors.date?.type === 'required' && <span className='text-red-400'>This field is required.</span>}
            </label> 

          </div>

          <div className='flex md:flex-row flex-col w-full gap-4'>
            <label htmlFor="" className='flex-1 flex flex-col gap-4'>
              <h1 className='dark:text-white font-bold text-xl text-black'>Organizer Name</h1>
              <input type="text" placeholder='Name' value={user?.displayName} className='p-4 rounded-xl border border-gray-500' {...register('name')} disabled/>
            </label> 

            <label htmlFor="" className='flex-1 flex flex-col gap-4'>
              <h1 className='dark:text-white font-bold text-xl text-black'>Organizer Email</h1>
              <input type="text" placeholder='Email' value={user?.email || ''} className='p-4 rounded-xl border border-gray-500' {...register('email')} disabled/>
            </label> 
          </div>

          <label htmlFor="" className='flex flex-col gap-4'>
            <input type="submit" value="Add Post" className='bg-blue-600 btn hover:bg-blue-700 text-white'/>
          </label> 
          
        </form>    
      </Card>
    </div>
  )
}

export default Addvolunteer