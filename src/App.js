import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useRoutes, useNavigate } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import { Login, Register } from "./pages";
// import { Dashboard, PasBandara, Pengaduan, Survey, User } from "./Sections";
// import user from "../src/assets/user.png";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import routes from "./routes";

function App() {
  const [menus, setMenus] = useState("Dashboard");
  const navigate = useNavigate()
  const pull_data = (data) => {
    setMenus(data);
  };
  const logout = () => {
    localStorage.clear();
    navigate('/login', { replace: true })
  };
  const routing = useRoutes(routes(localStorage.getItem('token'), menus, pull_data, logout));

  let currPath = window.location.pathname;

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
        {routing}
        <ToastContainer />
    </React.Fragment>
  );
}

export default App;
