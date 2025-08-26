import { createPersonalExpense } from "@/service/personalExpense.service"
import type { Dispatch, FormEvent, SetStateAction } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useQueryClient } from "@tanstack/react-query"

type NewExpenseItemProps = {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function NewExpenseItem({setIsOpen}: NewExpenseItemProps) {
    const queryClient = useQueryClient()
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement)
        const expenseName = formData.get("expenseName") as string
        const description = formData.get("description") as string
        const amount = parseFloat(formData.get("amount") as string)
        const expenseType = formData.get("expenseType") as 'INCOME' | 'EXPENSE'
        const response = await createPersonalExpense({expenseName, description, amount, expenseType})
        if(response.status === 201){
            setTimeout(() => setIsOpen(false), 1000)
            toast("Expense Added Successfully")
            queryClient.invalidateQueries({
                queryKey: ["personal-expenses"]
            })
        }
    }
  return (
    <form onSubmit={handleSubmit} className="space-y-2">
         
        <Label>Name</Label>
        <Input name="expenseName"/>
        <Label>Description</Label>
        <Input name="description"/>

        <Label>Amount</Label>
        <Input name="amount" type="number" step={"any"}/>

        <Label>
            Type
        </Label>
        <Select name="expenseType">
            <SelectTrigger>
                <SelectValue placeholder="Select type of expense"/>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="INCOME">
                    Income
                </SelectItem>
                <SelectItem value="EXPENSE">
                    Expense
                </SelectItem>
            </SelectContent>
        </Select>
        <div className="flex gap-2 justify-end">
            <Button variant={"outline"} type="button" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button>Confirm <Check /></Button>
        </div>
    </form>
  )
}

export default NewExpenseItem