/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getAllUsersAsync } from '../../../slices/allUsersSlice';
import { selectUsers } from '../../../slices/allUsersSlice';
import { Link } from 'react-router-dom';


const Search = () => {
  const { searchTerm } = useParams();
  const  users  = useSelector(selectUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let arr = []

useEffect(() => {
  dispatch(getAllUsersAsync());
  let arr = users.map((user) => user.username)
}, [])

  const filterUser = (users) => {
    return searchTerm && users[0] ? users[0].filter((user) => {
    return user.firstName?.toLowerCase() === searchTerm?.toLowerCase()
    }) : users;
    };

  console.log(filterUser(users))

  const handleFollow = () => {
    console.log("user followed")
  }

  const handleMessage = () => {
    console.log("sending message to user")
    navigate(`/chat`);
  }

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Showing results for <span className="font-white">'{searchTerm}'</span>
      </h2>
      <Link>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {filterUser(users).map((user) =>
          <div className="border-2 border-honey rounded shadow-md p-2 m-2 ml-12 w-4/5">
            <div className="flex justify-between flex-wrap w-full">
            <img src={user.profilePic} className="h-24 w-24 rounded-full border-2 border-honey"></img>
            <div className="flex flex-col flex-1">
              <h1 className="font-bold text-3xl text-honey mt-2 ml-4">{user.firstName} {user.lastName}</h1>
              <h3 className="text-stone-500 text-base font-bold ml-4"> @{user.username}</h3>
              <h3 className="text-stone-500 flex-1 ml-4 mr-4">{user.city}, {user.state}</h3>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-xl text-honey mr-2 mt-2">Rating: {user.rating}</h1>
                <div className="flex flex-row">
                <button onClick={handleFollow} className="text-white border-2 border-white bg-[#EBAF4C] p-2 hover:bg-white hover:text-[#EBAF4C] hover:border-[#EBAF4C] rounded-md m-2 pl-4 pr-4">Follow</button>
                <button onClick={handleMessage} className="text-white border-2 border-white bg-[#EBAF4C] p-2 hover:bg-white hover:text-[#EBAF4C] hover:border-[#EBAF4C] rounded-md m-2">Message</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      </Link>
    </div>
  );
};

export default Search;
