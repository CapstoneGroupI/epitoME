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
          <h1>{user.firstName} {user.username}</h1>
        )}
      </div>
    </div>
  );
};

export default Search;
