import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex flex-col item-center justify-center min-w-96 mx-auto   ">
      <div className="  w-full bg-blue-900 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-15   ">
        <h1 className="text-3xl font-bold text-center text-gray-100  py-10">
          Login
          <span className="tet-2xl text-blue-500"> ChatApp</span>
        </h1>
        <form>
          <div className="flex flex-col items-center  ">
            <div>
              <label className="label p-2">
                <span className="text-base label-text  text-gray-100 font-semibold">
                  Username
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="input input-bordered w-full max-w-xs  "
              />
            </div>
            <div className="py-6">
              <label className="label ">
                <span className="text-base label-text text-gray-200 font-semibold">
                  Password
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter your password"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <Link to="/signup" className="hover:text-gray-800 ml-6">
            Don't have an account
          </Link>
          <div className="mt-5 mb-7">
            <button className="btn btn-block btn-md btn-ghost text-gray-200    ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
