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
        <div className="flex md:flex-row justify-center flex-col h-3/5 m-10">
                <div id="post-preview-box" className="m-2 p-2 border-2 border-honey rounded-md w-3/5">
                    <h1 className="center font-bold text-3xl text-honey text-center">Create A Post</h1>
                    <div id= "create-post-box" className="flex flex-col m-5 items-center border-2 border-honey shadow-md shadow-honey mt-8 rounded-md">
                <div className="flex flex-col justify-between">
                    <input type="text" placeholder="Your Text Here..." className="m-2 p-2 border-b-2 border-honey" onChange = {(e) =>setText(e.target.value)}></input>
                <img src={imagePreview} alt="" />
                    <input className="mt-4" type="file" onChange={(e) => setImage(e.target.files[0])} />
                    <button className="text-honey font-bold rounded mr-2 my-5 border-2 border-honey py-4 hover:bg-honey hover:text-white" onClick={handleSubmit}>SUBMIT</button>
                    
                </div>
                        </div>
                        </div>
                        </div>
                        <div className="h-screen"></div>
                       <div> < Footer /> </div>
                        </>
    )
}

export default CreatePost