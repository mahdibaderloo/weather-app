import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UnitType {
  unit: "C" | "F";
  toggleUnit: () => void;
}

export const useTemperatureUnitStore = create<UnitType>()(
  persist(
    (set) => ({
      unit: "C",
      toggleUnit: () =>
        set((state) => ({
          unit: state.unit === "C" ? "F" : "C",
        })),
    }),
    { name: "temp-unit" }
  )
);
