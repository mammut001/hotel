import {create} from 'zustand'

export type RegisterState = {
    name:string,
    phoneNumber:string,
    email:string,
    setRegisterInfo:(name:string,phoneNumber:string,email:string)=>void,
    reset:()=>void,
}

export const useRegisterStore = create<RegisterState>() ((set)=>({
    name:"defaultName",
    phoneNumber:"123456789",
    email:"default@example.com",
    setRegisterInfo:(name:string,phoneNumber:string,email:string)=>set({name:name,phoneNumber:phoneNumber,email:email}),
    reset:()=>set({name:"defaultName",phoneNumber:"123456789",email:"default@example.com"})
}))