/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../home/Home";
import { getFellow, selectFellows } from "../../slices/fellowsSlice";

export default function Sidebar() {

  const fellows = useSelector(selectFellows);

  const { followerId, userId, firstName, lastName } = fellows;

  const fellowsArray = Object.values(fellows);
  console.log('asasasasasasasas', fellowsArray)

  let array = []

  array = fellowsArray.map(fellow => {
    return fellow.followers.firstName
  })
  console.log('these are the fellow firstNames', array)

  return (
    <>
      <div className="flex border-2 border-salmon justify-center md:float-right shadow-xl shadow-rose-200 m-8 rounded-xl md:w-64">
        <div className="flex flex-col h-64 overflow:auto md:h-screen p-3 w-auto">
          <div className="space-y-3 items-center">
            <div className="flex flex-col items-center md:p-4">
              <h2 className="text-xl text-[#E68584] font-bold font-serif">
                YOUR RATING:
              </h2>
              <p className="text-amber-400">★ ★ ★ ★ ★</p>
              <h2 className="text-xl text-[#E68584] font-bold font-serif mt-10">
                Notifications:
              </h2>
              <div className="text-stone-500 text-center font-bold flex flex-col flex-wrap w-full">
                  <p className="border-b hover:bg-stone-50 mt-2">Cody Adams <span className="font-thin">started following you</span></p>
                  <p className="border-b hover:bg-stone-50 mt-2">Murphy Wells <span className="font-thin">commented on your post: "Yes!!"</span></p>
                  <p className="border-b hover:bg-stone-50 mt-2">Andrew Spencer <span className="font-thin">liked your post</span></p>
                  <p className="border-b hover:bg-stone-50 mt-2"> <span className="text-amber-400">★</span> David Zeng <span className="font-thin">started following you</span></p>
                  <p className="border-b hover:bg-stone-50 mt-2">Maria Segarra <span className="font-thin">sent you a message: "I literally tho..."</span></p>
                  <p className="border-b hover:bg-stone-50 mt-2">DJ Douglas <span className="font-thin">commented on your post: "LICHRULLY"</span></p>
                  <p className="border-b hover:bg-stone-50 mt-2"> <span className="text-amber-400">★</span> David Zeng <span className="font-thin">became VIP status! <span className="underline font-medium"></span>Say congrats...</span></p>
                  <p className="border-b hover:bg-stone-50 mt-2">Murphy Wells <span className="font-thin">liked your post</span></p>
                  <p className="border-b hover:bg-stone-50 mt-2">Maria Segarra <span className="font-thin">replied to your comment: "thank y..."</span></p>
                  <p className="border-b hover:bg-stone-50 mt-2">DJ Douglas <span className="font-thin">started following you</span></p>
                  <p className="border-b hover:bg-stone-50 mt-2">Andrew Spencer <span className="font-thin">replied to your post: "lets gooo..."</span></p>
                  <p className="text-center text-2xl">...</p>
              </div>
       <div to="" className="text-salmon text-xl font-bold mt-6">Followers (0)</div>
              <div to="" className="text-[#E68584] mt-10 content-center">
                <div className="space-between">Following (0)</div>
                <ul>
                  {/* wrap in link */}
                  {fellowsArray.map((fellow) => {
                    return (
                      <>
                        <li key={fellow.id} className="flex text-xl border-2 border-[#E68584] justify-center w-7/5 p-4 m-2 rounded-md shadow-lg">
                          <div className="p-2">{fellow.followers.firstName} {fellow?.followers.lastName}</div>
                          <div className="text-[green] text-sm p-3 align-middle">Online</div>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          </div>
          </div>
      </>
    );
  }
