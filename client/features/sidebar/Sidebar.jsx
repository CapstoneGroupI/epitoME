/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Home from "../home/Home";

export default function Sidebar() {
return (
  <>
    <div className="flex border-2 border-[#E68584] justify-center md:float-right shadow-xl shadow-rose-200 m-8 rounded-xl">
      <div className="flex flex-col h-64 overflow:auto md:h-screen p-3 w-auto">
       <div className="space-y-3 items-center">
        <Home />
        <div className="flex flex-col items-center md:p-4">
         <h2 className="text-xl text-[#E68584] font-bold font-serif">YOUR RATING:</h2>
         <p className="text-amber-400">★ ★ ★ ★ ★</p>
         <Link className="text-[#E68584] mt-10">Fellows (0)</Link>
        </div>
       </div>
      </div>
    </div>
  </>
);
}