import React from "react";
import Gender from "./Gender";
import { Link } from "react-router-dom";
import { set } from "mongoose";
import { Input } from "postcss";

const SignUp = () => {
  const [Inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(Inputs);
  };
};
function Signup() {
  return (
    <div className="flex flex-col item-center justify-center min-w-96 mx-auto   ">
      <div className="  w-full bg-blue-900 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-15   ">
        <h1 className="text-3xl font-bold text-center text-gray-100  py-10">
          SignUp
          <span className="tet-2xl text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center px-2">
            <div className="avatar flex items-center    ">
              <div className="w-28 rounded-xl">
                {/* <label>Avatar</label> */}
                <img src="https://i.waifu.pics/-eOx7uI.jpg" />
              </div>

              <button className="btn btn-ghost ml-7 text-white">Change</button>
            </div>

            <div>
              <label className="label p-2">
                <span className="text-base label-text  text-gray-100 font-semibold">
                  Full Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter your Full Name"
                className="input input-bordered w-full max-w-xs  "
                value={inputs.fullName}
                onChange={(e) =>
                  setInputs({ ...Input, fullName: e.target.value })
                }
              />
            </div>
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
                value={inputs.username}
                onChange={(e) =>
                  setInputs({ ...Input, username: e.target.value })
                }
              />
            </div>
            <div>
              <label className="label p-2">
                <span className="text-base label-text  text-gray-100 font-semibold">
                  Password
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Password"
                className="input input-bordered w-full max-w-xs  "
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...Input, password: e.target.value })
                }
              />
            </div>

            <div className="py-4">
              <label className="label ">
                <span className="text-base label-text text-gray-200 font-semibold">
                  Confirm Password
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Confirm password"
                className="input input-bordered w-full max-w-xs"
                value={inputs.confirmp}
                onChange={(e) =>
                  setInputs({ ...Input, confirmp: e.target.value })
                }
              />
            </div>
          </div>
          <div className="ml-6 text-sm ">
            <Gender />
          </div>
          <Link
            to="/login"
            className="text-sm hover:text-black mt-2 inline-block ml-6"
          >
            Already have an account
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
export default Signup;
