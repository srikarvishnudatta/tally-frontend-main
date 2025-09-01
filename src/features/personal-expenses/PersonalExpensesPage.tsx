import ExpenseItem from "./expense-item/ExpenseItem"
import NewExpenseItem from "./expense-item/NewExpenseItem"
import ResponsiveDialog from "@/components/responsive-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { fetchPersonalExpenses, getPersonalBalances } from "@/service/personalExpense.service"
import type { Balances, Expense } from "@/types"
import { useQueries, type UseQueryResult } from "@tanstack/react-query"
import { PlusIcon } from "lucide-react"
import { useState} from "react"
import PersonalBalances from "./PersonalBalances"
import { Skeleton } from "@/components/ui/skeleton"

function PersonalExpensesPage() {
    const [isOpen, setIsOpen] = useState(false)
    const queries: [UseQueryResult<Expense[]>, UseQueryResult<Balances>] = useQueries({
      queries: [
        {
          queryFn: fetchPersonalExpenses,
          queryKey: ["personal-expenses"]
        }, {
           queryKey:['personal-balances'],
            queryFn: getPersonalBalances
        }
      ]
    })
    const [data, balance] = queries
    const isFetchingExpenses = data.isFetching
    const isFetchingBalances = balance.isFetching
  return (
   <>
   <ResponsiveDialog  isOpen={isOpen} setIsOpen={setIsOpen} title={"Add a new personal expense"} description="This creates a new personal expense">
    <NewExpenseItem setIsOpen={setIsOpen}/>
   </ResponsiveDialog>
    <section>
    <h1 className="text-2xl md:text-4xl font-black">Personal Expenses</h1>
    {isFetchingBalances ? <Skeleton className="w-full h-[100px] rounded-md"/> : <PersonalBalances balance={balance.data} />}
      <div className="mt-5">
        <p className="border-b-1 font-semibold border-b-gray-500 text-sm text-gray-600">Recent Transactions</p>
        <div className="my-2 space-y-2 md:flex md:gap-2">
          <Input placeholder="Search" />
          <Button className="iconButton" onClick={() => setIsOpen(true)}>Expense <PlusIcon /></Button>
        </div>
        {isFetchingExpenses ? <Skeleton className="w-full h-[100px] rounded-md"/> : <ul className="space-y-4">
          {data.data ? data.data.map((expense) => 
          <ExpenseItem key={expense.id} expense={expense}/>) 
          : <p className="text-gray-600 font-bold text-2xl h-[50vh] flex justify-center items-center">No expenses to display..</p>}
        </ul>}
      </div>
   </section>
   </>
  )
}

export default PersonalExpensesPage