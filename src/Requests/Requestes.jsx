import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import useAxios from '../../Utils/useAxios'
import useData from '../../Utils/useData'
import { IoIosDoneAll } from 'react-icons/io';
import { MdCategory } from 'react-icons/md';
import Swal from 'sweetalert2';


const Request = ({request, posts, setPosts}) => {

  const myAxios = useAxios();

  return (
    <tr>
      <td className='font-semibold text-lg'>{request.title}</td>
      <td className=''>
        <span className='p-4 text-sm md:text-xl font-medium flex items-center gap-3'><MdCategory/>{request.category}</span>
        <span className='p-4 text-sm md:text-xl font-medium flex items-center gap-3'><IoIosDoneAll/>{request.status}</span>
        <span className='p-4 text-sm md:text-xl font-medium flex items-center gap-3 italic'>{request.suggestion}</span>
      </td>
      <td>
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
              myAxios.delete(`/delete-request/${request._id}`)
              .then(res => {
                console.log(res.data);
                setPosts(posts.filter(p => p._id !== request._id))
                Swal.fire({
                  title: "Canceled!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
              })
            }
          });
          
        }} className='bg-red-400 text-white font-semibold px-5 rounded-full btn hover:bg-red-400'>Cancel</button>
      </td>
    </tr>
  )
}

const Requestes = () => {


  const [posts, setPosts] = useState([]);
  const [hasData, setHasData] = useState(true);

  const {user} = useData()

  const myAxios = useAxios();

  useEffect(() => {
    myAxios.get(`/myrequestes?uid=${user?.uid}`)
    .then(res => {
      // console.log(res.data);
      setPosts(res.data);
      if(!res.data.length) {
        setHasData(false)
      }
    })
  }, [])

  if(!hasData) {
    return <h1 className='text-center text-4xl dark:text-white font-semibold'>YOU HAVE NO REQUESTES.</h1>
  }

  return (
    <div className='mt-12 w-[95%] mx-auto dark:text-white space-y-4 bg-white rounded-3xl p-6 dark:bg-black'>
      <Helmet>
        <title>My Requestes</title>
      </Helmet>
      <h1 className='font-semibold text-center text-5xl'>My Requestes</h1>

      <div>
        <table className='w-full'>
          <tr>
            <td className='font-semibold text-xl'>Title</td>
            <td className='font-semibold text-xl'>Information</td>
            <td className='font-semibold text-xl'>Cancel</td>
          </tr>
          {posts.map((r,i) => <Request request = {r} key={i} posts = {posts} setPosts = {setPosts}/>)}
        </table>
      </div>
    </div>
  )
}

export default Requestes