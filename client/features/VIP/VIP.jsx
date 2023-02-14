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
        {isHighRated ? (
            <Locked />
        ) : (
            <Locked />
        )}
        </div>
    );
};

export default VIP;