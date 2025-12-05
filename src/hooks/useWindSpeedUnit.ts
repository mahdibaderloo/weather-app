import { useTemperatureUnitStore } from "../store/temperatureUnitStore";

export default function useWindSpeedUnit(value: number) {
  const { windUnit } = useTemperatureUnitStore();
  switch (windUnit) {
    case "km/h":
      return value;

    case "m/s":
      return (value * 0.2777777778).toFixed(3);

    case "mph":
      return (value * 0.621371192).toFixed(3);
  }
}
