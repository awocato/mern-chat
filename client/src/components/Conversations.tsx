/* eslint-disable @typescript-eslint/ban-ts-comment */
import useGetConversations from "@/hooks/useGetConversations";
import { ScrollArea } from "./ui/scroll-area";
import UserCard from "./UserCard";
import UserCardSkeleton from "./UserCardSkeleton";
import useConversation from "@/store/useConversation";

function Conversations() {
  const { loading } = useGetConversations();
  const { filteredConversations } = useConversation();

  return (
    <ScrollArea className="p-3 shadow-lg h-[70vh] rounded-md border">
      <div className="flex flex-col gap-2">
        {filteredConversations.map((conversation) => (
          // @ts-ignore
          <UserCard key={conversation._id} conversation={conversation} />
        ))}

        {loading
          ? Array(5)
              .fill(null)
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              .map((_, i) => <UserCardSkeleton key={i} />)
          : null}
      </div>
    </ScrollArea>
  );
}

export default Conversations;
