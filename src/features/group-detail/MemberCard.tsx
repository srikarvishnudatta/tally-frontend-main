import { Button } from "@/components/ui/button"
import type { GroupMember } from "@/types"
import { Trash } from "lucide-react"


function MemberCard({member, isOwner} : {
    member: GroupMember,
    isOwner?:boolean
}) {
  return (
    <li className=" px-4 py-5 bg-slate-100  gap-2 md:items-center justify-between flex flex-col md:flex-row">
        <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-slate-500 rounded-full flex justify-center items-center text-white">
            {member.firstName.charAt(0).toUpperCase()}{member.lastName.charAt(0).toUpperCase()}
            </div>
            <div>
                <p>{member.email} {isOwner && <span className="p-1 rounded-2xl text-green-100 bg-green-400">Owner</span>}</p> 
                <p className="text-xs md:text-sm font-gray-500">{member.firstName} {member.lastName}</p>
            </div>
        </div>
        <Button variant={"destructive"}>
            <Trash /> Remove
        </Button>
    </li>
  )
}

export default MemberCard