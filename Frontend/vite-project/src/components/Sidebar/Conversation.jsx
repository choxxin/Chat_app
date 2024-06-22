import React from "react";
import Contact from "./Contact";
function Conversation() {
  return (
    <div className="py-2 flex flex-col overflow-auto">
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
    </div>
  );
}

export default Conversation;
