import Avatar from "@/components/avatar"
import LogoHeader from "@/components/logo-header"
import { Menu } from "lucide-react"
import { useState } from "react"
import Drawer from "./Drawer";


function Navbar() {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = () => setDrawer(prev => !prev);
  return (
   <>
    <header className="py-4 ">
      <nav className="flex justify-between items-center">
       <div className="flex gap-2">
        <button className="border border-gray-200  rounded-md p-1 hover:bg-blue-50" 
        onClick={toggleDrawer}
        ><Menu /></button>
         <LogoHeader />
       </div>
        <Avatar />
      </nav>
   </header>
   <Drawer open={drawer} setOpen={toggleDrawer}/>
   </>
  )
}

export default Navbar