import { convertDate } from "@/lib/date-converter"
import type { Group } from "@/types"
import { Plus } from "lucide-react"
import { Link } from "react-router-dom"

type GroupItemProps = {
    group: Group
}

function GroupItem({group}: GroupItemProps) {
  return (
      <li className="space-y-2 border border-gray-200 p-6 rounded-2xl shadow-sm">
         <div className="space-y-2">
            <h1 className="text-xl font-semibold capitalize">{group.groupName} </h1>
        <p className="text-sm text-gray-500 font-semibold">{convertDate(new Date(group.createdAt))}</p>
        </div>
       <div className="flex items-center gap-2">
        <button className="button gap-3 text-sm"><Plus size={16}/> Split</button>
         <Link to={`/app/groups/${group.id}`} className="button-secondary text-sm">
       View Details
      </Link> 
       </div>

    </li>
  )
}

export default GroupItem