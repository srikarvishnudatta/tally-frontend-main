import { getAllInvites } from "@/service/invite.service"
import type { Invite } from "@/types"
import { useQuery } from "@tanstack/react-query"
import InviteCard from "./InviteCard"


function InvitesPage() {
  const {data: invites, isFetching} = useQuery<unknown, unknown, Invite[]>({
    queryKey: ["invites"],
    queryFn: getAllInvites
  })
  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-black">Your Invites</h1>
      {isFetching ? <ul className="space-y-2">
      {invites?.map(invite => <InviteCard key={invite.id} invite={invite}/>)}
      </ul> : <p className="text-gray-600 font-bold text-2xl h-[50vh] flex justify-center items-center">No invites to show</p>}
    </div>
  )
}

export default InvitesPage