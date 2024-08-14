
import {create} from 'zustand'

export type Lang = "english" | "french"

export type Language ={
  language: string,
  updateLang: (lang:Lang) =>void
}

export const useLanguageStore = create<Language>() ((set) =>({
  language:"french",
  updateLang:(lang:Lang) => set({language:lang})
}))
type selectedDateStore = {
  date:string,
  updateDate: (date:string) =>void
}

export const useSelectedDateStore = create<selectedDateStore>() ((set)=> ({
  date:'',
  updateDate: (newDate: string) => set({date:newDate})
}))
