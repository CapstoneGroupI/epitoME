/* eslint-disable no-unused-vars */
import React from "react";
import { Checkbox } from "@material-tailwind/react";

const PrivacySecurity = () => {
    return(
        <div className="w-full shadow-md m-8 flex flex-col p-4 py-2 rounded">
        <h1 className="font-bold text-3xl text-stone-500 border-b-4 border-honey m-2 mt-0 py-4">Privacy Settings</h1>
        <div id="activity" className="w-full border-b border-honey py-4 ml-2 mr-2">
            <h2 className="font-bold text-xl text-stone-500 mb-4">Your activity</h2>
            <div className="flex flex-row justify-between mb-4">
            <h4 className="text-stone-500 ml-2">Who can see your future posts?</h4>
                <select className="mr-6 border-2 border-honey text-honey hover:text-white hover:bg-honey p-2 rounded">
                    <option value="everyone">Everyone</option>
                    <option value="followers">Followers</option>
                    <option value="vip">VIP</option>
                </select>
            </div>
            <div className="flex flex-row justify-between mb-2">
            <h4 className="text-stone-500 ml-2">Who can see the people you follow?</h4>
                <select className="mr-6 border-2 border-honey text-honey hover:text-white hover:bg-honey p-2 rounded">
                    <option value="everyone">Everyone</option>
                    <option value="followers">Followers</option>
                    <option value="vip">VIP</option>
                    <option value="only">Only Me</option>
                </select>
            </div>
        </div>
        <div id="people-privacy" className="w-full border-b border-honey py-4 ml-2 mr-2 mb-2">
            <h2 className="font-bold text-xl text-stone-500 mb-4">How people can find and contact you</h2>
            <div className="flex flex-row justify-between mb-4">
            <h4 className="text-stone-500 ml-2">Who can send you follow requests?</h4>
                <select className="mr-6 border-2 border-honey text-honey hover:text-white hover:bg-honey p-2 rounded">
                    <option value="everyone">Everyone</option>
                    <option value="vip">VIP</option>
                </select>
                </div>
            <div className="flex flex-row justify-between mb-4">
            <h4 className="text-stone-500 ml-2">Who can see your follower list?</h4>
                <select className="mr-6 border-2 border-honey text-honey hover:text-white hover:bg-honey p-2 rounded">
                    <option value="everyone">Everyone</option>
                    <option value="followers">Followers</option>
                    <option value="vip">VIP</option>
                    <option value="only">Only Me</option>
                </select>
            </div>
            <div className="flex flex-row justify-between mb-4">
            <h4 className="text-stone-500 ml-2">Who can look you up using the email address you provided?</h4>
                <select className="mr-6 border-2 border-honey text-honey hover:text-white hover:bg-honey p-2 rounded">
                    <option value="everyone">Everyone</option>
                    <option value="followers">Followers</option>
                    <option value="vip">VIP</option>
                    <option value="only">Only Me</option>
                </select>
            </div>
            <div className="flex flex-row justify-between mb-2">
            <h4 className="text-stone-500 ml-2">Who can tag you in posts?</h4>
                <select className="mr-6 border-2 border-honey text-honey hover:text-white hover:bg-honey p-2 rounded">
                    <option value="everyone">Everyone</option>
                    <option value="followers">Followers</option>
                    <option value="vip">VIP</option>
                    <option value="none">None</option>
                </select>
            </div>
        </div>
    </div>
    );
};

export default PrivacySecurity;