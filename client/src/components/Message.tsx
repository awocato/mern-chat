import { useAuthContext } from "@/context/AuthContext";
import { extractTime } from "@/lib/utils";

export interface MessageProps {
  _id: string;
  senderId: string;
  reciverId: string;
  createdAt: Date;
  message: string;
}

function Message({ message }: { message: MessageProps }) {
  const { authUser } = useAuthContext();

  const fromMe = message.senderId === authUser?._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "self-end" : "self-start";

  const bubbleBgColor = fromMe ? "bg-primary self-end" : "dark:bg-secondary bg-primary/35 self-start";

  return (
    <div className="flex flex-col space-y-2">
      <div className={`flex ${chatClassName} flex-col animate-fade-in`}>
        <p
          className={`chat-bubble ${bubbleBgColor}  text-white rounded-xl p-2 `}
        >
          {message.message}
        </p>
        <p className={`${chatClassName} pb-1 text-sm text-gray-500 `}>{formattedTime}</p>
      </div>
    </div>
  );
}

export default Message;
