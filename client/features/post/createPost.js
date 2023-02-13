import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPostAsync } from "../../slices/allPostSlice";
import { selectPosts } from "../../slices/allPostSlice";
import { useSelector } from "react-redux";
import { getAllPostsAsync } from "../../slices/allPostSlice";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
    const [text, setText] = useState("")
    const [image, setImage] = useState(null);
    const userId = useSelector((state) => state.auth.me.id)
    const imagePreview = image ? URL.createObjectURL(image) : null;
   
    
let arr = []
    const posts = useSelector(selectPosts)
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    

    useEffect(()=> {
        dispatch(getAllPostsAsync())
    },[userId])

    arr = posts.map(post => {return post.text});
      console.log("these are the posts", arr )
      
    const handleSubmit = (e) => {
        console.log(text,image,userId)
        e.preventDefault();
        dispatch(createPostAsync({text, image, userId}))
        console.log("submitted")
        // Navigate("/home")
    }
    

    return (
    <>
        <form className="flex md:flex-row justify-center flex-col">
                <div id="post-preview-box" className="m-2 p-2 border-2 border-[#EBAF4C] rounded-md">
                    <h1 className="center font-bold text-3xl text-[#EBAF4C] text-center">Create A Post</h1>
                    <div id= "create-post-box" className="flex flex-col m-5 w-full md:w-5/5 h-5/5 border-2 border-[#EBAF4C] shadow-md shadow-[#EBAF4C] mt-8 rounded-md">
                <div className="flex flex-row justify-between">
                    <input type="text" placeholder="Your Text Here..." className="m-2 p-2 border-b-2 border-[#EBAF4C]" onChange = {(e) =>setText(e.target.value)}></input>
                <img src={imagePreview} alt="" />
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                    <button className="text-[#EBAF4C] font-bold mr-2" onClick={handleSubmit}>SUBMIT</button>
                    
                </div>
                        </div>
                        </div>
                        </form>
                        </>
    )
}

export default CreatePost