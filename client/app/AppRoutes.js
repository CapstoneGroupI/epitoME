/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import LoginForm from '../features/auth/LoginForm';
import Home from '../features/home/Home';
import { me } from './store';
import UserProfile from '../features/userProfile/userProfile';
import RegisterForm from '../features/auth/RegisterForm';
import Dashboard from '../features/dashboard/Dashboard';

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Dashboard />} />
          <Route to="/home" element={<Dashboard />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/*"
            element={<LoginForm name="login" displayName="Login" />}
          />
          <Route
            path="/login"
            element={<LoginForm name="login" displayName="Login" />}
          />
          <Route
            path="/register"
            element={<RegisterForm />}
          />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
