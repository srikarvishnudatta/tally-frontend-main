
import type { Balances } from "@/types"



function PersonalBalances({balance: data} : {
    balance?: Balances
}) {

  return (
    <div className="mt-5 flex flex-col gap-2 md:flex-row">
            <div className="rounded-md shadow-sm bg-slate-100 p-2 grow">
                <h2 className="text-red-500 text-4xl">
                    $ {data?.expenditure || 0} 
                </h2>
                <p className="text-gray-600 text-sm font-bold">Monthly Expenses so far</p>
            </div>
            <div className="rounded-md shadow-sm bg-slate-100 p-2 grow">
                <h2 className="text-green-500 text-4xl">
                    $ {data?.income || 0}
                </h2>
                <p className="text-gray-600 text-sm font-bold">Monthly income so far</p>
            </div>
      </div>
  )
}

export default PersonalBalances