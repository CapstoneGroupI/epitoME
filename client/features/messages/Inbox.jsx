/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMessagesAsync } from "../../slices/allMessageSlice";
import { selectMessages } from "../../slices/allMessageSlice";
import { createMessageAsync } from "../../slices/allMessageSlice";
import { useState } from "react";
import { selectUsers } from "../../slices/allUsersSlice";
import { getAllUsersAsync } from "../../slices/allUsersSlice";
import Messaging from "./messaging.jsx";
import Input from "./input.jsx";
import AddFellow from "../addFellow/addFellow.jsx";
import {
  selectFellows,
  getFellow,
  createFellow,
} from "../../slices/fellowsSlice";
import Footer from "../footer/Footer";

const Inbox = () => {
  const [clickedUser, setClickedUser] = useState({});

  const dispatch = useDispatch()

  const userId = useSelector((state) => state.auth.me.id);
  console.log("this is the current userId", userId);

  const messages = useSelector(selectMessages);


  const lastMessages = Object.values(
    messages.reduce((acc, message) => {
      if (message.userId !== userId) {
        const { user, ...rest } = message;
        if (!acc[user.id] || acc[user.id].createdAt < message.createdAt) {
          acc[user.id] = { user, ...rest };
        }
      }
      return acc;
    }, {})
  );

  console.log("these are the last messages", lastMessages);

  const filteredMessages = messages.filter(
    (message) => message.userId !== userId
  );
  console.log("these are the filtered messages", filteredMessages);

  let arr = [];

  arr = messages.map((message) => {
    return message;
  });
  console.log("these are the arr", arr);

  const handleMessageClick = (user) => {
    setClickedUser(user);
  };

  return (
    <div>
      <div className="flex md:flex-row flex-col">
        <div
          id="all-messages-box"
          className="flex flex-col m-5 w-full md:w-2/5 h-3/5 border-2 border-salmon shadow-xl shadow-rose-200 mt-8 rounded-md"
        >
          <div className="flex flex-row justify-around">
            <input
              placeholder="Search messages..."
              className="m-2 p-2 border-b-2 border-salmon"
            ></input>
            <button className="text-salmon mr-2">Filter</button>
          </div>
          <div id="message-preview-box" className="m-2 p-2 rounded-md">
            <h1 className="font-bold text-3xl text-honey text-center">
              New Messages (<span className="text-salmon">{messages.length - filteredMessages.length}</span>)
            </h1>

            <div
              id="single-message-preview"
              className="overflow-auto  ml-2 mr-2 rounded-md p-2"
            >
              {" "}
              {lastMessages.reverse().map((message) => {
                let date = new Date(message.createdAt);
                let formattedDate = date.toLocaleDateString("en-US", options);
                let options = {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                };

                return (
                  <div
                    key={message.id}
                    id="all Messages"
                    className=" my-3 hover:cursor-pointer  rounded-lg bg-[#fff6f6] border-red-300 border-2"
                    onClick={() => handleMessageClick(message.user)}
                  >
                    <img
                      className="object-cover p-3 rounded-full w-32 h-32 mx-auto"
                      src={message.user.profilePic}
                    />
                    <section className="flex flex-col items-center ">
                      <h1 className="text-[#a1a7b1] font-bold">
                        {" "}
                        {message.user.firstName} {message.user.lastName}{" "}
                      </h1>
                      <AddFellow className="" followerId={message.userId} />
                      <h3 className="text-[#a1a7b1]">{formattedDate}</h3>
                      <h2 className="text-[#a1a7b1]"></h2>
                    </section>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          id="single-message-box"
          className="m-5 h-screen mt-8 w-3/5 border-2 border-[salmon] shadow-md shadow-[#EBAF4C] rounded-md relative"
        >
          <div
            id="talking-to"
            className="flex border border-black bg-[#E68584] items-center justify-between p-2"
          >
            Now chatting with: {clickedUser.firstName} {clickedUser.lastName}
            <div id="icons">
              <button>📸</button>
              <button>🤝</button>
              <button>more</button>
            </div>
          </div>
          <div id="scroll" className="overflow-scroll scrollbar-hide h-5/6">
            <Messaging clickedUser={clickedUser} />
          </div>
        </div>
      </div>
      <div>
        <Footer />{" "}
      </div>
    </div>
  );
};

export default Inbox;
