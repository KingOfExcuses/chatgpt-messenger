import NewChat from "./NewChat";

function Sidebar() {
  return (
    <div className="flex h-screen max-w-xs flex-col overflow-y-auto bg-gray p-2 md:min-w-[260px]">
      <div className="flex-1">
        <NewChat />
        {/* OpenChats */}
        <div>{/* Model Selection */}</div>
      </div>
    </div>
  );
}

export default Sidebar;
