/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";



const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);
  const dispatch = useDispatch();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
  };

  const showLoginSignUp = () => {
    document.querySelector("#login-signup-input").style.display = "block";
  };

  return (
    <div className="border-b-2 border-[#E68584] w-full">
      <div className="container flex flex-wrap items-center justify-between w-auto">
        <img src="https://i.ibb.co/FXJrqMt/epitome-1.png" className="w-auto h-auto ml-5 mb-2 mt-1"></img>
        <div className="flex flex-row w-full sm:block sm:w-auto">
          <div className="flex flex-row flex-wrap items-center justify-center p-4 mt-4 rounded-lg sm:flex-row sm:space-x-8 sm:mt-0 sm:text-sm sm:font-medium sm:border-0 sm:bg-white">
            <Link to="/create" className="font-bold block py-2 pl-3 pr-4 text-[#E68584] rounded hover:bg-[#E68584] sm:hover:bg-transparent sm:border-0 hover:text-white sm:p-0 md:hover:text-rose-200" aria-current="page">+</Link>
            <Link to="/home" className="block py-2 pl-3 pr-4 text-[#E68584] rounded hover:bg-[#E68584] sm:hover:bg-transparent sm:border-0 hover:text-white sm:p-0 md:hover:text-rose-200" aria-current="page">Home</Link>
            <Link to="/home" className="block py-2 pl-3 pr-4 text-[#E68584] rounded hover:bg-[#E68584] sm:hover:bg-transparent sm:border-0 hover:text-white sm:p-0 md:hover:text-rose-200" aria-current="page">Messages</Link>
            <Link to="/home" className="block py-2 pl-3 pr-4 text-[#E68584] rounded hover:bg-[#E68584] sm:hover:bg-transparent sm:border-0 hover:text-white sm:p-0 md:hover:text-rose-200">Notifications</Link>
            <Link to="/home" className="block py-2 pl-3 pr-4 text-[#E68584] rounded hover:bg-[#E68584] sm:hover:bg-transparent sm:border-0 hover:text-white sm:p-0 md:hover:text-rose-200" aria-current="page">VIP</Link>
            <Link to="/home" className="block py-2 pl-3 pr-4 text-[#E68584] rounded hover:bg-[#E68584] sm:hover:bg-transparent sm:border-0 hover:text-white sm:p-0 md:hover:text-rose-200" aria-current="page">Profile</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
