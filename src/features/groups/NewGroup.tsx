import type { FormEvent } from "react"
import { Check, X } from "lucide-react"
import { createGroup } from "@/api/group.service"
import { toast } from "sonner"
import { useQueryClient } from "@tanstack/react-query"

type NewGroupProps = {
    toggleDialog: () => void;
}

function NewGroup({toggleDialog}:NewGroupProps) {
    const queryClient = useQueryClient()
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const groupName = formData.get("groupName") as string
        const response = await createGroup({groupName})
        if(response.status === 201){
            toast("Group Created Successfully")
            setTimeout(() =>  toggleDialog(), 1000)
            queryClient.invalidateQueries({
                queryKey: ["groups"]
            })
        }
    }
  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
       <div className="flex flex-col gap-1">
         <label className="font-semibold">Name</label>
        <input name="groupName" required className="input"/>
       </div>
        <div className="flex gap-2 justify-end">
            <button 
            className="button-destructive items-center"
            type="button" onClick={toggleDialog}><X size={16}/>Cancel</button>
            <button type="submit"
            className="button">Confirm <Check /></button>
        </div>
    </form>
  )
}

export default NewGroup