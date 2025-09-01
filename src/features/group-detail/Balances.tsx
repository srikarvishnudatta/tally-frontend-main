import type { GroupBalance } from "@/types"

function Balances({balances}: {
  balances?: GroupBalance[]
}) {
  return (
    <ul className="w-full p-4 card min-h-52">
      {balances?.map((balance, index) => <li key={index}
      className={`text-lg ${balance.message?.includes("owes you") ? "text-green-500" :"text-red-500"}`}
      >
        {balance.message}
      </li>)}
    </ul>
  )
}

export default Balances