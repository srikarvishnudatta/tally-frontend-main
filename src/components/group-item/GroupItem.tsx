import type { Group } from "@/types"
import { User } from "lucide-react"
import { Link } from "react-router-dom"

type GroupItemProps = {
    group: Group
}

function GroupItem({group}: GroupItemProps) {
  return (
      <li className="flex justify-between items-center p-4 shadow-sm bg-slate-100 rounded-md">
        <Link to={`/app/groups/${group.id}`}>
        <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-gray-700 capitalize">{group.groupName} </h1>
        <p className="text-sm text-gray-700">{group.groupDescription}</p>
        <p className="text-xs md:text-sm text-gray-700 flex flex-col gap-1 md:gap-2 md:flex-row md:items-center">
          <span className="flex items-center"><User size={16}/> Created by: {group.owner.firstName} | </span> Jul 18, 2025: 8:25 am</p>
      </div>
      </Link>
    </li>
  )
}

export default GroupItem