import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllMessagesAsync } from "../../slices/allMessageSlice";
import { selectMessages } from "../../slices/allMessageSlice";
import { createMessageAsync } from "../../slices/allMessageSlice";
import { selectUsers } from "../../slices/allUsersSlice";
import { useState } from 'react';
import { useEffect } from 'react';

const Messaging = ({ clickedUser }) => {

  const [text, setText] = useState("");

  const userId = useSelector((state) => state.auth.me.id)

  const messages = useSelector(selectMessages)

  const filteredMessages = messages.filter(message => { console.log("this is the recieverId", message.recieverId)
    return (message.userId === clickedUser.id || message.userId === userId) 
      // (message.receiverId === clickedUser.id || message.receiverId === userId || !message.receiverId) 
  })

  console.log("these are the filtered messages", filteredMessages)
  console.log("this is clicked user", clickedUser)
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMessagesAsync())
    console.log(userId)
  }, [userId, clickedUser])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createMessageAsync({ text, userId }))
    console.log("submitted")
} 


  return (
    <div>
      {clickedUser && filteredMessages.map(message => {
        return (
          <div key={message?.id} id="message" className="p-3 flex gap-5 mb-2.5">
            <div id="messageInfo" className="flex flex-col color-grey ">
              <img className="h-10 w-10 rounded-3xl object-cover" src={message.user?.profilePic} alt="" />
              {console.log("this is prp------------",message.user?.profilePic)}
              
              {/* <span>{new Date(message.timestamp).toLocaleString()}</span> */}
              <span>{message.user?.firstName}</span>
            </div>
            <div id="messagecontent" className="flex felx-col max-w-[80%] gap-2.5" >
              <p id="text" className="bg-[pink] pt-2.5 pb-2.5 pr-5 pl-5 rounded ">{message?.text}</p>
              {/* <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png" alt="" /> */}
              </div>
          </div>
        )
      })}
    <div id="send-message" className="flex absolute bottom-0 w-full">
    <input placeholder="Type message here..." className="m-2 p-2 w-full border-t-2 border-[#EBAF4C] flex items-center justify-between" onChange={(e) => setText(e.target.value)}></input>
    <div id="send" className="flex items-center gap-2.5 cursor-pointer">
    <span id="attach-image">🔗</span>
    <label>🖼️</label>
    <button className="self-end mr-4 mb-2 font-bold text-[#EBAF4C]" onClick={handleSubmit}>Send</button>
    </div>
</div>
    </div>
  )
}
export default Messaging