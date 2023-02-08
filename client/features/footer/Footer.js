// import React from 'react'
// import { Link } from 'react-router-dom';


// const Footer = () => {
//     return (
//         <div>
//             <section id="footer" className='bg-red-500 md:px-28'>
//                 <div className='conmtainer flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0'>
//                     <h2 className='md:text-4xl font-bold leading-tight text-center text-2xl text-white md:max-w-xl md:text-left'>
//                         Need to speak with an expert
//                         </h2>
//                     <div className='flex justify-center md:justify-start pt-6'>
//                         <Link 
//                         className='p-1 px-6 pt-2 text-red-500 rounded-full bg-white shadow-2xl hover:bg-gray-300 govver:text-black'>
//                             Contact Us
//                             </Link>
//                     </div>
//                 </div>
//             </section>
//             {/* background */}
//         <div>
//             {}
//         <div>
//             <div></div>
//             <div></div>
//             <div></div>
//         </div>
//         </div>
//         </div>
//     )
// }

// export default Footer;

import React from "react";


const Footer = () => {
  return (
    <footer className="bg-[#E68584] text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-amber-300">Subscribe</span> to find out about discounts, updates and more!
        </h1>
        <div>
          <input
            type="text"
            placeholder="Email address"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-amber-300 hover:bg-[#fff6f6] duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-salmon md:w-auto w-full"
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
                <h1>Recommended Links</h1>
                <div className='footerTextContent'>
                <li><a href="/home">Home</a> </li>
                <li><a href="/messages">Messages</a> </li>
                <li><a href="/VIP">VIP</a> </li>
                <li><a href="/profile">Profile</a> </li>
                </div>
            </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-white text-sm pb-8"
      >
        <span>© 2023 epitoME All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
      </div>
    </footer>
  );
};

export default Footer;
