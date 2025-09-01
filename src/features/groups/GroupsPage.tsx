import NewGroup from "./NewGroup"
import ResponsiveDialog from "@/components/responsive-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getGroups } from "@/service/group.service"
import type { Group } from "@/types"
import { useQuery } from "@tanstack/react-query"
import { Plus } from "lucide-react"
import { useState } from "react"
import GroupItem from "./GroupItem"
import { Skeleton } from "@/components/ui/skeleton"

function GroupsPage() {
    const {data, isFetching} = useQuery<unknown, unknown, Group[]>({
        queryKey:['groups'],
        queryFn: getGroups
    })
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <ResponsiveDialog isOpen={isOpen} setIsOpen={setIsOpen} title="Create a group" description="Let's create a group!">
        <NewGroup setIsOpen={setIsOpen}/>
    </ResponsiveDialog>
        <section>
            <h1 className="text-2xl md:text-4xl font-black">Your Groups</h1>
            <div className="my-2 space-y-2 md:flex md:gap-2">
            <Input placeholder="Search your groups"/>
            <Button onClick={() => setIsOpen(true)}>Group <Plus /></Button>
            </div>
            {isFetching ? <Skeleton className="h-[100px] w-full rounded-md" /> : 
            <ul className="space-y-4">
                {data ? data?.map((group) => <GroupItem key={group.id} group={group}/>) : <p className="text-gray-600 font-bold text-2xl h-[50vh] flex justify-center items-center">No expenses to display..</p>}
            </ul>}
        </section>
    </>
  )
}

export default GroupsPage