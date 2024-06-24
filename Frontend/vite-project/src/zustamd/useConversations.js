import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
// . Zustand is a small, fast state management library. Here's what each part does:

// create: Imported from Zustand to create the store.
// useConversation: The custom hook created to manage the conversation state.
// selectedConversation: Holds the currently selected conversation.
// setSelectedConversation: A function to update the selected conversation.
// messages: An array to store messages of the selected conversation.
// setMessages: A function to update the messages.
// This store can be used to manage and access conversation-related state across your React components.
