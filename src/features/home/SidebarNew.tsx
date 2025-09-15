import { useState } from "react";
import SidebarItem from "./SidebarItem";
import { HomeIcon, Menu, Receipt, Users, X } from "lucide-react";
import { useLocation } from "react-router-dom";

function SidebarNew() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  let pathName = 'dashboard';
  if(location.pathname === "/app/personal"){
    pathName = "Personal expenses"
  }else if(location.pathname === "/app/groups"){
    pathName = "Your Groups"
  }
  return (
    <div className="drawer">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={open}
      />
      <div className="drawer-content flex items-center gap-2">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn drawer-button"
          onClick={() => setOpen(true)}
        >
          <Menu />
        </label>
        <h2 className="text-xl font-black ">{pathName}</h2>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={() => setOpen(false)}
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 space-y-3">
          {/* Sidebar content here */}
          <button
            className="flex justify-end"
            aria-label="close sidebar"
            onClick={() => setOpen(false)}
          >
            <X />
          </button>
          <SidebarItem icon={<HomeIcon />} text="home" to="/app" active />
          <SidebarItem icon={<Users />} text="Groups" to="/app/groups" />
          <SidebarItem icon={<Receipt />} text="Personal Expenses" to="/app/personal" />
        </ul>
      </div>
    </div>
  );
}

export default SidebarNew;
