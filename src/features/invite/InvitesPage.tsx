import { getAllInvites } from "@/service/invite.service"
import type { Invite } from "@/types"
import { useQuery } from "@tanstack/react-query"
import InviteCard from "./InviteCard"


function InvitesPage() {
  const {data: invites, isFetched} = useQuery<unknown, unknown, Invite[]>({
    queryKey: ["invites"],
    queryFn: getAllInvites
  })
  return (
    isFetched ? <ul className="space-y-2">
      {invites?.map(invite => <InviteCard key={invite.id} invite={invite}/>)}
    </ul> : <p>Fetching invites</p>
  )
}

export default InvitesPage