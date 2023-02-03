/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import PasswordChecklist from "react-password-checklist"

const ChangePassword = () => {
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    }

    return(
    <>
        <div className="w-full shadow-md m-8 flex flex-col p-4 rounded">
        <h1 className="font-bold text-3xl text-stone-500">Change Your Password</h1>
        <input className=" border-b-2 border-honey w-2/5 mt-8 m-2 p-2" type={passwordShown ? "text" : "password"} placeholder="enter new password..." onChange={e => setPassword(e.target.value)}></input>
        <div className="flex flex-row">
        <input className=" border-b-2 border-honey w-2/5 mt-8 m-2 p-2 mb-4" type={passwordShown ? "text" : "password"} placeholder="confirm new password..." onChange={e => setPasswordAgain(e.target.value)}></input>
        <img src="https://cdn-icons-png.flaticon.com/512/6405/6405909.png" onClick={togglePassword} className="h-12 w-12 rounded hover:bg-stone-300 cursor-pointer"></img>
        </div>
        <PasswordChecklist
            rules={["minLength","specialChar","number","capital","match"]}
            minLength={8}
            value={password}
            valueAgain={passwordAgain}
            onChange={(isValid) => {}}
            iconSize={15}
            validColor={"#EBAF4C"}
            invalidColor={"#78716c"}
            messages={{
            minLength: "Password is longer than 8 characters (12+ recommended)",
            specialChar: "Password contains at least one (1) special character",
            number: "Password contains at least one (1) number",
            capital: "Password contains at least one (1) uppercase letter",
            match: "Passwords match",
            }}
        />
        <button className="bg-honey text-white text-center rounded w-1/5 pt-2 py-2 m-2 ml-4  mt-4 font-bold hover:bg-white hover:text-honey hover:border-2 hover:border-honey">Save New Password</button>
        </div>
    </>
    );
};

export default ChangePassword;