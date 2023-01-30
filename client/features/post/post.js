import React from "react";

const CreatePost = () => {
    return (
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
                        </div>
                        </div>
                        </div>
                        </div>
    )
}

export default CreatePost