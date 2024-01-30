import React from "react";

function About() {
  return (
    <>
      <section className="w-full secBg bg-black">
        <div className="w-full max-w-7xl mx-auto flex gap-5 flex-col justify-center items-center min-h-[620px]">
          <h1 className="text-4xl font-medium sm:text-7xl text-white">
            About <span className="text-cyan-300">NS</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 text-center max-w-xl px-5">
            Scoinex As The Pinnacle ICO, Redefining The Future Of Financial
            Markets With Its Unparalleled Success In The World Of
            Cryptocurrency.
          </p>
        </div>
      </section>


      <section className="w-full bg-black pb-10  mx-auto">
      <h1 className="text-center text-sm rounded-full mx-auto mb-5 animate-pulse  border-2 border-cyan-300 max-w-max py-2 px-4 text-cyan-300">Know Us </h1>
        <div className=" block w-max space-y-5 md:space-y-0  md:items-center md:flex max-w-6xl  md:max-w-7xl mx-auto md:gap-2 md:justify-center">

        {/* block md:flex md: gap-7  sm:justify-center */}
          <div className="space-y-5  ">
          <div className=" text-9xl flex items-center   justify-end text-cyan-400  border-y border-cyan-400 w-[250px] h-[250px] pr-2 md:w-[350px] md:h-[350px]">NEX</div>
          <div className="  border-2 border-white w-[250px] h-[250px]    md:w-[350px] md:h-[350px]"></div>
          </div>
          <div className="space-y-5 ">
          <div className=" border-y border-cyan-400 text-9xl pl-2  flex items-center  text-black bg-white justify-start   w-[250px] h-[250px]  md:w-[350px] md:h-[350px]">US</div>
          <div className="  bg-cyan-300 w-[250px] h-[250px]  md:w-[350px] md:h-[350px]"></div>

          </div>
         
         
        </div>
      </section>
     
       </>
  );
}

export default About;
