import { create } from "zustand";
import { persist } from "zustand/middleware";

type Wind = "km/h" | "m/s" | "mph";
type WindFull =
  | "Kilometers per hour (km/h)"
  | "Meters per second (m/s)"
  | "Miles per hour (mph)";

interface UnitType {
  unit: "C" | "F";
  windUnit: Wind;
  windUnitFullName: WindFull;
  toggleUnit: () => void;
  setWindUnit: (unit: Wind, unitFullName: WindFull) => void;
}

export const useTemperatureUnitStore = create<UnitType>()(
  persist(
    (set) => ({
      unit: "C",
      windUnit: "km/h",
      windUnitFullName: "Kilometers per hour (km/h)",
      toggleUnit: () =>
        set((state) => ({
          unit: state.unit === "C" ? "F" : "C",
        })),
      setWindUnit: (unit, unitFullName) =>
        set({ windUnit: unit, windUnitFullName: unitFullName }),
    }),
    { name: "temp-unit" }
  )
);
