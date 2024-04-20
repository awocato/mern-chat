/* eslint-disable @typescript-eslint/ban-ts-comment */

import useConversation from "@/store/useConversation";

export default function UserCard({
  conversation,
}: {
  conversation: {
    _id: string;
    profilePic: string;
    username: string;
    fullName: string;
  };
}) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <div
      className={`flex items-center rounded-md p-1  space-x-4 cursor-pointer ${
        isSelected ? "bg-primary/25" : ""
      }`}
      // @ts-ignore
      onClick={() => setSelectedConversation(conversation)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          // @ts-ignore
          setSelectedConversation(conversation);
        }
      }}
    >
      <img
        className="w-12 h-12 rounded-full"
        src={conversation.profilePic}
        alt={conversation.username}
      />
      <div className="text-sm">
        <p className="font-medium text-xs">{conversation.fullName}</p>
        <p className="text-gray-500 text-">@{conversation.username}</p>
        <p className="text-sm text-primary"> </p>
      </div>
    </div>
  );
}
