import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPostAsync } from "../../slices/allPostSlice";
import { selectPosts } from "../../slices/allPostSlice";
import { useSelector } from "react-redux";
import { getAllPostsAsync } from "../../slices/allPostSlice";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";

const CreatePost = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const userId = useSelector((state) => state.auth.me.id);

  let arr = [];
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllPostsAsync());
  }, [userId]);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreviewUrl(e.target.result);
      };
      reader.readAsDataURL(image);
    }
  }, [image]);

  arr = posts.map((post) => {
    return post.text;
  });

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createPostAsync({ text, image, userId }));
      Navigate("/home");
    }

  return (
    <div>
        <div className="h-screen">
      <form className="flex my-10 ">
        <div
          id="post-preview-box"
          className=" bg-[#fff6f6] mx-auto max-w-3xl w-5/6 border-2 shadow-md shadow-[#913c3b] border-[#E68584] rounded-md"
        >
          <h1 className="center font-bold text-3xl text-[#E68584] text-center mt-5">
            Cr<span className="text-amber-300">e</span>ate a post<span className="text-amber-300">.</span>
          </h1>
          {/* <hr className="m-1 w-3/4 h-1 mx-auto bg-amber-300 rounded-xl "/> */}
          <div
            id="create-post-box"
            className="flex flex-col m-5 w-auto mt-8 rounded-md"
          >
            <div className="flex flex-col justify-around">
              <textarea
                type="text"
                placeholder="Your Text Here..."
                className="h-40 w-5/6 mx-auto p-2  border-amber-300 rounded-lg text-neutral-600 font-semibold"
                onChange={(e) => setText(e.target.value)}
              ></textarea>
              {imagePreviewUrl && (
                <img
                  src={imagePreviewUrl}
                  alt="Preview"
                  className=" w-3/4 mx-auto rounded-lg my-5"
                />
              )}
              <div className="flex flex-row justify-around">
              <label className=" inline-block p-1 text-center rounded-lg bg-[#E68584] my-5 cursor-pointer text-amber-300 w-1/6 font-semibold  hover:bg-[#db6a68]">
                Add Image
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </label>
              <button
                className="text-amber-300 p-1 w-1/6 bg-[#E68584] rounded-lg font-semibold my-5 hover:bg-[#db6a68]"
                onClick={handleSubmit}
              >
                Submit
              </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      </div>
      <div className="mt-10"> < Footer /> </div>
    </div>
  );
};

export default CreatePost;