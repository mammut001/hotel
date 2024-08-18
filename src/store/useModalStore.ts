import {create} from 'zustand'

export type ModalState = {
    openStatus: boolean,
    setOpen: () => void,
}
export const useModalStore = create<ModalState>() ((set) =>({
    openStatus:false,
    setOpen: () => set((state) => ({openStatus:!state.openStatus}))
}))