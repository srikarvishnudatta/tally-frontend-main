import DashboardCard from "@/features/dashboard/DashboardCard"
import QuickActions from "@/features/dashboard/QuickActions"
import RecentExpenses from "@/features/dashboard/RecentExpenses"
import { DollarSign } from "lucide-react"


function Dashboard() {
  return (
    <main className="w-full">
        <h2 className="font-bold text-3xl ">
            Welcome back, Demo User!
        </h2>
        <h4 className=" text-gray-500 my-5">
            Here's your expense overview for today.
        </h4>
       <section className="w-full grid grid-cols-1 gap-4 md:grid-cols-4">
         <DashboardCard 
        icon={<DollarSign size={20}/>}
        title="Total Spent"
        amount={1423.5}
        description="All Expenses"
        />
         <DashboardCard 
        icon={<DollarSign size={20}/>}
        title="This Month"
        amount={1423.5}
        description="Expenses so far"
        />
         <DashboardCard 
        icon={<DollarSign size={20}/>}
        title="Pending Settlements"
        amount={1423.5}
        description="Amounts to work on"
        />
        <DashboardCard 
        icon={<DollarSign size={20}/>}
        title="Active Groups"
        amount={1423.5}
        description="Your Current Groups"
        />
        <RecentExpenses />
        <QuickActions />
       </section>
    </main>
  )
}

export default Dashboard