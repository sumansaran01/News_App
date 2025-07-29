import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";
const Header = (props) => { 
  const [open, setopen] = useState(false);
  const navLinkClass = ({ isActive }) =>
    `newscategory -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors duration-200 "
    ${isActive ? "text-blue-700 font-bold" : "hover:text-gray-600"}`;
  return (
    <>
      <nav>
        {/* long */}
        <div className={`${props.mode==="light"?"bg-white":"bg-black"} hidden lg:flex justify-between items-center p-3`}>
          <div className="flex items-center gap-2 ml-4">
            {/* Capsule/Pill Logo */}
            <div className="w-7 h-7 bg-gradient-to-r from-blue-600 to-emerald-800 rounded-full flex items-center justify-center relative shadow-md">
              <div className="w-3 h-3 bg-white rounded-full border-2 border-emerald-800 absolute left-1 top-1 animate-pulse"></div>
            </div>
            <span className="font-bold text-xl text-emerald-800">DailyDose</span>
          </div>
          <div className="flex gap-4 items-center">
            <NavLink className={navLinkClass} to="/">General</NavLink>
            <NavLink className={navLinkClass} to="/business">Business</NavLink>
            <NavLink className={navLinkClass} to="/entertainment">Entertainment</NavLink>
            <NavLink className={navLinkClass} to="/health">Health</NavLink>
            <NavLink className={navLinkClass} to="/science">Science</NavLink>
            <NavLink className={navLinkClass} to="/sports">Sports</NavLink>
            <NavLink className={navLinkClass} to="/technology">Technology</NavLink>
            <MdDarkMode onClick={props.handleMode} className='text-2xl'/>
          </div>
        </div>

        {/* small */}
        <div className="flex lg:hidden justify-between p-4 py-5 items-center">
          <div className="flex items-center gap-2 ml-4">
            {/* Capsule/Pill Logo */}
            <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-emerald-700 rounded-full flex items-center justify-center relative shadow-md">
              <div className="w-2.5 h-2.5 bg-white rounded-full border-2 border-emerald-700 absolute left-0.5 top-0.5 animate-pulse"></div>
            </div>
            <span className="font-bold text-emerald-700">DailyDose</span>
          </div>
          <div className="flex gap-5">
            <MdDarkMode onClick={props.handleMode} className='text-2xl '/>
            <FaBars className="text-xl" onClick={() => setopen(!open)} />
          </div>
        </div>
      </nav>

      <div className={`${open === true ? "block" : "hidden"} ${props.mode==="light"?"bg-gray-300":"bg-gray-500"} p-4 absolute h-screen w-2/3  text-cenetr border-r z-50`}>
        <NavLink className={navLinkClass} to="/general">General</NavLink>
        <NavLink className={navLinkClass} to="/business">Business</NavLink>
        <NavLink className={navLinkClass} to="/entertainment">Entertainment</NavLink>
        <NavLink className={navLinkClass} to="/health">Health</NavLink>
        <NavLink className={navLinkClass} to="/science">Science</NavLink>
        <NavLink className={navLinkClass} to="/sports">Sports</NavLink>
        <NavLink className={navLinkClass} to="/technology">Technology</NavLink>
      </div>
    </>
  );
};

export default Header;
