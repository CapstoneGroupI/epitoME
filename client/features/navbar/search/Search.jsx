/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Error from '../../loader/Error.jsx';
import Loader from '../../loader/Loader.jsx';
import { getAllUsersAsync } from '../../../slices/allUsersSlice';
import { sortBySearch } from '../../../slices/allUsersSlice';
import { selectUsers } from '../../../slices/allUsersSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


const Search = () => {
  const { searchTerm } = useParams();
  const  users  = useSelector(selectUsers);
  const { data, isFetching, error } = getAllUsersAsync(searchTerm);
  const dispatch = useDispatch()
  let arr = []

useEffect(() => {
  dispatch(getAllUsersAsync());
  let arr = users.map((user) => user.username)
  console.log("these are the users" , arr)
}, [])

  const filterUser = (users) => {
    return searchTerm && users[0] ? users[0].filter((user) => {
    return user.firstName?.toLowerCase() === searchTerm?.toLowerCase()
    }) : users;
    };

  console.log(filterUser(users))

  if (isFetching) return <Loader title="Loading users..." />;
  
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Showing results for <span className="font-white">'{searchTerm}'</span>
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {filterUser(users).map((user) =>
          <div className="border-2 border-honey rounded shadow-md p-2 m-2 ml-12 w-4/5">
            <div className="flex justify-between flex-wrap w-full">
            <img src={user.profilePic} className="h-20 w-20 rounded-full border-2 border-honey"></img>
            <div className="flex flex-col flex-1">
              <h1 className="font-bold text-3xl text-honey mt-2 ml-2">{user.firstName} {user.lastName}</h1>
              <h3 className="text-stone-500 text-base font-bold ml-2"> @{user.username}</h3>
              </div>
              <div className="flex flex-col">
            <h1 className="font-bold text-xl text-honey mr-2 mt-2">Rating: {user.rating}</h1>
            <h3 className="text-stone-500 flex-1 mt-2 mr-4">{user.city}, {user.state}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
