import { useWeatherCode } from "../../hooks/useWeatherCode";
import { weatherIcon } from "../../utils/weatherIcon";

interface DataProp {
  data: {
    temperature_2m: number[];
    time: string[];
    weathercode: number[];
  };
}

const hours = [1, 3, 5, 7, 9];

export default function HourlyForecast({ data }: DataProp) {
  return (
    <section className="relative z-50 p-4 bg-linear-to-b from-violet-400/35 to-violet-800/60 rounded-4xl w-full h-fit flex flex-col gap-6 justify-between mt-6">
      <p className="font-semibold text-xl text-violet-200">Today's Forecast</p>

      <ul className="flex items-center justify-center gap-2">
        {hours.map((hour) => {
          const weatherCode = data.weathercode[hour];
          const weatherName = useWeatherCode(weatherCode);
          const icon = weatherIcon(weatherName)?.icon;

          return (
            <li
              key={hour}
              className="flex flex-col items-center gap-2 bg-linear-to-b from-violet-400/75 to-violet-600/40 rounded-2xl w-fit p-4"
            >
              <img src={icon} alt="icon" className="w-24" />

              <div className="flex items-center justify-center gap-2 ">
                <p className="bg-violet-300 text-violet-950 font-medium py-1 px-2 rounded-xl">
                  {weatherName}
                </p>
                <p className="bg-violet-300 text-violet-950 font-medium py-1 px-2 rounded-xl">
                  12:00 pm
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
