import { Link } from "react-router-dom"

function NavbarItem(
    {icon, text, active, to} : {
    icon: React.JSX.Element,
    text:string,
    active?:boolean,
    to:string
}
) {

  return (
    <li className={`flex items-center py-2 px-3 my-1 font-medium rounded-md ${active ? "bg-gray-700 text-white" : "hover:bg-gray-200 text-gray-600"}`}>
        {icon}
        <Link to={to}>
        {text}
        </Link>
    </li>
  )
}

export default NavbarItem