/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import LoginForm from '../features/auth/LoginForm';
import { me } from './store';
import UserProfile from '../features/userProfile/userProfile';
import RegisterForm from '../features/auth/RegisterForm';
import Dashboard from '../features/dashboard/Dashboard';
import VIP from '../features/VIP/VIP.jsx';
import Boost from '../features/boost/Boost.jsx';
import Inbox from '../features/messages/Inbox.jsx';
import ContactForm from '../features/contact/Contact';
import Search from '../features/navbar/search/Search.jsx';
import CreatePost from '../features/post/createPost';
import Settings from '../features/settings/Settings';
import PersonalProfile from '../features/userProfile/PersonalProfile';
import Localstoragetest from '../features/messages/localstoragetest.jsx';


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
          <Route path="/profile" element={<PersonalProfile />} />
          <Route path="/VIP" element={<VIP />} />
          <Route path="/boost" element={<Boost />} />
          <Route path="/messages" element={<Inbox />} />
          <Route path="/search/:searchTerm" element={<Search />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/create" element = {<CreatePost/>}/>
          <Route path="/settings" element={<Settings />}/>
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="/localstoragetest" element={<Localstoragetest/>} />
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
