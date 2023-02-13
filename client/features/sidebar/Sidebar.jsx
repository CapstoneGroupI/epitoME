/* eslint-disable no-unused-vars */
import React from "react";
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
      <div className="flex border-2 border-[#E68584] justify-center md:float-right shadow-xl shadow-rose-200 m-8 rounded-xl">
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
              <div to="" className="text-[#E68584] mt-10 content-center">
                <div className="space-between">Following (0)</div>
                <ul>
                  {/* wrap in link */}
                  {fellowsArray.map((fellow) => {
                    return (
                      <>
                        <li key={fellow.id} className="flex text-xl border-2 border-[#E68584] justify-center w-7/5 p-4 m-2 rounded-md shadow-lg">
                          <div className="p-2">{fellow.followers.firstName} {fellow.followers.lastName}</div>
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
