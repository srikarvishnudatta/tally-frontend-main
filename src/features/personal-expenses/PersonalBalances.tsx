import type { Balances } from "@/types"


function PersonalBalances({balance: data} : {
    balance?: Balances,
}) {

  return (
    <div className="mt-5 flex flex-col gap-2 md:flex-row">
        <div className="card p-4 grow">
            <h2 className="amount font-doto">
                    ${data?.expenditure || 0} 
            </h2>
            <p className="text-red-600 text-sm font-semibold">Monthly Expenses so far</p>
        </div>
        <div className="card p-4 grow">
            <h2 className="amount font-doto">
                    ${data?.income || 0}
            </h2>
            <p className="text-green-600 text-sm font-bold">Monthly income so far</p>
        </div>
      </div>
  )
}

export default PersonalBalances