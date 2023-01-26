/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../../app/store';
import { Link } from 'react-router-dom';

const LoginForm = ({ name }) => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    dispatch(authenticate({ username, password, method: formName }));
  };

  return (
    <div className="flex flex-row flex-wrap w-full justify-between items-center mt m:flex-col bg-[#E68485] h-screen">
      <img src="https://i.ibb.co/fFMPkH6/epitomewhite.png" className="w-auto h-auto"></img>
      <form onSubmit={handleSubmit} name={name} className="flex flex-col items-center border-2 border-stone-50 h-96 bg-stone-50 shadow-md shadow-stone-200 rounded-md m-8 p-7">
        <div>
          <label htmlFor="username">
            <small className="text-[#E68485] text-2xl">Username</small>
          </label>
          <input name="username" type="text" className="border-2 border-[#E68584] rounded-md text-2xl"></input>
        </div>
        <div>
          <label htmlFor="password">
            <small className="text-[#E68485] text-2xl">Password</small>
          </label>
          <input name="password" type="password" className="border-2 border-[#E68584] rounded-md text-2xl"></input>
        </div>
        <div className="flex flex-col items-center">
          <button type="submit" className="text-white bg-[#E68584] p-3 pl-8 pr-8 mb-5 border-2 border-white rounded-md hover:text-[#E68584] hover:bg-white hover:border-2 hover:border-[#E86584]">Login</button>
            <p className="text-sm text-[#E68584] mt-2">Don't have an account?</p>
            <Link to='/register' className="text-[#E68584] underline font-bold text-lg hover:text-rose-200">Register Now!</Link>
        </div>
        {error && <div> {error} </div>}
      </form>
    </div>
  );
};

export default LoginForm;
