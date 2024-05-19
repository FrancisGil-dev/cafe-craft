
"use client"
import React, {useEffect, useState} from 'react';
import CoffeeImage from "@/public/picture/Cafe.png";
import { PiCoffee, PiCoffeeBold } from 'react-icons/pi';
import { VscListSelection } from "react-icons/vsc";
import { CgClose } from "react-icons/cg";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {  MdOutlineContactSupport } from "react-icons/md";
import { RiHome2Line } from "react-icons/ri";
import { GoPaperclip } from "react-icons/go";
import Cookies from 'js-cookie';

const Homepage = () => {
  // router
  const router = useRouter();
  // states
  const [showNav, setShowNav] = useState(false);
  const [verifyUser, setVerifyUser] = useState(false);

  // useEffect
  useEffect(() => {
      const verifyUser = Cookies.get("isLoggedIn");
      if (verifyUser) return setVerifyUser(true); 
  }, [])
  
  // function to scroll to view
  const scrollView = (Id) => { 
    const main = document.getElementById(Id);
    if (main) return main.scrollIntoView({ behavior: 'smooth' });
  }
  
  
  
  return (
    
    <main className='h-screen' id='home'>
      <nav className='fixed top-0 left-0 right-0 z-10 flex justify-between items-center p-20 max-w-[1424px] mx-auto my-0 '>
        <section>
         <Link href={'/'}> <span className='text-4xl font-bold flex gap-2 text-[#967259] items-center max-md:text-2xl max-sm:text-xl'>CaféCraft<PiCoffeeBold className='text-3xl text-black'/></span></Link>
        </section>
        
        {/* toggle List for navigation */}
        <section>
          {showNav ? "" 
          : <VscListSelection onClick={() => setShowNav(!showNav)} className='text-3xl cursor-pointer max-md:text-2xl max-sm:text-xl'/>}
        </section>
      </nav>

      {/* main content */}
      <section className='flex justify-between max-w-7xl mx-auto my-0 items-center min-h-screen max-xl:px-20 max-md:flex-col-reverse max-md:justify-center max-md:gap-20'>
        {/* title */}
        <div className='flex flex-col gap-3 max-w-[550px]'>
          <span className={`text-6xl font-semibold max-lg:text-4xl max-md:text-2xl max-sm:text-2xl`}>Crafting Coffee Moments</span>
          <p className='text-2xl  text-justify text-[#777] max-lg:text-xl max-md:text-lg max-sm:text-lg'> Welcome to CafeCraft, where every cup is a story! 
          Explore our handcrafted blends,made with love and care to give you the perfect coffee experience.</p>
          {/* get some coffee */}
          <Link className='bg-[#967259] text-white w-52 p-2 mt-3 text-lg flex items-center gap-3 font-bold' href={verifyUser ? "/cafe-craft" : "/auth "}>Get Some Coffee <PiCoffeeBold className='text-xl'/></Link>
        </div>
        {/* images */}
        <div>
          <Image src={CoffeeImage} height={600} alt='Coffee-home' priority="property" className='max-md:h-[350px] max-sm:hidden'/>
        </div>

      </section>
      <div className={`${showNav ? "block" : "hidden"} fixed top-0 right-0 h-full bg-[#967259]  w-64 text-white z-50 duration-300 max-md:w-48 `}>
        <span className='flex p-2 justify-end mt-5 mr-2'>
            <CgClose className='text-3xl cursor-pointer' onClick={() => setShowNav(!showNav)}/>
        </span>
        <ul className='flex flex-col gap-7 text-left p-8 text-xl max-lg:text-xl max-md:text-lg max-sm:text-md mt-20'>
            <li className=''>
              
              <button onClick={() => scrollView("home")} className='flex gap-4 items-center'> <RiHome2Line /> Home</button>
            </li>
            <li className=''>
                
              <button onClick={() => scrollView("shop")} className='flex gap-4 items-center'><PiCoffee /> Shop</button>
            </li>
            <li className=''>
                
              <button onClick={() => scrollView("about")} className='flex gap-4 items-center'> <GoPaperclip /> About</button>
            </li>
            <li className=''>
              <button onClick={() => scrollView("contacts")} className='flex gap-4 items-center'><MdOutlineContactSupport/> Contacts</button>
            </li>
        </ul>
      </div>
    </main>
    
  );
}

export default Homepage;
