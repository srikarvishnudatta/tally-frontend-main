import {
  fetchPersonalExpenses,
  getPersonalBalances,
} from "@/api/personalExpense.service";
import type { Balances, Expense } from "@/types";
import { useQueries, type UseQueryResult } from "@tanstack/react-query";
import { useState } from "react";
import ExpenseItem from "@/features/expenses/ExpenseItem";

function ExpensesPage() {
  const [isOpen, setIsOpen] = useState(false);
  // const queries: [UseQueryResult<Expense[]>, UseQueryResult<Balances>] =
  //   useQueries({
  //     queries: [
  //       {
  //         queryFn: fetchPersonalExpenses,
  //         queryKey: ["personal-expenses"],
  //       },
  //       {
  //         queryKey: ["personal-balances"],
  //         queryFn: getPersonalBalances,
  //       },
  //     ],
  //   });
  // const [data, balance] = queries;
  // const isFetchingExpenses = data.isFetching;
  // const isFetchingBalances = balance.isFetching;
  return (
    <>
      <section>
        <div>
          <h1 className="text-2xl md:text-4xl font-bold">Expense History</h1>
          <h4 className=" text-gray-500 my-3">
            View and manage all your recorded expenses.
          </h4>
        </div>
        <div className="p-4 flex justify-around flex-col md:flex-row gap-4 border border-gray-200 rounded-xl">
          <div>
            <h2 className="text-lg font-semibold text-center">3</h2>
            <h4 className="text-gray-500">Total Expenses</h4>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-center">3</h2>
            <h4 className="text-gray-500">Total Amount</h4>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-center">3</h2>
            <h4 className="text-gray-500">Total Income</h4>
          </div>
        </div>
        <div className="mt-5 border p-4 border-gray-200 rounded-xl">
          <div className="my-2 space-y-2 ">
            <div className="flex gap-2">
              <input type="text" placeholder="Search Expenses" />
              <select name="type" id="">
                <option value="default">default</option>
              </select>
              <select name="type" id="">
                <option value="sort">sort</option>
              </select>
            </div>
            {/* Expenses grid */}
            <div className="grid grid-cols-5 gap-y-4">
              <div className="font-medium border-b">Name</div>
              <div className="font-medium border-b">Type</div>
              <div className="font-medium border-b">Date</div>
              <div className="font-medium border-b col-span-2">Amount</div>
              <ExpenseItem name="Potatoes" date="12th may 2001" amount={5} type="expense"/>
              <ExpenseItem name="Potatoes" date="12th may 2001" amount={5} type="income"/>
              <ExpenseItem name="Potatoes" date="12th may 2001" amount={5} type="expense"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ExpensesPage;
