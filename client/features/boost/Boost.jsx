/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "../footer/Footer";

const Boost = () => {
    return(
        <div>
        <div className="text-center w-4/5 m-10 rounded-md p-8">
            <div className="text-salmon text-6xl font-bold m-30">So you want a higher rating?</div>
            <div className="text-salmon text-4xl font-bold">Considering becoming a better person?</div>
            <div className="text-salmon text-2xl font-bold">If you want to boost your rating (who doesn't want that VIP status?!), look no further! Check out some boosting options below:</div>
            <div className="text-3xl">
                <div id="AllProductSorting" className="p-6 m-10 text-honey text-5xl rounded-md p-2">
                    <label>Select the tier membership you would like to purchase:</label>
                    <select
                        className="text-2xl w-2/5"
                        // onChange={handleTier}
                    >
                        <option value="select">-Select-</option>
                        <option value="Bronze">Bronze</option>
                        <option value="Silver">Silver</option>
                        <option value="Gold">Gold</option>
                        <option value="Platinum">Platinum</option>
                    </select>
                    <button className="text-salmon border-2 border-salmon m-10 text-2xl p-2 rounded-md hover:text-white">BUY NOW</button>
                </div>
                <h1 className="text-salmon underline">Subscribe to the following membership tiers:</h1>
                <div className="text-4xl justify-center text-center text-[chocolate] w-5/5 m-10 rounded-md shadow-lg shadow-[chocolate] p-4">
                    <h1 className="border-2 border-t-0 border-[chocolate] text-center w-5/5 m-0 rounded-md shadow-lg shadow-[chocolate] p-3">Bronze Tier</h1>
                    <h2 className= "flex justify-around text-center m-10 text-2xl">$9.99 a month</h2>
                    <h2 className= "flex justify-around text-center m-10 text-2xl">Earn an extra 0.1 boost for each fellow rating</h2>
                </div>
                <div className="border-2 border-t-0 border-silver text-[silver] text-4xl justify-center text-center w-5/5 m-10 rounded-md shadow-lg shadow-silver p-4">
                <h1 className="border-2 border-silver text-center w-5/5 m-0 rounded-md shadow-lg shadow-silver p-3">Silver Tier</h1>
                    <h2 className= "flex justify-around text-center m-10 text-2xl">$19.99 a month</h2>
                    <h2 className= "flex justify-around text-center m-10 text-2xl">Earn an extra 0.2 boost for each fellow rating</h2>
                </div>
                <div className="border-2 border-t-0 border-honey text-[#D4AF37] text-4xl justify-center text-center w-5/5 m-10 rounded-md shadow-lg shadow-[#D4AF37] p-4">
                    <h1 className="border-2 border-[#D4AF37] text-center w-5/5 m-0 rounded-md shadow-lg shadow-[#D4AF37] p-3">Gold Tier</h1>
                    <h2 className= "flex justify-around text-center m-10 text-2xl">$29.99 a month</h2>
                    <h2 className= "flex justify-around text-center m-10 text-2xl">Earn an extra 0.3 boost for each fellow rating</h2>
                </div>
                <div className="border-2 border-t-0 border-[#A0B2C6] text-[#A0B2C6] text-4xl justify-center text-center w-5/5 m-10 rounded-md shadow-lg shadow-[steelblue] p-4">
                    <h1 className="border-2 border-[#A0B2C6] text-center w-5/5 m-0 rounded-md shadow-lg shadow-[steelblue] p-3">Platinum Tier</h1>
                    <h2 className= "flex justify-around text-center m-10 text-2xl">$39.99 a month</h2>
                    <h2 className= "flex justify-around text-center m-10 text-2xl">Earn an extra 0.4 boost for each fellow rating</h2>
                </div>
            </div>

        </div>
        <div className="h-screen"></div>
        <div>< Footer /></div>
        </div>
    );
};

export default Boost;