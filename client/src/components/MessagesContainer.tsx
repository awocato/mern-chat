/* eslint-disable @typescript-eslint/ban-ts-comment */

import useConversation from "@/store/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

import { useAuthContext } from "@/context/AuthContext";
import { ScrollArea } from "./ui/scroll-area";
import { useEffect } from "react";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  // @ts-ignore
  const profilePic = selectedConversation?.profilePic;

  useEffect(() => {
    // @ts-ignore
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className=" flex w-full flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <div className="flex flex-col justify-between">
          <div className=" py-2 px-5 border dark:bg-secondary bg-primary/35 rounded-lg flex items-center gap-5 mb-2">
            <img className="w-10" src={profilePic} alt="" />
            <span className="text-primary-foreground font-bold">
              {/* @ts-ignore */}
              {selectedConversation.fullName}
            </span>
          </div>
          <ScrollArea className="md:h-[50vh] h-[65vh]">
            <Messages />
          </ScrollArea>
          <MessageInput />
        </div>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-secondary-foreground font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser?.fullName} </p>
        <p>Select a chat to start messaging</p>
      </div>
    </div>
  );
};
