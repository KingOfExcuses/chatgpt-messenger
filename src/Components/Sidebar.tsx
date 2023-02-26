/* eslint-disable @next/next/no-img-element */
"use client";

import { signOut, useSession } from "next-auth/react";
import NewChat from "./NewChat";

function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className="flex h-screen max-w-xs flex-col overflow-y-auto bg-gray p-2 md:min-w-[260px]">
      <div className="flex-1">
        <NewChat />
        {/* OpenChats */}
        <div>{/* Model Selection */}</div>

        {/* Map through chat rows */}
      </div>

      {/* Profile picture and sign out */}
      {session && (
        <img
          onClick={() => void signOut()}
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          src={session.user.image!}
          alt="User Picture"
          className="mx-auto h-12 w-12 cursor-pointer rounded-full"
        />
      )}
    </div>
  );
}

export default Sidebar;
