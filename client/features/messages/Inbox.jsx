/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getAllMessagesAsync } from "../../slices/allMessageSlice";
import { selectMessages } from "../../slices/allMessageSlice";
import { createMessageAsync } from "../../slices/allMessageSlice";
import { useState } from "react";
import { selectUsers } from "../../slices/allUsersSlice";
import { getAllUsersAsync } from "../../slices/allUsersSlice";
import Messaging from "./messaging.jsx";
import Input from "./input.jsx";
import AddFellow from "../addFellow/addFellow.jsx";
import { selectFellows, getFellow, createFellow } from "../../slices/fellowsSlice";


const Inbox = () => {
    const [clickedUser, setClickedUser] = useState({});

    const userId = useSelector((state) => state.auth.me.id)
    console.log("this is the current userId", userId)

    const messages = useSelector(selectMessages)

    const filteredMessages= messages.filter(message => message.userId !== userId);
    console.log("these are the filtered messages", filteredMessages)

    let arr = []

    arr = messages.map(message => { return message });
    console.log('these are the arr', arr)

    const handleMessageClick = (user) => {
        setClickedUser(user);
    }

    return (
        <div className="flex md:flex-row flex-col">
            <div id="all-messages-box" className="flex flex-col m-5 w-full md:w-2/5 h-3/5 border-2 border-honey shadow-md shadow-honey mt-8 rounded-md">
                <div className="flex flex-row justify-between">
                    <input placeholder="Search messages..." className="m-2 p-2 border-b-2 border-honey"></input>
                    <button className="text-honey mr-2">Filter</button>
                </div>
                <div id="message-preview-box" className="m-2 p-2 border-2 border-honey rounded-md">
                    <h1 className="font-bold text-3xl text-honey">All Messages ({messages.length})</h1>

                    <div id="single-message-preview" className="overflow-auto shadow-sm shadow-honey ml-2 mr-2 rounded-md p-2"> {filteredMessages.map(message => {
                        
                        let date = new Date(message.createdAt);
                        let formattedDate = date.toLocaleDateString("en-US", options);
                        let options = {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                        }

                        return (
                        
                            <div key={message.id} id = "all Messages" className="border border-black hover:cursor-pointer" onClick={() => handleMessageClick(message.user)}>
                                <img className=" border border-solid border-black object-cover p-3 rounded-full w-20 h-20" src={message.user.profilePic} />
                                <section>
                                    <h1 className="text-[#a1a7b1] font-bold"> {message.user.firstName} {message.user.lastName} </h1>
                                    <AddFellow followerId={message.userId}/>
                                    <h3 className="text-[#a1a7b1]">{formattedDate}</h3>
                                    <h2 className="text-[#a1a7b1]">
                                        <div >{message.text}</div>
                                    </h2>
                                </section>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
            <div id="single-message-box" className="m-5 h-screen mt-8 w-3/5 border-2 border-[honey] shadow-md shadow-[#EBAF4C] rounded-md relative">
            <div id="talking-to" className= "flex border border-black bg-[#E68584] items-center justify-between p-2">
            {clickedUser.firstName} {clickedUser.lastName}
                    <div id="icons">
                        <button>📸</button>
                        <button>🤝</button>
                        <button>more</button>
                        </div> 
                </div>
                <div id="scroll" className="overflow-scroll scrollbar-hide h-5/6"> 
    <Messaging />
    </div>
    <Input/>
            </div>


        </div>
        
    );
};


export default Inbox