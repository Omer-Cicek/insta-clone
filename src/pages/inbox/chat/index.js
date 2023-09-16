import Reply from "../components/reply";
import Header from "./components/header";
import React from "react";

const Chat = () => {
  const user = {
    name: "Tayfun Erbilen",
    avatar:
      "https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg",
  };

  const messsages = [
    {
      fromMe: true,
      message: "Testtt",   
    },
  ];
  return (
    <div className="flex-1">
      <Header user={user} />
      <main className="h-[calc(100%-144px)]"></main>
      <Reply />
    </div>
  );
};

export default Chat;
