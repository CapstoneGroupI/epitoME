/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPostsAsync } from '../../slices/allPostSlice';
import { selectPosts } from '../../slices/allPostSlice';
/**
 * COMPONENT
 */
const Home = ({userId, isLoggedIn}) => {
  const username = useSelector((state) => state.auth.me.username);
  const firstName = useSelector((state) => state.auth.me.firstName);

  const posts = useSelector(selectPosts)

 const dispatch = useDispatch();

 useEffect(()=> {
  dispatch(getAllPostsAsync())
  console.log(userId)
 },[userId])

 //npx tailwindcss -i ./public/style.css -o ./public/output.css --watch

  return (
    <div className=''>
      <div >
          {posts.map(post => {
            return (
              <div >
              <div >{post.text}{post.n_likes}</div>
              <img className=' w-72 rounded' src={post.image}></img>
              </div>
            )
          }
            
          )}
      </div>
    </div>
  );
};

export default Home;