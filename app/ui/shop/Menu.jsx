// /pages/menu.js
import React from 'react';
import { FaSearch, FaFilter, FaUserCircle } from 'react-icons/fa';

const Menu = () => {
  return (
    
   <>
    <nav className='flex justify-between  p-10 '>
       <div className='flex flex-row gap-5 items-center'>
           <div className="flex items-center bg-gray-200 rounded-full px-3 py-2">
                {/* serch  and filter*/}
                <FaSearch className="text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent focus:outline-none"
                />
            </div>
            <button className="flex items-center space-x-1 text-white bg-orange-400 px-4 py-2 rounded-full hover:bg-orange-500 focus:outline-none">
            <FaFilter />
            <span>Filter</span>
          </button>
       </div>
        <ul className='flex items-center jus'>
            <li><button className='text-3xl'><FaUserCircle/></button></li>
        </ul>
    </nav>
   </>
   
  );
};

export default Menu;
