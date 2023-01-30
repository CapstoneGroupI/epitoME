/* eslint-disable no-unused-vars */
import React from 'react';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Error, Loader } from '../../loader/Error.jsx';
import { getAllUsersAsync } from '../../../slices/allUsersSlice';

const Search = () => {
  const { searchTerm } = useParams();
  const { username } = useSelector((state) => state.user);
  const { data, isFetching, error } = getAllUsersAsync(searchTerm);

  if (isFetching) return <Loader title="Loading users..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Showing results for <span className="font-white">'{searchTerm}'</span>
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {username.map((user) => (
          <UserProfile
            key={user.key}
            username={username}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
