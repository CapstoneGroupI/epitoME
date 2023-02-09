import React from 'react'
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getAllMessagesAsync } from "../../slices/allMessageSlice";
import { selectMessages } from "../../slices/allMessageSlice";
import { createMessageAsync } from "../../slices/allMessageSlice";
import { selectUsers } from "../../slices/allUsersSlice";
import { useState } from 'react';

const Messaging = () => {

    const localMessages = localStorage.getItem("messages")

    const userId = useSelector((state) => state.auth.me.id)

    const isLoggedIn = useSelector((state) => !!state.auth.me.id)

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

  return (
    <div>  {messages.map(message => {
        return(
                <div id= "message" className="p-3 flex gap-5 mb-2.5">
                    <div id="messageInfo" className="flex flex-col color-grey ">
                        <img className ="h-10 w-10 rounded-3xl object-cover" src= {message.user.profilePic} alt="" />
                        <span>just now</span>
                    </div>
                    <div id="messagecontent" className="flex felx-col max-w-[80%] gap-2.5" >
                        <p id="text" className="bg-[pink] pt-2.5 pb-2.5 pr-5 pl-5 rounded ">{message.text}</p>
                        {/* <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png" alt="" /> */}
                        </div>

                </div>
        )})}
</div>
  )
}

export default Messaging