import type { NewGroup } from "@/types"
import axiosInstance from "./axiosConfig"

async function getGroups(){
    return (await axiosInstance.get("/groups/")).data
}
async function getGroupById(groupId:number){
    return (await axiosInstance.get(`/groups/${groupId}`)).data
}
async function createGroup(data: NewGroup){
    return await axiosInstance.post("/groups/",data)
}
async function updateGroup(groupId:number, data:NewGroup){
    return await axiosInstance.put(`/groups/${groupId}`, data)
}
async function deleteGroup(groupId:number){
    return await axiosInstance.delete(`/groups/${groupId}`)
}
async function leaveGroup(groupId:number) {
    return await axiosInstance.put(`/groups/leave/${groupId}`)
}
async function removeMemberGroup(groupId:number, memberId:string) {
    return await axiosInstance.put(`/groups/remove/${groupId}/user/${memberId}`)
}
export {getGroups, getGroupById, createGroup, updateGroup, deleteGroup, 
    leaveGroup as leaveMemberGroup,
    removeMemberGroup
}