import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";

const Register = () => {
const navigate = useNavigate()

const handleClick = () => {
    navigate("/login")
}
  return (
    <section className="bg-[#182A68]">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  <img src={logo} alt="logo" className="mb-2 w-12 h-12"/>
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-50 md:text-xl mb-4">
          BADAN LAYANAN UMUM
          <br /> UPBU SULTAN BANTILAN
        </h1>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-2 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Buat Akun
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleClick}>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                  </div>
                  <div>
                      <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">Konfimasi password</label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                  </div>
                  {/* <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required=""/>
                      </div>
                      <div className="ml-3 text-sm">
                        <label for="terms" className="font-light text-gray-500 ">I accept the <Link className="font-medium text-primary-600 hover:underline " to="/loginregister">Terms and Conditions</Link></label>
                      </div>
                  </div> */}
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Buat Akun</button>
                  <p className="text-sm font-light text-gray-500 ">
                      Sudah punya akun ? <Link to="/login" className="font-medium text-primary-600 hover:underline ">Masuk disini</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default Register