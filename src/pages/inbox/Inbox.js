import React from 'react';
import { Outlet } from 'react-router-dom';

const Inbox = () => {
  return (
    <div className="border border-gray-300 rounded bg-white h-[calc(100vh-97px)] flex">
      <Outlet />
    </div>
  );
};

export default Inbox;
