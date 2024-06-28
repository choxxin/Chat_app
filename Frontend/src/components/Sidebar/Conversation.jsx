import React from "react";
import Contact from "./Contact";
import useGetConversation from "../../hooks/useGetConversation";
import Groupchat from "./Groupchat";
function Conversation() {
  const { Loading, conversations } = useGetConversation();
  // console.log(conversation);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      <Groupchat />
      {conversations.map((conversation, idx) => (
        <Contact
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversations.length - 1}
        />
      ))}

      {Loading ? (
        <span className="loading loading-dots loading-lg"></span>
      ) : null}
    </div>
  );
}

export default Conversation;
