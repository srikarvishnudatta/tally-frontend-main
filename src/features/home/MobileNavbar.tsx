import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Bell, LayoutDashboard, Menu, Receipt, Settings, User, UserCircle, X } from "lucide-react"
import { useState } from "react"
import NavbarItem from "./NavbarItem"
import { useLocation } from "react-router-dom"


function MobileNavbar() {
  const [expanded, setExpanded] = useState(false)
  const location = useLocation()
    const pathName = location.pathname
  return (
    <header className="p-3 relative bg-white">
        <nav className="flex w-full justify-between">
            <Button variant={"ghost"} className="bg-slate-100" onClick={() => setExpanded(prev => !prev)}>
                {expanded ? <X /> : <Menu />}
            </Button>
            <div className="flex items-center gap-1">
                <Logo />
                <h2 className="font-bold text-2xl">Tally</h2>
            </div>
            <Button>
                Logout
            </Button>
        </nav>
        <ul className={
            `absolute bg-white w-[95%] overflow-hidden transition-all duration-300 ${expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`
        }>
            <NavbarItem 
          icon={<LayoutDashboard size={20}/>}
          text={"Dashboard"}
          active = {pathName === "/app"}
          to="/app"
          />
           <NavbarItem 
          icon={<UserCircle size={20}/>}
          text={"Groups"}
          active = {pathName === "/app/groups"}
          to="/app/groups"
          />
           <NavbarItem 
          icon={<Bell size={20}/>}
          text={"Invites"}
          active = {pathName === ("/app/invites")}
          to="/app/invites"
          />
           <NavbarItem 
          icon={<Receipt size={20}/>}
          text={"Personal"}
          active = {pathName === ("/app/personal")}
          to="/app/personal"
          />
          <hr className="my-3"/>
          <NavbarItem 
          icon={<User size={20}/>}
          text={"Profile"}
          to="/app/profile"
          />
           <NavbarItem 
          icon={<Settings size={20}/>}
          text={"Settings"}
          to="/app/settings"
          />
          
        </ul>
    </header>
  )
}

export default MobileNavbar