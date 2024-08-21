import {create} from 'zustand'

export type ModalState = {
    openStatus: boolean,
    setOpen: () => void,
    setClose: () => void,

}
export const useModalStore = create<ModalState>() ((set) =>({
    openStatus:false,
    setOpen: () => set((state) => ({openStatus:true})),
    setClose: () => set((state) => ({openStatus:false}))
}))