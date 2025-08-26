import type { Dispatch, FormEvent, SetStateAction } from "react"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Button } from "../ui/button"
import { Check } from "lucide-react"
import { sendInvite } from "@/service/invite.service"
import { toast } from "sonner"


function InviteForm({
    groupId, setIsOpen
}: {
    groupId:number, 
    setIsOpen: Dispatch<SetStateAction<boolean>>
}) {
    const submitHandler = async (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        const fd = new FormData(ev.target as HTMLFormElement)
        const receiverEmail = fd.get("receiverEmail") as string
        const response = await sendInvite({groupId, receiverEmail})
        if(response.status){
            toast(`Invite sent successfully to ${receiverEmail}`)
            setIsOpen(false)
        }
    }
  return (
    <form onSubmit={submitHandler} className="space-y-2">
        <Label>Enter Email:</Label>
        <Input name="receiverEmail" required placeholder="yourfriend@gmail.com"/>
        <div className="flex gap-2 justify-end">
            <Button variant={"outline"} type="button" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button>Confirm <Check /></Button>
        </div>
    </form>
  )
}

export default InviteForm