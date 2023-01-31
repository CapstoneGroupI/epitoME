/* eslint-disable no-unused-vars */
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { logout } from "../../app/store";
import { useDispatch } from 'react-redux';

function DropdownMenu() {
    const dispatch = useDispatch();
    const logoutAndRedirectHome = () => {
        dispatch(logout());
      };
  return (
    <Dropdown className="text-[#E68584]">
      <Dropdown.Toggle variant="success" id="dropdown-basic" className="text-[#E68584]">
        Profile
      </Dropdown.Toggle>

      <Dropdown.Menu className="flex flex-col border-2 border-[#E68584] bg-white">
        <Dropdown.Item href="/profile" className="text-[#E68584] hover:text-white hover:bg-[#EBAF4C] p-2">Your Profile</Dropdown.Item>
        <hr></hr>
        <Dropdown.Item href="/boost" className="text-[#E68584] hover:text-white hover:bg-[#EBAF4C] p-2">Boost Your Rating</Dropdown.Item>
        <hr></hr>
        <Dropdown.Item href="/contact" className="text-[#E68584] hover:text-white hover:bg-[#EBAF4C] p-2">Contact Us</Dropdown.Item>
        <hr></hr>
        <Dropdown.Item href="/settings" className="text-[#E68584] hover:text-white hover:bg-[#EBAF4C] p-2">Settings</Dropdown.Item>
        <hr></hr>
        <Dropdown.Item href="/" onClick={logoutAndRedirectHome} className="text-[#E68584] font-bold text-lg hover:text-white hover:bg-[#EBAF4C] p-2">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownMenu;