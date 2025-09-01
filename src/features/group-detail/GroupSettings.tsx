import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { deleteGroup, leaveMemberGroup, updateGroup } from "@/service/group.service"
import type { Group } from "@/types"
import { Check, Edit, LogOut, Trash } from "lucide-react"
import { useState, type FormEvent } from "react"
import { toast } from "sonner"
import MemberCard from "./MemberCard"
import { useNavigate } from "react-router-dom"


function GroupSettings({group}: {
    group: Group
}) {
  const [edit, setEdit] =  useState(false)
  const navigate = useNavigate()
  const saveChanges = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    const fd = new FormData(ev.target as HTMLFormElement)
    const groupName = fd.get("groupName") as string
    const response = await updateGroup(group.id, {groupName})
    if(response.status){
      toast("Group information updated!")
    }
  }
    const removeGroup = async () => {
    const response = await deleteGroup(group.id)
    if(response.status){
      toast("group deleted successfully")
      navigate("/app/groups")
    }
  }
  const leaveGroup = async () => {
    const response = await leaveMemberGroup(group.id)
    if(response.status){
      toast("left the successfully")
      navigate("/app/groups")
    }
  }
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-black">Group Settings</h2>
     {edit ? <form className="space-y-2 p-2 card" onSubmit={saveChanges}>
        <Label>Group Name</Label>
        <Input defaultValue={group.groupName} name="groupName" required/>
        <div className="flex gap-2 justify-end">
            <Button variant={"outline"} type="button" onClick={() => setEdit(false)}>Cancel</Button>
            <Button>Save <Check /></Button>
        </div>
    </form> : 
     <div className="p-5 flex justify-between items-center card">
       <div>
        <h3 className="font-bold">{group.groupName}</h3>
       </div>
       <Button onClick={() => setEdit(true)} type="button" variant={"outline"}>
        <Edit /> Edit
       </Button>
     </div>}

      <h3 className="font-black text-xl">Group Members</h3>
      <ul className="flex gap-3 flex-col">
        {group.groupMemberList.map((member) => <MemberCard groupId={group.id} key={member.id} member={member} />)}
      </ul>
      <div className="flex gap-2">
        <Button variant={"outline"} type="button" onClick={leaveGroup}>
          <LogOut /> Leave Group
        </Button>
        <Button variant={"destructive"} onClick={removeGroup} type="button">
          <Trash /> Delete Group
        </Button>
      </div>
    </div>
  )
}

export default GroupSettings