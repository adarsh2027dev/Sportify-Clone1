import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import React from 'react';
import { GrApple } from "react-icons/gr";

const Signup = () => {
    return (
        <div className='w-full mt-44 h-screen flex justify-center items-center bg-black'>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4 }}
                className='w-[100vh] h-[100vh] p-8 text-white flex items-center justify-center'
            >
                {/* signup box */}
                <div className="flex flex-col gap-14 items-center">
                    {/* Logo and Heading */}
                    <div className="flex flex-col gap-10 justify-center items-center">
                        <img src="./src/assets/images/logo.png" alt="" className='w-[40px]' />
                        <h1 className='text-white font-extrabold text-5xl text-center'>
                            <span className='pl-6'>Sign Up to</span> <br /> start listening
                        </h1>
                    </div>

                    {/* Email section */}
                    <div className="flex flex-col gap-4">
                        <h1 className='text-white'>Email address</h1>
                        <input type="email" name="email" id="emailin" placeholder='name@domain.com' className='pl-4 w-[350px] h-[50px] border-[2px] border-gray-500 hover:border-white text-white bg-transparent' />
                        <a href="#" className='text-[#50C878] underline font-bold'>Use phone no instead</a>
                        <button className='bg-[#0BDA51] hover:bg-[#50C878] w-[350px] h-[60px] rounded-[60px] font-bold'>Next</button>
                    </div>

                    {/* Divider */}
                    <div className="flex flex-row items-center gap-1.5 justify-center">
                        <div className="w-[150px] h-[0.5px] bg-gray-400"></div>
                        <h1 className='text-white'>or</h1>
                        <div className="w-[150px] h-[0.5px] bg-gray-400"></div>
                    </div>

                    {/* Social Signups */}
                    <div className="flex flex-col gap-1.5">
                        <button className='text-white font-extrabold w-[300px] h-[50px] border rounded-[60px] border-gray-500 hover:border-white flex items-center justify-evenly'>
                            <img src="./src/assets/images/Google_icons-09-1024.webp" alt="" className="w-[30px]" />
                            Sign up with Google
                        </button>
                        <button className='text-white font-extrabold w-[300px] h-[50px] border rounded-[60px] border-gray-500 hover:border-white flex items-center justify-evenly'>
                            <img src="./src/assets/images/facebook-512.webp" alt="" className="w-[25px]" />
                            Sign up with Facebook
                        </button>
                        <button className='text-white font-extrabold w-[300px] h-[50px] border rounded-[60px] border-gray-500 hover:border-white flex items-center justify-evenly'>
                            <GrApple />
                            Sign up with Apple
                        </button>
                    </div>

                    <div className="bg-gray-300 w-[300px] -my-3 h-[1px]"></div>

                    {/* Footer */}
                    <div className="flex flex-col gap-3.5 mb-4">
                        <h1 className='text-white'>Already have an account? <a href="" className='text-white underline font-bold'>Log in here.</a></h1>
                        <p className='text-[10px] text-gray-400'>This site is protected by reCAPTCHA and the Google <br />
                            <a href="" className='underline'>Privacy Policy</a> and <a href="" className='underline'>Terms of Service </a> apply.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Signup;
