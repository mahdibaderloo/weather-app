import { useToggleUnitValue } from "../../hooks/useToggleUnitValue";
import { useWeatherCode } from "../../hooks/useWeatherCode";
import { getNextDay } from "../../utils/date";
import { weatherIcon } from "../../utils/weatherIcon";

interface DailyProps {
  data: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weathercode: number[];
  };
  day: number;
}

export default function DailyItem({ data, day }: DailyProps) {
  const weatherCode = data.weathercode[day];
  const weatherName = useWeatherCode(weatherCode);
  const icon = weatherIcon(weatherName)?.icon;

  const maxTemp = useToggleUnitValue(data.temperature_2m_max[day]);
  const minTemp = useToggleUnitValue(data.temperature_2m_min[day]);

  return (
    <li className="flex items-center justify-between text-violet-100 lg:text-violet-300 dark:text-slate-400 lg:text-xl font-semibold py-4 lg:py-3 xl:py-2 2xl:py-4">
      <p className="w-20 lg:text-sm">{getNextDay(day)}</p>

      <div className="flex items-center">
        <img
          src={icon}
          alt="icon"
          className="w-10 lg:w-7 xl:w-10 2xl:w-16 mr-2"
        />
        <span className="dark:text-violet-800 xl:text-shadow-[0_0_2px] lg:text-sm text-shadow-violet-700">
          {weatherName === "Partly Cloudy" ? "Cloudy" : weatherName}
        </span>
      </div>

      <p className="lg:text-[16px] xl:text-sm">
        {Math.floor(maxTemp)} /{" "}
        <span className="text-violet-700 lg:text-violet-400 dark:text-slate-600">
          {Math.floor(minTemp)}
        </span>
      </p>
    </li>
  );
}
