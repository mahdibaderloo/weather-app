import { useToggleUnitValue } from "../../hooks/toggleUnitValue";
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
    <li className="flex items-center justify-between text-violet-300 dark:text-slate-400 text-xl font-semibold py-4">
      <p className="w-20">{getNextDay(day)}</p>

      <div className="flex items-center">
        <img src={icon} alt="icon" className="w-14 mr-2" />
        <span className="dark:text-violet-800 text-shadow-[0_0_2px] text-shadow-violet-700">
          {weatherName === "Partly Cloudy" ? "Cloudy" : weatherName}
        </span>
      </div>

      <p>
        {Math.floor(maxTemp)} /{" "}
        <span className="text-violet-400 dark:text-slate-600">
          {Math.floor(minTemp)}
        </span>
      </p>
    </li>
  );
}
