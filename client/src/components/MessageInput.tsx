import { useState } from "react";
import useSendMessage from "@/hooks/useSendMessage";
import { AutosizeTextarea } from "./ui/autosize-textarea";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

function MessageInput() {
  const [message, setMessage] = useState("");
  const { sendMessage } = useSendMessage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      onKeyDown={(e: React.KeyboardEvent<HTMLFormElement>) => {
        if (e.key === "Enter") {
          handleSubmit(e);
        }
      }}
      className="flex w-full h-min gap-3 pb-2 md:p-5"
    >
      <AutosizeTextarea
        value={message}
        className="resize-none bg-primary-foreground dark:bg-primary-foreground/15"
        placeholder="type your message..."
        maxHeight={200}
        maxLength={300}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button type="submit" className="self-center">
        <Send />
      </Button>
    </form>
  );
}

export default MessageInput;
