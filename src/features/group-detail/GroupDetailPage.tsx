import { Button } from "@/components/ui/button"
import { getGroupById } from "@/service/group.service"
import { getBalances, getGroupExpenses } from "@/service/groupExpense.service"
import type { Group, GroupBalance, GroupExpense } from "@/types"
import { useQueries, type UseQueryResult } from "@tanstack/react-query"
import { PlusIcon, Settings, Users } from "lucide-react"
import { useParams } from "react-router-dom"
import Balances from "./Balances"
import ResponsiveDialog from "@/components/responsive-dialog"
import { useState } from "react"
import InviteForm from "@/components/invite-form"
import GroupSettings from "./GroupSettings"
import ExpenseForm from "@/components/expense-form"
import ExpenseItem from "./ExpenseItem"

function GroupDetailPage() {
  const params = useParams()
  const groupId = Number(params.groupId)
  const [showInviteform, setShowInviteform] = useState(false)
  const [showExpenseForm, setShowExpenseForm] = useState(false)
  const [currentView, setCurrentView] = useState('expenses')
  
  const queries: [UseQueryResult<Group>, UseQueryResult<GroupExpense[]>, UseQueryResult<GroupBalance[]>] = useQueries({
    queries: [
      {
        queryKey: ["group", groupId],
        queryFn: () => getGroupById(groupId)
      }, 
      {
        queryKey: ["expenses"],
        queryFn: () => getGroupExpenses(groupId)
      },
      {
        queryKey: ["balances"],
        queryFn: () => getBalances(groupId)
      }
    ]
  })
  const [group, groupExpense, groupBalance] = queries
  
  return (
  <>
     <ResponsiveDialog isOpen={showInviteform} setIsOpen={setShowInviteform} title="Invite your Friend" description="Enter your friend's email">
     <InviteForm groupId={groupId} setIsOpen={setShowInviteform}/>
   </ResponsiveDialog>
   <ResponsiveDialog isOpen={showExpenseForm} setIsOpen={setShowExpenseForm}
   title="Add your expense" description="Enter your fields here"
   >
    <ExpenseForm setIsOpen={setShowExpenseForm} members={group.data?.groupMemberList || []} groupId={group.data?.id || 0}/>
   </ResponsiveDialog>
   <div className="space-y-1">
      <h1 className="text-3xl md:text-4xl capitalize font-black">
        {group.data?.groupName}
      </h1>
      <Balances balances={groupBalance.data}/>
       <div className="my-2 space-y-2 md:flex md:gap-2">
          <Button onClick={() => setShowExpenseForm(true)} >Add <PlusIcon /></Button>
          <Button variant={"outline"} onClick={() => setCurrentView("expenses")}>Expenses</Button>
          <Button variant={"outline"} onClick={() => setCurrentView("settings")}><Settings />Settings</Button>
          <Button variant={"outline"} onClick={() => setShowInviteform(true)}><Users/> Invite</Button>
        </div>
      {group && currentView === "expenses" ? 
       <ul className="space-y-4">
        {groupExpense.data?.map(expense => <ExpenseItem key={expense.id} expense={expense}/>)}
      </ul> : currentView === "settings" && 
      <GroupSettings group={group.data!} />}
    </div>
  </>
  )
}

export default GroupDetailPage