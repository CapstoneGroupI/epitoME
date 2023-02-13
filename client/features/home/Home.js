/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPostsAsync } from "../../slices/allPostSlice";
import { selectPosts } from "../../slices/allPostSlice";
import { FaStar } from "react-icons/fa";
import { updatePostAsync } from "../../slices/singlePostSlice";
import { selectUsers } from "../../slices/allUsersSlice";
import { getAllUsersAsync } from "../../slices/allUsersSlice";
import { motion } from "framer-motion";
import { createCommentAsync, getAllCommentsAsync, selectComments } from "../../slices/allCommentsSlice";
import { Link } from "react-router-dom";
/**
 * COMPONENT
 */
const Home = ({ userId, isLoggedIn, props }) => {
  const username = useSelector((state) => state.auth.me.username);
  const firstName = useSelector((state) => state.auth.me.firstName);
  const myId = useSelector((state) => state.auth.me.id)
  const theComments = useSelector((state)=> state.comments)
  console.log(theComments)

  const posts = useSelector(selectPosts);
  const users = useSelector(selectUsers);
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPostsAsync());
    dispatch(getAllUsersAsync());
    dispatch(getAllCommentsAsync())
  }, []);

  const handleUpdate = (id, rating) => {
    console.log("this is rating --------------", id, rating);
    dispatch(updatePostAsync({ id, rating }));
    dispatch(getAllPostsAsync())
  };

  const handleAddComment = (text, postId, userId) => {
    console.log(text,postId,userId)
    dispatch(createCommentAsync({text, postId, userId}))
    dispatch(getAllCommentsAsync())
  }

  const [hoverValues, setHoverValues] = useState([]);
  const [postCommentVisibility, setPostCommentVisibility] = useState([]);
  const [currentComment, setCurrentComment] = useState('')


  useEffect(() => {
    setHoverValues(posts.map(() => undefined));
    setPostCommentVisibility(posts.map(() => false));
  }, [posts]);

  //npx tailwindcss -i ./public/style.css -o ./public/output.css --watch

  return (
    <div className="">
      <div className="w-5/6 mx-auto">
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

          console.log("this is post image----------------",post.image)

          return (
            <motion.div
            key={post.id}
              className="w-4/6 mx-auto"
              initial={{ y: 50 }}
              whileInView={{ y: 0, transition: { duration: 0.5 } }}
              viewport={{ once: true }}
            >
              <div
                key={post.id}
                className="relative flex flex-col mt-10 mx-auto w-auto max-w-lg bg-[#fff6f6] border-2 border-[#E68584] rounded-md shadow-lg shadow-[#913c3b]"
              >
                <div className="flex flex-row items-center justify-around">
                  <div className="flex flex-row items-center flex-wrap">
                    <Link to={`/profile/${post.user.id}`}><img
                      className="object-cover p-5 rounded-full w-40 h-40"
                      src={post.user.profilePic}
                    /></Link>
                    <div className=" m-2">
                    <Link to={`/profile/${post.user.id}`}><h1 className="font-bold  text-[#E68584] hover:text-[#e66f6d]">
                        {post.user.firstName} {post.user.lastName}
                      </h1></Link>
                      <Link to={`/profile/${post.user.id}`}><h1 className="font-bold  text-amber-300 text-sm hover:text-[#FFC200]">
                        @ {post.user.username}
                      </h1></Link>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm m-2 text-amber-300">
                      {formattedDate}
                    </h3>
                  </div>
                </div>
                <div className="w-10/12 h-0.5 mx-auto rounded-lg bg-[#E68584]" />
                <div className="mx-auto m-5 w-10/12 font-semibold text-neutral-600">{post.text}</div>
                <img
                  className="rounded mx-auto m-5 w-10/12"
                  src={post.image ? post.image.slice(7) : null}
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
                            hoverValues[index] > starIndex
                              ? "#ffc107"
                              : "#fde68a"
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
                    className="font-bold text-amber-200 hover:text-amber-300"
                  >
                    Comments
                  </button>
                </div>
              </div>

              {postCommentVisibility[index] && (
                <motion.div
                  className="relative flex flex-col p-3 mt-3 mx-auto w-auto max-w-lg bg-amber-50 border-2 border-amber-300 rounded-md shadow-lg shadow-[#913c3b]"
                  initial={{ y: -10 }}
                  whileInView={{ y: 0, transition: { duration: 0.5 } }}
                  viewport={{ once: true }}
                >
                  {theComments.map((comment) => {
                    if(comment.postId === post.id){
                    return (
                      <div className=" m-2 flex flex-row items-center">
                        <img
                          className=" w-7 rounded-full object-cover"
                          src={users[0][comment.userId - 1].profilePic}
                        ></img>
                        <Link to={`/profile/${comment.userId}`} ><h1 className=" ml-1 font-bold text-[#E68584] hover:text-[#e66f6d] ">
                          {users[0][comment.userId - 1].firstName}{" "}
                          {users[0][comment.userId - 1].lastName}
                        </h1></Link>
                        <p className="ml-1 text-neutral-600">{comment.text}</p>
                      </div>
                    )};
                  })}
                  
                  <div className="flex flex-row justify-between my-2">
                    <input onChange={(e)=> setCurrentComment(e.target.value)} className=" w-4/6 bg-[#fff6f6] border-2 rounded-lg border-[#E68584] ml-1 " placeholder="Enter a comment" />
                    <button onClick={()=>handleAddComment(currentComment, post.id, myId)} className=" w-3/12 bg-[#E68584] text-amber-200 rounded-lg mr-1 font-bold hover:text-amber-300 hover:bg-[#e66f6d]">
                      Add
                    </button>
                  </div>
                  
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>

// {/* <form id='addCampusForm' onSubmit={handleSubmit}>
//         <label id='addCampusLabel'>Add Campus -</label>
//         <input className='addCampusInput' type={'text'} onChange={e=> setName(e.target.value)} placeholder='Campus Name'></input>
//         <input className='addCampusInput' type={'text'} onChange={e=> setAddress(e.target.value)} placeholder='Address'></input>
//         <input className='addCampusInput' type={'text'} onChange={e=> setDescription(e.target.value)} placeholder='Description'></input>
//         <button id='addCampusSubmitButton' type='submit'>Submit</button>
//     </form> */}

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
