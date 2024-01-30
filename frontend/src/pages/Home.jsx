import React from "react";

function Home() {
  return (
    <>
      <section className="w-full bg-black" >
       <div className=" bg-black w-full max-w-7xl mx-auto min-h-screen pb-16 md:flex md:justify-around md:items-center ">
       <div className=" p-10 space-y-10 md:w-1/2  ">
          <div className="text-white space-y-8 ">
            <p className="text-3xl md:text-4xl text-white  font-semibold">
              Welcome To <span>
                
                <span className="text-4xl py-3  font-bold text-cyan-600 ">NS<span className="text-white">oftware</span>
                </span>
              </span>
            </p>
            <p className="text-lg md:text-xl text-cyan-500">
              To obtain a challenging Software Developer Position where my
              creativity , problem-solving skills , and experience in Software
              Development engaging and user-friendly Software can be utilized to
              enhance user productivity .
            </p>
          </div>
          <div className=" flex space-x-2 md:space-x-14  md:font-semibold ">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/nexus-software-pvt-ltd/"
              className="bg-cyan-600 text-white border border-green-900 px-4  md:px-10 py-3 rounded-md  hover:bg-emerald-300 hover:text-black"
            >
              LinkedIn
            </a>
            <a
              target="_blank"
              href="#"
              className=" bg-white text-black border border-green-900  px-4 md:px-10 py-3 rounded-md  hover:text-green-800 "
            >
              Github
            </a>
          </div>
        </div>
        <div className="hidden sm:flex  sm:justify-center sm:items-center min-h-[300px] sm:min-h-[450px]">
          <div className="bg-cyan-600   sm:w-[450px] sm:h-[450px] rounded-full">
            <div className="sm:bg-black hidden  sm:w-[430px] sm:h-[430px] rounded-full p-2 sm:flex sm:justify-center items-center text-cyan-500 sm:text-5xl">
              N<span className="text-white">x</span>S 
            </div>
          </div>
        </div>
       </div>
      </section>
      <section className=" bg-black flex justify-center items-center min-h-screen ">
        <div className="bg-slate-50  md:flex max-w-5xl mx-auto py-10 rounded-xl   md:justify-center md:items-center">
          <div className="p-5 text-center space-y-2">
            <h1 className="text-cyan-500 font-bold text-2xl">100+</h1>
            <h2 className="font-semibold">Software Developed </h2>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              praesentium.
            </p>
          </div>
          <div className="p-5 text-center space-y-2">
            <h1 className="text-cyan-500 font-bold text-2xl">100+</h1>
            <h2 className="font-semibold">Software Developed </h2>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              praesentium.
            </p>
          </div>
          <div className="p-5 text-center space-y-2">
            <h1 className="text-cyan-500 font-bold text-2xl">100+</h1>
            <h2 className="font-semibold">Software Developed </h2>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              praesentium.
            </p>
          </div>
        </div>
      </section>

      <h1 className="text-white sm:text-4xl py-5  bg-black text-center">What Our Customers <span className="text-cyan-600"> says!</span> 
</h1>
      <section className="w-full bg-black  min-h-[400px] flex justify-start items-center ">
        
        <div className=" md:flex space-y-10 max-w-6xl mx-auto  gap-10 md:space-y-0  justify-start items-center">
          <div className="bg-white p-10 text-start space-y-5  rounded-md">
            <h2 className="font-semibold text-start">Aniket Rangari </h2>
            <p className="text-xs text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              praesentium. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Labore, sint?Lorem ipsum dolor sit amet. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Delectus, non.
            </p>
            <p className="text-xl font-bold text-slate-600">*****</p>
          </div>
          <div className="bg-cyan-300 bg- p-10 text-start space-y-5 rounded-md ">
            <h2 className="font-semibold text-start">Aniket Rangari </h2>
            <p className="text-xs text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              praesentium. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Labore, sint?Lorem ipsum dolor sit amet. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Delectus, non.
            </p>
            <p className="text-xl font-bold text-slate-600">*****</p>
          </div>

          <div className="bg-white p-10 text-start space-y-5 rounded-md">
            <h2 className="font-semibold text-start">Aniket Rangari </h2>
            <p className="text-xs text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              praesentium. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Labore, sint?Lorem ipsum dolor sit amet. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Delectus, non.
            </p>
            <p className="text-xl font-bold text-slate-600">*****</p>
          </div>
        </div>
      </section>

      <section className="bg-black w-full">
        <div className="block max-w-6xl mx-auto ">
          <div className="max-w-2xl pt-24 mx-auto space-y-5">
            <h1 className="text-center text-white text-2xl ">Pricing</h1>
            <p className="text-slate-600 text-center text-base">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="sm:flex py-24  sm:gap-10 space-y-10  sm:space-y-0 sm:justify-center sm:items-center">
            
            <div className="space-y-8  border-cyan-400 border border-opacity-40  flex flex-col items-center   py-10 px-5">
              <h1 className="text-cyan-400 hover:text-white text-2xl text-center ">Starter</h1>
              <h2 className="text-cyan-400 text-2xl text-center">
              $59.99 <span className="text-slate-300">/month</span>
              </h2>
              <p className="text-center text-cyan-600">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <button className="py-3  px-5  bg-cyan-500 text-white  rounded-full">GET STARTED </button>
            </div>
            <div className="space-y-8 flex flex-col items-center border border-opacity-35 border-slate-300 py-10 px-5">
              <h1 className="text-slate-400 text-2xl text-center">Business</h1>
              <h2 className="text-slate-400  text-2xl text-center">
              $99.99 <span className="text-slate-300">/month</span>
              </h2>
              <p className="text-center text-slate-400">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <button className="py-3  px-5  bg-slate-500 text-white border-cyan-600 rounded-full">GET STARTED </button>
            </div>
            <div className="space-y-8 flex flex-col items-center border border-opacity-35 border-amber-300 py-10 px-5">
              <h1 className="text-amber-300 text- text-2xl text-center">Premium</h1>
              <h2 className="text-amber-300 text-2xl text-center">
              $199.99 <span className="text-slate-300">/month</span>
              </h2>
              <p className="text-center text-amber-300 text-opacity-60">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <button className="py-3  px-5  bg-amber-300 text-black  rounded-full">GET STARTED </button>
            </div>
            
           
          </div>
        </div>
      </section>
     
    </>
  );
}

export default Home;
