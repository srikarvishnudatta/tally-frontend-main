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
export interface LoginResponse {
    ACCESS_TOKEN:string
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
    amount:number;
    expenseType: 'EXPENSE' | 'INCOME';
}
export interface NewGroup {
    groupName:string,
}
export interface Group extends NewGroup{
    id:number,
    groupMemberList: GroupMember[],
    createdAt: Date
}
export interface GroupMember {
    id:string,
    email:string,
    firstName:string,
    lastName:string
}
export interface GroupExpense {
    id:number,
    expenseName:string,
    amount:number,
    paidBy:GroupMember,
    shareValues: GroupExpenseRecord[],
    message?:string
}
export interface GroupExpenseRecord {
    id:number,
    paidBy:string,
    owed:string,
    amount:number
}
export interface NewGroupExpense {
    expenseName:string,
    amount:number,
    paidBy:string,
    groupId:number,
    splitAmong: Record<string, number>
}
export interface GroupBalance {
    message?:string
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