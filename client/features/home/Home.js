/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);
  const firstName = useSelector((state) => state.auth.me.firstName);

  return (
    <div>
      <h3 className="text-[#E68584] text-3xl font-bold font-serif">Welcome {firstName} !</h3>
    </div>
  );
};

export default Home;