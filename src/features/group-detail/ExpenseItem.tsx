import type { GroupExpense } from "@/types"


function ExpenseItem({expense} : {
    expense: GroupExpense
}) {
  return (
    <li className="flex justify-between items-center p-4 card">
        <div>
            <h4 className="font-black flex text-3xl gap-4 capitalize font-doto">{expense.expenseName}</h4>
            <p className="text-xs font-semibold text-gray-500">Paid by: {expense.paidBy.firstName} ({expense.paidBy.email})</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-black text-3xl font-doto">{expense.amount}$</p>
          <p className={`text-xs md:text-sm font-semibold ${expense.message?.startsWith("You owe") ? "text-red-500" : "text-green-500"}`}>{expense.message}</p>
        </div>
    </li>
  )
}

export default ExpenseItem