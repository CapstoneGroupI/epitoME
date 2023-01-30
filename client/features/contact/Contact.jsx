/* eslint-disable no-unused-vars */
import React from "react";

const ContactForm = () => {
    return (
            <div className="md:w-4/5 flex flex-col flex-wrap items-center justify-center my-12">
                <div className="absolute top-40 bg-white mt-10 shadow-lg rounded py-12 lg:px-28 px-8">
                    <p className="md:text-3xl text-xl font-bold leading-7 text-center text-[#EBAF4C]">Contact Us!</p>
                    <div className="md:flex items-center mt-12">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-[#a1a7b1]">Name</label>
                            <input tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 border-b-2 border-[#EBAF4C]"/>
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-[#a1a7b1]">Username</label>
                            <input tabIndex={0} arial-label="Please input email address" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 border-b-2 border-[#EBAF4C]"/>
                        </div>
                    </div>
                    <div className="md:flex items-center mt-8">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-[#a1a7b1]">Email</label>
                            <input tabIndex={0} role="input" arial-label="Please input company name" type="email" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4  border-b-2 border-[#EBAF4C] "/>
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-[#a1a7b1]">Phone</label>
                            <input tabIndex={0} arial-label="Please input country name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 border-b-2 border-[#EBAF4C]"/>
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex flex-col mt-8">
                            <label className="text-base font-semibold leading-none text-[#a1a7b1]">Message</label>
                            <textarea tabIndex={0} aria-label="leave a message" role="textbox" type="name" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 border-2 border-[#EBAF4C] rounded-md resize-none" defaultValue={""} />
                        </div>
                    </div>
                    <p className="text-xs leading-3 text-[#a1a7b1] mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
                    <div className="flex items-center justify-center w-full">
                        <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-[#EBAF4C] rounded hover:bg-yellow-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">SUBMIT</button>
                    </div>
                </div>
            </div>
    );
};

export default ContactForm;