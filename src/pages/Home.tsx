import { useEffect } from "react";
import DailyForecast from "../features/home/DailyForecast";
import HourlyForecast from "../features/home/HourlyForecast";
import InformationSection from "../features/home/InformationSection";
import { useWeather } from "../hooks/useWeather";
import { useWeatherCode } from "../hooks/useWeatherCode";
import { useLocationStore } from "../store/locationStore";
import { weatherIcon } from "../utils/weatherIcon";
import { useDateStore } from "../store/dateStore";
import AirQualityIndex from "./AirQualityIndex";
import { useGeolocation } from "../hooks/useGeoLocation";
import Loading from "../components/Loading";

export default function Home() {
  const { city, lat, lon, addCity } = useLocationStore();
  const { getLocation } = useGeolocation();
  const { selectedDate } = useDateStore();
  const { data, isLoading } = useWeather({ lat, lon, startDate: selectedDate });
  const weather = useWeatherCode(
    data?.current?.weathercode,
    data?.current?.windspeed
  );

  useEffect(() => {
    if (!lat || !lon) {
      getLocation();
    }
  }, [lat, lon, getLocation]);

  useEffect(() => {
    if (!city) return;
    addCity({ name: city, lat, lon });
  }, [city, lat, lon, addCity]);

  // if (!data || !weather) {
  //   return (
  //     <p className="flex justify-center items-center text-4xl font-bold w-full h-[50%] text-violet-950"></p>
  //   );
  // }

  if (isLoading) {
    return (
      <div className="w-full 2xl:h-[70%] h-full flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="lg:w-[87%] xl:w-[78%] xl:mx-auto h-full lg:relative p-2 md:p-2 lg:p-4 lg:pr-6 lg:mr-4 lg:ml-21 lg:mt-16 2xl:mt-0 2xl:w-full 2xl:ml-0 z-40">
      <img
        src={weatherIcon(weather)?.image}
        alt="Background"
        className="lg:w-[99%] rounded-4xl shadow lg:blur-[1px] lg:absolute inset-0 object-cover"
        loading="lazy"
      />

      <div className="w-full flex flex-col lg:flex-row justify-between gap-1 md:gap-2 lg:gap-1">
        <InformationSection
          city={city}
          data={data?.current}
          max={Math.ceil(data?.daily.temperature_2m_max[0])}
          min={Math.ceil(data?.daily.temperature_2m_min[0])}
        />

        <DailyForecast data={data?.daily} />
      </div>

      <HourlyForecast data={data?.hourly} />
      <div className="lg:hidden">
        <AirQualityIndex />
      </div>
      <div className="h-30 md:h-38 w-full lg:h-1 xl:hidden" />
    </div>
  );
}
