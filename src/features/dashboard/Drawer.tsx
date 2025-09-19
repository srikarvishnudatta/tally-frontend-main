import { HomeIcon, Receipt, Settings, Users, X } from "lucide-react";
import DrawerItem from "./DrawerItem";

type DrawerProps = {
  open: boolean; 
  setOpen: () => void;
}

function Drawer({ open, setOpen }: DrawerProps) {
  return (
    <dialog
      open={open}
      className={`border-r 
      w-full
      z-50
    md:w-84
    border-r-gray-200 
    absolute top-0  h-full p-4 shadow-sm
    ${open ? "animate-slide-in" : "animate-slide-out"}`}
      onClose={setOpen}
    >
      <div className="flex justify-between">
        <h3 className="font-semibold text-gray-500">Navigation</h3>
        <button onClick={setOpen}>
          <X />
        </button>
      </div>
      <ul className="flex flex-col gap-2 my-5">
         <DrawerItem icon={<HomeIcon size={20}/>} text="home" to="/app" active />
          <DrawerItem icon={<Users size={20}/>} text="Groups" to="/app/groups" />
          <DrawerItem icon={<Receipt size={20}/>} text="Expenses" to="/app/expenses" />
          <DrawerItem icon={<Settings size={20}/>} text="Settings" to="/app/settings"/>
      </ul>
    </dialog>
  );
}

export default Drawer;
