/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { me } from "../auth/authSlice.js";
import { useSelector, useDispatch } from "react-redux";
import Locked from "./Locked.jsx";
import Granted from "./Granted.jsx";
import { Link } from "react-router-dom";

const VIP = () => {
    const isHighRated = useSelector((state) => !!state.auth.me.id);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(me());
    }, []);

    return(
        <div>
        {/* {isHighRated ? ( */}
            {/* <Granted /> */}
        {/* ) : ( */}
            {/* <Granted /> */}
        {/* )} */}
            <div id="titleBox" classname="flex flex-row bg-[white] w-3/5 m-10 rounded-md shadow-lg shadow-[#EBAF4C] p-4">
                <h1 className="text-red text-3xl font-bold text-center">Congrats! You have been granted VIP status!</h1>
                <h1 className="text-red text-3xl font-bold text-center">Please check out your deals below</h1>
            </div>
            <div>
                <h2>
                    <Link className="text-green text-2xl text-center">Access to luxury rental cars at participating car rental agencies
                        <div className="flex items-center justify-center">
                            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dsc02822-jpg-1597025795.jpg?crop=1.00xw:0.893xh;0,0&resize=980:*" className="object-contain h-48 w-96"></img>
                            <img src="https://resources.formula-e.pulselive.com/photo-resources/2022/11/08/786b3407-70b3-4f18-9a17-1bf6216b0e27/8nlujT1G.jpg?width=1440&height=810" className="object-contain h-48 w-96"></img>
                            <img src="https://images.dealer.com/ddc/vehicles/2022/Rolls-Royce/Phantom/Sedan/color/Adriatic%20Blue-EXAB-11,69,76-640-en_US.jpg" className="object-contain h-48 w-96"></img>
                        </div>
                    </Link>
                    <Link className="text-green text-2xl text-center">Have access to airport lounges and first class flight options
                        <div className="flex items-center justify-center">
                            <img src="https://cdn.fodors.com/ee/files/slideshows/9-Worlds-Luxurious-Airport-Lounges-Star-Alliance-Lounge.jpg" className="object-contain h-48 w-96"></img>
                            <img src="https://robbreport.com/wp-content/uploads/2018/04/winch.jpg?w=1000" className="object-contain h-48 w-96"></img>
                            <img src="https://www.jamesedition.com/stories/wp-content/uploads/2022/07/main-fin-6.jpg" className="object-contain h-48 w-96"></img>
                        </div>
                    </Link>
                    <Link className="text-green text-2xl text-center">Access penthouses and resorts when you travel
                        <div className="flex items-center justify-center">
                            <img src="https://www.kayak.com/rimg/himg/10/ba/c7/expediav2-3526615-f2c892-479871.jpg?width=1366&height=768&crop=true" className="object-contain h-48 w-96"></img>
                            <img src="https://www.thepinnaclelist.com/wp-content/uploads/2014/03/05-Neo-Bankside-Luxury-Penthouse-London-England-UK.jpg" className="object-contain h-48 w-96"></img>
                            <img src="https://images.squarespace-cdn.com/content/v1/602471d519153a7afd1fa871/1618783608356-GHZNDJ8SJGWX4EPUW5KE/5da83811805cc191545a87f4_aqua-home.jpg" className="object-contain h-48 w-96"></img>
                        </div>                    
                    </Link>
                    <Link className="text-green text-2xl text-center">Private viewings at world famous museums
                        <div className="flex items-center justify-center">
                            <img src="https://swirled.com/wp-content/uploads/2017/05/most-beautiful-museums-1.jpg" className="object-contain h-48 w-96"></img>
                            <img src="https://art-sheep.com/wp-content/uploads/2015/02/dippythedinosaur2.jpg" className="object-contain h-48 w-96"></img>
                            <img src="https://www.themorgan.org/sites/default/files/styles/large__650_x_650_/public/slider-image/Pierpont-Morgans-Library-bs.jpg?itok=-mTVQX1D" className="object-contain h-48 w-96"></img>
                        </div>
                    </Link>
                </h2>
            </div>
        </div>

    );
};

export default VIP;