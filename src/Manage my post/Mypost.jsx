import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import useData from '../../Utils/useData'
import useAxios from '../../Utils/useAxios'
import { IoIosTime } from 'react-icons/io';
import { MdCategory } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Post = ({post, sl, posts, setMypost}) => {

  const myAxios = useAxios();

  const navigate = useNavigate();

  return (
    <div className='flex justify-between border-b border-b-blue-300'>
      <div className='max-w-14'>{sl}.</div>
      <div className='flex flex-col items-start'>
        <h1 className='p-4 text-sm md:text-xl font-semibold'>{post.title}</h1>
        <p className='p-4 text-sm md:text-xl font-medium flex items-center gap-3'><MdCategory/>{post.category}</p>
        <p className='flex-grow p-4 font-normal text-sm md:text-xl flex items-center gap-3'><IoIosTime /> {post.deadline.split('T')[0]}</p>
      </div>
      <div className='flex flex-col justify-center gap-4'>
        <button onClick={() => navigate(`/mypost/${post._id}`)} className='btn bg-blue-400 text-white font-semibold hover:bg-blue-400'>Update</button>
        <button onClick={() => {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              myAxios.delete(`/delete/${post._id}`)
              .then(res => {
                console.log(res.data);
                setMypost(posts.filter(p => p._id !== post._id))
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
              })
              
            }
          });
        }} className='btn bg-red-400 text-white font-semibold hover:bg-red-400'>Delete</button>
      </div>
    </div>
  )
}


const Mypost = () => {
  const myAxios = useAxios();

  const {user} = useData();

  const [mypost, setMypost] = useState([]);
  const [noData, setNodata] = useState(false);

  useEffect(() => {
    myAxios.get(`/myposts/${user?.uid}`)
    .then(res => {
      if(!res.data.length) {
        setNodata(true);
      }
      setMypost(res.data);
    });
  }, [])

  if(noData) {
    return <h1 className='text-4xl text-center mt-24 font-semibold dark:text-white'>YOU DONT HAVE ANY POSTS</h1>
  }

  return(
      <div className='w-[95%] mx-auto mt-12 dark:text-white space-y-10'>
        <Helmet>
          <title>My Posts</title>  
        </Helmet> 
        <h1 className='text-5xl text-center font-semibold'>My posts</h1>
        <div className='bg-white shadow-lg dark:bg-black p-6 rounded-xl'>
          <div className='font-semibold text-base md:text-2xl flex justify-between border-b border-b-blue-300'>
            <div>Sl No.</div>
            <div>Information</div>
            <div>Actions</div>
          </div>
          {mypost.map((post, i) => <Post sl={i+1} post= {post} key={i} posts = {mypost} setMypost = {setMypost}/>)}
          
        </div>
      </div>
    )

  
}

export default Mypost