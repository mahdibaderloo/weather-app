import { useToggleUnitValue } from "../../hooks/toggleUnitValue";
import { useWeatherCode } from "../../hooks/useWeatherCode";
import { timeAmOrPm } from "../../utils/time";
import { weatherIcon } from "../../utils/weatherIcon";

interface HourlyProps {
  data: {
    temperature_2m: number[];
    time: string[];
    weathercode: number[];
  };
  hour: number;
}

export default function HourlyItem({ data, hour }: HourlyProps) {
  const weatherCode = data.weathercode[hour];
  const weatherName = useWeatherCode(weatherCode);
  const icon = weatherIcon(weatherName)?.icon;
  const time = data?.time[hour].slice(11);

  const temp = useToggleUnitValue(data?.temperature_2m[hour]);

  return (
    <li className="flex flex-col items-center gap-4 bg-linear-to-b from-violet-400/75 to-violet-600/40 dark:from-slate-950/30 dark:to-slate-950/95 rounded-2xl w-[20%] p-2">
      <img src={icon} alt="icon" className="w-24" />

      <div className="w-full flex items-center justify-center gap-2 ">
        <p className="bg-violet-300 text-violet-950 dark:bg-violet-950 dark:text-violet-300 font-medium py-1 px-2 rounded-xl w-1/2 truncate text-center">
          {weatherName === "Partly Cloudy" ? "Cloudy" : weatherName}
        </p>
        <p className="bg-violet-300 text-violet-950 dark:bg-violet-950 dark:text-violet-300 font-medium py-1 px-1 rounded-xl w-1/2 text-center">
          {timeAmOrPm(time)}
        </p>
      </div>

      <p className="text-violet-300 dark:text-slate-400 font-bold text-5xl">
        {Math.floor(temp)}°
      </p>
    </li>
  );
}
