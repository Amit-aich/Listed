import React from "react";
import Search from "../Assests/search.png";
import Apple from "../Assests/apple.png";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./Config";
import { useEffect, useState } from "react";
import Signin from "./Signin";

import "../App.css";
function Login(props) {
  // const logout = () => {
  //   localStorage.clear();
  //   window.location.reload();
  // }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(`Sign in with email: ${email} and password: ${password}`);
  };

  const handleForgotPassword = () => {
    console.log(`Forgot password for email: ${email}`);
  };

  return (
    <div className="grid lg:grid-cols-3 h-[100vh]  sm:flex-box  md:flex-box  bg-slate-100">
      <div className="lg:h-full sm:h-11 align-middle text-center dix bg-black text-white ">
        <span className=" align-middle inline-block lg:pt-[50vh] md:align-middle sm:align-middle    lg:text-7xl font-bold  ">
          Board.
        </span>
      </div>

      <div className="dg-white text-center lg:col-span-2 flex justify-center overflow-hidden  ">
        <div className=" flex-row  justify-center   text-left sm:pt-[15vh] lg:pt-[30vh]  ">
          <div className=" headding">
            <span className="font-bold lg:text-3xl sm:text-xl sm:pt-[30px]    ">
              Sign In
            </span>
            <br></br>
            <span className="font-bold  text-xs  ">
              Sign in to your account
            </span>
          </div>

          <div className="badges mb-2 flex justify-center  ">
            <div
              type="button"
              class="inline-flex items-center mt-1.5  py-0.5 text-s h-8   text-center font-light text-black bg-white rounded-lg hover:bg-slate-200 hover:text-slate-50 focus:ring-1 focus:outline-none focus:ring-blue-100 "
            >
              <Signin setValue={(value) => props.setValue(value)} />
            </div>

            <button
              type="button"
              class="inline-flex items-center px-3 py-1.5 text-xs m-3 mt-2  ml-5 mb-5 font-light text-center text-black bg-white rounded-lg hover:bg-slate-200  hover:text-slate-50 focus:ring-1 focus:outline-none focus:ring-blue-100 "
            >
              <img src={Apple} alt="search" className="w-4 h-4 ml-2 mr-2" />
              Sign in with Apple
            </button>
          </div>

          <form onSubmit={handleSignIn} className="bg-white p-4 rounded-xl w-96">
            <label
              for="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 focus:ring-gray-100  block w-full shadow-sm sm:text-lg border-gray-300 p-2 bg-gray-100 rounded-md"
              placeholder="Enter your email address"
            />

            <label
              for="password"
              className="block text-lg my-2 mx-1 font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autocomplete="current-password"
              className="mt-2 mb-3 focus:ring-gray-100  block w-full shadow-sm sm:text-lg border-gray-300 p-2 bg-gray-100 rounded-md"
              placeholder="Enter your password"
            />

            <span className="text-sm m-1  text-blue-500 hover:text-blue-700 cursor-pointer">
              Forgot password?
            </span>

            <button
              type="submit"
              class=" inline-block w-full px-2 text-lg m-2 py-2 text-center align-middle text-slate-200 bg-black rounded-lg hover:bg-slate-800  hover:text-slate-50 focus:ring-1 focus:outline-none focus:ring-blue-300 "
            >
              Sign in
            </button>
          </form>

          <span className="flex text-center text-xs px-11 py-1">
            Don't have an account? &nbsp;{" "}
            <span className="text-blue-500 hover:text-blue-700 cursor-pointer">
              {" "}
              Register here
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
