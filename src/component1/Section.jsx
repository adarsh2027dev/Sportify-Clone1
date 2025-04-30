import React from 'react'
import { LuLibraryBig } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { IoGlobeSharp } from "react-icons/io5";
const Section = () => {
  return (
    <div class='w-[450px] fixed h-[560px] mt-20 bg-[#121212] rounded-[8px] mb-2'>
  {/*top floor*/}

  <div className="flex flex-row items-center mt-2 justify-between pl-4 pr-4 ">
    <div className="flex flex-row items-center justify-center gap-3 mt-1.5">
    <LuLibraryBig class='text-gray-400 w-[40px] h-[30px]'/>
    <h1 class='text-gray-400 font-bold  '>Your Libabry</h1>
    </div>
    <div className="">
    <FaPlus className='text-white mt-3' />
    </div>
    </div>
{/*first div*/}
    <div className="flex flex-col   gap-9 mt-10 justify-center ">
      <div class='scroll h-[280px] overflow-x-auto flex flex-col gap-4'>
      <div className=" flex flex-col gap-3 pl-6 bg-zinc-800 mx-1.5 py-3 rounded-[10px]">
        <div className=" text-white font-bold">Create your first playlist</div>
        <div className=" text-white"> it's easy,we will help  you</div>
        <div className=""> <button class='bg-white font-bold rounded-[60px] px-4 py-2'>Create playlist</button></div>
      </div>
      {/*secand div*/}
      <div className=" flex flex-col gap-3 pl-6 bg-zinc-800 mx-1.5 py-3 rounded-[10px]">
        <div className=" text-white font-bold">lets find some podcast to follow</div>
        <div className="text-white"> We'll keep you updated on new episodes</div>
        <div className=""> <button class='bg-white font-bold rounded-[60px] px-4 py-1.5'> Browse podcasts </button></div>
      </div>
    </div>
      {/*third div*/}
      <div className="flex flex-col gap-3 pl-6">
        <div className=" flex flex-row gap-6">

          <a href="#" class='text-gray-400 text-[12px]'>Legal</a>
          <a href="#" class='text-gray-400 text-[12px]'>Safety&privacycenter</a>
          <a href="#" class='text-gray-400 text-[12px]'>Privacypolicy</a>
        </div>
        <div className="flex flex-row gap-6">

        <a href="#" class='text-gray-400 text-[12px] '>cookies </a>
        <a href="#" class='text-gray-400 text-[12px]'>AboutAds</a>
        <a href="#" class='text-gray-400 text-[12px]'>Accesiblity</a>
        </div>
        <div className="">
        <a href="#" class='text-white font-semibold'>Cookies </a>
        </div>
      </div>
      <button className=" px-2 py-0.5 flex ml-3 flex-row items-center gap-2 border-white border-[2px] w-[90px] rounded-[30px] hover:scale-110">
      <IoGlobeSharp  class='text-white text-[18px]'/>
        <h1 class='text-white text-[15px] font-bold'> English</h1>
      </button>
    </div>
    </div>
  )
}

export default Section
