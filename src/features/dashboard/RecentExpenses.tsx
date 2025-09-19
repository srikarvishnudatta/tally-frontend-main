import { DollarSign } from "lucide-react"
import { Link } from "react-router-dom"

function RecentExpenses() {
  return (
    <section className="border border-gray-200 rounded-2xl px-4 py-6 md:col-span-3">
        <div className="flex justify-between items-center mb-6">
            <div>
                <h2 className="font-medium">Recent Transactions</h2>
                <h2 className="text-gray-500">Your Latest Transactions</h2>
            </div>
            <Link to={"/app/expenses"} className="border border-gray-200 rounded-lg px-2 py-1 text-sm font-medium hover:bg-gray-200">View All</Link>
        </div>
        <ul>
            <li className="flex justify-between items-center">
                <div className="flex gap-2">
                    <div className="bg-blue-50 rounded-full h-10 w-10 flex justify-center items-center">
                        <DollarSign />
                    </div>
                    <div>
                        <h4 className="font-medium">Lunch at Taj</h4>
                        <h5 className="text-sm text-gray-500">Food . 9/14/25</h5>
                    </div>
                </div>
                <p className="font-medium">$45.50</p>
            </li>
        </ul>
    </section>
  )
}

export default RecentExpenses