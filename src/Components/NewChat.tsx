"use client";

import { PlusIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

function NewChat() {
  const router = useRouter;

  const createNewChat = async () => {};

  return (
    <div className="chat-row border">
      <PlusIcon onClick={createNewChat} className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
}

export default NewChat;
