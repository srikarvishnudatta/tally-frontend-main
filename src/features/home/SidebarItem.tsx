import { Link } from "react-router-dom";

function SidebarItem({
  icon,
  text,
  active,
  to,
}: {
  icon: React.JSX.Element;
  text: string;
  active?: boolean;
  to: string;
}) {
  return (
    <li>
      <Link
        to={to}
        className={`
    flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors
    ${
      active ? "bg-secondary/40 text-white" : "hover:bg-gray-200 text-secondary"
    }
    `}
      >
        {icon}
        <p className="text-lg capitalize">{text}</p>
      </Link>
    </li>
  );
}

export default SidebarItem;
