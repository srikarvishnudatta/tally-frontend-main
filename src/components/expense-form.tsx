import { useState, type FormEvent } from "react"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import type { GroupMember } from "@/types"
import ModalSubmit from "./modal-submit"
import { Select, SelectTrigger,SelectValue,SelectContent, SelectItem } from "./ui/select"
import { Checkbox } from "./ui/checkbox"
import { createGroupExpense } from "@/api/groupExpense.service"
import { toast } from "sonner"
import { useQueryClient } from "@tanstack/react-query"

function ExpenseForm({setIsOpen, members, groupId}: {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    members: GroupMember[],
    groupId:number
}) {
    const [shares, setShares] = useState<string[]>([])
    const queryClient = useQueryClient()
    const submitHandler = async (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        const formData = new FormData(ev.target as HTMLFormElement)
        const expenseName = formData.get("expenseName") as string
        const amount = parseFloat(formData.get("amount") as string)
        const paidBy = formData.get("paidBy") as string
        const splitAmong = new Map<string, number>()
        shares.forEach(id => splitAmong.set(id, amount/shares.length))
        const response = await createGroupExpense({
            expenseName, amount, paidBy, splitAmong: Object.fromEntries(splitAmong), groupId
        })
        if(response.status){
          toast("Expense created successfully")
          setTimeout(() => setIsOpen(false), 100)
          queryClient.invalidateQueries({
            queryKey: ["balances" , "group", groupId, "expenses"]
          })
        }
    }
  return (
    <form onSubmit={submitHandler} className="space-y-2">
        <Label>Name</Label>
        <Input name="expenseName"/>
        <Label>Amount</Label>
        <Input name="amount" type="number" step={"any"}/>
        <Label>Paid by</Label>
        <Select name="paidBy">
          <SelectTrigger >
            <SelectValue placeholder="Select who paid"/>
          </SelectTrigger>
          <SelectContent>
            {members.map(member => 
            <SelectItem key={member.id} 
            value={member.id}>{member.firstName} 
            {member.lastName}</SelectItem>)}
          </SelectContent>
        </Select>
        <Label>Split Among</Label>
        <div className="border-1 rounded-md px-2 py-4 flex flex-col gap-4">
          {members.map(member => <Label key={member.id}>
          <span>{member.firstName} {member.lastName}</span><Checkbox 
            onCheckedChange={(checked) => {
              if(checked){
                setShares(prev => {
                  const updated = [...prev]
                  updated.push(member.id)
                  return updated
                })
                
              }else{
                setShares(prev => prev.filter(i => i === member.id))
              }
            }}
            />
        </Label>)}
        </div>
        <ModalSubmit onClick={() => setIsOpen(false)}/>
    </form>
  )
}

export default ExpenseForm