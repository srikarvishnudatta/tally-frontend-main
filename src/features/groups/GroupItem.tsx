import { convertDate } from "@/lib/date-converter"
import type { Group } from "@/types"
import { Link } from "react-router-dom"

type GroupItemProps = {
    group: Group
}

function GroupItem({group}: GroupItemProps) {
  return (
      <li className="flex justify-between items-center p-4 card">
        <Link to={`/app/groups/${group.id}`} className="h-full w-full">
        <div className="space-y-2">
            <h1 className="text-2xl font-semibold capitalize">{group.groupName} </h1>
        <p className="text-sm text-gray-500 font-semibold">{convertDate(new Date(group.createdAt))}</p>
        </div>
      </Link>
    </li>
  )
}

export default GroupItem