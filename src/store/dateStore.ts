import { create } from "zustand";

interface Date {
  date: string;
  setDate: (date: string) => void;
}

export const useDateStore = create<Date>()((set) => ({
  date: new Date().getDate().toLocaleString(),

  setDate: (date) => set({ date }),
}));
