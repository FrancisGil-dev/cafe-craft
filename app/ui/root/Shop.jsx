import React from 'react'
import Coffee from './Coffee'

const Shop = () => {
  return (
   <main id='shop' className='h-screen'>
        {/* header */}
        <section className='text-center flex flex-col gap-3'>
          <span className=' font-bold text-5xl max-lg:text-4xl  max-sm:text-xl'>CaféCraft Popular Menu</span>
          <span className=' text-xl text-[#777] max-lg:text-lg max-md:text-md max-sm:text-sm max-md:px-10'>From bold and rich to smooth and aromatic, find your favorite blend and enjoy <br /> it in the comfort of your home.</span>
        </section>

        <Coffee/>
   </main>
  )
}

export default Shop