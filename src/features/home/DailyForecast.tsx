import { useWeatherCode } from "../../hooks/useWeatherCode";
import { getNextDay } from "../../utils/date";
import { weatherIcon } from "../../utils/weatherIcon";

interface DataProp {
  data: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weathercode: number[];
  };
}

const days = [1, 2, 3];

export default function DailyForecast({ data }: DataProp) {
  return (
    <section className="relative z-50 p-4 bg-linear-to-r from-violet-400/35 to-violet-800/60 rounded-4xl w-[49%] h-fit flex flex-col">
      <p className="font-semibold text-xl text-violet-200">3-Day Forecast</p>

      <ul className="mt-6 divide-y-2 divide-violet-950 mb-7">
        {days.map((day) => {
          const weatherCode = data.weathercode[day];
          const weatherName = useWeatherCode(weatherCode);
          const icon = weatherIcon(weatherName)?.icon;

          return (
            <li
              key={day}
              className="flex items-center justify-between text-violet-300 text-xl font-semibold py-4"
            >
              <p className="w-20">{getNextDay(day)}</p>

              <div className="flex items-center">
                <img src={icon} alt="icon" className="w-14 mr-2" />
                <span>
                  {weatherName === "Partly Cloudy" ? "Cloudy" : weatherName}
                </span>
              </div>

              <p>
                {Math.floor(data.temperature_2m_max[day])} /{" "}
                <span className="text-violet-400">
                  {Math.floor(data.temperature_2m_min[day])}
                </span>
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
