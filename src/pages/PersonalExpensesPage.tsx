import ExpenseItem from "@/features/personal-expenses/expense-item/ExpenseItem";
import NewExpenseItem from "@/features/personal-expenses/expense-item/NewExpenseItem";
import {
  fetchPersonalExpenses,
  getPersonalBalances,
} from "@/api/personalExpense.service";
import type { Balances, Expense } from "@/types";
import { useQueries, type UseQueryResult } from "@tanstack/react-query";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import PersonalBalances from "@/features/personal-expenses/PersonalBalances";
import Skeleton  from "@/components/skeleton";
import Modal from "@/components/Modal";

function PersonalExpensesPage() {
  const [isOpen, setIsOpen] = useState(false);
  const queries: [UseQueryResult<Expense[]>, UseQueryResult<Balances>] =
    useQueries({
      queries: [
        {
          queryFn: fetchPersonalExpenses,
          queryKey: ["personal-expenses"],
        },
        {
          queryKey: ["personal-balances"],
          queryFn: getPersonalBalances,
        },
      ],
    });
  const [data, balance] = queries;
  const isFetchingExpenses = data.isFetching;
  const isFetchingBalances = balance.isFetching;
  return (
    <>
      <Modal open={isOpen} setOpen={setIsOpen}>
        <NewExpenseItem setIsOpen={setIsOpen} />
      </Modal>
      <section>
        {isFetchingBalances ? (
          <Skeleton className="w-full rounded-md" />
        ) : (
          <PersonalBalances balance={balance.data} />
        )}
        <div className="mt-5">
          <p className="border-b-1 font-semibold border-b-gray-300 text-sm text-gray-300">
            Recent Transactions
          </p>
          <div className="my-2 space-y-2 md:flex md:gap-2">
            <input placeholder="Search" className="input"/>
            <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
              Expense <PlusIcon />
            </button>
          </div>
          {isFetchingExpenses ? (
            <Skeleton className="w-full h-[100px] rounded-md" />
          ) : (
            <ul className="space-y-4">
              {data.data ? (
                data.data.map((expense) => (
                  <ExpenseItem key={expense.id} expense={expense} />
                ))
              ) : (
                <p className="text-gray-600 font-bold text-2xl h-[50vh] flex justify-center items-center">
                  No expenses to display..
                </p>
              )}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}

export default PersonalExpensesPage;
