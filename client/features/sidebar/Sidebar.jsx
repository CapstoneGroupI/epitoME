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
              <div to="" className="text-[#E68584] mt-10">
                Following (0)
                <ul>
                  {/* wrap in link */}
                  {fellowsArray.map((fellow) => {
                    return (
                      <>
                        <li key={fellow.id}>
                          {fellow.followers.firstName} {fellow.followers.lastName}
                        </li>
                      </>
                    );
                  })}
                </ul>
                {/* <li>{fellows.firstName} {lastName}</li> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
