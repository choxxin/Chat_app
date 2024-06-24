import React from "react";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
// import Sidebar from "../components/Sidebar/Sidebar";
import MessageContainer from "../components/Sidebar/message/MessageCointainer";
import Hamburger from "../components/Sidebar/Hamburger";
import Sidebar from "../components/Sidebar/Sidebar";
function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex sm:h-[450px] md:h-[700px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0  ">
      <Sidebar />
      <MessageContainer />
    </div>
  );
}

export default Home;
