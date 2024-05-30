import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoIosTime } from 'react-icons/io';
import { MdCategory } from 'react-icons/md';
import { Helmet } from 'react-helmet';
import useAxios from '../../Utils/useAxios';
import { Input, Button, Spinner, button } from "@material-tailwind/react";
import { FaTable } from 'react-icons/fa';
import { BsGrid3X3Gap } from 'react-icons/bs';

const Post = ({data}) => {

  const navigate = useNavigate()

  return (
    <div className='dark:bg-black rounded-2xl p-4 border bg-white dark:border-white flex flex-col dark:text-white'>
      <div className='rounded-2xl w-full h-52'>
        <img src={data.thumbnail} alt="" className='object-cover w-full h-full rounded-2xl'/>
      </div>
      <h1 className='p-4 text-xl font-semibold'>{data.title}</h1>
      <p className='p-4 text-xl font-medium flex items-center gap-3'><MdCategory/>{data.category}</p>
      <p className='flex-grow p-4 font-normal text-xl flex items-center gap-3'><IoIosTime /> {data.deadline.split('T')[0]}</p>
      <button onClick={() =>{
          navigate(`/post/${data._id}`);
        }} className='bg-blue-400 btn hover:bg-blue-400 text-white text-xl font-semibold rounded-md'>View Details</button>
    </div>
  )
}

const TablePost = ({data}) => {
  const navigate = useNavigate();
  return (
    <tr className='text-sm md:text-lg'>
      <td className='font-semibold'>{data.title}</td>
      <td>{data.category}</td>
      <td>{data.deadline.split('T')[0]}</td>
      <td>
        <button onClick={() =>{
          navigate(`/post/${data._id}`);
        }} className='bg-blue-400 btn hover:bg-blue-400 text-white text-base font-semibold rounded-md'>Details</button>  
      </td>
    </tr>
  )
}


const VolunteerPosts = () => {

  const myAxios = useAxios();

  const [data, setData] = useState([]);
  const [showData, setShowData] = useState([]);
  const [search, setSearch] = useState('')
  const [tableForm, setTableForm] = useState(false);

  const categories = ['All'];
  const [category, setCategory] = useState('All')

  useEffect(() => {
    myAxios.get('/posts')
    .then(res => {
      setData(res.data);
      setShowData(res.data);
    });
  }, [])

  data.forEach(data => {
    if(!categories.includes(data.category)) {
      categories.push(data.category);
    }
  }) 
  console.log('categories: ', categories);

  const categoryClick = (category) => {
    setCategory(category);
    if(category === 'All') {
      setShowData(data);
    } else {
      setShowData(data.filter(sData => sData.category === category))
    }
  }

  return (
    <div className='w-[95%] mx-auto space-y-8 mt-14 dark:text-white'>
      <Helmet>
        <title>Need Volunteer</title>
      </Helmet>
      <h1 className='text-center font-semibold text-4xl'>All Volunteer Need Posts</h1>

      <div className='flex justify-center'>
        <div className="relative flex w-full max-w-[24rem]">
          <Input
            type="text"
            label="Search"
            value={search}
            onChange={({target}) => setSearch(target.value) }
            className="pr-20 dark:text-white dark:before:text-white"
            containerProps={{
              className: "min-w-0",
            }}
          />
          <Button
            size="sm"
            color={search ? "gray" : "blue-gray"}
            disabled={!search}
            onClick={() => {
              console.log(search);
              myAxios.get(`/search?search=${search}`)
              .then(res => {
                // console.log(res.data);
                setData(res.data);
              })
            }}
            className="!absolute right-1 top-1 rounded bg-blue-500"
          >
            Search
          </Button>
        </div>
      </div>

        <div className='w-40 p-4 bg-white dark:bg-black rounded-2xl flex justify-between gap-6 mx-auto'>
          <button className={`px-3 rounded-xl text-2xl btn ${!tableForm ? 'text-white bg-blue-500 hover:bg-blue-500' : 'text-black hover:bg-white'}`}
            onClick={() => setTableForm(false)}
          ><BsGrid3X3Gap /></button>
          <button onClick={() => setTableForm(true)} className={`px-3 rounded-xl text-2xl btn ${tableForm ? 'text-white  bg-blue-500  hover:bg-blue-500' : 'text-black hover:bg-white'}`}><FaTable/> </button>
        </div>
        {/* category */}
        <h1 className='text-center font-semibold text-3xl'>Categories</h1>
        <div className='flex justify-center items-center flex-wrap gap-3'>
            {categories.map((sCategory, i) => {
              return (
                <button onClick={() => categoryClick(sCategory)} className={`btn ${sCategory === category ? 'bg-blue-400 text-white' : 'bg-gray-300 text-black'} font-semibold text-lg hover:bg-blue-600 hover:text-white`} key={i}>{sCategory}</button>
              )
            })}
        </div>

        {
          tableForm ? <>
            {
              <table className='w-full'>
                <tr className='font-semibold text-sm md:text-xl'>
                  <td>Title</td>
                  <td>Category</td>
                  <td>Deadline</td>
                  <td>View Details</td>
                </tr>
                {showData.map((d, i) => <TablePost key={i} data={d}/>)}
              </table>
            }
          </> : <>
          {
          data.length ? <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {showData.map((d, i) => <Post key={i} data={d}/>)}
          </div> : <>{search ? <h1 className='text-5xl font-semibold'>NO DATA FOUND</h1> : <div className='flex items-start justify-center h-screen w-full'><Spinner className="size-32"></Spinner></div> }</>
          }
          </>
        }
    </div>
  )
}

export default VolunteerPosts