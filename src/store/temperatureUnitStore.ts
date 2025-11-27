import { create } from "zustand";

interface UnitType {
  unit: "C" | "F";
  toggleUnit: () => void;
}

export const useTemperatureUnitStore = create<UnitType>()((set) => ({
  unit: "C",
  toggleUnit: () => set((state) => ({ unit: state.unit === "C" ? "F" : "C" })),
}));
