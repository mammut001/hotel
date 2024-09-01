import dayjs from "dayjs";
import { create } from "zustand";

export type ConfirmationObject = {
  id?:number //optional
  end: string;
  start: string;
  phoneNumber: string;
  uuid: string;
};

type ConfirmationStoreState = {
  confirmationObject: ConfirmationObject[]
  loadConfirmationObjectsOnStart: (confirmations: ConfirmationObject[]) => Promise<void>
  addItem(confirmation: ConfirmationObject): void
};

export const useConfirmationStore = create<ConfirmationStoreState>((set) => ({
  confirmationObject: [],
  loadConfirmationObjectsOnStart: async (confirmations: ConfirmationObject[]) => {
    set((state) => ({
      confirmationObject: [...state.confirmationObject, ...confirmations]
    }));
  },
  addItem(confirmation: ConfirmationObject) {
    set((state)=>({
      confirmationObject: [...state.confirmationObject, confirmation]
    }))

  }
}));
