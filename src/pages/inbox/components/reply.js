import Icon from "components/Icon";
import React from "react";

const Reply = () => {
  return (
    <footer className="h-[84px] flex items-center justify-center px-6">
      <div className="h-[44px] border rounded-full flex items-center w-full pl-[11px] pr-[8px]">
        <button className="w-[40px] h-[42px] flex items-center justify-center">
          <Icon name="emoji" />
        </button>
        <input
          className="flex-1 h-[40px] text-sm outline-none"
          placeholder="Message..."
        />
        <button className="w-[40px] h-[42px] flex items-center justify-center">
          <Icon name="picture" />
        </button>
        <button className="w-[40px] h-[42px] flex items-center justify-center">
          <Icon name="heart" />
        </button>
      </div>
    </footer>
  );
};

export default Reply;
