import { useWeatherCode } from "../../hooks/useWeatherCode";
import { getIndexesHoursLater } from "../../utils/date";
import { weatherIcon } from "../../utils/weatherIcon";

interface DataProp {
  data: {
    temperature_2m: number[];
    time: string[];
    weathercode: number[];
  };
}

export default function HourlyForecast({ data }: DataProp) {
  return (
    <section className="relative z-50 p-4 bg-linear-to-b from-violet-400/35 to-violet-800/60 rounded-4xl w-full h-fit flex flex-col gap-6 justify-between mt-6">
      <p className="font-semibold text-xl text-violet-200">Today's Forecast</p>

      <ul className="flex items-center justify-center gap-2">
        {getIndexesHoursLater(data.time).map((hour) => {
          const weatherCode = data.weathercode[hour];
          const weatherName = useWeatherCode(weatherCode);
          const icon = weatherIcon(weatherName)?.icon;

          return (
            <li
              key={hour}
              className="flex flex-col items-center gap-4 bg-linear-to-b from-violet-400/75 to-violet-600/40 rounded-2xl w-[20%] p-2"
            >
              <img src={icon} alt="icon" className="w-24" />

              <div className="w-full flex items-center justify-center gap-2 ">
                <p className="bg-violet-300 text-violet-950 font-medium py-1 px-2 rounded-xl w-1/2 truncate text-center">
                  {weatherName === "Partly Cloudy" ? "Cloudy" : weatherName}
                </p>
                <p className="bg-violet-300 text-violet-950 font-medium py-1 px-1 rounded-xl w-1/2 text-center">
                  {hour > 11
                    ? `${hour}:00 pm`
                    : hour < 10
                    ? `0${hour}:00 am`
                    : `${hour}:00 am`}
                </p>
              </div>

              <p className="text-violet-300 font-bold text-5xl">
                {Math.floor(data?.temperature_2m[hour])}°
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
