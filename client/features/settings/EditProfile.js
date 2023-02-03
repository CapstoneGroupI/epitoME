/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";

const EditProfile = () => {
    const profilePic = useSelector((state) => state.auth.me.profilePic);
    return(
        <div className="w-full shadow-md m-8 flex flex-col p-4 rounded">
        <h1 className="font-bold text-3xl text-stone-500">Edit Your Profile</h1>
        <div id="pic-settings" className="flex flex-col items-center border-b-4 border-honey mb-4 py-4">
            <img src={profilePic} className="h-48 w-48 rounded-full border-2 border-honey shadow-lg shadow-stone ml-10 mt-10"></img>
            <button className="text-center flex flex-row m-1 ml-4 hover:text-honey">Change Profile Pic<img src="https://cdn-icons-png.flaticon.com/512/61/61456.png" className="h-4 w-4 ml-2 mt-1"></img></button> 
        </div>
        <label className="font-bold text-stone-500 m-2 mb-0 p-2">Username</label>
            <input className=" border-b-2 border-honey w-2/5 mt-0 m-2 p-2" placeholder="enter new username..."></input>
        <div id="name-settings" className="flex flex-row items-center w-full">
            <div className="flex flex-col w-1/2">
            <label className="font-bold text-stone-500 m-2 mb-0 p-2">First Name</label>
            <input className=" border-b-2 border-honey mt-0 m-2 p-2 mr-4" placeholder="type here..."></input>
            </div>
            <div className="flex flex-col w-1/2">
            <label className="font-bold text-stone-500 m-2 mb-0 p-2">Last Name</label>
            <input className=" border-b-2 border-honey mt-0 m-2 p-2 ml-4" placeholder="type here..."></input>
            </div>
        </div>
    </div>
    );
};

export default EditProfile;