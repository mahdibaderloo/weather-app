import { useTemperatureUnitStore } from "../store/temperatureUnitStore";

export default function useWindSpeedUnit(value: number) {
  const { windUnit } = useTemperatureUnitStore();
  switch (windUnit) {
    case "km/h":
      return value.toFixed(1);

    case "m/s":
      return (value * 0.2777777778).toFixed(1);

    case "mph":
      return (value * 0.621371192).toFixed(1);
  }
}
