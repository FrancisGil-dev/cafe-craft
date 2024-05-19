"use client"
import Image from 'next/image';
import coffeeImage from '@/public/picture/coffee.jpg'
import React, { useEffect, useState } from 'react';
import {PiCoffeeBold} from "react-icons/pi"
import Link from 'next/link';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';


const Login = () => {
   // route
   const router = useRouter();

   // trigger naviagate the user if login
   useEffect(() => {
       // get the verifyCookies
       const verifyCookies = Cookies.get("isLoggedIn");
       if (verifyCookies) return router.push('/home') 

   },)
   // states
   const [email, setEmail] = useState('');
   const [password, setPass] = useState('');
   const [loading, setLoading] = useState(false);
   const [showPassword, setShowPassword] = useState(false);

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
   // handle the submission
   const onLogin = async(e) => {
       // prevent from loading
       e.preventDefault();

       // setLOading
       setLoading(true)
       
       // form validation
       if (!email || !password) return handleError("Complete all Fields")

       // try cath method
       try {
           const res = await axios.post("http://localhost:3000/api/auth-user", {email, password});
           if (res.status === 200) {
               const resData = res.data;
               // set the cookies
               Cookies.set("username", resData);
               Cookies.set("isLoggedIn", true);
               // alert the User
               Swal.fire({
                   title: `Welcome Back! ${resData}`,
                   icon: 'success',
                   showCancelButton: false,
                   confirmButtonText: 'Get some Coffee',
                   allowOutsideClick: false,
               }).then(result => {
                   if (result.isConfirmed) return router.replace("/cafe-craft");
               })
           }
          
       } catch (error) {
           // server error or network error
           if (error.response) {
               // The request was made and the server responded with a status code
               if (error.response.status === 401) {
                   // Handle 401 error
                   return handleError("Invalid Email or Password");
               } else if (error.response.status === 404) {
                   // Handle 404 error
                   return handleError("User not found");
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
     <main className='grid place-items-center min-h-screen'>
         <section className='flex rounded-lg w-[1000px] shadow-2xl'>
          <div>
            {/* image */}
            <Image height={600} width={'auto'} src={coffeeImage} className='rounded-lg' property='priority' alt='Coffee'/>
          </div>
          <div className='p-20 flex flex-col gap-20 w-[600px]'>
            <div className='flex justify-between'>
                {/* title */}
                <h1 className='text-center text-2xl font-bold'> Login</h1>
                {/* logo */}
                <span className='text-3xl font-bold flex gap-2 text-[#967259] items-center'>CaféCraft<PiCoffeeBold className='text-3xl text-black'/></span>
            </div>
            {/* form */}
            <form onSubmit={onLogin} className='flex flex-col gap-10'>
                <input type="email" placeholder='Email' className=' border-b-2 outline-none bg-transparent p-2 text-lg'
                value={email} onChange={e => setEmail(e.target.value)}/>
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
                </div>) : "Login"}</button>
                    <span className='text-lg'>Doesn't Have an Account? <Link href={'auth/register'} className='underline'>Register Here</Link></span>
                </div>
            </form>
        </div>
      </section>
     </main>
  )
}

export default Login