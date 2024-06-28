import React from "react";
import useConversation from "../../zustamd/useConversations";
function Groupchat() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === "meow";
  return (
    <div
      className={`flex gap-2 items-center hover:bg-NonBlue rounded p-2 py-1 cursor-pointer
        ${isSelected ? " bg-sky-400" : ""}
        `}
      onClick={() => setSelectedConversation({ _id: "meow" })}
    >
      <div className={`avatar `}>
        <div className="w-12 rounded-full">
          <img
            src="https://i.pinimg.com/1200x/f5/35/1b/f5351b460de396c8dfa2c9937f1f211c.jpg"
            alt="user avatar"
          />
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
          <p className="font-bold text-gray-800">GROUPCHAT</p>🟢
        </div>
      </div>
    </div>
  );
}

export default Groupchat;
