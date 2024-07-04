import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";
const Header = (props) => { 
  const [open, setopen] = useState(false);
  return (
    <>
      <nav>
        {/* long */}
        <div className={`${props.mode==="light"?"bg-white":"bg-black"} hidden lg:flex justify-around items-center p-3`}>
          <div>Suman-App</div>
          <div className="flex gap-4 items-center">
            <Link
              className="newscategory -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
              to="/business"
            >
              Business
            </Link>
            <Link
              className="newscategory -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
              to="/entertainment"
            >
              Entertainment
            </Link>
            <Link
              className="newscategory -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
              to="/general"
            >
              General
            </Link>
            <Link
              className="newscategory -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
              to="/health"
            >
              Health
            </Link>
            <Link
              className="newscategory -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
              to="/science"
            >
              Science
            </Link>
            <Link
              className="newscategory -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
              to="/sports"
            >
              Sports
            </Link>
            <Link
              className="newscategory -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
              to="/technology"
            >
              Technology
            </Link>
            <MdDarkMode onClick={props.handleMode} className='text-2xl'/>
          </div>
        </div>

        {/* small */}
        <div className="flex lg:hidden justify-between p-4 py-5 items-center">
          <div>Suman-App</div>
          <div className="flex gap-5">
          <MdDarkMode onClick={props.handleMode} className='text-2xl '/>

            <FaBars className="text-xl" onClick={() => setopen(!open)} />
          </div>
        </div>
      </nav>

      <div className={`${open === true ? "block" : "hidden"} ${props.mode==="light"?"bg-gray-300":"bg-gray-500"} p-4 absolute h-screen w-2/3  text-cenetr border-r z-50`}>
        <Link
          className="newscategory -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-center"
          to="/business"
        >
          Business
        </Link>
        <Link
          className="newscategory -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-center"
          to="/entertainment"
        >
          Entertainment
        </Link>
        <Link
          className="newscategory -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-center"
          to="/general"
        >
          General
        </Link>
        <Link
          className="newscategory -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-center"
          to="/health"
        >
          Health
        </Link>
        <Link
          className="newscategory -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-center"
          to="/science"
        >
          Science
        </Link>
        <Link
          className="newscategory -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-center"
          to="/sports"
        >
          Sports
        </Link>
        <Link
          className="newscategory -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-center"
          to="/technology"
        >
          Technology
        </Link>
      </div>
    </>
  );
};

export default Header;
