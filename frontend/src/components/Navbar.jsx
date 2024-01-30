import React ,{useState} from "react";
import Hamburger from "hamburger-react";
import { Route , Routes , NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function Navbar() {
  
  const [isOpen, setOpen] = useState(false)
  const [isLogin , setIsLogin] =useState(false)

  const  logoutHandler= () => {
    // Navigate to the signup page
    navigate('/login');
    navigate('/');
  };




  return (
    <div className="">
      <nav className={`flex    sticky items-center justify-between  py-1  px-5 max-w-7xl mx-auto `}>
        <h1 className="text-xl py-3  font-bold text-cyan-600 ">NS<span className="text-black">oftware</span></h1>
        
        <ul className={`sm:flex py-3 hidden   font-normal sm:gap-5 sm:visible `}>
          <li>
            <NavLink className="hover:text-cyan-600" to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink className="hover:text-cyan-600" to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink className="hover:text-cyan-600"to='/services'>Services</NavLink>
          </li>
          <li>
            <NavLink  className="hover:text-cyan-600"to='/contact'>Contact us </NavLink>
          </li>
          <li>
            {
              isLogin?<NavLink className="text-cyan-600" onClick={logoutHandler}> Logout</NavLink> : <NavLink className="text-cyan-600 py-2 rounded-lg px-3" to='/login'>Login</NavLink>
            }
            
            {
              isLogin?<NavLink className="text-cyan-600" onClick={logoutHandler}> Logout</NavLink> : <NavLink className="text-cyan-600 py-2 rounded-lg px-3" to='/signup'>Signup</NavLink>
            }
            
          </li>
          

         
        </ul>
        <div className="sm:hidden">
        <Hamburger   toggled={isOpen} toggle={setOpen} />
        </div>
       
      </nav>

      <ul className={`flex justify-center  gap-5 flex-col items-center  w-full ${isOpen ? "block ":"hidden"} `}>
          <li className="">Home</li>
          <li className="">About</li>
          <li className="">Service</li>
          <li className="">Contact Us </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login  isLogin={isLogin} setIsLogin={setIsLogin}/>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </div>
  );
}

export default Navbar;
