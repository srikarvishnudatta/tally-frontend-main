import { Button } from "@/components/ui/button"
import { removeMemberGroup } from "@/service/group.service"
import type { GroupMember } from "@/types"
import { Trash } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"


function MemberCard({member, groupId} : {
    member: GroupMember,
    groupId: number
}) {
    const navigate = useNavigate()
    const removeMember = async () => {
        const response = await removeMemberGroup(groupId, member.id)
        if(response.status){
            toast("removed member successfully")
            navigate("/app/groups")
        }
    }
  return (
    <li className="card p-5 gap-2 md:items-center justify-between flex flex-col md:flex-row">
        <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-slate-500 rounded-full flex justify-center items-center text-white">
            {member.firstName.charAt(0).toUpperCase()}{member.lastName.charAt(0).toUpperCase()}
            </div>
            <div>
                <p>{member.email}</p> 
                <p className="text-xs md:text-sm font-gray-500">{member.firstName} {member.lastName}</p>
            </div>
        </div>
        <Button variant={"destructive"} onClick={removeMember}>
            <Trash /> Remove
        </Button>
    </li>
  )
}

export default MemberCard