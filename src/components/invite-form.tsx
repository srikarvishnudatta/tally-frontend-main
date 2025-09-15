import type { Dispatch, FormEvent, SetStateAction } from "react"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { sendInvite } from "@/api/invite.service"
import { toast } from "sonner"
import ModalSubmit from "./modal-submit"


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
        <ModalSubmit onClick={() => setIsOpen(false)}/>
    </form>
  )
}

export default InviteForm