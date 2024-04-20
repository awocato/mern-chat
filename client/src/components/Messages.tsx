import useGetMessages from "@/hooks/useGetMessages";
import Message, { type MessageProps } from "./Message";
import useListenMessages from "@/hooks/useListenMessages";
import { useEffect, useRef } from "react";

function Messages() {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef<HTMLDivElement | null>(null);
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message, index) => (
          <div
            key={messages.indexOf(message)}
            ref={index === messages.length - 1 ? lastMessageRef : null}
          >
            <Message message={message as unknown as MessageProps} />
          </div>
        ))}

      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
}

export default Messages;
