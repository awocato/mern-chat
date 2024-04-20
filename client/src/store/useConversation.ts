import { create } from "zustand";

export interface Conversation {
  _id: string;
  fullName: string;
  username: string;
  profilePic: string;
  gender?: string;
}

export interface conversations {
  _id: string;
  participants: string[];
  messages: string[];
  createdAt: string;
  updatedAt: string;
  conversation: Conversation;
}

interface ConversationState {
  selectedConversation: conversations | null;
  setSelectedConversation: (selectedConversation: conversations) => void;
  messages: string[];
  setMessages: (messages: string[]) => void;
  filteredConversations: conversations[];
  setFilteredConversations: (filteredConversations: conversations[]) => void;
}

const useConversation = create<ConversationState>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
  filteredConversations: [],
  setFilteredConversations: (filteredConversations) =>
    set({ filteredConversations }),
}));

export default useConversation;
