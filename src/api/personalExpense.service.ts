import type { NewExpense } from "@/types"
import axiosInstance from "./axiosConfig"

async function fetchPersonalExpenses(){
    return (await axiosInstance.get("/personal-expenses/")).data
}
async function createPersonalExpense(data:NewExpense){
    return await axiosInstance.post("/personal-expenses/", data)
}
async function deletePersonalExpense(expenseId:number){
    return await axiosInstance.delete(`/personal-expenses/${expenseId}`)
}
async function editPersonalExpense(expenseId:number, data:NewExpense){
        return await axiosInstance.put(`/personal-expenses/${expenseId}`, data)
}
async function getPersonalBalances(){
    return (await axiosInstance.get("/personal-expenses/balances")).data
}
export {fetchPersonalExpenses, createPersonalExpense, deletePersonalExpense, editPersonalExpense, getPersonalBalances}