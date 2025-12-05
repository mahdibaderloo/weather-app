import type React from "react";
import { useModalStore } from "../../store/modalStore";
import { useTemperatureUnitStore } from "../../store/temperatureUnitStore";

type WindUnit = "km/h" | "m/s" | "mph";
type WindFullName =
  | "Kilometers per hour (km/h)"
  | "Meters per second (m/s)"
  | "Miles per hour (mph)";

const template = /(k?m?\/h?s?)|(mph)/;

export default function SettingsModal() {
  const { setClose } = useModalStore();
  const { windUnit, setWindUnit } = useTemperatureUnitStore();

  function handleSetUnit(e: React.MouseEvent<HTMLLIElement>) {
    const windUnit = template.exec(
      e.currentTarget.textContent
    )?.[0] as WindUnit;
    const windUnitFullName = template.exec(e.currentTarget.textContent)
      ?.input as WindFullName;
    setWindUnit(windUnit, windUnitFullName);
    setClose();
  }

  return (
    <ul className="w-fit flex-col mt-2 bg-linear-to-l from-violet-200 to-violet-900 dark:from-slate-950/95 dark:to-violet-950/60 rounded-3xl overflow-hidden absolute right-[50%] top-40">
      <li
        className={`text-violet-100 font-medium cursor-pointer py-4 px-6 hover:bg-violet-900 ${
          windUnit === "km/h"
            ? "bg-linear-to-l from-violet-800/85 to-violet-950/85"
            : ""
        }`}
        onClick={handleSetUnit}
      >
        Kilometers per hour (km/h)
      </li>
      <li
        className={`text-violet-100 font-medium cursor-pointer py-4 px-6 hover:bg-violet-900 ${
          windUnit === "m/s"
            ? "bg-linear-to-l from-violet-800/85 to-violet-950/85"
            : ""
        }`}
        onClick={handleSetUnit}
      >
        Meters per second (m/s)
      </li>
      <li
        className={`text-violet-100 font-medium cursor-pointer py-4 px-6 hover:bg-violet-900 ${
          windUnit === "mph"
            ? "bg-linear-to-l from-violet-800/85 to-violet-950/85"
            : ""
        }`}
        onClick={handleSetUnit}
      >
        Miles per hour (mph)
      </li>
    </ul>
  );
}
