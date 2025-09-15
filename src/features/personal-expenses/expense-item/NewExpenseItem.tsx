import { createPersonalExpense } from "@/api/personalExpense.service";
import type { Dispatch, FormEvent, SetStateAction } from "react";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

type NewExpenseItemProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function NewExpenseItem({ setIsOpen }: NewExpenseItemProps) {
  const queryClient = useQueryClient();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const expenseName = formData.get("expenseName") as string;
    const amount = parseFloat(formData.get("amount") as string);
    const expenseType = formData.get("expenseType") as "INCOME" | "EXPENSE";
    const response = await createPersonalExpense({
      expenseName,
      amount,
      expenseType,
    });
    if (response.status === 201) {
      setTimeout(() => setIsOpen(false), 1000);
      toast("Expense Added Successfully");
      queryClient.invalidateQueries({
        queryKey: ["personal-expenses"],
      });
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-2">
        <h1 className="font-bold text-xl">New Personal Expense</h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName" className="font-semibold ">
          Name
        </label>
        <input name="expenseName" id="expenseName" className="input" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="amount" id="amount " className="font-semibold ">
          Amount
        </label>
        <input className="input" name="amount" type="number" step={"any"} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="expenseType" className="font-semibold ">
          Expense Type
        </label>
        <select
          className="select"
          defaultValue={"INCOME"}
          name="expenseType"
          id="expenseType"
        >
          <option value="INCOME">Income</option>
          <option value="EXPENSE">Expense</option>
        </select>
      </div>
      <div className="flex gap-2 mt-5 justify-end">
        <button
          className="btn btn-error text-white"
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </button>
        <button className="btn btn-primary text-white">Confirm</button>
      </div>
    </form>
  );
}

export default NewExpenseItem;
