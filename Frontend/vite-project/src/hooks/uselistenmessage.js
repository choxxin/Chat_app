import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustamd/useConversations";

import Incomesound from "../assets/Sound/button.mp3";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;

      const soundoutgoing = new Audio(Incomesound);

      soundoutgoing.play();

      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};
export default useListenMessages;
