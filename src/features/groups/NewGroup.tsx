import type { Dispatch, FormEvent, SetStateAction } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { createGroup } from "@/service/group.service"
import { toast } from "sonner"
import { useQueryClient } from "@tanstack/react-query"

type NewGroupProps = {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}


function NewGroup({setIsOpen}:NewGroupProps) {
    const queryClient = useQueryClient()
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const groupName = formData.get("groupName") as string
        const description = formData.get("description") as string
        const response = await createGroup({groupName, groupDescription:description})
        if(response.status === 201){
            toast("Group Created Successfully")
            setTimeout(() =>  setIsOpen(false), 1000)
            queryClient.invalidateQueries({
                queryKey: ["groups"]
            })
        }
    }
  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
        <Label>Name</Label>
        <Input name="groupName"/>
        <Label>Description</Label>
        <Input name="description"/>
        <div className="flex gap-2 justify-end">
            <Button variant={"outline"} type="button" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button>Confirm <Check /></Button>
        </div>
    </form>
  )
}

export default NewGroup