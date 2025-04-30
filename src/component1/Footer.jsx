import React from 'react'

const Footer = () => {
  return (
    <div>
       <div className="w-full bg-linear-to-r/srgb fixed from-indigo-300 to-indigo-500 flex flex-row justify-between mt-5 items-center px-4 h-[70px]">
           <div className=" flex flex-col">
            <h1 className='text-white font-bold'> Preview of sportify</h1>
            <p class='text-white'>Sign upto get unlimited song and podcast with ocaltional ads.No credit card   needed.</p>
           </div>
           <button  class='bg-white h-[50px] text-black font-bold w-[180px]  rounded-[60px]'>Sign up for free</button>
       </div>
    </div>
  )
}

export default Footer
