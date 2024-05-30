import React from 'react'
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

import { useForm } from "react-hook-form"
import useData from '../../Utils/useData';
// swal
import Swal from 'sweetalert2';

// google git providers
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

// react hot toast
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

  const { signInWithEmail, signInPop, setUser} = useData();
  const location = useLocation();
  const navigate = useNavigate()

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) =>{
    // console.log(data);
    signInWithEmail(data.email, data.password)
    .then(result => {
      Swal.fire({
        title: "Successfully logged in!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(`${location.state || '/'}`)
    })
    .catch(e => {
      console.log('signIn error: ', e.message);
      toast.error(e.message.split('/')[1].replace(')', ''));
    })
  }

  return (
    <div className='my-11 lg:w-1/2 md:w-10/12 w-[95%] bg-white dark:text-white dark:bg-black rounded-3xl mx-auto flex justify-center items-center  md:px-6 py-10'>
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" className='dark:text-white'>
            Sign In
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3 dark:text-white">
                Your Email
              </Typography>
              <Input
                type='email'
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 dark:text-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("email", {pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, required: true})}
              />
              {errors.email?.type === 'required' && <span className='text-red-500'>This field is required</span>}
              {errors.email?.type === 'pattern' && <span className='text-red-500'>Invalid email</span>}
              <Typography variant="h6" color="blue-gray" className="-mb-3 dark:text-white">
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 dark:text-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("password",{ required: true})}
              />
              {errors.password?.type === 'required' && <span className='text-red-500'>This field is required</span>}
            </div>
            <Button className="mt-6" fullWidth onClick={handleSubmit(onSubmit)}>
              sign In
            </Button>

            <div className="divider dark:before:bg-white dark:after:bg-white">OR</div>

            <div className='flex gap-10 items-center justify-center'>
                <FcGoogle className='size-12 cursor-pointer' onClick={() => signInPop(googleProvider).then(result => {
                    Swal.fire({
                      title: "Successfully logged in!",
                      showConfirmButton: false,
                      timer: 1500,
                      icon: "success"
                    });
                    navigate(`${location.state || '/'}`)
                  })}/>
                <FaGithub className='size-12 cursor-pointer' onClick={() => signInPop(githubProvider).then(result => { 
                   Swal.fire({
                      title: "Successfully logged in!",
                      showConfirmButton: false,
                      timer: 1500,
                      icon: "success"
                    });
                    navigate(`${location.state || '/'}`)
                  })}/>
            </div>

            <Typography color="gray" className="mt-4 text-center font-normal">
              Haven't register?{" "}
              <Link to='/register' className="font-medium text-gray-900 dark:text-white">
                Sign Up
              </Link>
            </Typography>
          </form>
        </Card>
    </div>
  )
}

export default Login