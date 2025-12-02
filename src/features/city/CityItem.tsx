import type React from "react";

import { useNavigate } from "react-router-dom";
import { useWeather } from "../../hooks/useWeather";
import { useWeatherCode } from "../../hooks/useWeatherCode";
import { weatherIcon } from "../../utils/weatherIcon";
import { useLocationStore } from "../../store/locationStore";
import { useDateStore } from "../../store/dateStore";

import deleteIcon from "../../assets/delete.svg";
import deleteIconDark from "../../assets/delete-dark.svg";
import { useThemeStore } from "../../store/themeStore";

interface CityProp {
  name: string;
  lat: number;
  lon: number;
}

export default function CityItem({ name, lat, lon }: CityProp) {
  const navigate = useNavigate();
  const { setLocation, setCity, removeCity } = useLocationStore();
  const { selectedDate } = useDateStore();
  const { data, isLoading } = useWeather({ lat, lon, startDate: selectedDate });
  const { theme } = useThemeStore();
  const weather = useWeatherCode(
    data?.current.weathercode,
    data?.current.windspeed
  );
  const icon = weatherIcon(weather);

  function handleSetLocation() {
    setLocation(lat, lon);
    setCity(name);
    navigate("/");
  }

  function handleDeleteCity(e: React.MouseEvent) {
    e.stopPropagation();
    removeCity(name);
  }

  if (isLoading)
    return (
      <p className="flex justify-center items-center text-4xl font-bold w-full h-[50%] text-violet-950">
        Loading...
      </p>
    );

  return (
    <li
      onClick={handleSetLocation}
      className="w-full bg-linear-to-l from-violet-200/85 to-violet-900/85 dark:from-slate-950/95 dark:to-violet-950/60 flex items-center justify-between rounded-full px-4 py-2 cursor-pointer"
    >
      <p className="text-3xl text-violet-200 font-bold w-80 truncate text-left">
        {name}
      </p>
      <div className="flex items-center gap-2">
        <img src={icon?.icon} alt="icon" className="w-14" />
        <p className="text-xl text-violet-950 font-semibold">{weather}</p>
      </div>
      <img
        src={theme === "dark" ? deleteIconDark : deleteIcon}
        className="w-10 z-20"
        alt="delete icon"
        onClick={handleDeleteCity}
      />
    </li>
  );
}
