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
            className="bg-[#fff6f6] hover:bg-amber-300 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-salmon md:w-auto w-full"
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4  py-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
        <img src="https://i.ibb.co/fFMPkH6/epitomewhite.png" className="object-scale-down h-48 w-96 object-left"></img>
        <div className="footerText">
          <h3>ABOUT</h3>
          <ul><a href="/home">Our Story</a> </ul>
          <ul><a href="/messages">Team</a> </ul>
          <ul><a href="/VIP">Blog</a> </ul>
          <ul><a href="/VIP">Support</a> </ul>

        </div>
        <div className="footerText">
          <h3>USEFUL LINKS</h3>
          <ul><a href="/home">Home</a> </ul>
          <ul><a href="/messages">Messages</a> </ul>
          <ul><a href="/VIP">VIP</a> </ul>
          <ul><a href="/profile">Profile</a> </ul>
        </div>
        <div className="footerText">
          <h3>LEGAL</h3>
          <ul><a href="/home">Terms & Conditions</a> </ul>
          <ul><a href="/messages">Privacy Policy</a> </ul>
          <ul><a href="/VIP">Terms of Use</a> </ul>
          <ul><a href="/VIP">FAQs</a> </ul>
        </div>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-white text-sm pb-8"
      >
        <span>© 2023 epitoME All rights reserved.</span>
        <span>Powered by Team I</span>
        <span> <a href="https://www.facebook.com/"><ion-icon name="logo-facebook"></ion-icon></a> <a href="https://www.instagram.com/"><ion-icon name="logo-instagram"></ion-icon></a> <a href="https://twitter.com/"><ion-icon name="logo-twitter"> </ion-icon></a> <a href="https://github.com/CapstoneGroupI/epitoME"><ion-icon name="logo-github"></ion-icon></a> </span>
      </div>
    </footer>
  );
};

export default Footer;
