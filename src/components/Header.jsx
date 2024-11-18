import React from "react"; 
import { MagnifyingGlassIcon, HeartIcon, UserIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Header = ({ className, title, name }) => (
  <div className={`text-white flex items-center ${className} w-full`}>
    <Link to="/">
      <img src=" /src/assets/Eicon.png" className="h-auto w-[3.5rem] ml-7 mr-7" />
    </Link>
    <Link to="/">
      <h1 className="font-lato text-[#228000] text-[2rem] hidden sm:flex"> {name ? `${name}` : 'Featured Communities'} </h1>
    </Link>

    {/* Center title with flex-grow */}
    <h1 className="flex-grow font-lato text-[2rem] text-center">
      {title}
    </h1>

    <div className="justify-end items-center ml-auto mr-[5rem] space-x-5 text-[#228000] hidden sm:flex">
      <Link to="/shop"><MagnifyingGlassIcon className="h-[2.7rem] w-auto" /></Link>
      <Link to="/saved"><HeartIcon className="h-[2.7rem] w-auto" /></Link>
      <Link to="/profile"><UserIcon className="h-[2.7rem] w-auto" /></Link>
    </div>
  </div>
);

export default Header;
