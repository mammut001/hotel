import {create} from 'zustand'

export type OTPTextFieldStore = {
  buttonTextIndex: number[],
  openStatus: boolean,
  setOpen: () => void,
  setClose: () => void,

}
export const useOTPTextFieldStore = create<OTPTextFieldStore>() ((set) =>({
  openStatus:false,
  buttonTextIndex:[0, 1],
  setOpen: () => set((state) => ({openStatus:true})),
  setClose: () => set((state) => ({openStatus:false}))
}))