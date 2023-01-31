import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPostAsync } from "../../slices/allPostSlice";
import { selectPosts } from "../../slices/allPostSlice";
import { useSelector } from "react-redux";
import { getAllPostsAsync } from "../../slices/allPostSlice";

const CreatePost = (userId, isLoggedIn) => {
    const [text, setText] = useState("")
let arr = []
    const posts = useSelector(selectPosts)
    const dispatch = useDispatch()
    

    useEffect(()=> {
        dispatch(getAllPostsAsync())
    },[userId])

    arr = posts.map(post => {return post.text});
      console.log("these are the posts", arr )

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPostAsync({text}))
        console.log("submitted")
    }
    

    return (
    <>
        <form className="flex md:flex-row justify-center flex-col" onSubmit = {handleSubmit}>
                <div id="post-preview-box" className="m-2 p-2 border-2 border-[#EBAF4C] rounded-md">
                    <h1 className="center font-bold text-3xl text-[#EBAF4C]">Create A Post</h1>
                    <div id= "create-post-box" className="flex flex-col m-5 w-full md:w-2/5 h-4/5 border-2 border-[#EBAF4C] shadow-md shadow-[#EBAF4C] mt-8 rounded-md">
                <div className="flex flex-row justify-between">
                    <textarea placeholder="Your Text Here..." className="m-2 p-2 border-b-2 border-[#EBAF4C]" onChange = {(e) =>setText(e.target.value)}></textarea>
                    <button className="text-[#EBAF4C] font-bold mr-2">SUBMIT</button>
                </div>
                        </div>
                        </div>
                        </form>
                        </>
    )
}

export default CreatePost