import Icon from "components/Icon";
import React from "react";
import { useSelector } from "react-redux";
import ChatList from "./chatlist";

const Sidebar = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <aside className="w-[349px] flex-shrink-0 border-r border-gray-300  ">
      <header className="h-[60px] border-b border-gray-300 flex justify-between items-center px-4">
        <button className="mx-auto flex items-center gap-x-3 text-base font-semibold">
          {user.username}

          <Icon name="chevron-down" className="rotate-180" />
        </button>
        <Icon name="new-message" size={24} />
      </header>

      <ChatList />
    </aside>
  );
};

export default Sidebar;
