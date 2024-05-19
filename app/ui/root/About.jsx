"use client"
import React, { useEffect } from 'react'
import { SiCoffeescript } from "react-icons/si";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";

const About = () => {

  useEffect(() => {
    // get the witdh of website

  }, [])
  return (
    <main id='about' className='h-screen max-md:px-20 max-md:flex-col max-md:gap-7 px-10'>
    {/* header */}
    <section className='text-center flex flex-col gap-3 max-md:mb-9'>
      <span className='font-bold text-5xl max-lg:text-3xl max-sm:text-xl'>Our Delicious Offer</span>
      <span className='text-xl text-[#777] max-lg:text-lg max-md:text-md max-sm:text-sm max-md:px-10'>
        CafeCraft is your go-to spot for great coffee, tasty treats, and a welcoming vibe that feels like home.
      </span>
    </section>
    <section className='flex justify-center items-center min-h-[70vh] gap-8 max-md:flex-col max-md:w-full'>
      <div className='p-5 shadow-lg w-full md:flex-1 flex flex-col gap-3 text-center items-center'>
        <SiCoffeescript className='text-[100px] text-[#967259] text-center max-md:text-6xl max-sm:text-4xl' />
        <span className='text-3xl font-bold max-md:text-2xl max-sm:text-xl'>Great Coffee</span>
        <p className='text-lg text-gray-500 max-md:text-md max-sm:text-sm'>
          Our beans are handpicked and expertly roasted, ensuring every cup is a taste sensation. From robust espressos to creamy cappuccinos, we cater to every coffee lover's palate.
        </p>
      </div>
      <div className='p-5 shadow-lg w-full md:flex-1 flex flex-col gap-3 text-center items-center'>
        <CiMoneyCheck1 className='text-[100px] text-[#967259] text-center max-md:text-6xl max-sm:text-4xl' />
        <span className='text-3xl font-bold max-md:text-2xl max-sm:text-xl'>Delicious Treats</span>
        <p className='text-lg text-gray-500 max-md:text-md max-sm:text-sm'>
          Indulge in our freshly baked pastries and savory snacks, crafted with love and the finest ingredients. Each bite is a delightful accompaniment to your coffee experience.
        </p>
      </div>
      <div className='p-5 shadow-lg w-full md:flex-1 flex flex-col gap-3 text-center items-center'>
        <FaUsers className='text-[100px] text-[#967259] text-center max-md:text-6xl max-sm:text-4xl' />
        <span className='text-3xl font-bold max-md:text-2xl max-sm:text-xl'>Community Connection</span>
        <p className='text-lg text-gray-500 max-md:text-md max-sm:text-sm'>
          Immerse yourself in our welcoming space, where conversations flow as freely as the coffee. Join us for engaging events and gatherings.
        </p>
      </div>
    </section>
  </main>
  

  )
}

export default About