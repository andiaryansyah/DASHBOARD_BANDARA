import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
// import { GrNotification } from "react-icons/gr";
import user from "../assets/user.png";
import { Dashboard, PasBandara, Pengaduan, Survey, User } from "../Sections";
import { MenuContext } from "../components/contexts/MenuContext";

const Landingpage = () => {
  const [menus, setMenus] = useState("Dashboard");
  const [opened, setOpened] = useState(true);
  const pull_data = (data) => {
    setMenus(data);
  };

  const getOpen = (data) => {
    setOpened(data);
  };
  
     const displayMenu = (menu) => {
        switch (menu) {
        case 'Dashboard':
            return <Dashboard />;
        case 'Pengaduan':
            return <Pengaduan />;
        case 'Survey':
            return <Survey />;
        case 'PAS Bandara':
            return <PasBandara sidebarOpen={opened}/>;
        case'User':
            return <User />;
        
        default:
        }
     }

  return (
    <div className="w-full min-h-screen flex flex-row bg-gray-200">
      <Sidebar handleClick={pull_data} activeMenu={menus} activeSide={getOpen}/>
      <div className="w-full flex-col ">
        <section className="w-full px-9 bg-gray-50">
          <div className="py-5 flex justify-end items-center space-x-9">
            {/* <GrNotification size={30} /> */}
            <img
              src={user}
              alt="user"
              className="h-9 w-9 object-cover rounded-full"
            />
          </div>
        </section>

        <section className="w-full p-10 ">
            <MenuContext.Provider value={{}}>
            {displayMenu(menus)}
            </MenuContext.Provider>
        </section>
      </div>
    </div>
  );
};

export default Landingpage;
