/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useConversation from "@/store/useConversation";

const useListenMessages = () => {
  // @ts-ignore
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    // @ts-ignore
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};
export default useListenMessages;
