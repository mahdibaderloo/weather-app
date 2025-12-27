import { useToggleUnitValue } from "../../hooks/useToggleUnitValue";
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
    <li className="flex flex-col items-center gap-4 lg:gap-1 2xl:gap-6 bg-linear-to-b from-violet-400/75 to-violet-600/40 dark:from-slate-950/30 dark:to-slate-950/95 rounded-2xl w-[20%] p-2 xl:p-2">
      <img
        src={icon}
        alt="icon"
        className="w-10 md:w-14 lg:w-8.5 xl:w-14 2xl:w-24"
      />

      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-2 text-sm md:text-[16px] 2xl:text-lg">
        <p className="bg-violet-300 text-violet-950 dark:bg-violet-950 dark:text-violet-300 font-medium py-1 lg:py-0.5 px-2 rounded-xl md:text-sm lg:text-[14px] lg:w-1/2 xl:truncate text-center">
          {weatherName === "Partly Cloudy" ? "Cloudy" : weatherName}
        </p>
        <p className="hidden 2xl:block bg-violet-300 text-violet-950 dark:bg-violet-950 dark:text-violet-300 font-medium py-1 px-1 rounded-xl lg:w-1/2 text-center">
          {timeAmOrPm(time)}
        </p>
        <p className="text-violet-950 dark:text-violet-300 md:bg-violet-300 md:text-violet-950 md:dark:bg-violet-950 md:dark:text-violet-300 font-medium md:text-sm lg:text-[14px] lg:w-1/2 py-1 lg:py-0.5 px-2 rounded-xl text-center 2xl:hidden">
          {time}
        </p>
      </div>

      <p className="text-violet-300 dark:text-slate-400 font-bold text-xl md:text-2xl lg:text-xl xl:text-3xl">
        {Math.floor(temp)}°
      </p>
    </li>
  );
}
