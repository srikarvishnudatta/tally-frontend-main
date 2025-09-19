import { Plus } from "lucide-react"

function QuickActions() {
  return (
    <section className="border border-gray-200 rounded-2xl px-4 py-6 w-full md:col-span-1">
        <div className="mb-6">
            <h2 className="font-medium">Quick Actions</h2>
        <h2 className="text-gray-500">Common Tasks</h2>
        </div>
       <div className="flex flex-col gap-2">
         <button className="button gap-2"><Plus size={16}/> Add Expense</button>
        <button className="button gap-2">Split Bill</button>
        <button className="button gap-2">Create Group</button>
       </div>
    </section>
  )
}

export default QuickActions