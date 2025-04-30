import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


const Aside = () => {
  return (
    <div>
      {/*side*/}

      <div className="aside1  bg-gradient-to-b from-zinc-800 to-black-900 w-[1080px] overflow-y-scroll ml-[460px] mt-[80px] h-[560px]   rounded-[20px]">
        <div className=" flex flex-col">
          {/*button div*/}
          <div className=" cursor-pointer flex flex-row justify-between mx-10 mt-6">
            <butoon class="text-white font-bold text-[25px] hover:underline">
              Popular artists
            </butoon>
            <butoon class="text-gray-400 font-bold hover:underline">
              Show all
            </butoon>
          </div>
          <div className=" cursor-pointer flex flex-row gap-6 m-6">
            <div className="flex relative  flex-col gap-1 hover:bg-gradient-to-b from-zinc-800 to-black-900 absolute-inset-0 w-fit px-2 group ">
              <img
                src="./src/assets/images/preteam.jpeg"
                alt=""
                class="w-[190px] h-[160px]  rounded-[100%] object-fill"
              />
              <div className="bg-green-500  w-[50px] h-[50px] rounded-[100%]  flex flex-col items-center justify-center top-[45%] left-[60%] absolute opacity-0 group-hover:opacity-100  group-hover:-translate-y-[30%] transition-normal duration-700  ">
                <img
                  src="./src/assets/images/album/logoplay1.jpg"
                  class="mix-blend-multiply w-[25px]"
                  alt=""
                />
              </div>
              <h1 class="text-white font-bold hover:underline  mt-1.5">
                Pritam
              </h1>
              <p class="text-gray-400">Artist</p>
            </div>
            <div className="flex relative flex-col gap-1 hover:bg-gradient-to-b from-zinc-800 to-black-900 backdrop-opacity-100 px-2 group">
              <img
                src="./src/assets/images/airjeet.webp"
                alt=""
                class="w-[190px] h-[160px]  rounded-[100%] object-cover"
              />
              <div className="bg-green-500  w-[50px] h-[50px] rounded-[100%]  flex flex-col items-center justify-center top-[45%] left-[60%] absolute opacity-0 group-hover:opacity-100  group-hover:-translate-y-[30%] transition-normal duration-700  ">
                <img
                  src="./src/assets/images/album/logoplay1.jpg"
                  class="mix-blend-multiply w-[25px]"
                  alt=""
                />
              </div>
              <h1 class="text-white font-bold hover:underline  mt-1.5">
                Arijit
              </h1>
              <p class="text-gray-400">Artist</p>
            </div>
            <div className="flex  relative flex-col gap-1 hover:bg-gradient-to-b from-zinc-800 to-black-900 opacity-100 px-2 group">
              <img
                src="./src/assets/images/ar rehman.jpeg"
                alt=""
                class="w-[190px] h-[160px]  rounded-[100%] object-cover"
              />
              <div className="bg-green-500  w-[50px] h-[50px] rounded-[100%]  flex flex-col items-center justify-center top-[45%] left-[60%] absolute opacity-0 group-hover:opacity-100  group-hover:-translate-y-[30%] transition-normal duration-700  ">
                <img
                  src="./src/assets/images/album/logoplay1.jpg"
                  class="mix-blend-multiply w-[25px]"
                  alt=""
                />
              </div>
              <h1 class="text-white font-bold hover:underline  mt-1.5">
                A.R. Rahman
              </h1>
              <p class="text-gray-400">Artist</p>
            </div>
            <div className="flex relative flex-col gap-1 hover:bg-gradient-to-b from-zinc-800 to-black-900 opacity-100 px-2 group">
              <img
                src="./src/assets/images/pawan.jpeg"
                alt=""
                class="w-[190px] h-[160px]  rounded-[100%] "
              />
              <div className="bg-green-500  w-[50px] h-[50px] rounded-[100%]  flex flex-col items-center justify-center top-[45%] left-[60%] absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[30%] transition-normal duration-700  ">
                <img
                  src="./src/assets/images/album/logoplay1.jpg"
                  class="mix-blend-multiply w-[25px]"
                  alt=""
                />
              </div>
              <h1 class="text-white font-bold hover:underline  mt-1.5">
                Pawan singh
              </h1>
              <p class="text-gray-400">Artist</p>
            </div>
            <div className="flex relative  flex-col gap-1 hover:bg-gradient-to-b from-zinc-800 to-black-900 opacity-100 px-2 group">
              <img
                src="./src/assets/images/khesari.jpeg"
                alt=""
                class="w-[190px] h-[160px]  rounded-[100%] "
              />
              <div className="bg-green-500  w-[50px] h-[50px] rounded-[100%]  flex flex-col items-center justify-center top-[45%] left-[60%] absolute opacity-0 group-hover:opacity-100  group-hover:-translate-y-[30%] transition-normal duration-700  ">
                <img
                  src="./src/assets/images/album/logoplay1.jpg"
                  class="mix-blend-multiply w-[25px]"
                  alt=""
                />
              </div>
              <h1 class="text-white font-bold hover:underline  mt-1.5">
                khesari lal
              </h1>
              <p class="text-gray-400">Artist</p>
            </div>
            <div className="flex relative flex-col gap-1 hover:bg-gradient-to-b from-zinc-800 to-black-900 opacity-100 px-2 group">
              <img
                src="./src/assets/images/aslam.jpeg"
                alt=""
                class="w-[190px] h-[160px]  rounded-[100%] object-cover"
              />
              <div className="bg-green-500  w-[50px] h-[50px] rounded-[100%]  flex flex-col items-center justify-center top-[45%] left-[60%] absolute opacity-0 group-hover:opacity-100 group-hover::-translate-y-[30%] transition-normal duration-700  ">
                <img
                  src="./src/assets/images/album/logoplay1.jpg"
                  class="mix-blend-multiply w-[25px]"
                  alt=""
                />
              </div>
              <h1 class="text-white font-bold hover:underline  mt-1.5">
                Atif Aslam
              </h1>
              <p class="text-gray-400">Artist</p>
            </div>
          </div>
          {/*secand heading*/}
          <div className="cursor-pointer flex flex-row justify-between mx-10 mt-6">
            <butoon class="text-white font-bold text-[25px] hover:underline">
              Popular albums and singles
            </butoon>
            <butoon class="text-gray-400 font-bold hover:underline">
              Show all
            </butoon>
          </div>
          {/*secand block*/}
          <div className="cursor-pointer  flex flex-row gap-6 mt-10 mx-auto">
            <div className="flex flex-col gap-1 relative hover:bg-gradient-to-b from-zinc-800 to-zinc-950 absolute-inset-0 w-fit p-2 group">
              <img
                src="./src/assets/images/album/sanam tere kasma.jpeg"
                alt=""
                class="w-[170px] h-[160px]  rounded-[10px] object-fill"
              />
              <div className="bg-green-500  w-[50px] h-[50px] rounded-[100%]  flex flex-col items-center justify-center top-[45%] left-[60%] absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[30%] transition-normal duration-700  ">
                <img
                  src="./src/assets/images/album/logoplay1.jpg"
                  class="mix-blend-multiply w-[25px]"
                  alt=""
                />
              </div>
              <h1 class="mt-3 text-white font-bold hover:underline  ">
                sanam Tere Kasam <br />
                (Original Motion......{" "}
              </h1>
              <p class="text-gray-400 hover:underline">
                Himesh Reshmamiya,
                <br />
                Sammer Anjanan,Subrat...
              </p>
            </div>
            <div className="flex relative flex-col gap-1 hover:bg-gradient-to-b from-zinc-800 to-black-900 backdrop-opacity-100 p-2 group">
              <img
                src="./src/assets/images/album/asique2.jpeg"
                alt=""
                class="w-[170px] h-[160px]  rounded-[10px] object-fill"
              />
              <div className="bg-green-500  w-[50px] h-[50px] rounded-[100%]  flex flex-col items-center justify-center top-[45%] left-[60%] absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[30%] transition-normal duration-700  ">
                <img
                  src="./src/assets/images/album/logoplay1.jpg"
                  class="mix-blend-multiply w-[25px]"
                  alt=""
                />
              </div>

              <h1 class="mt-3 text-white font-bold hover:underline  ">
                Aashiqui 2
              </h1>
              <p class="text-gray-400"> Mithoon, Ankit Tiwari</p>
            </div>
            <div className="flex relative flex-col gap-1 hover:bg-gradient-to-b from-zinc-800 to-black-900 opacity-100 p-2 group">
              <img
                src="./src/assets/images/album/ye jawani.jpeg"
                alt=""
                class="w-[170px] h-[160px]  rounded-[10px] object-fill"
              />
              <div className="bg-green-500  w-[50px] h-[50px] rounded-[100%]  flex flex-col items-center justify-center top-[45%] left-[60%] absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[30%] transition-normal duration-700  ">
                <img
                  src="./src/assets/images/album/logoplay1.jpg"
                  class="mix-blend-multiply w-[25px]"
                  alt=""
                />
              </div>

              <h1 class="mt-3 text-white font-bold hover:underline  ">
                Yeh Jawani Hai Deewani
              </h1>
              <p class="text-gray-400">Pritam</p>
            </div>
            <div className="flex relative flex-col gap-1 hover:bg-gradient-to-b from-zinc-800 to-black-900 opacity-100 p-2 group">
              <img
                src="./src/assets/images/album/kalaster.jpeg"
                alt=""
                class="w-[170px] h-[160px]  rounded-[10px]  object-fill"
              />
              <div className="bg-green-500  w-[50px] h-[50px] rounded-[100%]  flex flex-col items-center justify-center top-[45%] left-[60%] absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[30%] transition-normal duration-700  ">
                <img
                  src="./src/assets/images/album/logoplay1.jpg"
                  class="mix-blend-multiply w-[25px]"
                  alt=""
                />
              </div>
              <h1 class="mt-3 text-white font-bold hover:underline  ">
                Kalaster
              </h1>
              <p class="text-gray-400">Honey Singh</p>
            </div>
            <div className="flex relative flex-col gap-1 hover:bg-gradient-to-b from-zinc-800 to-black-900 opacity-100 p-2 group">
              <img
                src="./src/assets/images/album/pawan singh.jpeg"
                alt=""
                class="w-[170px] h-[160px]  rounded-[10px]  object-fill"
              />
              <div className="bg-green-500  w-[50px] h-[50px] rounded-[100%]  flex flex-col items-center justify-center top-[45%] left-[60%] absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[30%] transition-normal duration-700  ">
                <img
                  src="./src/assets/images/album/logoplay1.jpg"
                  class="mix-blend-multiply w-[25px]"
                  alt=""
                />
              </div>

              <div className="bg-green-500  w-[50px] h-[50px] rounded-[100%]  flex flex-col items-center justify-center top-[45%] left-[60%] absolute opacity-0 hover:opacity-100  hover:-translate-y-[30%] transition-normal duration-700  ">
                <img
                  src="./src/assets/images/album/logoplay1.jpg"
                  class="mix-blend-multiply w-[25px]"
                  alt=""
                />
              </div>
              <h1 class="mt-3 text-white font-bold hover:underline  ">
                Roopwa sajawal ka hoe
              </h1>
              <p class="text-gray-400">Pawan Singh</p>
            </div>
          </div>
        </div>
        {/*third secation*/}
        <div className="cursor-pointer flex flex-row justify-between mx-6 mt-10">
          <butoon class="text-white font-bold text-[25px] hover:underline">
            Popular radio
          </butoon>
        </div>

        <div className="cursor-pointer  flex flex-row gap-0.5 mt-10 mx-6">
          <div className="flex flex-col gap-1 relative hover:bg-gradient-to-b from-zinc-800 to-zinc-950 absolute-inset-0 w-fit p-2 group">
            <img
              src="./src/assets/images/radio/arjit.png"
              alt=""
              class="w-[170px] h-[160px]  rounded-[10px] object-fill"
            />
            <div className="bg-green-500  w-[50px] h-[50px] rounded-[100%]  flex flex-col items-center justify-center top-[45%] left-[60%] absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[30%] transition-normal duration-700  ">
              <img
                src="./src/assets/images/album/logoplay1.jpg"
                class="mix-blend-multiply w-[25px]"
                alt=""
              />
            </div>
            <h1 class="mt-3 text-gray-400  hover:underline  ">
            With Sachin-Jigar, <br />
            Amit Trivedi, Mithoon and more
            </h1>

          </div>
          <div className="flex relative flex-col gap-2 hover:bg-gradient-to-b from-zinc-800 to-black-900 backdrop-opacity-100 p-2 group">
            <img
              src="./src/assets/images/radio/alka.png"
              alt=""
              class="w-[170px] h-[160px]  rounded-[10px] object-fill"
            />
            <div className="bg-green-500  w-[50px] h-[50px] rounded-[100%]  flex flex-col items-center justify-center top-[45%] left-[60%] absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[30%] transition-normal duration-700  ">
              <img
                src="./src/assets/images/album/logoplay1.jpg"
                class="mix-blend-multiply w-[25px]"
                alt=""
              />
            </div>


            <p class="text-gray-400"> With Abhijeet,Jatin-Lalit, <br />Kumar Sanu and more</p>
          </div>
          <div className="flex relative flex-col gap-1 hover:bg-gradient-to-b from-zinc-800 to-black-900 opacity-100 p-2 group">
            <img
              src="./src/assets/images/radio/diljit.png"
              alt=""
              class="w-[170px] h-[160px]  rounded-[10px] object-fill"
            />
            <div className="bg-green-500  w-[50px] h-[50px] rounded-[100%]  flex flex-col items-center justify-center top-[45%] left-[60%] absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[30%] transition-normal duration-700  ">
              <img
                src="./src/assets/images/album/logoplay1.jpg"
                class="mix-blend-multiply w-[25px]"
                alt=""
              />
            </div>


            <p class="text-gray-400">With Karan Aujla <br />Shubh, Badshah and more</p>
          </div>
          <div className="flex relative flex-col gap-1 hover:bg-gradient-to-b from-zinc-800 to-black-900 opacity-100 p-2 group">
            <img
              src="./src/assets/images/radio/kk.png"
              alt=""
              class="w-[170px] h-[160px]  rounded-[10px]  object-fill"
            />
            <div className="bg-green-500  w-[50px] h-[50px] rounded-[100%]  flex flex-col items-center justify-center top-[45%] left-[60%] absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[30%] transition-normal duration-700  ">
              <img
                src="./src/assets/images/album/logoplay1.jpg"
                class="mix-blend-multiply w-[25px]"
                alt=""
              />
            </div>

            <p class="text-gray-400">With Armaan Malik, <br />Pritam, Ankit Tiwari and more
            </p>
          </div>

          <div className="flex flex-col gap-1 relative hover:bg-gradient-to-b from-zinc-800 to-zinc-950 absolute-inset-0 w-fit p-2 group">
            <img
              src="./src/assets/images/radio/shreya.png"
              alt=""
              class="w-[170px] h-[160px]  rounded-[10px] object-fill"
            />
            <div className="bg-green-500  w-[50px] h-[50px] rounded-[100%]  flex flex-col items-center justify-center top-[45%] left-[60%] absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[30%] transition-normal duration-700  ">
              <img
                src="./src/assets/images/album/logoplay1.jpg"
                class="mix-blend-multiply w-[25px]"
                alt=""
              />
            </div>

            <p class="text-gray-400 ">
            With Vishal-Shekhar,
              <br />
              A.R. Rahman, Ajay-Atul and more
            </p>
          </div>

          <div className="flex relative flex-col gap-1 hover:bg-gradient-to-b from-zinc-800 to-black-900 opacity-100 p-2 group">
            <img
              src="./src/assets/images/radio/ks.png"
              alt=""
              class="w-[170px] h-[160px]  rounded-[10px]  object-fill"
            />
            <div className="bg-green-500  w-[50px] h-[50px] rounded-[100%]  flex flex-col items-center justify-center top-[45%] left-[60%] absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[30%] transition-normal duration-700  ">
              <img
                src="./src/assets/images/album/logoplay1.jpg"
                class="mix-blend-multiply w-[25px]"
                alt=""
              />
            </div>

            <div className="bg-green-500  w-[50px] h-[50px] rounded-[100%]  flex flex-col items-center justify-center top-[45%] left-[60%] absolute opacity-0 hover:opacity-100  hover:-translate-y-[30%] transition-normal duration-700  ">
              <img
                src="./src/assets/images/album/logoplay1.jpg"
                class="mix-blend-multiply w-[25px]"
                alt=""
              />
            </div>

            <p class="text-gray-400">With Asha Bhosle, Abhijeet, <br />Alka Yagnik and more</p>
          </div>
        </div>
        {/*fouth heading*/}
        <div className="cursor-pointer flex flex-row -mb-8 ml-6 mt-18">
          <butoon class="text-white font-bold text-[25px] hover:underline">
            Popular albums and singles
          </butoon>
        </div>
        {/*fouth column*/}

        <div className="cursor-pointer  flex flex-row gap-0.5 mt-18 mx-6">
          <div className="flex flex-col gap-1 relative hover:bg-gradient-to-b from-zinc-800 to-zinc-950  p-2 group">
            <img
              src="./src/assets/images/top/1.png"
              alt=""
              class="w-[170px] h-[160px]  rounded-[10px] object-fill"
            />
            <div className="bg-green-500  w-[50px] h-[50px] rounded-[100%]  flex flex-col items-center justify-center top-[45%] left-[60%] absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[30%] transition-normal duration-700  ">
              <img
                src="./src/assets/images/album/logoplay1.jpg"
                class="mix-blend-multiply w-[25px]"
                alt=""
              />
            </div>

            <p class="text-gray-400 ">

Playlist
Your weekly update of the most
              <br />
              played tracks right now - Global.
            </p>
          </div>
          <div className="flex relative flex-col gap-1 hover:bg-gradient-to-b from-zinc-800 to-black-900 opacity-100 p-2 group">
            <img
              src="./src/assets/images/top/2.png"
              alt=""
              class="w-[170px] h-[160px]  rounded-[10px] object-fill"
            />
            <div className="bg-green-500  w-[50px] h-[50px] rounded-[100%]  flex flex-col items-center justify-center top-[45%] left-[60%] absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[30%] transition-normal duration-700  ">
              <img
                src="./src/assets/images/album/logoplay1.jpg"
                class="mix-blend-multiply w-[25px]"
                alt=""
              />
            </div>


            <p class="text-gray-400">Your weekly update of the most <br />,played tracks right now - India.</p>
          </div>
          <div className="flex relative flex-col gap-1 hover:bg-gradient-to-b from-zinc-800 to-black-900 opacity-100 p-2 group">
            <img
              src="./src/assets/images/top/3.png"
              alt=""
              class="w-[170px] h-[160px]  rounded-[10px] object-fill"
            />
            <div className="bg-green-500  w-[50px] h-[50px] rounded-[100%]  flex flex-col items-center justify-center top-[45%] left-[60%] absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[30%] transition-normal duration-700  ">
              <img
                src="./src/assets/images/album/logoplay1.jpg"
                class="mix-blend-multiply w-[25px]"
                alt=""
              />
            </div>


            <p class="text-gray-400">Your daily update of the most <br /> played tracks right now - Global.</p>
          </div>
          <div className="flex relative flex-col gap-1 hover:bg-gradient-to-b from-zinc-800 to-black-900 opacity-100 p-2 group">
            <img
              src="./src/assets/images/top/4.png"
              alt=""
              class="w-[170px] h-[160px]  rounded-[10px]  object-fill"
            />
            <div className="bg-green-500  w-[50px] h-[50px] rounded-[100%]  flex flex-col items-center justify-center top-[45%] left-[60%] absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[30%] transition-normal duration-700  ">
              <img
                src="./src/assets/images/album/logoplay1.jpg"
                class="mix-blend-multiply w-[25px]"
                alt=""
              />
            </div>

            <p class="text-gray-400">Your daily update of the most <br />played tracks right now - India.</p>
          </div>

          <div className="flex flex-col gap-1 relative hover:bg-gradient-to-b from-zinc-800 to-zinc-950 absolute-inset-0 w-fit p-2 group">
            <img
              src="./src/assets/images/top/5.png"
              alt=""
              class="w-[170px] h-[160px]  rounded-[10px] object-fill"
            />
            <div className="bg-green-500  w-[50px] h-[50px] rounded-[100%]  flex flex-col items-center justify-center top-[45%] left-[60%] absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[30%] transition-normal duration-700  ">
              <img
                src="./src/assets/images/album/logoplay1.jpg"
                class="mix-blend-multiply w-[25px]"
                alt=""
              />
            </div>

            <p class="text-gray-400 ">
            Your daily update of the most <br />viral tracks right now - Global.
              <br />
              Sammer Anjanan,Subrat...
            </p>
          </div>

          <div className="flex relative flex-col gap-1 hover:bg-gradient-to-b from-zinc-800 to-black-900 opacity-100 p-2 group">
            <img
              src="./src/assets/images/top/1.png"
              alt=""
              class="w-[170px] h-[160px]  rounded-[10px]  object-fill"
            />
            <div className="bg-green-500  w-[50px] h-[50px] rounded-[100%]  flex flex-col items-center justify-center top-[45%] left-[60%] absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[30%] transition-normal duration-700  ">
              <img
                src="./src/assets/images/album/logoplay1.jpg"
                class="mix-blend-multiply w-[25px]"
                alt=""
              />
            </div>

            <div className="bg-green-500  w-[50px] h-[50px] rounded-[100%]  flex flex-col items-center justify-center top-[45%] left-[60%] absolute opacity-0 hover:opacity-100  hover:-translate-y-[30%] transition-normal duration-700  ">
              <img
                src="./src/assets/images/album/logoplay1.jpg"
                class="mix-blend-multiply w-[25px]"
                alt=""
              />
            </div>

            <p class="text-gray-400">Your daily update of the most <br />viral tracks right now - India.</p>
          </div>
        </div>

           {/*footer section*/}
              <div className="flex flex-row text-white justify-evenly  mt-30 ">
                <div className="flex flex-col gap-2">
                  <h1 class='text-white font-bold  cursor-auto'>Company</h1>
                  <p class='text-gray-400 hover:text-white font-lightbold hover:underline'>Jobs</p>
                  <p class='text-gray-400 hover:text-white font-lightbold hover:underline'> For the Record</p>
                  <p class='text-gray-400 hover:text-white font-lightbold hover:underline'>About</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 class='text-white font-bold  cursor-auto'>Communities</h1>
                  <p class='text-gray-400 hover:text-white font-lightbold hover:underline'>For Artists</p>
                  <p class='text-gray-400 hover:text-white font-lightbold hover:underline'>
                  Developers
                  </p>
                  <p class='text-gray-400 hover:text-white font-lightbold hover:underline'>
                  Advertising
                  </p>
                  <p class='text-gray-400 hover:text-white font-lightbold hover:underline'>Investors</p>
                  <p class='text-gray-400 hover:text-white font-lightbold hover:underline'>
                  Vendors
                  </p>
                </div>
                <div className="flex flex-col gap-2 items-start">
                  <h1 class='text-white font-bold  cursor-auto'>Useful links</h1>
                  <button class='text-gray-400 hover:text-white font-lightbold hover:underline'>Support</button>
                  <button class='text-gray-400 hover:text-white font-lightbold hover:underline'>Free Mobile App</button>
                </div>
                <div className="flex flex-col gap-2 items-start">
                  <h1 class='text-white font-bold  cursor-auto'>Spotify Plans</h1>
                  <button class='text-gray-400 hover:text-white font-lightbold hover:underline'>Premium Individual</button>
                  <button class='text-gray-400 hover:text-white font-lightbold hover:underline'>Premium Duo</button>
                  <button class='text-gray-400 hover:text-white font-lightbold hover:underline'>Premium Family</button>
                  <button class='text-gray-400 hover:text-white font-lightbold hover:underline'>Premium Student</button>
                  <button class='text-gray-400 hover:text-white font-lightbold hover:underline'>Spotify Free</button>
                </div>
                {/*logo wala*/}

                <div className=" gap-2 flex flex-row justify-between">
                  <div className="  flex flex-row items-center justify-center  w-[60px] h-[60px] rounded-[100%] bg-zinc-800"><a href="#"><FaInstagram  class='text-white'/> </a></div>
                  <div className=" flex flex-row items-center justify-center   w-[60px] h-[60px] rounded-[100%] bg-zinc-800"><a href="#"><FaTwitter  class='text-white'/></a></div>
                  <div className=" flex flex-row items-center justify-center   w-[60px] h-[60px] rounded-[100%] bg-zinc-800"><a href="#"><FaFacebookF  class='text-white'/></a></div>
                </div>
              </div>
   <div className="w-full h-[1px] bg-gray-600 mt-22 "></div>
   <h1 class='text-gray-400 mt-22 font-bold ml-10 '> © 2025 Spotify AB</h1>
      </div>
    </div>
  );
};

export default Aside;
