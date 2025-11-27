import { useTemperatureUnitStore } from "../store/temperatureUnitStore";

export function toggleUnitValue(value: number) {
  const { unit } = useTemperatureUnitStore();

  if (unit === "F") {
    const f = value * 1.8 + 32;
    return f;
  } else {
    return value;
  }
}
