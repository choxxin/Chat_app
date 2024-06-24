import React from "react";
import SearchInput from "./SearchInput";
import Conversation from "./Conversation";
import Logoutbtn from "./Logoutbtn";
function Sidebar() {
  return (
    // <div className="border-r border-slate-500 p-4 flex flex-col  w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
    //   <SearchInput />

    //   <div className="divider px-3 "></div>
    //   <Conversation />
    //   <Logoutbtn />
    // </div>
    <div
      className="border-r border-slate-500 p-4 flex flex-col w-full "
      id="sidevar"
      style={{ maxWidth: "100%" }}
    >
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversation />
      <Logoutbtn />
    </div>
  );
}

export default Sidebar;
