import { Button } from "@/components/ui/button"
import { getGroupById } from "@/api/group.service"
import { getBalances, getGroupExpenses } from "@/api/groupExpense.service"
import type { Group, GroupBalance, GroupExpense } from "@/types"
import { useQueries, type UseQueryResult } from "@tanstack/react-query"
import { PlusIcon, Settings, Users } from "lucide-react"
import { useParams } from "react-router-dom"
import Balances from "@/features/group-detail/Balances"
import ResponsiveDialog from "@/components/responsive-dialog"
import { useState } from "react"
import InviteForm from "@/components/invite-form"
import GroupSettings from "@/features/group-detail/GroupSettings"
import ExpenseForm from "@/components/expense-form"
import ExpenseItem from "@/features/group-detail/ExpenseItem"
import { Skeleton } from "@/components/ui/skeleton"

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
  const isGroupFetching = group.isFetching
  const isExpensesFetching = groupExpense.isFetching
  const isBalancesFetching = groupBalance.isFetching
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
      {isGroupFetching ? <Skeleton className="w-full h-[50px] rounded-md"/> : <h1 className="text-3xl md:text-4xl capitalize font-black">
        {group.data?.groupName}
      </h1>}
      {isBalancesFetching ? <Skeleton  className="w-full min-h-52 rounded-md"/> : <Balances balances={groupBalance.data}/>}
       <div className="my-2 grid grid-cols-2 gap-2 md:flex">
          <Button variant={`${currentView === "expenses" ? "default" : "outline"}`} 
          onClick={() => setCurrentView("expenses")}>Expenses</Button>
          <Button 
          variant={`${currentView === "settings" ? "default" : "outline"}`}  
          onClick={() => setCurrentView("settings")}><Settings />Settings</Button>
          <Button onClick={() => setShowExpenseForm(true)} >Add <PlusIcon /></Button>
          <Button variant={"outline"} onClick={() => setShowInviteform(true)}><Users/> Invite</Button>
        </div>
      {currentView === "expenses" && (isExpensesFetching ? <Skeleton className="w-full h-100px rounded-md"/> : <ul className="space-y-4">
        {groupExpense.data?.map(expense => <ExpenseItem key={expense.id} expense={expense}/>)}
      </ul>)}  
      {currentView === "settings" && 
      <GroupSettings group={group.data!} />}
    </div>
  </>
  )
}

export default GroupDetailPage