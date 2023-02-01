/* eslint-disable no-unused-vars */
import React from "react";

const Boost = () => {
    return(
        <div className="block bg-[pink] text-center w-4/5 m-10 rounded-md shadow-lg shadow-[#EBAF4C] p-8">
            <div className="text-[red] text-6xl font-bold m-30">Be a better person...</div>
            <div className="text-[purple] text-4xl font-bold">No one likes douchebags...</div>
            <div className="text-[red] text-2xl font-bold">No but seriously though, if you wanted to boost your rating (who doesn't want that VIP status?!), look no further! Check out some boosting options below:</div>
            <div className="text-3xl">
                <div id="AllProductSorting" className="p-6 m-10 bg-[#EBAF4C] text-5xl rounded-md shadow-lg shadow-[gray] p-2">
                    <label>Select the tier membership you would like to purchase:</label>
                    <select
                        className="text-2xl"
                        // onChange={handleTier}
                    >
                        <option value="select">-Select-</option>
                        <option value="Bronze">Bronze</option>
                        <option value="Silver">Silver</option>
                        <option value="Gold">Gold</option>
                        <option value="Platinum">Platinum</option>
                    </select>
                    <button className="bg-[white] text-[black] m-10 text-2xl p-2 rounded-md hover:bg-[black] hover:text-[white]">BUY NOW</button>
                </div>
                Subscribe to the following membership tiers:
                <h1 className="block bg-[chocolate] text-4xl justify-center text-center w-5/5 m-10 rounded-md shadow-lg shadow-[gold] p-4">
                    <h1 className="block bg-[wheat] text-[chocolate] text-center w-5/5 m-0 rounded-md shadow-lg shadow-[gold] p-3">Bronze Tier</h1>
                    <h2 className= "flex justify-around text-center m-10 text-2xl">$9.99 a month</h2>
                    <h2 className= "flex justify-around text-center m-10 text-2xl">Earn an extra 0.1 boost for each fellow rating</h2>
                </h1>
                <h1 className="block bg-[silver] text-4xl justify-center text-center w-5/5 m-10 rounded-md shadow-lg shadow-[white] p-4">
                <h1 className="block bg-[dimgray] text-[silver] text-center w-5/5 m-0 rounded-md shadow-lg shadow-[white] p-3">Silver Tier</h1>
                    <h2 className= "flex justify-around text-center m-10 text-2xl">$19.99 a month</h2>
                    <h2 className= "flex justify-around text-center m-10 text-2xl">Earn an extra 0.2 boost for each fellow rating</h2>
                </h1>
                <h1 className="block bg-[#feb236] text-4xl justify-center text-center w-5/5 m-10 rounded-md shadow-lg shadow-[red] p-4">
                    <h1 className="block bg-[tomato] text-[#feb236] text-center w-5/5 m-0 rounded-md shadow-lg shadow-[orange] p-3">Gold Tier</h1>
                    <h2 className= "flex justify-around text-center m-10 text-2xl">$29.99 a month</h2>
                    <h2 className= "flex justify-around text-center m-10 text-2xl">Earn an extra 0.3 boost for each fellow rating</h2>
                </h1>
                <h1 className="block bg-[cyan] text-4xl justify-center text-center w-5/5 m-10 rounded-md shadow-lg shadow-[steelblue] p-4">
                    <h1 className="block bg-[steelblue] text-[cyan] text-center w-5/5 m-0 rounded-md shadow-lg shadow-[steelblue] p-3">Platinum Tier</h1>
                    <h2 className= "flex justify-around text-center m-10 text-2xl">$39.99 a month</h2>
                    <h2 className= "flex justify-around text-center m-10 text-2xl">Earn an extra 0.4 boost for each fellow rating</h2>
                </h1>
            </div>

        </div>
    );
};

export default Boost;