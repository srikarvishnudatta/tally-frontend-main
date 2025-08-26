import axiosInstance from "./axiosConfig";

async function getGroupExpenses(groupId: number){
    return (await axiosInstance.get(`/expenses/${groupId}`)).data
}

export {
    getGroupExpenses
}