import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { MdLibraryMusic, MdOutlineDownloadForOffline } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const Navbaar = () => {
  const navigate = useNavigate(); // ✅ initialize navigation

  return (
    <div className="flex flex-col gap-7 py- justify-center fixed w-full">
      {/* Navbar */}
      <div className="flex h-[70px] bg-black">
        {/* Logo */}
        <div className="flex items-center gap-5">
          <img
            src="./src/assets/images/logo.png"
            alt="sportify logo"
            className="w-[45px] h-[40px] ml-4 rounded-[100%]"
          />
          <IoHomeOutline className="text-white bg-zinc-800 p-1 w-[45px] h-[45px] rounded-full" />
        </div>

        {/* Search Box */}
        <div className="bg-zinc-800 w-[500px] h-[50px] rounded-[60px] flex items-center justify-center flex-row hover:border-3 border-white p-1.5 mt-3 ml-3">
          <div className="flex gap-1.5 items-center justify-center flex-row">
            <FaSearch className="text-white" />
            <input
              type="text"
              placeholder="what do you want to play ?"
              className="text-white text-[20px] w-[400px] h-[40px] hover:border-none bg-transparent outline-none"
            />
          </div>
          <div className="flex flex-row gap-1">
            <div className="w-[1px] h-[25px] bg-white"></div>
            <MdLibraryMusic className="text-white w-[50px] h-[30px]" />
          </div>
        </div>

        {/* Right Menu */}
        <div className="flex flex-row justify-evenly gap-4 ml-24">
          {/* Links */}
          <div className="flex flex-row items-center justify-center gap-3">
            <a href="#" className="text-gray-500 font-bold hover:text-white hover:scale-105">Premium</a>
            <a href="#" className="text-gray-500 font-bold hover:text-white hover:scale-105">Support</a>
            <a href="#" className="text-gray-500 font-bold hover:text-white hover:scale-105">Download</a>
            <div className="w-[2px] h-[25px] bg-white"></div>
          </div>

          {/* Buttons */}
          <div className="flex flex-row items-center justify-evenly gap-5">
            <div className="flex flex-row text-gray-500 font-bold hover:text-white hover:scale-103 gap-2">
              <MdOutlineDownloadForOffline className="w-[25px] h-[25px]" />
              <h1>Install App</h1>
            </div>

            {/* ✅ Signup button navigates to /signup */}
            <button
              onClick={() => navigate('/signup')}
              className="text-gray-500 font-bold hover:text-white hover:scale-103"
            >
              Sign up
            </button>

            {/* ✅ Login button navigates to /login */}
            <button
              onClick={() => navigate('/login')}
              className="bg-white w-[110px] h-[50px] rounded-[60px] text-blue-950 font-bold hover:scale-105"
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbaar;
