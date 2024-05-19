"use client"
import Image from 'next/image';
import coffeeImage from '@/public/picture/coffee.jpg'
import React, { useState } from 'react';
import {PiCoffeeBold} from "react-icons/pi"
import Link from 'next/link';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';



const Register = () => {
  // states
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // router
  const router = useRouter()
  // error handling
  const handleError = (message) => {
    Swal.fire({
      title: message,
      icon: "error",
      timer: 1200,
      showConfirmButton :false,
      allowOutsideClick: false,    
    })
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }

  // handle Submission
  const onRegister = async(e) => {
    // prevent from refreshing the site
    e.preventDefault();

    // loading to true
    setLoading(true);

    // form validation
    if (!username || !email || !password) return handleError("Complete all Fields");
    
    // try and cath method
    try {
      const res = await axios.post('http://localhost:3000/api/create-user', {username, email, password});

      // if the response is 200
      if (res.status === 200) {
        // set the cookies to have access to middleware
        Cookies.set("isLoggedIn");
        Cookies.set("username", username);
        // alert the user
        Swal.fire({
          title: "Welcome to CaféCraft", username,
          icon: 'success',
          showCancelButton: true,
          confirmButtonText: "Go to Dashboard",
          cancelButtonText: "Go to Home",
          allowOutsideClick :false,
        })
        .then(result => {
          if (result.isConfirmed) return router.replace("/home/dashboard");
          else return router.replace("/home");
        })
      }

    } catch (error) {
      // server error or network error
      if (error.response) {
        // The request was made and the server responded with a status code
        if (error.response.status === 409) {
            // Handle 401 error
            return handleError(`Try another ${email}`);
        } else {
            // Handle other error codes
            return handleError(`Error: ${error.response.status} - ${error.response.statusText}`);
        }
    } else if (error.request) {
        // The request was made but no response was received    
        return handleError("Network Error. Please try again later.");
    } else {
        // Something happened in setting up the request that triggered an Error
        return handleError("An unexpected error occurred. Please try again later.");
    }
    }

  } 
  return (
   <main className="grid place-items-center min-h-screen">
       <section className='flex rounded-lg w-[1000px] shadow-2xl h-auto'>
    
    <div className='p-20 flex flex-col gap-20 w-[600px]'>
        <div className='flex justify-between'>
            {/* title */}
            <h1 className='text-center text-2xl font-bold'> Register</h1>
            {/* logo */}
            <span className='text-3xl font-bold flex gap-2 text-[#967259] items-center'>CaféCraft<PiCoffeeBold className='text-3xl text-black'/></span>
        </div>
        {/* form */}
        <form onSubmit={onRegister} className='flex flex-col gap-10'>
          {/* Username */}
            <input type="text" placeholder='Username' className='border-b-2 outline-none bg-transparent p-2 text-lg'
            value={username} onChange={e => setUsername(e.target.value)}/>

          {/* Email */}
            <input type="email" placeholder='Email' className=' border-b-2 outline-none bg-transparent p-2 text-lg'
            value={email} onChange={e => setEmail(e.target.value)}/>

          {/* Password */}
            <input type={showPassword ? "text" : "password"} placeholder='Password' className=' border-b-2 outline-none bg-transparent text-lg p-2'
            value={password} onChange={e => setPass(e.target.value)}/>

          {/* show Password */}
            <div className='flex flex-row gap-2'>
                <span className='text-lg'>Show Password? </span>
                <input type="checkbox" onClick={() => setShowPassword(!showPassword)}/>
            </div>

          {/* submit BTN */}
            <div className='flex flex-col gap-5'>
                <button className={`bg-[#967259] text-white p-2 font-bold text-xl ${loading ? "cursor-not-allowed" : "cursor-pointer"}`} disabled={loading}>{loading ? (<div role="status"
                className="inline-block h-5 w-5 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
                </div>) : "Register"}</button>
                {/* already have an account */}
                <span className='text-lg'>Already Have an Account? <Link href={'/auth'} className='underline'>Login Here</Link></span>
            </div>
        </form>
    </div>
    <div>
        {/* image */}
        <Image height={800} width={'auto'} src={coffeeImage} className='rounded-lg' property='priority' alt='Coffee'/>
    </div>
</section>
   </main>
  )
}

export default Register