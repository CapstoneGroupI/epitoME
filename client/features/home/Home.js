/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPostsAsync } from "../../slices/allPostSlice";
import { selectPosts } from "../../slices/allPostSlice";
import { FaStar } from "react-icons/fa";
import { updatePostAsync } from "../../slices/singlePostSlice";
import { selectUsers } from "../../slices/allUsersSlice";
import { getAllUsersAsync } from "../../slices/allUsersSlice";
/**
 * COMPONENT
 */
const Home = ({ userId, isLoggedIn, props }) => {
  const username = useSelector((state) => state.auth.me.username);
  const firstName = useSelector((state) => state.auth.me.firstName);

  const posts = useSelector(selectPosts);
  const users = useSelector(selectUsers)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPostsAsync());
    dispatch(getAllUsersAsync());
  }, []);

  const handleUpdate = (id, rating) => {
    console.log("this is rating --------------", id, rating);
    dispatch(updatePostAsync({ id, rating }));
  };

  const [hoverValues, setHoverValues] = useState([]);
  const [postCommentVisibility, setPostCommentVisibility] = useState([]);

  useEffect(() => {
    setHoverValues(posts.map(() => undefined));
    setPostCommentVisibility(posts.map(() => false));
  }, [posts]);

  //npx tailwindcss -i ./public/style.css -o ./public/output.css --watch

  return (
    <div className="">
      <div className="">
        {posts.map((post, index) => {
          let date = new Date(post.createdAt);
          let options = {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          };
          function getAvg(post) {
            const total = post.rating.reduce((acc, c) => acc + c, 0);
            return total / post.rating.length;
          }

          const average = getAvg(post);
          const stars = Array(5).fill(0);

          let formattedDate = date.toLocaleDateString("en-US", options);

          const handleMouseOver = (value) => {
            setHoverValues((prev) => {
              let newHoverValues = [...prev];
              newHoverValues[index] = value;
              return newHoverValues;
            });
          };

          const handleMouseLeave = (value) => {
            setHoverValues((prev) => {
              let newHoverValues = [...prev];
              newHoverValues[index] = undefined;
              return newHoverValues;
            });
          };

          const toggleCommentVisibility = (index) => {
            setPostCommentVisibility((prev) => {
              let newVisibility = [...prev];
              newVisibility[index] = !newVisibility[index];
              return newVisibility;
            });
          };

          return (
            <div className="w-4/6 mx-auto">
              <div
                key={post.id}
                className="relative flex flex-col mx-auto w-4-6 max-w-lg m-10 bg-[#fff6f6] border-2 border-[#E68584] rounded-md shadow-lg shadow-[#913c3b]"
              >
                <div className="flex flex-row items-center justify-around">
                  <div className="flex flex-row items-center flex-wrap">
                    <img
                      className="object-cover p-5 rounded-full w-40 h-40"
                      src={post.user.profilePic}
                    />
                    <div className=" m-2">
                      <h1 className="font-bold  text-[#E68584]">
                        {post.user.firstName} {post.user.lastName}
                      </h1>
                      <h1 className="font-bold  text-black text-sm">
                        @ {post.user.username}
                      </h1>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm m-2 text-black">
                      {formattedDate}
                    </h3>
                  </div>
                </div>
                <div className="w-10/12 h-0.5 mx-auto rounded-lg bg-[#E68584]" />
                <div className="mx-auto m-5 w-10/12">{post.text}</div>
                <img
                  className="rounded mx-auto m-5 w-10/12"
                  src={post.image}
                ></img>
                <div className="flex justify-end p-5">
                  <div className=" font-bold text-[#E68584]">
                    {average.toFixed(2)}
                  </div>
                </div>

                <div className="h-10 bg-[#E68584] flex items-center justify-around">
                  <div className="flex justify-around w-2/12">
                    {stars.map((_, starIndex) => {
                      let ratingValue = starIndex + 1;

                      return (
                        <FaStar
                          key={starIndex}
                          className="h-5 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"
                          value={ratingValue}
                          color={
                            hoverValues[index] > starIndex ? "#ffc107" : "black"
                          }
                          onClick={() => handleUpdate(post.id, ratingValue)}
                          onMouseOver={() => handleMouseOver(ratingValue)}
                          onMouseLeave={() => handleMouseLeave()}
                        />
                      );
                    })}
                  </div>
                  <button
                    onClick={() => toggleCommentVisibility(index)}
                    className="font-bold text-amber-300"
                  >
                    Comments
                  </button>
                </div>
                {postCommentVisibility[index] && (
                    <div className="">
                     {post.Comments.map(comment => {
                        return (
                          <div className="p-5 flex flex-row">
                        <h1 className=" font-bold">{users[0][comment.userId - 1].firstName} {users[0][comment.userId - 1].lastName} :  </h1>
                        <p>{comment.text}</p>
                        </div>
                        )
                      })}
                     
                    
                    </div>
                  )}
              </div>
            </div>
          );
        })}
      </div>
    </div>

// {/* <h1 className="text-red-500">{users[0][comment.userId - 1].firstName} {users[0][comment.userId - 1].lastName} : {comment.text}</h1> */}

    // {[...Array(5)].map((star, i) => {
    //   const ratingValue = i + 1;

    //   return (
    //     <label>
    //       <input
    //         className=" hidden "
    //         type="radio"
    //         name="rating"
    //         value={ratingValue}
    //         onClick={() => dispatch(updatePostAsync(post.id, ratingValue))}

    //       />
    //       <FaStar
    //         color={
    //           ratingValue <= post.rating ? "#ffc107" : "#e4e5e9"
    //         }
    //         className=" cursor-pointer"
    //       />
    //     </label>
    //   );
    // })}

    // {/* <button onClick={() => handleUpdate(post.id, 1)}><FaStar className="hover:text-amber-300 "/></button>
    // <button onClick={() => handleUpdate(post.id, 2)}><FaStar className="hover:text-amber-300"/></button>
    // <button onClick={() => handleUpdate(post.id, 3)}><FaStar className="hover:text-amber-300"/></button>
    // <button onClick={() => handleUpdate(post.id, 4)}><FaStar className="hover:text-amber-300"/></button>
    // <button onClick={() => handleUpdate(post.id, 5)}><FaStar className="hover:text-amber-300"/></button> */}
  );
};

export default Home;
