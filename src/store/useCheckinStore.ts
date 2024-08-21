import {create} from 'zustand'
import dayjs,{Dayjs} from "dayjs";
type DateEntryStore = {
  id: number,
  date: dayjs.Dayjs
  label:string,
}

type CheckinStore = {
  date: DateEntryStore[]
  updateDate:(id:number,newDate:dayjs.Dayjs) => void,
  resetDate:(id:number) => void,
  phoneNumber:string,
  updatePhoneNumber:(phoneNumber:string) => void,
  resetPhoneNumber:() => void,

}

const initialDates:DateEntryStore[] = [
  {id:0, date: dayjs('2001-01-01'), label:'CheckIn'},
  {id:1, date: dayjs('2001-01-02'), label:'CheckOut'},
  {id:2, date: dayjs('2001-01-03'), label:'CheckIn_Mobile'},
  {id:3, date: dayjs('2001-01-04'), label:'CheckOut_Mobile'},

]



export const useCheckinStore  = create<CheckinStore>((set)=>({
  date: initialDates,
  phoneNumber: '',
  updatePhoneNumber: (phoneNumber:string) => set({phoneNumber:phoneNumber}),
  resetPhoneNumber: () => set({phoneNumber:''}),
  updateDate:(id:number,newDate:dayjs.Dayjs | null)=>set((state)=>({
    date: state.date.map((entry)=>
      entry.id ===id ? {...entry, date: newDate ?? entry.date}: entry)
  })),
  resetDate: (id) => set((state) => ({
    date: state.date.map((entry) =>
      entry.id === id ? { ...entry, date: initialDates[id].date } : entry
    ),
  })),
}))


type submitCheckStore = {
  isValid:boolean,
  setTrue: () => void,
  setFalse: () => void,
}
export const useSubmitCheckStore = create<submitCheckStore>((set)=>({
  isValid: true,
  setTrue: () => set({isValid: true}),
  setFalse: () => set({isValid: false}),
}))
