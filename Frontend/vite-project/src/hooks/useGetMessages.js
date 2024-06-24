import React, { useEffect, useState } from "react";
import useConversation from "../zustamd/useConversations";
import toast from "react-hot-toast";

function useGetMessages() {
  const [Loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  useEffect(() => {
    const getMessage = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`);
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessage(); //prevent the app to crash
  }, [selectedConversation?._id, setMessages]);

  return { messages, Loading };
}

export default useGetMessages;
