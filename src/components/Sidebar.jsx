import React, { useState } from "react";
import {
  RiDashboard3Line,
  RiArrowLeftSLine,
  // RiSurveyLine,
} from "react-icons/ri";
import { BsCardChecklist } from "react-icons/bs";
// import { CiBullhorn } from "react-icons/ci";
import { 
  HiOutlineUserCircle, 
  // HiOutlineHome,
} from "react-icons/hi";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Sidebar = ({handleClick, activeMenu}) => {
  const [open, setOpen] = useState(true);

  const menus = [
    { title: "Dashboard", icon: <RiDashboard3Line size={24} />, url:"/dashboard"},
    // { title: "Survey", icon: <RiSurveyLine size={24} />, url:"/survey" },
    // { title: "Pengaduan", icon: <CiBullhorn size={24} />, url:"/pengaduan" },
    { title: "PAS Bandara", icon: <BsCardChecklist size={24} />, url:"/pasbandara" },
    { title: "Users", icon: <HiOutlineUserCircle size={24} />, url:"/users" },
  ];

  return (
    <div
      className={`${
        open ? "w-72" : "w-0 md:w-20"
      } duration-300 h-screen md:h-auto md:p-5 pt-8 bg-[#182A68] absolute z-20 md:z-0 md:relative`}
    >
      <RiArrowLeftSLine
        size={20}
        className={`absolute cursor-pointer rounded-full bg-white -right-12 md:-right-3 top-7 md:top-9  border-2 border-[#182A68] h-7 w-7 ${
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
            <div className={`${!open && "hidden md:inline-block"}`}>{menu.icon}</div>
            <div className={`${!open && "hidden"} origin-left duration-200 text-base`}>
              {menu.title}
            </div>
          </li>
         </button>
         </Link>
        ))}
        {/* <li >
        <a href="https://sultanbantilanairport.com" className="absolute bottom-10 text-white flex gap-x-4 items-center px-2 ">
        <HiOutlineHome size={24} className={`${!open && "hidden md:inline-block"}`}/>
          <span className={`${!open && "hidden"} origin-left duration-200 text-base pt-1`}>Home</span> 
        </a>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
