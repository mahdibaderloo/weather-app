import { create } from "zustand";

interface UnitType {
  unit: "c" | "f";
  toggleUnit: () => void;
}

export const useTemperatureUnitStore = create<UnitType>()((set) => ({
  unit: "c",
  toggleUnit: () => set((state) => ({ unit: state.unit === "c" ? "f" : "c" })),
}));
