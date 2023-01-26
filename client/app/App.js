/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Navbar from '../features/navbar/Navbar.jsx';
import Sidebar from '../features/sidebar/Sidebar.jsx';
import AppRoutes from './AppRoutes.js';
import LoginForm from '../features/auth/LoginForm.js';
import { useSelector, useDispatch } from 'react-redux';
import { me } from './store';


const App = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);
  return (
    <div>
      {isLoggedIn ? (
        <>
        <Navbar />
        <Sidebar />
        <AppRoutes />
        </>
      ) : (
        <>
        <AppRoutes />
        </>
      )}
    </div>
  );
};

export default App;
