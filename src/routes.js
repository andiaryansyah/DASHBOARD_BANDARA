import { Navigate,Outlet } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import { Login, Register } from "./pages";
import { Dashboard, PasBandara, Pengaduan, Survey, User } from "./Sections";
import user from "../src/assets/user.png";

const routes = (isLoggedIn, menus, pull_data, logout) => [
  {
    path: '/',
    element: isLoggedIn ? (
    <div className="w-full min-h-screen flex flex-row bg-gray-200">
        <Sidebar handleClick={pull_data} activeMenu={menus} />
        <div className="w-full flex-col ">
            <div className="w-full px-9 bg-gray-50">
                <div className="py-5 flex justify-end items-center space-x-9" onClick={logout}>
                    <img
                    src={user}
                    alt="user"
                    className="h-9 w-9 object-cover rounded-full"
                    />
                </div>
            </div>
        </div>
        <Outlet />
    </div>
    ) : <Navigate to="/login" />,
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