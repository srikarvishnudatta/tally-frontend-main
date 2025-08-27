import type { GroupExpense } from "@/types"


function ExpenseItem({expense} : {
    expense: GroupExpense
}) {
  return (
    <li className="flex justify-between items-center p-4 shadow-sm bg-slate-100 rounded-md">
        <div>
            <div className="font-black flex text-xl gap-4">
              <h4>{expense.expenseName}</h4>
              <p>[{expense.amount}$]</p>
            </div>
            <p className="text-sm text-gray-600">Paid by: {expense.paidBy.firstName} ({expense.paidBy.email})</p>
        </div>
        <div className={expense.message?.startsWith("You owe") ? "text-red-500" : "text-green-500"}>
          {expense.message}
        </div>
    </li>
  )
}

export default ExpenseItem