import type { NewGroupExpense } from "@/types";
import axiosInstance from "./axiosConfig";

async function getGroupExpenses(groupId: number){
    return (await axiosInstance.get(`/expenses/${groupId}`)).data
}
async function createGroupExpense(data: NewGroupExpense){
    return await axiosInstance.post(`/expenses/`, data)
}
async function getBalances(groupId:number){
    return (await axiosInstance.get(`/expenses/${groupId}/balances`)).data
}
export {
    getGroupExpenses, createGroupExpense, getBalances
}