// /components/SideNav.js
import Link from 'next/link';
import { FaHome, FaCoffee, FaInfoCircle, FaPhone, FaBlog, FaCalendarAlt } from 'react-icons/fa';
import { PiCoffee } from 'react-icons/pi';
import Logout from './Logout';
import { RiHome3Line } from "react-icons/ri";
const SideNav = () => {
  return (
    <nav className="bg-[#967259] text-white w-26 h-full fixed flex flex-col justify-between py-10 rounded-r-md">
      <Link href={'/cafe-craft'} className=' flex items-center justify-center text-3xl'><PiCoffee/></Link>  
      <ul className="space-y-6 p-4 ">    
        <li>
          <Link href="/cafe-craft">
            <span className="flex items-center space-x-2 justify-center">
              <RiHome3Line className='text-3xl'/>
              
            </span>
          </Link>
        </li>
        
        <li>
          <Link href="/about">
            <span className="flex items-center space-x-2 justify-center">
              <FaInfoCircle className='text-3xl'/>
              
            </span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <span className="flex items-center space-x-2 justify-center">
              <FaPhone className='text-4xl'/>
            </span>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <span className="flex items-center space-x-2 justify-center">
              <FaBlog className='text-4xl'/>
              
            </span>
          </Link>
        </li>
        <li>
          <Link href="/events">
            <span className="flex items-center space-x-2 justify-center">
              <FaCalendarAlt className='text-4xl'/>
              
            </span>
          </Link>
        </li>
      </ul>
      {/* logout Button */}
      <Logout/>
    </nav>
  );
};

export default SideNav;
