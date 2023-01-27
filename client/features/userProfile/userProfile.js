/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProfile } from "../../slices/userProfileSlice";
// import PropTypes from 'prop-types'



export const UserProfile = (props) => {
  const firstName = useSelector((state) => state.auth.me.firstName);
  const lastName = useSelector((state) => state.auth.me.lastName);
  const bio = useSelector((state) => state.auth.me.description);
  const city = useSelector((state) => state.auth.me.city);
  const state = useSelector((state) => state.auth.me.state);
  const rating = useSelector((state) => state.auth.me.rating);
  const pronouns = useSelector((state) => state.auth.me.pronouns);
  const birthday = useSelector((state) => state.auth.me.birthday);
  const profilePic = useSelector((state) => state.auth.me.profilePic);

  return (
    <div id="userProfile">
          <div id="profileContainer" className="flex flex-row bg-[white] w-3/5 m-10 rounded-md shadow-lg shadow-[#EBAF4C] p-4">
            <img src={profilePic} className="h-72 w-72 rounded-full border-2 border-[#EBAF4C] shadow-lg shadow-stone" />
            <div id="detailsContainer" className="flex flex-col ml-5">
                <h1 className="text-[#EBAF4C] text-3xl font-bold">{firstName} {lastName} <span className="text-[#EBAF4C] text-sm"> {pronouns}</span></h1>
          <div id="userInfoContainer">
            <h3 className="text-[#EBAF4C] text-2xl">{city}, {state}</h3>
            <h2 className="text-[#EBAF4C] text-2xl"> {birthday}</h2>
            <p>{bio}</p>
            <h2 id="rating" className="text-[#EBAF4C] text-2xl">Rating: {rating} </h2>
            <h3 className="text-[#EBAF4C] text-2xl">Status:</h3>
            <div className="flex flex-row">
              <button id="messageFriend" className="text-white border-2 border-white bg-[#EBAF4C] p-2 hover:bg-white hover:text-[#EBAF4C] hover:border-[#EBAF4C] rounded-md m-2">Message</button> 
              <button id="addFriend" className="text-white border-2 border-white bg-[#EBAF4C] p-2 hover:bg-white hover:text-[#EBAF4C] hover:border-[#EBAF4C] rounded-md m-2">Add Fellow</button>
            </div>
              </div>
              <div id="statusContainer">
              </div>
              </div>
          </div>
          {/* )}
        </div> */}
    </div>
  )
}

// userProfile.propTypes = {}

export default UserProfile;
