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
      <div className=''>
          {posts.map(post => {
            return (
              <div className='flex flex-col mx-auto w-auto m-10 bg-[#E68584] rounded-md'>
                <div className='flex flex-row items-center'>
                  <img className=' object-cover p-5 rounded-full w-40 h-40' src={post.user.profilePic}/>
                  <div>
                    <h1>{post.user.firstName} {post.user.lastName}</h1>
                    <h1>@{post.user.username}</h1>
                  </div>
                  
                </div>
              <div>{post.text}</div>
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