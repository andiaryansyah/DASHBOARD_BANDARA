import { Navigate,Outlet } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import { Login } from "./pages";
// import { Register } from "./pages";
import { CgLogOut } from 'react-icons/cg'
import { Dashboard, PasBandara, Pengaduan, Survey, User } from "./Sections";
import user from "../src/assets/user.png";

const routes = (isLoggedIn, menus, pull_data, logout, open, setOpen, avatar, ref) => [
  {
    path: '/',
    element: isLoggedIn ? (
    <div className="w-full min-h-screen flex flex-row bg-gray-200">
        <Sidebar handleClick={pull_data} activeMenu={menus} />
        <div className="w-full flex-col ">
            <div className="w-full px-9 bg-gray-50">
                <div className="relative py-5 flex justify-end items-center space-x-3" >
                  <button onClick={() => setOpen(!open)} ref={ref} className="block">
                    <img
                    src={avatar ? avatar : user}  
                    alt="user"
                    className="h-9 w-9 object-cover rounded-full overflow-hidden"
                    />
                  </button>
                </div>
                {
                  open ? 
                <div className="absolute border border-gray-300 right-4 w-auto bg-white rounded-sm z-40 shadow-xl">
                  <span className="block px-6 py-3 text-gray-800 hover:bg-gray-200">halo, {localStorage.getItem("fullname")}</span>
                  {/* <a className="block border flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200"><CgProfile className='mr-3' size={20} /> Profil</a> */}
                  <span ref={ref} onClick={logout} className="cursor-pointer border flex items-center px-6 py-3 text-gray-800 hover:bg-gray-200"><CgLogOut className='mr-3' size={20} />Keluar</span>
                </div> : null
                }
            </div>
        <Outlet />
        </div>
    </div>
    ) : 
    <Navigate to="/login" />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/pasbandara', element: <PasBandara /> },
      { path: '/pengaduan', element: <Pengaduan /> },
      { path: '/survey', element: <Survey /> },
      { path: '/users', element: <User /> },
      { path: '/', element: <Navigate to="/dashboard" /> },
    ],
  },
  {
    path: '/',
    element: !isLoggedIn ? <Login /> : <Navigate to="/dashboard" />,
    children: [
      { path: 'login', element: <Login /> },
      { path: '/', element: <Navigate to="/login" /> },
    ],
  },
];

export default routes;