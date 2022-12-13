import React, { useEffect, useRef, useState } from "react";
import { useRoutes, useNavigate, useLocation } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import { Login, Register } from "./pages";
// import { Dashboard, PasBandara, Pengaduan, Survey, User } from "./Sections";
// import user from "../src/assets/user.png";
import {RiHome4Line} from 'react-icons/ri';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import routes from "./routes";

function App() {
  const location = useLocation()
  const [menus, setMenus] = useState("Dashboard");
  const [open, setOpen] = useState(false);
  
  const navigate = useNavigate();
  const ref = useRef();
  const pull_data = (data) => {
    setMenus(data);
  };

  const capitalizeFirstLowercaseRest = str => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  
  useEffect(() => {
    if (location) {
      const temp = location.pathname.split("/")
      if (temp[1] === '') {
        setMenus('Dashboard')
      }else {
        const route = capitalizeFirstLowercaseRest(location.pathname.split("/")[1])
        if (route.toLowerCase() === 'pasbandara') {
          setMenus("PAS Bandara")
        } else {
          setMenus(route)
        }
      }
    }
  // eslint-disable-next-line
  },[location])

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [open])
  const avatar = localStorage.getItem("image")
  
  const logout = () => {
    localStorage.clear();
    setOpen(false);
    setMenus("Dashboard")
    navigate('/login', { replace: true })
  };
  const routing = useRoutes(routes(localStorage.getItem('token'), menus, pull_data, logout, open, setOpen, avatar, ref));
  return (
    <React.Fragment>
      {/* <div className="w-full min-h-screen flex flex-row bg-gray-200">
        {currPath !== "/login" && currPath !== "/register" && (
          <Sidebar handleClick={pull_data} activeMenu={menus} />
        )}

        <div className="w-full flex-col ">
          {currPath !== "/login" && currPath !== "/register" && (
            <section className="w-full px-9 bg-gray-50">
              <div className="py-5 flex justify-end items-center space-x-9">
                <img
                  src={user}
                  alt="user"
                  className="h-9 w-9 object-cover rounded-full"
                />
              </div>
            </section>
          )}
          <section className="w-full">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/pasbandara" element={<PasBandara />} />
              <Route path="/pengaduan" element={<Pengaduan />} />
              <Route path="/survey" element={<Survey />} />
              <Route path="/users" element={<User />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </section>
        </div>
      </div> */}
       <a href="https://www.sultanbantilanairport.com/admin">
              <div className="fixed right-4 bottom-4 z-10 flex items-center group">
                  <span className="tooltip-text hidden group-hover:block bg-gray-300 p-2 rounded-md text-sm font-medium">sultanbantilanairport.com/admin</span>
                  <span className="tooltip-text hidden group-hover:block border-gray-300 border-t-8 border-b-8 border-l-16 border-t-transparent border-b-transparent mr-2"></span>
                <button className="bg-[#182A68] hover:bg-blue-700 rounded-full ">
                    <RiHome4Line size={50} className="p-3 text-white cursor-pointer"/>
                </button>
              </div>
            </a>
        {routing}
        <ToastContainer />
    </React.Fragment>
  );
}

export default App;
