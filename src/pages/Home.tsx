import { useEffect } from "react";
import DailyForecast from "../features/home/DailyForecast";
import HourlyForecast from "../features/home/HourlyForecast";
import InformationSection from "../features/home/InformationSection";
import { useWeather } from "../hooks/useWeather";
import { useWeatherCode } from "../hooks/useWeatherCode";
import { useLocationStore } from "../store/LocationStore";
import { weatherIcon } from "../utils/weatherIcon";

export default function Home() {
  const { city, lat, lon, addCity } = useLocationStore();
  const { data, isLoading } = useWeather(lat, lon);
  const weather = useWeatherCode(
    data?.current?.weathercode,
    data?.current?.windspeed
  );

  useEffect(() => {
    if (!city) return;
    addCity({ name: city, lat, lon });
  }, [city, lat, lon, addCity]);

  if (isLoading) {
    return (
      <p className="flex justify-center items-center text-4xl font-bold w-full h-[50%] text-violet-950">
        Loading...
      </p>
    );
  }

  return (
    <div className="w-full h-full relative p-8">
      <img
        src={weatherIcon(weather)?.image}
        alt="Background"
        className="w-[99%] rounded-4xl shadow blur-[1px] absolute inset-0 object-cover"
      />

      <div className="w-full flex justify-between gap-1">
        <InformationSection
          city={city}
          data={data?.current}
          max={Math.ceil(data?.daily.temperature_2m_max[0])}
          min={Math.ceil(data?.daily.temperature_2m_min[0])}
        />

        <DailyForecast data={data?.daily} />
      </div>

      <HourlyForecast data={data?.hourly} />
    </div>
  );
}
