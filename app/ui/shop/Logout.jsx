"use client"
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { IoExitOutline } from "react-icons/io5";
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
const Logout = () => {
    // router init
    const router = useRouter();
    // state
    const [username, setUsername] = useState('');

    // useEffect
    useEffect(() => {
        // get the cookies
        const user = Cookies.get("username");
        if(user) return setUsername(user)
    }, [])
    // handle exit
    const logoutUser = () => {
        // remove the cookies
        Cookies.remove("username");
        Cookies.remove("isLoggedIn");
        Swal.fire({
            title: `Are you sure you want to Logout? ${username}`,
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: "#967259",
            allowOutsideClick: false,
            icon: 'question'
        })
        .then(result => {
            if (result.isConfirmed) {


                // navigate to home
                return router.replace('/')
            }
        })
    }
  return (
    <button className='flex justify-center text-3xl'onClick={logoutUser}><IoExitOutline /></button>
  )
}

export default Logout