import React, { useState } from "react";
import {
  RiDashboard3Line,
  RiArrowLeftSLine,
  RiSurveyLine,
} from "react-icons/ri";
import { BsCardChecklist } from "react-icons/bs";
import { CiBullhorn } from "react-icons/ci";
import { HiOutlineUserCircle } from "react-icons/hi";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Sidebar = ({handleClick, activeMenu}) => {
  const [open, setOpen] = useState(true);

  const menus = [
    { title: "Dashboard", icon: <RiDashboard3Line size={24} />, url:"/dashboard"},
    { title: "Survey", icon: <RiSurveyLine size={24} />, url:"/survey" },
    { title: "Pengaduan", icon: <CiBullhorn size={24} />, url:"/pengaduan" },
    { title: "PAS Bandara", icon: <BsCardChecklist size={24} />, url:"/pasbandara" },
    { title: "User", icon: <HiOutlineUserCircle size={24} />, url:"/users" },
  ];

  return (
    <div
      className={`${
        open ? "w-72" : "w-20"
      } duration-300 h-screen p-5 pt-8 bg-[#182A68] relative`}
    >
      <RiArrowLeftSLine
        size={20}
        className={`absolute cursor-pointer rounded-full bg-white -right-3 top-9  border-2 border-[#182A68] h-7 w-7 ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <img
          src={logo}
          alt="logo"
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
        />
        <h1
          className={`text-white  tracking-wider origin-left font-medium text-xl duration-300 ${
            !open && "scale-0"
          }`}
        >
          SULTAN BANTILAN
        </h1>
      </div>
      <ul className="pt-16">
        {menus.map((menu, index) => (
          <Link key={index} to={menu.url}>
          <button  onClick={(e) => handleClick(menu.title)} className="w-full">
          <li
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer px-2 py-3 hover:bg-light-white ${
              menu.title === activeMenu ? "bg-light-white " :""
            }`}
            >
            <div>{menu.icon}</div>
            <div className={`${!open && "hidden"} origin-left duration-200 text-base`}>
              {menu.title}
            </div>
          </li>
         </button>
         </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
