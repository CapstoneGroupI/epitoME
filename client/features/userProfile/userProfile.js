/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProfile } from "../../slices/userProfileSlice";
import { createFellow } from "../../slices/fellowsSlice";
import { useParams } from "react-router-dom";
import { selectSingleUser } from "../../slices/userProfileSlice";
// import PropTypes from 'prop-types'


export const UserProfile = () => {

  const params = useParams()

  const users = useSelector(selectSingleUser)
  console.log("this is the user", users[0]?.username)

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getSingleProfile(params))
   },[])

  return (
    <div key={users[0]} id="userProfile">
          <div id="profileContainer" className="flex flex-col md:flex-row bg-[white] w-3/5 m-10 rounded-md shadow-lg shadow-[#EBAF4C] p-4 relative">
            <img src={users[0]?.profilePic} className="h-72 w-72 rounded-full object-cover border-2 border-[#EBAF4C] shadow-lg shadow-stone" />
            <div id="detailsContainer" className="flex flex-col ml-5">
                <h1 className="text-[#EBAF4C] text-3xl font-bold">{users[0]?.firstName} {users[0]?.lastName} <span className="text-[#EBAF4C] text-sm"> {users[0]?.pronouns}</span></h1>
          <div id="userInfoContainer" className="flex flex-col">
          <h3 className="text-[#EBAF4C] text-2xl">@{users[0]?.username}</h3>
            <h3 className="text-[#EBAF4C] text-2xl">{users[0]?.city}, {users[0]?.state}</h3>
            <h2 className="text-[#EBAF4C] text-2xl"> {users[0]?.birthday}</h2>
            <p>{users[0]?.bio}</p>
            <h2 id="rating" className="text-[#EBAF4C] text-2xl">Rating: {users[0]?.rating} </h2>
            <div className="flex flex-row absolute bottom-0">
              <button id="messageFriend" className="text-white border-2 border-white bg-[#EBAF4C] p-2 hover:bg-white hover:text-[#EBAF4C] hover:border-[#EBAF4C] rounded-md m-2 mb-6">Message</button> 
              <button id="addFriend" 
                    className="text-white border-2 border-white bg-[#EBAF4C] p-2 hover:bg-white hover:text-[#EBAF4C] hover:border-[#EBAF4C] rounded-md m-2 mb-6">Add Fellow</button>
            </div>
              </div>
              <div id="statusContainer">
              </div>
              </div>
          </div>
    </div>
  )
}

UserProfile.propTypes = {}

export default UserProfile;
