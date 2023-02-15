import React from "react";
import Footer from "../footer/Footer";

const Boost = () => {
    return(
        <div>
        <div className="flex flex-col items-center w-2/3 m-10 mx-auto">
        <div className="block bg-[#FDEDEC] text-center w-full rounded-md shadow-lg p-8">
        <div className="visibility:hidden hover:visible text-salmon text-6xl font-bold m-30 p-10">So you want a higher rating?</div>
        <div className="visibility:hidden hover:visible text-salmon text-4xl font-bold m-15 p-10">Considering becoming a better person?</div>
        <div className="text-[purple] text-2xl font-bold p-10">If you wanted to boost your rating (who doesn't want that VIP status?!), look no further! Check out some boosting options below:</div>
        <div className="text-3xl">
        <div id="tierSelector" className="p-6 m-10 bg-[pink] text-5xl rounded-md shadow-lg shadow-[gray] p-7">
                    <label className="p-6">Select the tier membership you would like to purchase:</label>
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
                   <button className="bg-[white] text-[black] m-10 text-2xl p-2 rounded-md hover:bg-[black] hover:text-[white]">BUY NOW</button>
               </div>
               Subscribe to the following membership tiers:
               <h1 className="block bg-[chocolate] text-4xl justify-center text-center w-5/5 m-10 rounded-md shadow-lg shadow-[gold] p-4 hover:scale-110 transition duration-300 ease-in-out">
                    <h1 className="block bg-[wheat] text-[chocolate] text-center w-5/5 m-0 rounded-md shadow-lg shadow-[gold] p-3">Bronze Tier</h1>
                    <h2 className= "flex justify-around text-center m-10 text-2xl">$9.99 a month</h2>
                    <h2 className= "flex justify-around text-center m-10 text-2xl">Earn an extra 0.1 boost for each fellow rating</h2>
                </h1>
                <h1 className="block bg-[silver] text-4xl justify-center text-center w-5/5 m-10 rounded-md shadow-lg shadow-[white] p-4 hover:scale-110 transition duration-300 ease-in-out">
                <h1 className="block bg-[dimgray] text-[silver] text-center w-5/5 m-0 rounded-md shadow-lg shadow-[white] p-3">Silver Tier</h1>
                    <h2 className= "flex justify-around text-center m-10 text-2xl">$19.99 a month</h2>
                    <h2 className= "flex justify-around text-center m-10 text-2xl">Earn an extra 0.2 boost for each fellow rating</h2>
                </h1>
                <h1 className="block bg-[#feb236] text-4xl justify-center text-center w-5/5 m-10 rounded-md shadow-lg shadow-[red] p-4 hover:scale-110 transition duration-300 ease-in-out">
                    <h1 className="block bg-[tomato] text-[#feb236] text-center w-5/5 m-0 rounded-md shadow-lg shadow-[orange] p-3">Gold Tier</h1>
                    <h2 className= "flex justify-around text-center m-10 text-2xl">$29.99 a month</h2>
                    <h2 className= "flex justify-around text-center m-10 text-2xl">Earn an extra 0.3 boost for each fellow rating</h2>
                </h1>
                <h1 className="block bg-[cyan] text-4xl justify-center text-center w-5/5 m-10 rounded-md shadow-lg shadow-[steelblue] p-4 hover:scale-110 transition duration-300 ease-in-out">
                    <h1 className="block bg-[steelblue] text-[cyan] text-center w-5/5 m-0 rounded-md shadow-lg shadow-[steelblue] p-3">Platinum Tier</h1>
                    <h2 className= "flex justify-around text-center m-10 text-2xl">$39.99 a month</h2>
                    <h2 className= "flex justify-around text-center m-10 text-2xl">Earn an extra 0.4 boost for each fellow rating</h2>
                </h1>
            </div>
        </div>
        <div className="h-96"></div>
        </div>
        <div><Footer /></div>
        </div>
    );
};
export default Boost;