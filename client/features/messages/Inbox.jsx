import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getAllMessagesAsync } from "../../slices/allMessageSlice";
import { selectMessages } from "../../slices/allMessageSlice";
import { createMessageAsync } from "../../slices/allMessageSlice";
import { useState } from "react";
import { selectUsers } from "../../slices/allUsersSlice";
import { getAllUsersAsync } from "../../slices/allUsersSlice";

const Inbox = () => {

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
        <div className="flex md:flex-row flex-col">
            <div id="all-messages-box" className="flex flex-col m-5 w-full md:w-2/5 h-4/5 border-2 border-honey shadow-md shadow-honey mt-8 rounded-md">
                <div className="flex flex-row justify-between">
                    <input placeholder="Search messages..." className="m-2 p-2 border-b-2 border-honey"></input>
                    <button className="text-honey mr-2">Filter</button>
                </div>
                <div id="message-preview-box" className="m-2 p-2 border-2 border-honey rounded-md">
                    <h1 className="font-bold text-3xl text-honey">All Messages (3)</h1>

                    <div id="single-message-preview" className="overflow-auto shadow-sm shadow-honey ml-2 mr-2 rounded-md p-2"> {messages.map(message => {
                        
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
                        
                            <div className="border border-black">
                                <img className=" border border-solid border-black object-cover p-3 rounded-full w-40 h-40" src={message.user.profilePic} />
                                <section>
                                    <h1 className="text-[#a1a7b1] font-bold"> {message.user.firstName} {message.user.lastName} </h1>
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
            <div id="single-message-box" className="m-5 mt-8 w-3/5 border-2 border-[#EBAF4C] shadow-md shadow-[#EBAF4C] rounded-md relative">
                <div id="talking-to" className= "flex border border-black bg-[#E68584] items-center justify-between p-2">
                    firstName lastName
                    <div id="icons">(camera)(friend)(more)</div> 
                </div>
                <div id= "message owner" className="p-3 flex gap 5 mb-2.5">
                    <div id="messageInfo" className="flex flex-col color-grey ">
                        <img className ="h-10 w-10 rounded-3xl object-cover" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png" alt="" />
                        <span>just now</span>
                    </div>
                    <div id="messagecontent" className="flex felx-col max-w-[80%] gap-2.5" >
                        <p id="text" className="bg-[pink] pt-2.5 pb-2.5 pr-5 pl-5 rounded ">hello my name is x and i come from x and i like y</p>
                        {/* <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png" alt="" /> */}
                        </div>

                </div>
                <div id="send-message" className="flex absolute bottom-0 w-full">
                    <input placeholder="Type message here..." className="m-2 p-2 w-full border-t-2 border-[#EBAF4C] flex items-center justify-between" onChange={(e) => setText(e.target.value)}></input>
                    <div id="send" className="flex items-center gap-2.5 cursor-pointer">
                    <span id="attach-image">(attach)</span>
                    <label>(image)</label>
                    <button className="self-end mr-4 mb-2 font-bold text-[#EBAF4C]" onClick={handleSubmit}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Inbox;