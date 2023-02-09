import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllMessagesAsync } from "../../slices/allMessageSlice";
import { selectMessages } from "../../slices/allMessageSlice";
import { createMessageAsync } from "../../slices/allMessageSlice";
import { selectUsers } from "../../slices/allUsersSlice";
import { useState } from 'react';

const input = () =>{

    const [text, setText] = useState("");

    const userId = useSelector((state) => state.auth.me.id)

    const users = useSelector(selectUsers)

    const messages = useSelector(selectMessages)

    let arr = []

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMessagesAsync())
        console.log(userId)
    }, [userId])

    arr = messages.map(message => { return message.text });
    console.log('these are the messages', arr)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createMessageAsync({ text, userId }))
        console.log("submitted")
    } 

  return (
    <>
    <div id="send-message" className="flex absolute bottom-0 w-full">
    <input placeholder="Type message here..." className="m-2 p-2 w-full border-t-2 border-[#EBAF4C] flex items-center justify-between" onChange={(e) => setText(e.target.value)}></input>
    <div id="send" className="flex items-center gap-2.5 cursor-pointer">
    <span id="attach-image">(attach)</span>
    <label>(image)</label>
    <button className="self-end mr-4 mb-2 font-bold text-[#EBAF4C]" onClick={handleSubmit}>Send</button>
    </div>
</div>
</>
  )
}

export default input