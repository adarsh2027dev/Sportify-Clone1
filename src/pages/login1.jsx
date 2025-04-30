import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { GrApple } from "react-icons/gr";

const Login = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-zinc-800 to-black-900 w-full h-screen absolute ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.4 }}
          className='w-full h-full p-8 text-white flex items-center justify-center'
        >
          {/* LOGIN BOX */}
          <div className="w-[650px] h-[880px] bg-[#191818] rounded-[10px] flex flex-col gap-12 mt-45 pt-12 items-center">
            {/* First div */}
            <div className="flex flex-col items-center">
              <img src="./src/assets/images/logo.png" alt="" className='w-[40px] rounded-full' />
              <h1 className='text-white font-extrabold text-[30px]'>Log in to Sportify</h1>
            </div>

            {/* Second div (Social login buttons) */}
            <div className="flex flex-col gap-2.5">
              <button className='text-white font-extrabold w-[300px] h-[50px] border rounded-[60px] border-gray-500 hover:border-white flex flex-row items-center justify-evenly'>
                <img src="./src/assets/images/Google_icons-09-1024.webp" alt="" className="w-[30px]" />
                Sign up with Google
              </button>
              <button className='text-white font-extrabold w-[300px] h-[50px] border rounded-[60px] border-gray-500 hover:border-white flex flex-row items-center justify-evenly'>
                <img src="./src/assets/images/facebook-512.webp" alt="" className="w-[25px]" />
                Sign up with Facebook
              </button>
              <button className='text-white font-extrabold w-[300px] h-[50px] border rounded-[60px] border-gray-500 hover:border-white flex flex-row items-center justify-evenly'>
                <GrApple />
                Sign up with Apple
              </button>
              <button className='text-white font-extrabold w-[300px] h-[50px] border rounded-[60px] border-gray-500 hover:border-white flex flex-row items-center justify-evenly'>
                Continue with phone number
              </button>
            </div>

            {/* Divider */}
            <div className="w-[400px] h-[1px] bg-gray-700"></div>

            {/* Fourth div (Login form) */}
            <div className="flex flex-col gap-3 -mt-8">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className='text-white font-bold'>Email or username</label>
                <input type="email" id="email" placeholder='Email or username' className='text-white w-[310px] pl-2.5 h-[40px] border border-gray-500 hover:border-white rounded-[5px] bg-transparent' />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="password" className='text-white font-bold'>Password</label>
                <input type="password" id="password" placeholder='Password' className='text-white w-[310px] pl-2.5 h-[40px] border border-gray-500 hover:border-white rounded-[5px] bg-transparent' />
              </div>
              <button className='bg-[#0BDA51] hover:bg-[#50C878] mt-5 w-[310px] h-[40px] rounded-[60px] font-bold'>Log in</button>
            </div>

            {/* Fifth block */}
            <div className="flex flex-col gap-6 items-center">
              <a href="#" className='text-white font-bold underline'>Forgot your password?</a>
              <p className='text-gray-400'>Don't have an account? <a href="#" className='text-white font-bold underline'>Sign up for Spotify</a></p>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="w-full h-[80px] mt-44  bg-[#191818] flex items-center justify-center">
          <p className='text-white text-[12px] text-center'>
            This site is protected by reCAPTCHA and the Google <a href="" className='underline'>Privacy Policy</a> and <a href="" className='underline'>Terms of Service</a> apply.
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
