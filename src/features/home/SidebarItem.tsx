import { Link } from "react-router-dom"
import useSidebar from "@/hooks/useSidebar"

function SidebarItem({icon, text, active, to} : {
    icon: React.JSX.Element,
    text:string,
    active?:boolean,
    to:string
}) {
    const {expanded} = useSidebar()  
  return (
    <li className={`
    relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors
    ${active ? "bg-gray-700 text-white" : "hover:bg-gray-200 text-gray-600"}
    `}>
        {icon}
        <Link to={to} className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0" }`}>
        {text}
        </Link>
    </li>
  )
}

export default SidebarItem