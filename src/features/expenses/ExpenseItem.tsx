import { Calendar, DollarSign } from "lucide-react";

function ExpenseItem({
  name,
  type,
  date,
  amount,
}: {
  name: string;
  type: string;
  date: string;
  amount: number;
}) {
  return (
    <>
      <div className="text-sm font-semibold text-gray-700">{name}</div>
      <div>
        <span className={`text-xs rounded-2xl p-1 ${type === "income" ? "bg-green-50 text-green-500" : "bg-red-50 text-red-500"}`}>
          {type}
        </span>
      </div>
      <div className="flex gap-2 items-center text-sm">
        <Calendar size={14} /> {date}
      </div>
      <div className="col-span-2 flex gap-0.5 items-center"><DollarSign size={16}/>{amount}</div>
    </>
  );
}

export default ExpenseItem;
