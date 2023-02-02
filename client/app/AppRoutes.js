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
import ContactForm from '../features/contact/Contact.jsx';
import Search from '../features/navbar/search/Search.jsx';
import CreatePost from '../features/post/createPost';
import Settings from '../features/settings/Settings';
import EditProfile from '../features/settings/EditProfile';
import ChangePassword from '../features/settings/ChangePassword';
import EmailSMS from '../features/settings/EmailSMS';
import PushNotifications from '../features/settings/PushNotifications';
import PrivacySecurity from '../features/settings/PrivacySecurity';

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
          <Route path="/VIP" element={<VIP />} />
          <Route path="/boost" element={<Boost />} />
          <Route path="/messages" element={<Inbox />} />
          <Route path="/search/:searchTerm" element={<Search />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/create" element = {<CreatePost/>}/>
          <Route path="/settings" element={<Settings />}/>
          <Route path="/settings/edit-profile" element={<EditProfile />}/>
          <Route path="/settings/change-password" className="flex flex-row" element={[<Settings />, <ChangePassword />]}/>
          <Route path="/settings/email-SMS" element={[<Settings />, <EmailSMS />]}/>
          <Route path="/settings/push-notifications" element={[<Settings />, <PushNotifications />]}/>
          <Route path="/settings/privacy-security" element={[<Settings />, <PrivacySecurity />]}/>
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
