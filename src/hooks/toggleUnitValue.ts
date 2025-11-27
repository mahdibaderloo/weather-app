import { useTemperatureUnitStore } from "../store/temperatureUnitStore";

export function useToggleUnitValue(value: number) {
  const unit = useTemperatureUnitStore((state) => state.unit);

  if (unit === "F") {
    return value * 1.8 + 32;
  } else {
    return value;
  }
}
