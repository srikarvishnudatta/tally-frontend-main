import Sidebar from "./Sidebar"
import SidebarItem from "./SidebarItem"
import { Bell, LayoutDashboard, Receipt, Settings, UserCircle } from "lucide-react"
import { useLocation } from "react-router-dom"

function DesktopNavbar() {
    const location = useLocation()
    const pathName = location.pathname
  return (
    <Sidebar>
          <SidebarItem 
          icon={<LayoutDashboard size={20}/>}
          text={"Dashboard"}
          active = {pathName === "/app"}
          to="/app"
          />
           <SidebarItem 
          icon={<UserCircle size={20}/>}
          text={"Groups"}
          active = {pathName === "/app/groups"}
          to="/app/groups"
          />
           <SidebarItem 
          icon={<Bell size={20}/>}
          text={"Invites"}
          active = {pathName === ("/app/invites")}
          to="/app/invites"
          />
           <SidebarItem 
          icon={<Receipt size={20}/>}
          text={"Personal"}
          active = {pathName === ("/app/personal")}
          to="/app/personal"
          />
          <hr className="my-3"/>
           <SidebarItem 
          icon={<Settings size={20}/>}
          text={"Settings"}
          to="/app/settings"
          />
    </Sidebar>
  )
}

export default DesktopNavbar