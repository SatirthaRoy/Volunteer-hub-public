import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { useLoaderData, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import {
  Card,
} from "@material-tailwind/react";
import Dead from '../Add volunteer/Dead';
import useData from '../../Utils/useData';
import useAxios from '../../Utils/useAxios';
import Swal from 'sweetalert2';

const Update = () => {

  const {user} = useData();

  const myAxios = useAxios();

  const loadedData = useLoaderData();
  const [date, setDate] = useState(loadedData.deadline);
  // console.log(loadedData);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: loadedData
  })

  const onSubmit = (data, e) =>{
    data.deadline = date;
    // console.log(data);
    data.volunteers = Number(data.volunteers);
    const form = e.target;
    // console.log(form);
    // console.log(data);
    myAxios.patch(`/post/${loadedData._id}`, data)
    .then(res => {
      console.log(res.data);
      Swal.fire({
        title: "Post Updated successfully",
        showConfirmButton: false,
        timer: 1500,
        icon: "success"
      });
      navigate(-1);
    })
   
  }


  return (
    <div className='w-[95%] mx-auto dark:text-white'>
      <Helmet>
        <title>Update</title>
      </Helmet>

      <div className='lg:w-3/5 md:w-10/12 w-[95%] mx-auto bg-white dark:bg-black  py-14 px-3 md:px-9 items-center justify-center rounded-3xl mt-10'>
        <Card color="transparent" shadow={false} className=''>
          <h1 className='font-semibold text-4xl text-black dark:text-white text-center'>Update Post</h1>
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
              <input type="submit" value="Update" className='bg-blue-600 btn hover:bg-blue-700 text-white'/>
            </label> 
            <label htmlFor="" className='flex flex-col gap-4'>
              <input type="button" onClick={() => {
                  navigate(-1);
                }} value="Cancel" className='bg-red-600 btn hover:bg-red-700 text-white'/>
            </label> 
            
          </form>    
        </Card>
      </div>
    </div>
  )
}

export default Update