import React from "react";
import Sidebar from "./Sidebar";
const Hamburger = ({ isOpen }) => {
  return (
    <div
      className={`transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out fixed md:relative md:translate-x-0 h-full w-90 bg-white text-white`}
    >
      <Sidebar />
      {/* Sidebar content goes here */}
    </div>
  );
};

export default Hamburger;
