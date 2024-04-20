/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";
import { useState, useEffect } from "react";
import type { Conversation } from "@/store/useConversation";

import toast from "react-hot-toast";
import useGetConversations from "@/hooks/useGetConversations";
import useDebounce from "@/hooks/useDebounce";
import useConversation from "@/store/useConversation";

function Search() {
  const [search, setSearch] = useState("");
  const debouncedSearchTerm = useDebounce(search, 3000);
  const { conversations } = useGetConversations();
  const { setFilteredConversations } = useConversation();

  useEffect(() => {
    if (debouncedSearchTerm) {
      if (debouncedSearchTerm.length < 3) {
        toast.error("Search term must be at least 3 characters long");
        return;
      }

      const filtered = conversations.filter((c: Conversation) =>
        c.fullName.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );

      if (filtered.length > 0) {
        setFilteredConversations(filtered);
      } else {
        toast.error("No such user found!");
        setFilteredConversations([]);
      }
    } else {
      setFilteredConversations(conversations);
    }
  }, [debouncedSearchTerm, conversations, setFilteredConversations]);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (search.trim() !== "") {
      if (search.length < 3) {
        toast.error("Search term must be at least 3 characters long");
        return;
      }
  
      const filtered = conversations.filter((c: Conversation) =>
        c.fullName.toLowerCase().includes(search.toLowerCase())
      );
  
      if (filtered.length > 0) {
        setFilteredConversations(filtered);
      } else {
        toast.error("No such user found!");
        setFilteredConversations(conversations);
      }
    } else {
      toast.error("Search term cannot be empty");
      setFilteredConversations(conversations);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
      <Button type="submit">
        <SearchIcon />
      </Button>
    </form>
  );
}

export default Search;
