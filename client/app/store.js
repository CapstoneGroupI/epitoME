import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import usersReducer from '../slices/allUsersSlice';
import singleUserReducer from '../slices/userProfileSlice.js';
import postsReducer from '../slices/allPostSlice';
import singlePostReducer from '../slices/singlePostSlice';
import commentsReducer from '../slices/allCommentsSlice';
import singleCommentReducer from '../slices/singleCommentSlice';
import messagesReducer from '../slices/allMessageSlice';
import singleMessageReducer from '../slices/allMessageSlice'


const store = configureStore({
  reducer: { auth: authReducer,
  users: usersReducer,
  singleUser: singleUserReducer,
  posts: postsReducer,
  singlePost: singlePostReducer,
  comments: commentsReducer,
  singleComment: singleCommentReducer,
  messages: messagesReducer,
  singleMessage: singleMessageReducer
 },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
