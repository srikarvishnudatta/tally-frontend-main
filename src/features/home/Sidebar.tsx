import Logo from "@/components/logo"
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react"
import type { ReactNode } from "react"
import { useState } from "react"
import SidebarContext from "../../context/SidebarContext"



function Sidebar({children}: {children:ReactNode}) {
const [expanded, setExpanded] = useState(true)
  return (
    <aside className="h-screen">
        <nav className={`h-full flex flex-col bg-white border-r shadow-sm ${expanded ? "" : "items-center"}`}>
            <div className="p-3 pb-2 flex justify-between items-center">
                <Logo className={`self-start mx-0 overflow-hidden h-10 w-10 transition-all ${expanded ? "block" : "hidden"}`}/>
                <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 " onClick={() => setExpanded((curr) => !curr)}>
                    {expanded ? <ChevronFirst /> : <ChevronLast />}
                </button>
            </div>
            <ul className="flex-1 px-3">
            <SidebarContext.Provider value={{expanded}}>
                {children}
            </SidebarContext.Provider>
            </ul>
            <div className="border-t flex p-3 items-center">
                <div className="bg-indigo-500 w-10 h-10 rounded-full">
                </div>
                <div className={`flex justify-baseline items-center ${expanded ? "w-52 ml-3" : "w-0"}`}>
                    <div className="leading-4 overflow-hidden transition-all">
                        <h4 className="font-semibold">John doe</h4> 
                    <span className="text-xs text-gray-600">johndoe@gmail.com </span>
                    </div>
                </div>
                {expanded ? <MoreVertical size={20} /> : undefined}
            </div>
        </nav>
    </aside>
  )
}

export default Sidebar