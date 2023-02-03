/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Checkbox } from "@material-tailwind/react"

const Email = () => {
    const email = useSelector((state) => state.auth.me.email);

    return(
        <div className="w-full shadow-md m-8 flex flex-col p-4 rounded">
        <div>
            <h1 className="font-bold text-3xl text-stone-500">Update Email</h1>
            <h3 className="font-bold text-stone-500 ml-4 m-2">Current Email: {email}</h3>
            <input className=" border-b-2 border-honey w-2/5 mt-4 m-2 p-2" placeholder="enter new email..."></input>
            <button className="bg-honey text-white text-center rounded w-1/5 pt-2 py-2 m-2 ml-4  mt-4 font-bold hover:bg-white hover:text-honey hover:border-2 hover:border-honey">Save New Email</button>
            <div className="flex flex-row"><Checkbox defaultChecked /> <h4 className="text-stone-500 text-sm pt-2">Receive notifications at this email?</h4></div>
            <p className="text-stone-300 w-3/5 m-2">*In order to confirm this new email, you must verify using the link sent to the email address you provided. You will receive a verification email shortly. If you don't receive an email within an hour, <Link to="/contact" className="underline hover:text-honey"> click here. </Link>*</p>
        </div>
    </div>
    );
};

export default Email;