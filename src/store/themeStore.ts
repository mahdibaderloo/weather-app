import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export const useThemeStore = create<Theme>()(
  persist(
    (set) => ({
      theme: "light",

      toggleTheme: () =>
        set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
    }),
    {
      name: "weather-theme",
    }
  )
);
