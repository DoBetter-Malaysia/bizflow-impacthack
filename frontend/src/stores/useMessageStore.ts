import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { MessageModel } from "@/models/message";

interface MessageState {
  messages: MessageModel[];
  addMessage: (message: MessageModel) => void;
}

const useMessageStore = create<MessageState>()(
  devtools(
    persist(
      (set, get) => ({
        messages: [],
        addMessage: (message: MessageModel) =>
          set({
            messages: [...get().messages, message],
          }),
      }),
      {
        name: "message-storage",
      }
    )
  )
);

export default useMessageStore;
