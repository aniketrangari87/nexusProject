import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Signup() {

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const createEmployee = async (data) => {

    const savedUserResponse = await fetch(
      `${process.env.REACT_APP_BASE_URL}/createUser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      }
    );

    console.log("FORM RESPONSE......", savedUserResponse);

    navigate("/")
  };

  return (
    <div className="flex justify-center   items-center w-full min-h-screen bg-black">
    <div className="flex border border-cyan-300   flex-col px-2 space-y-3 justify-center items-center  h-[600px] w-full mx-auto max-w-lg rounded-lg sm:max-w-xl bg-white ">
      <label className="text-3xl text-cyan-500 font-semibold">N<span className='text-black'>S</span></label>
      <h1 className="sm:text-2xl font-semibold  ">Signup </h1>
     <p className='text-slate-500 text-xs text-center sm:text-md'>
     Create your acoount
     </p>

      <form
       onSubmit={handleSubmit(createEmployee)}
        action="/signup"
          method="post"
        className="space-y-8 pt-8  w-full mx-auto max-w-sm sm:max-w-md min-h-[300px]"
      >
         <input
          id="username"
          name="username"
          {...register("username")}
          className=" w-full outline-cyan-400  rounded-md max-w-xl mx-auto py-4 border-2 text-sm px-4"
          placeholder="Enter username  "
          type="text"
          required
         
        />
        <br />
        <input
          id="email"
          name="email"
          className=" w-full outline-cyan-400 rounded-md  max-w-xl mx-auto py-4 border-2 text-sm px-4"
          placeholder="Enter Email "
          type="email"
          {...register("email")}
          required

          

        />
        <br />
        <input
          id="password"
          name="password"
          className="w-full outline-cyan-400  rounded-md max-w-xl mx-auto py-4 border-2 text-sm px-4"
          placeholder="Enter Password "
          type="password"
        
          required

          {...register("password")}
        />
        <br />
    
        <button className="w-full rounded-md bg-cyan-400 py-4" type="submit">
      
          Signup
        </button>
      </form>
    </div>
  </div>
  )
}

export default Signup