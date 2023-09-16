import Icon from "components/Icon";
import Button from "components/Button";
import Sidebar from "./components/sidebar";
import Inbox from "./Inbox";
import { Outlet } from "react-router-dom";

const InboxLayout = () => {
  return (
    <div className="border border-gray-300 rounded bg-white h-[calc(100vh-97px)] flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default InboxLayout;
