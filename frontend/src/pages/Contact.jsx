import React from 'react'

function Contact() {
  return (
    <div>
      <section className='w-full bg-black'>
        <div className="block    md:flex md:justify-center md:items-center max-w-7xl mx-auto w-full ">
          <div className="   w-full space-y-20 p-5 md:p-16 md:rounded-l-xl bg-cyan-400 md:w-1/2">
            <h1 className="text-black  font-semibold text-2xl sm:text-3xl ">Get in touch</h1>
            <p className="text-sm md:text-xl text-green-600"></p>
            <div className="space-y-5  text-sm text-start md:text-lg text-gray-700 ">
            <p>Aurangabad </p>
            <p>+91-9529072277</p>
            <p>aniketrangari@gmail.com</p>

            </div>
          </div>
          <div className=" md:my-5 md:rounded-lg w-full px-5 py-5 space-y-10 bg-white  md:w-1/2 ">
              <div className="flex flex-col gap-10   md:flex  ">
                   <div>
                    <label  className="font-semibold" htmlFor="firstname">First name</label><br /><br />
                    <input className="p-2 w-full  outline-none caret-green-700 bg-transparent border-b border-b-2 border-cyan-500 " type="text" name="firstname" id="firstname" />
                   </div>
                   <div>
                   <label className="font-semibold"  htmlFor="lastname">Last name</label><br /><br />
                    <input className="p-2 w-full  outline-none caret-green-700 bg-transparent border-b border-b-2 border-cyan-500" type="text" name="lastname" id="lastname" />
                   </div>
              </div>
              <div>
              <label className="font-semibold" htmlFor="email">Email</label><br /><br />
                    <input className="p-2 w-full outline-none caret-green-700  bg-transparent border-b border-b-2 border-cyan-500" type="text" name="email" id="email" />
              </div>
              <div>
              <label className="font-semibold" htmlFor="phonenumber">Phone number</label><br /><br />
                    <input className="p-2 w-full outline-none caret-green-700  bg-transparent border-b border-b-2 border-cyan-500 " type="text" name="phonenumber" id="phonenumber" />
              </div>
              <div>
              <label className="font-semibold" htmlFor="message">Message</label><br /><br />
              <textarea className="p-3 w-full outline-none  caret-green-700 rounded-md bg-transparent border border-2 border-cyan-500 " name="message" id="message" cols="30" rows="5"></textarea>
                   
              </div>
              <div>
                <button className="btn bg-cyan-500 px-6 text-white p-2 font-semibold rounded-md  " type="submit"> Submit</button>
              </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact