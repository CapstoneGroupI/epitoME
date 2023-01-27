import React from "react";

const Inbox = () => {
    return(
        <div className="flex md:flex-row flex-col">
            <div id="all-messages-box" className="flex flex-col m-5 w-full md:w-2/5 h-4/5 border-2 border-[#EBAF4C] shadow-md shadow-[#EBAF4C] mt-8 rounded-md">
                <div className="flex flex-row justify-between">
                    <input placeholder="Search messages..." className="m-2 p-2 border-b-2 border-[#EBAF4C]"></input>
                    <button className="text-[#EBAF4C] mr-2">Filter</button>
                </div>
                <div id="message-preview-box" className="m-2 p-2 border-2 border-[#EBAF4C] rounded-md">
                    <h1 className="font-bold text-3xl text-[#EBAF4C]">All Messages (3)</h1>
                    <div id="single-message-preview" className="overflow-auto shadow-sm shadow-[#EBAF4C] ml-2 mr-2 rounded-md p-2">
                        <h1 className="text-[#a1a7b1] font-bold">Friend Name</h1>
                        <h3 className="text-[#a1a7b1]">Date</h3>
                        <h2 className="text-[#a1a7b1]">Message...</h2>
                    </div>
                    <div id="single-message-preview" className="overflow-auto shadow-sm shadow-[#EBAF4C] ml-2 mr-2 rounded-md p-2">
                        <h1 className="text-[#a1a7b1] font-bold">Friend Name</h1>
                        <h3 className="text-[#a1a7b1]">Date</h3>
                        <h2 className="text-[#a1a7b1]">Message...</h2>
                    </div>
                    <div id="single-message-preview" className="overflow-auto shadow-sm shadow-[#EBAF4C] ml-2 mr-2 rounded-md p-2">
                        <h1 className="text-[#a1a7b1] font-bold">Friend Name</h1>
                        <h3 className="text-[#a1a7b1]">Date</h3>
                        <h2 className="text-[#a1a7b1]">Message...</h2>
                    </div>
                </div>
            </div>
            <div id="single-message-box" className="m-5 mt-8 w-3/5 border-2 border-[#EBAF4C] shadow-md shadow-[#EBAF4C] rounded-md relative">
                <div id="send-message" className="flex flex-col absolute bottom-0 w-full">
                    <input placeholder="Type message here..." className="m-2 p-2 border-t-2 border-[#EBAF4C]"></input>
                    <button className="self-end mr-4 mb-2 font-bold text-[#EBAF4C]">Send</button>
                </div>
            </div>
        </div>
    );
};

export default Inbox;