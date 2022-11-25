import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { login } from "../store/actions/pasbandaraAction";

const Login = () => {

const navigate = useNavigate()
const dispatch = useDispatch()
const handleClick = (e) => {
  e.preventDefault()
  const payload = {
    email: e.target[0].value,
    password: e.target[1].value
  }
    dispatch(login(payload))
    navigate("/dashboard")
}

  return (
    <section className="bg-[#182A68]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <img src={logo} alt="logo" className="mb-2 w-12 h-12"/>
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-50 md:text-xl mb-4">
          BADAN LAYANAN UMUM
          <br /> UPBU SULTAN BANTILAN
        </h1>
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Masuk ke Akun Anda
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={e => handleClick(e)}>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label for="remember" className="text-gray-500">
                      Ingat saya
                    </label>
                  </div>
                </div>
                <Link
                  to="/"
                  className="text-sm font-medium text-primary-600 hover:underline"
                >
                  Lupa password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Masuk
              </button>
            </form>
              <p className="text-sm font-light text-gray-500">
                Belum punya Akun?{" "}
                <Link
                  to="/register"
                  className="font-medium text-primary-600 hover:underline"
                >
                  Daftar
                </Link>
              </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
