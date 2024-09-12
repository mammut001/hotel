import { create } from 'zustand';

export type WindowState = {
  openStatus: boolean;
  setOpen: () => void;
  setClose: () => void;
};

export const useChatWindowStore = create<WindowState>()((set) => ({
  openStatus: false,
  setOpen: () => set((state) => ({ openStatus: true })),
  setClose: () => set((state) => ({ openStatus: false })),
}))
