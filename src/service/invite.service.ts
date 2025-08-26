import type { NewInvite } from "@/types";
import axiosInstance from "./axiosConfig";

async function getAllInvites(){
    return (await (axiosInstance.get("/invites/"))).data
}
async function sendInvite(data: NewInvite){
    return await axiosInstance.post("/invites/", data)
}
async function acceptInvite(inviteId:number){
    return (await axiosInstance.get(`/invites/${inviteId}/accept`))
}
async function declineInvite(inviteId:number){
    return (await axiosInstance.get(`/invites/${inviteId}/decline`))
}
export {
    getAllInvites, sendInvite, acceptInvite, declineInvite
}