/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPostsAsync } from "../../slices/allPostSlice";
import { selectPosts } from "../../slices/allPostSlice";
/**
 * COMPONENT
 */
const Home = ({ userId, isLoggedIn }) => {
  const username = useSelector((state) => state.auth.me.username);
  const firstName = useSelector((state) => state.auth.me.firstName);

  const posts = useSelector(selectPosts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPostsAsync());
    console.log(userId);
  }, [userId]);

  //npx tailwindcss -i ./public/style.css -o ./public/output.css --watch

  return (
    <div className="">
      <div className="">
        {posts.map((post) => {
          let date = new Date(post.createdAt);
          let options = { year: "numeric", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" };
          let formattedDate = date.toLocaleDateString("en-US", options);
          return (
            <div className="flex flex-col mx-auto w-3/5 m-10 bg-[#E68584] rounded-md shadow-lg shadow-[#EBAF4C]">
              <div className="flex flex-row items-center justify-around">
                <div className="flex flex-row items-center flex-wrap">
                  <img
                    className=" object-cover p-5 rounded-full w-40 h-40"
                    src={post.user.profilePic}
                  />
                  <div className=" m-2">
                    <h1 className="font-bold font-serif text-amber-300">
                      {post.user.firstName} {post.user.lastName}
                    </h1>
                    <h1 className="font-bold font-serif">@{post.user.username}</h1>
                  </div>
                </div>
                <div>
                  <p className="font-bold font-serif text-xs m-2">{formattedDate}</p>
                </div>
              </div>
              <div className="w-10/12 h-0.5 mx-auto rounded-lg bg-amber-300" />
              <div className="mx-auto m-5 w-10/12">{post.text}</div>
              <img className="rounded mx-auto m-5 w-10/12" src={post.image}></img>
              <div className="h-10 bg-amber-300 flex items-center justify-around">
                <div className="flex justify-around w-1/6">
                    <button className=" bg-[#E68584] rounded-full w-5 h-5"></button>
                    <button className=" bg-[#E68584] rounded-full w-5 h-5"></button>
                </div>
                <button className="">Comments</button>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
