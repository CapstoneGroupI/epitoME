/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import EditProfile from "./EditProfile";
import { useState } from "react";
import ChangePassword from "./ChangePassword";
import Email from "./Email";
import Notifications from "./Notifications";
import PrivacySecurity from "./PrivacySecurity";
import { useNavigate } from "react-router-dom";

const Settings = () => {
    const [type, setType] = useState("")
    const handleClick = (select) => {
        return (e) => {
        e.preventDefault()
        setType(select)
        }
    }

    return(
        <div>
        <div id="settings-page" className="flex flex-row flex-wrap w-4/5 h-screen m-10 ml-2">
            <div id="settings-choices" className="flex flex-col border-r-2 border-honey w-1/5 m-4 p-4 h-full">
                <button onClick={handleClick("EditProfile")} className="border-b-2 mt-6 mb-6 p-2 py-2 text-2xl text-[#a1a7b1] focus:border-l-4 focus:border-[#EBAF4C] focus:text-honey">Edit Profile</button>
                <button onClick={handleClick("ChangePassword")} className="border-b-2 mt-6 mb-6 p-2 py-2 text-2xl text-[#a1a7b1] focus:border-l-4 focus:border-[#EBAF4C] focus:text-honey">Change Password</button>
                <button onClick={handleClick("Email")} className="border-b-2 mt-6 mb-6 p-2 py-2 text-2xl text-[#a1a7b1] focus:border-l-4 focus:border-[#EBAF4C] focus:text-honey">Change Email</button>
                <button onClick={handleClick("Notifications")} className="border-b-2 mt-6 mb-6 p-2 py-2 text-2xl text-[#a1a7b1] focus:border-l-4 focus:border-[#EBAF4C] focus:text-honey">Notifications</button>
                <button onClick={handleClick("PrivacySecurity")} className="border-b-2 mt-6 mb-6 p-2 py-2 text-2xl text-[#a1a7b1] focus:border-l-4 focus:border-[#EBAF4C] focus:text-honey">Privacy & Security</button>
            </div>

            <div className="w-9/12">
            { type === "ChangePassword" && (
            <ChangePassword /> ) }
            { type === "EditProfile" && (
            <EditProfile /> ) }
            { type === "Email" && (
            <Email /> ) }
            { type === "Notifications" && (
            <Notifications /> ) }
            { type === "PrivacySecurity" && (
            <PrivacySecurity /> ) }
            </div>
         </div>
     </div>
    );
};

export default Settings;