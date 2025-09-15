import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Expense } from "@/types"
import type { Dispatch, FormEvent, SetStateAction } from "react"
import { editPersonalExpense } from "@/api/personalExpense.service"
import { toast } from "sonner"
import { useQueryClient } from "@tanstack/react-query"
import ModalSubmit from "@/components/modal-submit"

type ExpenseItemProps = {
    expense: Expense;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function EditExpenseItem({expense, setIsOpen}: ExpenseItemProps) {
    const queryClient = useQueryClient()
    const {expenseName, expenseType, amount} = expense
    const handleEdit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
         const expenseName = formData.get("expenseName") as string
        const amount = parseFloat(formData.get("amount") as string)
        const expenseType = formData.get("expenseType") as 'INCOME' | 'EXPENSE'
        const response = await editPersonalExpense(expense.id, {
            expenseName, expenseType, amount
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

       <ModalSubmit onClick={() => setIsOpen(false)}/>
    </form>
  )
}

export default EditExpenseItem