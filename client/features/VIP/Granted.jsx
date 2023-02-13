/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

const Granted = () => {
    return(
        <>
        <div className="w-full flex flex-col items-center md:w-7/12 m-8">
                <div id="titleBox" className="text-center w-full m-10 rounded-md shadow-lg shadow-honey p-8">
                    <h1 className="text-honey text-3xl font-bold">Congrats! You have been granted VIP status!</h1>
                    <h2 className="text-honey text-3xl font-bold">Please check out your deals below</h2>
                </div>
            <div className="w-full flex flex-col flex-wrap">
                    <h2 className="text-stone-500 text-3xl text-center">Access to luxury rental cars at participating car rental agencies</h2>
                    <div className="flex flex-col md:flex-row flex-wrap w-full m-10 rounded-md shadow-md shadow-honey p-4 justify-around items-center">
                            <img id = "pic 1" className="h-3/4 w-1/4 rounded-lg" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dsc02822-jpg-1597025795.jpg?crop=1.00xw:0.893xh;0,0&resize=980:*"></img>
                            <img id = "pic 2" className="h-3/4 w-1/4 rounded-lg" src="https://images.dealer.com/ddc/vehicles/2022/Rolls-Royce/Phantom/Sedan/color/Adriatic%20Blue-EXAB-11,69,76-640-en_US.jpg" ></img>
                            <img id = "pic 3" className="h-3/4 w-1/4 rounded-lg" src="https://resources.formula-e.pulselive.com/photo-resources/2022/11/08/786b3407-70b3-4f18-9a17-1bf6216b0e27/8nlujT1G.jpg?width=1440&height=810"></img>
                    </div>
                    <h2 className="text-stone-500 text-3xl text-center">Have access to airport lounges and first class flight options</h2>
                    <div className="flex flex-col md:flex-row flex-wrap w-full m-10 rounded-md shadow-md shadow-honey p-4 justify-around items-center">
                            <img id = "pic 4" className="h-3/4 w-1/4 rounded-lg" src="https://cdn.fodors.com/ee/files/slideshows/9-Worlds-Luxurious-Airport-Lounges-Star-Alliance-Lounge.jpg" ></img>
                            <img id = "pic 5" className="h-3/4 w-1/4 rounded-lg" src="https://robbreport.com/wp-content/uploads/2018/04/winch.jpg?w=1000" ></img>
                            <img id = "pic 6" className="h-3/4 w-1/4 rounded-lg" src="https://www.jamesedition.com/stories/wp-content/uploads/2022/07/main-fin-6.jpg" ></img>
                    </div>
                    <h2 className="text-stone-500 text-3xl text-center">Access penthouses and resorts when you travel</h2>
                    <div className="flex flex-col md:flex-row flex-wrap w-full m-10 rounded-md shadow-md shadow-honey p-4 justify-around items-center">
                            <img id = "pic 7" className="h-3/4 w-1/4 rounded-lg" src="https://www.kayak.com/rimg/himg/10/ba/c7/expediav2-3526615-f2c892-479871.jpg?width=1366&height=768&crop=true" ></img>
                            <img id = "pic 8" className="h-3/4 w-1/4 rounded-lg" src="https://www.thepinnaclelist.com/wp-content/uploads/2014/03/05-Neo-Bankside-Luxury-Penthouse-London-England-UK.jpg" ></img>
                            <img id = "pic 9" className="h-3/4 w-1/4 rounded-lg" src="https://images.squarespace-cdn.com/content/v1/602471d519153a7afd1fa871/1618783608356-GHZNDJ8SJGWX4EPUW5KE/5da83811805cc191545a87f4_aqua-home.jpg" ></img>                  
                    </div>
                    <h2 className="text-stone-500 text-3xl text-center">Private viewings at world famous museums</h2>
                    <div className="flex flex-col md:flex-row flex-wrap w-full m-10 rounded-md shadow-md shadow-honey p-4 justify-around items-center">
                            <img id = "pic 10" className="h-3/4 w-1/4 rounded-lg" src="https://swirled.com/wp-content/uploads/2017/05/most-beautiful-museums-1.jpg" ></img>
                            <img id = "pic 11" className="h-3/4 w-1/4 rounded-lg" src="https://art-sheep.com/wp-content/uploads/2015/02/dippythedinosaur2.jpg" ></img>
                            <img id = "pic 12" className="h-3/4 w-1/4 rounded-lg" src="https://www.themorgan.org/sites/default/files/styles/large__650_x_650_/public/slider-image/Pierpont-Morgans-Library-bs.jpg?itok=-mTVQX1D" ></img>
                    </div>
            </div>
            </div>
            <div> < Footer /> </div>
            </>
    );
};

export default Granted;
