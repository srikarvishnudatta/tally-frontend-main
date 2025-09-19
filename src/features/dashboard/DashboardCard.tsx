
type DashboardCardProps = {
    icon: React.JSX.Element,
    title:string,
    amount:number,
    description?:string
}

function DashboardCard({
    icon, title, amount, description
} : DashboardCardProps) {
  return (
    <div className="border border-gray-200 w-full p-6 rounded-xl">
            <div className="flex justify-between items-center mb-6">
                <h4 className="text-sm font-medium text-gray-800 capitalize">{title}</h4>
                <span>{icon}</span>
            </div>
            <h1 className="font-bold text-xl">${amount}</h1>
            <p className="text-gray-400 text-xs">{description}</p>
        </div>
  )
}

export default DashboardCard