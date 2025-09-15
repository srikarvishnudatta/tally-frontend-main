import type { LoginData, NewServerUser, SignupData } from "@/types"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import {auth} from "@/firebase/firebase"
import { FirebaseError } from "firebase/app"
import axiosInstance from "./axiosConfig"
async function login({email, password}:LoginData){
    try {
        const response = await signInWithEmailAndPassword(auth, email, password)
        return response.user
    } catch (error) {
        if(error instanceof FirebaseError){
            throw new Error("Either the credentials are bad or account does not exist.")
        }else{
            throw new Error("Some unknown error")
        }
    }
}
async function signup(data:SignupData){
    try {
        const response = await createUserWithEmailAndPassword(auth, data.email, data.password)
        const user = response.user
        await updateProfile(user, {
            displayName: `${data.firstName} ${data.lastName}`
        })
        await createIfNotExists({firstName:data.firstName, lastName:data.lastName})
    } catch (error) {
        if(error instanceof FirebaseError){
            throw new Error("Account Already Exists!")
        }else{
            throw new Error("Internal Server Error")
        }
    }
}
async function createIfNotExists(data: NewServerUser){
    return await axiosInstance.post("/user/create-if-not-exists", data)
}
export {login, signup}