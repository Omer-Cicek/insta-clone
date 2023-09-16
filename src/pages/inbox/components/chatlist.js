import React from "react";

const ChatList = () => {
  const chats = [
    {
      id: 1,
      user: {
        avatar:
          "https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg",
        name: "Tayfun Erbilen",
      },
      lastMessage: "Selam tayfun!",
    },
    {
      id: 2,
      user: {
        avatar:
          "https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg",
        name: "Gökhan Kandemir",
      },
      unread: true,
      lastMessage: "yeni video attım, baktın mı?",
    },
    {
      id: 3,
      user: {
        avatar:
          "https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg",
        name: "Tayfun Erbilen",
      },
      lastMessage: "Selam tayfun!",
    },
  ];
  return (
    <div className="h-[calc(100%-60px)] overflow-auto">
      <header className="flex align-center justify-between">
        <h6 className="text-base font-semibold">Messages</h6>
        <button className="text-brand text-sm font-semibold">16 request</button>
      </header>
    </div>
  );
};

export default ChatList;
