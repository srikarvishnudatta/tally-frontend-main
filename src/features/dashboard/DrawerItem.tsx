import { Link } from "react-router-dom";

type DrawerItemProps = {
icon: React.JSX.Element;
  text: string;
  active?: boolean;
  to: string;
}

function DrawerItem({
  icon,
  text,
  active,
  to,
}: DrawerItemProps) {
  return (
    <li>
      <Link
        to={to}
        className={`
    flex items-center gap-2 p-2 my-1 font-medium rounded-md cursor-pointer transition-colors
    ${
      active ? "bg-blue-500 text-white" : "hover:bg-blue-100"
    }
    `}
      >
        {icon}
        <p className="text-sm capitalize">{text}</p>
      </Link>
    </li>
  )
}

export default DrawerItem