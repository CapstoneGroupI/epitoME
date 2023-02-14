/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

const Locked = () => {
    return(
        <>
            <div className= "h-screen">
        <div className="flex flex-col items-center bg-[#EBAF4C] p-5 m-10 rounded-md">
            <h1 className="text-white text-3xl font-bold text-center">You must have a rating of 4 stars or more to see this page.</h1>
            <h2 className="text-white text-3xl">Just a regular pleb? Want to boost your rating?</h2>
            <Link to="/boost" className="text-white text-3xl font-bold underline">Click here!</Link>
    </div>
    </div>
    <div> < Footer /> </div>
    </>
    );
};

export default Locked;