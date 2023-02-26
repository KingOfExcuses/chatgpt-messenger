"use client";

import { PlusIcon } from "@heroicons/react/24/solid";
// import { useSession } from "next-auth/react";
import { api } from "../utils/api";

function NewChat() {
  // const router = useRouter;
  // const { data: session } = useSession();
  const createChat = api.chats.createChat.useMutation();

  async function createNewChat() {
    await createChat.mutateAsync({
      id: "123",
      content: "This is content",
    });
    // router.push(`/chat/${[chat.id]}`)
  }

  return (
    <div onClick={() => void createNewChat} className="chat-row border">
      <PlusIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
}

export default NewChat;
