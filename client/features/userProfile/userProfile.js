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
          <div id="profileContainer" className="flex flex-row border-2 border-[#FB928E] bg-[white] w-3/5 m-10 rounded-md shadow-lg shadow-stone p-4">
            <img src={profilePic} className="h-72 w-72 rounded-full border-2 border-[#E68485] shadow-lg shadow-stone" />
            <div id="detailsContainer" className="flex flex-col ml-5">
                <h1 className="text-[#E68584] text-3xl font-bold">{firstName} {lastName} <span className="text-[#E68584] text-sm"> {pronouns}</span></h1>
                <h2 className="text-[#E68584]"> {birthday}</h2>
                  <div id="userInfoContainer">
                    <h3 className="text-[#E68584]">{city}, {state}</h3>
                  </div>
                  <p>{bio}</p>
                <button id="messageFriend" className="text-[#E68584] border-2 border-[#E68485] p-2 hover:bg-[#E68584] hover:text-white m-2">Message</button> 
                <button id="addFriend" className="text-[#E68584] border-2 border-[#E68485] p-2 hover:bg-[#E68584] hover:text-white m-2">Add Fellow</button>
                <h2 id="rating" className="text-[#E68584]">Rating: {rating} </h2>
                <h3 className="text-[#E68584]">Status:</h3>
              </div>
              <div id="statusContainer">
              </div>
          </div>
          {/* )}
        </div> */}
    </div>
  )
}

// userProfile.propTypes = {}

export default UserProfile;
