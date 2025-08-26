export interface LoginData{
    email:string;
    password:string;
}
export interface SignupData{
    email:string;
    password:string;
    firstName:string;
    lastName:string;
}
export interface NewServerUser{
    firstName:string;
    lastName:string;
}
export interface Balances{
    income:number,
    expenditure:number
}
export interface Expense extends NewExpense{
    id:number;
    createdAt: Date;
}
export interface PersonalExpense{
    expenses: Expense[];
}
export interface NewExpense{
    expenseName:string;
    description:string;
    amount:number;
    expenseType: 'EXPENSE' | 'INCOME';
}
export interface NewGroup {
    groupName:string,
    groupDescription:string,
}
export interface Group extends NewGroup{
    id:number,
    groupMemberList: GroupMember[]
}
export interface GroupMember {
    id:string,
    email:string,
    firstName:string,
    lastName:string
}
export interface GroupExpense {
    id:number,
    expenseNumber:string,
    description:string,
    amount:number,
    paidBy:string,
    shareValues: GroupExpenseRecord
}
export interface GroupExpenseRecord {
    id:number,
    paidBy:string,
    owed:string,
    amount:number
}
export interface NewInvite {
    groupId:number,
    receiverEmail:string
}
export interface Invite {
    id:number,
    groupName:string,
    sentBy:string,
    status: string
}