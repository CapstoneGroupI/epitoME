/* eslint-disable no-unused-vars */
import  React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  return (
    <div>
    <form onSubmit={handleSubmit} autoComplete="off" className="p-2 text-gray-50 focus-within:text-gray-50">
      <label htmlFor="search-field" className="sr-only">
        Search all files
      </label>
      <div className="flex flex-row justify-start items-center">
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="border-b-2 border-[#E68584] w-96 m-6 flex-1 bg-transparent text-base text-gray-800 p-4"
          placeholder="Search..."
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
      </div>
    </form>
    </div>
  );
};

export default Searchbar;
