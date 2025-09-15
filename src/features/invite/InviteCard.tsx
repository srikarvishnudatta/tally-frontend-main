import { Button } from "@/components/ui/button"
import { acceptInvite, declineInvite } from "@/api/invite.service"
import type { Invite } from "@/types"
import { useQueryClient } from "@tanstack/react-query"
import { Check, X } from "lucide-react"
import { toast } from "sonner"


function InviteCard({
    invite
}: {invite: Invite}) {
    const queryClient = useQueryClient()
    const approveInvite = async () => {
        const response = await acceptInvite(invite.id)
        if(response.status){
            toast("Request accepted!")
            queryClient.refetchQueries({
                queryKey: ["invites"]
            })
        }
    }
    const rejectInvite = async () => {
        const response = await declineInvite(invite.id)
        if(response.status){
            toast("Request declined!!!")
            queryClient.refetchQueries({
                queryKey: ["invites"]
            })
        }
    }
  return (
    <li className="p-4 rounded-md space-y-4 card">
        <p><strong>{invite.sentBy}</strong> invites you to join group <strong>{invite.groupName}</strong></p>
        <Button variant={"destructive"} type="button" onClick={rejectInvite}>
            <X /> Decline
        </Button>
        <Button variant={"outline"} type="button" onClick={approveInvite} className="bg-green-400 text-white ml-4">
            <Check /> Accept
        </Button>
    </li>
  )
}

export default InviteCard