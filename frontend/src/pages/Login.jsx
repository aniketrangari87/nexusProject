import React from "react";
import { useNavigate } from "react-router-dom";
function Login({isLogin , setIsLogin}) {
   const login = isLogin;
   const setLogin = setIsLogin;
   const navigate = useNavigate();
    
     const submitHandler =()=>{
      navigate('/')
        setLogin(true)
        
     }
    const  signupHandler= () => {
        // Navigate to the signup page
        navigate('/signup');
      };
  return (
<>
{
      login?" ":<div className="flex justify-center items-center w-full min-h-screen bg-black">
      <div className="flex  flex-col px-2 border border-cyan-300  space-y-3 justify-center items-center rounded-lg  h-[600px] w-full mx-auto max-w-lg  sm:max-w-xl bg-white ">
        <label className="text-3xl text-cyan-600 font-semibold">
          N<span className="text-black">S</span>
        </label>
        <h1 className="sm:text-2xl font-semibold  ">Login to your acoount </h1>
        <p className="text-slate-500 text-xs text-center sm:text-md">
          Don't have an account yet ?
          <a onClick={signupHandler} className="text-cyan-400" href="#"> Signup
          </a>
        </p>

        <form
          onSubmit={submitHandler}
          action="/login"
          method="post"
          className="space-y-8 pt-8  w-full mx-auto max-w-sm sm:max-w-md min-h-[300px]"
        >
          <input
            id="email"
            className=" w-full outline-cyan-400 rounded-md  max-w-xl mx-auto py-4 border-2 text-sm px-4"
            placeholder="Enter Email "
            type="email"
          />
          <br />
          <input
            id="password"
            className="w-full caret-cyan-600 rounded-md  outline-cyan-400  max-w-xl mx-auto py-4 border-2 text-sm px-4"
            placeholder="Enter Password "
            type="password"
          />
          <br />
          <div className="grid grid-cols-1 gap-5 sm:flex sm:justify-between   px-2 ">
            <div className="flex gap-3 text-xs">
              <input className="" id="remember" type="checkbox" />
              <label htmlFor="remember"> Remember me </label>
            </div>
            <a className="text-xs text-cyan-400" href="#">
              Forgot your password ?
            </a>
          </div>
          <button className="w-full rounded-md bg-cyan-400 py-4"  type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
    }
</>
   
    
  );
}

export default Login;
