/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProfile } from "../../slices/userProfileSlice";
import { Follow } from "../../slices/FollowersSlice";
import { selectUsers } from "../../slices/allUsersSlice";
import { useNavigate } from "react-router-dom";
// import PropTypes from 'prop-types'


export const UserProfile = (props) => {
  const  usersArr  = useSelector(selectUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(usersArr)

  const users = usersArr.map((user) => {
    console.log(user)
    return user
  })

  const isLoggedIn = useSelector((state) => !!state.auth.me.userId); // id or userId ??
  const userId = useSelector((state) => state.auth.me.userId); // id or userId ??

  const handleFollow = (userId) => {
    if (isLoggedIn && userId) {
        dispatch(Follow({ userId }));
    }
  }

  const handleMessage = () => {
    console.log("sending message to user")
    navigate(`/messages`);
  }

  return (
    <div id="userProfile">
        {users.map((user) =>
          <div id="profileContainer" className="flex flex-col md:flex-row bg-[white] w-3/5 m-10 rounded-md shadow-lg shadow-[#EBAF4C] p-4 relative">
            <img src={user.profilePic} className="h-72 w-72 rounded-full border-2 border-[#EBAF4C] shadow-lg shadow-stone" />
            <div id="detailsContainer" className="flex flex-col ml-5">
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
      </div>
          <div id="userInfoContainer" className="flex flex-col">
          <h3 className="text-[#EBAF4C] text-2xl">@{user.username}</h3>
            <h3 className="text-[#EBAF4C] text-2xl">{user.city}, {user.state}</h3>
            <h2 className="text-[#EBAF4C] text-2xl"> {user.birthday}</h2>
            <p>{user.bio}</p>
            <h2 id="rating" className="text-[#EBAF4C] text-2xl">Rating: {user.rating} </h2>
            <div className="flex flex-row absolute bottom-0">
              <button id="messageFriend" className="text-white border-2 border-white bg-[#EBAF4C] p-2 hover:bg-white hover:text-[#EBAF4C] hover:border-[#EBAF4C] rounded-md m-2 mb-6">Message</button> 
              <button id="addFriend" 
                    onClick={() =>
                        handleFollow(
                            userId,
                            user.firstName,
                            user.lastName
                            )} 
                    className="text-white border-2 border-white bg-[#EBAF4C] p-2 hover:bg-white hover:text-[#EBAF4C] hover:border-[#EBAF4C] rounded-md m-2 mb-6">Follow</button>
            </div>
              </div>
              </div>
          </div>
        )};
    </div>
  )
}

UserProfile.propTypes = {}

export default UserProfile;
