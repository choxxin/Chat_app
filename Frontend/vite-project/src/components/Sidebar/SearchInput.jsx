import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../zustamd/useConversations";
// import useGetMessages from "../../hooks/useGetMessages";

import useGetConversation from "../../hooks/useGetConversation";
import toast from "react-hot-toast";
function SearchInput() {
  const [search, setsearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search must be atleast 3 character long");
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setsearch("");
    } else {
      toast.error("No such user found!");
    }
  };
  return (
    <form className="flex items-center gap-2">
      <input
        id="input"
        type="text"
        placeholder="Search.."
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-circle bg-black hover:bg-gray-700 "
        onClick={handleSubmit}
        id="button"
      >
        <FaSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
}

export default SearchInput;
