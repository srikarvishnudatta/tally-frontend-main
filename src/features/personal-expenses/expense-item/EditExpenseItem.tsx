import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Expense } from "@/types"
import type { Dispatch, FormEvent, SetStateAction } from "react"
import { editPersonalExpense } from "@/service/personalExpense.service"
import { toast } from "sonner"
import { useQueryClient } from "@tanstack/react-query"

type ExpenseItemProps = {
    expense: Expense;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function EditExpenseItem({expense, setIsOpen}: ExpenseItemProps) {
    const queryClient = useQueryClient()
    const {expenseName, description, expenseType, amount} = expense
    const handleEdit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
         const expenseName = formData.get("expenseName") as string
        const description = formData.get("description") as string
        const amount = parseFloat(formData.get("amount") as string)
        const expenseType = formData.get("expenseType") as 'INCOME' | 'EXPENSE'
        const response = await editPersonalExpense(expense.id, {
            expenseName, expenseType, description, amount
        })
        if(response.status){
            setTimeout(() => setIsOpen(false), 1000)
            toast("Expense Updated Successfully")
            queryClient.invalidateQueries({
                queryKey: ["personal-expenses", "personal-balances"]
            })
        }
    }
  return (
    <form className="space-y-2" onSubmit={handleEdit}>
        <Label>Name</Label>
        <Input defaultValue={expenseName} name="expenseName"/>
        <Label>Description</Label>
        <Input defaultValue={description} name="description"/>

        <Label>Amount</Label>
        <Input defaultValue={amount} type="number" step={"any"} name="amount"/>

        <Label>
            Type
        </Label>
        <Select defaultValue={expenseType} name="expenseType">
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

export default EditExpenseItem