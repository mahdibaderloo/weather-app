import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const themeStore = create<Theme>()(
  persist(
    (set) => ({
      theme: "light",

      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "weather-theme",
    }
  )
);
