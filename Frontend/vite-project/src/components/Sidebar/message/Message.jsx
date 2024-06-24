import React from "react";
import useConversation from "../../../zustamd/useConversations";
import { useAuthContext } from "../../../context/Authcontext";
import { extractTime } from "../../../utils/extractTime";
import LongMessage from "../../../utils/largerstring";
function Message({ message }) {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const mytime = extractTime(message.createdAt);

  const fromme = message.senderId === authUser._id;
  const sender = fromme ? "You   " : selectedConversation.fullName;
  const chatclassname = fromme ? "chat-end" : "chart-start";
  const avatar = fromme ? authUser.avatar : selectedConversation.avatar;
  const bubblecolor = fromme ? "bg-sky-500" : "bg-gray-700";
  const textcolor = fromme ? "text-gray-800" : "text-gray-200";
  const shakeclass = message.shouldShake ? "shake" : "";
  console.log(avatar);

  return (
    <div className={` chat ${chatclassname}  `}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={`${avatar}`} />
        </div>
      </div>
      <div className="chat-header   text-white  mt-4">{sender} </div>
      <div className={`chat-bubble ${bubblecolor}  ${textcolor} ${shakeclass}`}>
        {" "}
        <LongMessage message={message.message} charsPerSegment={20} />
      </div>
      <div className="chat-footer opacity-50  text-gray-900">{mytime}</div>
    </div>
  );
}

export default Message;
