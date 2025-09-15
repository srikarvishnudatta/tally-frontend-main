import type { Expense } from "@/types";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Edit, MoreVertical, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import MenuItem from "@/components/menu-item";
import { useState } from "react";
import ResponsiveDialog from "@/components/responsive-dialog";
import EditExpenseItem from "./EditExpenseItem";
import DeleteForm from "@/components/delete-form";
import { deletePersonalExpense } from "@/api/personalExpense.service";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { convertDate } from "@/lib/date-converter";

type ExpenseItemProps = {
    expense: Expense;
};

function ExpenseItem({expense}: ExpenseItemProps) {
  const [showEdit, setShowEdit] = useState(false)
  const [showDelete, setShowDelete] = useState(false)
  const queryClient = useQueryClient()
  const deleteExpense = async () => {
    try {
      const response = await deletePersonalExpense(expense.id)
      if(response.status){
        toast("Expense deleted")
        queryClient.invalidateQueries({
            queryKey: ["personal-expenses", "personal-balances"]
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <ResponsiveDialog isOpen={showEdit} setIsOpen={setShowEdit} title="Edit expense" description="Edit your expense here">
        <EditExpenseItem expense={expense} setIsOpen={setShowEdit}/>
      </ResponsiveDialog>
      <ResponsiveDialog isOpen={showDelete} setIsOpen={setShowDelete} title="Are you sure?" description="Do you want delete this expense?">
       <DeleteForm deleteFunction={deleteExpense} setIsOpen={setShowDelete}/>
      </ResponsiveDialog>
      <li className="flex justify-between items-center p-4 card">
      <div>
        <h1 className="text-2xl font-semibold text-gray-700 capitalize">{expense.expenseName} 
        </h1>
        <p className="text-xs font-semibold text-gray-500">{convertDate(new Date(expense.createdAt))}</p>
      </div>
      <div className="flex items-center gap-3">
        <span className={`amount font-doto ${expense.expenseType === "INCOME" ? "text-green-600" : "text-red-600"}`}>
            ${expense.amount}
        </span>
        <span >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"ghost"} className="hover:bg-gray-200">
                <MoreVertical className="h-4 w-4"/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="glass-effect flex flex-col gap-2 p-5 mr-5 border-1 border-gray-200 rounded-sm">
              <DropdownMenuItem className="hover:bg-slate-50 p-2 rounded-md cursor-pointer">
                <button onClick={() => setShowEdit(true)}><MenuItem text="Edit" icon={<Edit size={16}/>} /></button>
              </DropdownMenuItem>
               <DropdownMenuItem className="hover:bg-red-50 p-2 rounded-md cursor-pointer">
                <button onClick={() => setShowDelete(true)}><MenuItem text="Delete" icon={<Trash size={16}/>} className="text-red-500"/></button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </span>
      </div>
      
    </li>
    </>
  )
}

export default ExpenseItem