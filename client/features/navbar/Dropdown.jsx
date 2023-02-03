/* eslint-disable no-unused-vars */
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { logout } from "../../app/store";
import { useDispatch } from 'react-redux';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

function DropdownMenu() {
    const dispatch = useDispatch();
    const logoutAndRedirectHome = () => {
        dispatch(logout());

        const theme = {
          menu: {
            styles: {
              base: {
                menu: {
                  bg: "bg-white",
                  p: "p-3",
                },
                item: {
                  initial: {
                    display: "block",
                    width: "w-full",
                  },
                  disabled: {
                    opacity: "opacity-50",
                    cursor: "cursor-not-allowed",
                  },
                },
              },
            },
          },
        };
      };
  return (
    
    <Menu className="text-salmon">
      <MenuHandler>
        <Button variant="gradient" id="dropdown-basic" className="p-2 text-salmon hover:text-rose-200 shadow-none text-md font-normal normal-case">Profile</Button>
      </MenuHandler>

      <MenuList className="flex flex-col border-2 border-salmon bg-white">
        <Link to="/profile"><MenuItem href="/profile" className="text-salmon hover:text-white hover:bg-honey p-2">Your Profile</MenuItem></Link>
        <hr></hr>
        <Link to="/boost"><MenuItem className="text-salmon hover:text-white hover:bg-honey p-2">Boost Your Rating</MenuItem>
        <hr></hr></Link>
        <Link to="/contact"><MenuItem className="text-salmon hover:text-white hover:bg-honey p-2">Contact Us</MenuItem>
        <hr></hr></Link>
        <Link to="settings"><MenuItem className="text-salmon hover:text-white hover:bg-honey p-2">Settings</MenuItem>
        <hr></hr></Link>
        <Link to="/"><MenuItem onClick={logoutAndRedirectHome} className="text-salmon font-bold text-lg hover:text-white hover:bg-honey p-2">Logout</MenuItem></Link>
      </MenuList>
    </Menu>
  );
}

export default DropdownMenu;