import React from "react";

const Inbox = () => {
    return(
        <div className="flex flex-row">
            <div id="all-messages-box" className="flex flex-col m-5 w-2/5 h-4/5 border-2 border-[#EBAF4C] shadow-md shadow-[#EBAF4C] rounded-md">
                <input placeholder="Search messages..." className="m-2 p-2 border-b-2 border-[#EBAF4C]"></input>
                <div id="message-preview-box" className="m-2 p-2 border-2 border-[#EBAF4C] rounded-md">
                    <h1 className="font-bold text-3xl text-[#EBAF4C]">All Messages (2)</h1>
                    <div id="single-message-preview" className="overflow-auto shadow-sm shadow-[#EBAF4C] ml-2 mr-2 rounded-md p-2">
                        <h1>Friend Name</h1>
                        <h3>Date</h3>
                        <h2>Message...</h2>
                    </div>
                    <div id="single-message-preview" className="overflow-auto shadow-sm shadow-[#EBAF4C] ml-2 mr-2 rounded-md p-2">
                        <h1>Friend Name</h1>
                        <h3>Date</h3>
                        <h2>Message...</h2>
                    </div>
                    <div id="single-message-preview" className="overflow-auto shadow-sm shadow-[#EBAF4C] ml-2 mr-2 rounded-md p-2">
                        <h1>Friend Name</h1>
                        <h3>Date</h3>
                        <h2>Message...</h2>
                    </div>
                </div>
            </div>
            <div id="single-message-box" className="m-5 w-3/5 border-2 border-[#EBAF4C] shadow-md shadow-[#EBAF4C] rounded-md">
                <div id="send-message" className="flex flex-col">
                    <input placeholder="Type message here..."></input>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Inbox;