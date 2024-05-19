"use client"
import React from 'react';
import Image from 'next/image';
import CoffeeBG from '@/public/picture/espresso.png'; // Update the path as needed
import Message from './Message';
import Footer from './Footer';

const Contact = () => {
  return (
    <>
        <main id='contacts' className='h-screen grid place-items-center max-md:px-10 max-sm:px-5'>
        <div className='flex gap-[290px] max-md:flex-col'>
          <section className='flex flex-col gap-10 w-[400px]'>
            <span className='text-5xl font-bold text-[#967259] relative pb-5 max-lg:text-4xl max-md:text-2xl max-sm:text-xl max-md:pb-4'>
              <span className="pr-4">Get in touch</span> {/* Add padding between text and underline */}
              {/* Half underline */}
              <span className="absolute bottom-0 left-0 w-1/2 h-3 max-md:h-2 rounded-lg bg-[#967259]"></span>
            </span>
            <Message/>
          </section>

          {/* image */}
          <section>
            <Image src={CoffeeBG} height={600} alt='coffee-americano' className='max-md:hidden'/>
          </section>
        </div>
        
      </main>
      <Footer/>
    </>
    
  );
};

export default Contact;
