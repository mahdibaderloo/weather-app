import type React from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useWeather } from "../../hooks/useWeather";
import { useWeatherCode } from "../../hooks/useWeatherCode";
import { weatherIcon } from "../../utils/weatherIcon";
import { useLocationStore } from "../../store/locationStore";
import { useDateStore } from "../../store/dateStore";
import { useThemeStore } from "../../store/themeStore";

import deleteIcon from "../../assets/delete.svg";
import deleteIconDark from "../../assets/delete-dark.svg";
import sunIcon from "../../assets/sunny.svg";

interface CityProp {
  name: string;
  lat: number;
  lon: number;
}

const SWIPE_THRESHOLD = 100;

export default function CityItem({ name, lat, lon }: CityProp) {
  const touchStartX = useRef<number | null>(null);
  const [translateX, setTranslateX] = useState(0);

  const navigate = useNavigate();
  const { selectedDate } = useDateStore();
  const { setLocation, setCity, removeCity, cityList } = useLocationStore();
  const { data, isLoading } = useWeather({ lat, lon, startDate: selectedDate });
  const { theme } = useThemeStore();
  const weather = useWeatherCode(
    data?.current.weathercode,
    data?.current.windspeed
  );
  const icon = weatherIcon(weather);

  function setLastCity() {
    const lastCity = cityList[cityList.length - 2];

    if (!lastCity) {
      setCity("Tehran");
      setLocation(35.6892, 51.389);
    }

    const { name, lat, lon } = lastCity;
    setCity(name);
    setLocation(lat, lon);
  }

  function handleSetLocation() {
    setLocation(lat, lon);
    setCity(name);
    navigate("/");
  }

  function handleDeleteCity(e: React.MouseEvent) {
    e.stopPropagation();
    removeCity(name);
    setLastCity();
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchMove(e: React.TouchEvent) {
    if (touchStartX.current === null) return;

    const currentX = e.touches[0].clientX;
    const diff = currentX - touchStartX.current;

    if (diff < 0) {
      setTranslateX(diff);
    }
  }

  function handleTouchEnd() {
    if (translateX < -SWIPE_THRESHOLD) {
      removeCity(name);
      setLastCity();
    }

    setTranslateX(0);
    touchStartX.current = null;
  }

  if (isLoading)
    return (
      <li className="w-full bg-linear-to-l from-violet-200/85 to-violet-900/85 dark:from-slate-950/95 dark:to-violet-950/60 flex items-center justify-center gap-4 rounded-full px-4 py-2 cursor-pointer overflow-hidden">
        <img src={sunIcon} alt="loading" className="w-8 xl:w-14 animate-spin" />
      </li>
    );

  return (
    <li
      onClick={handleSetLocation}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        transform: `translateX(${translateX}px)`,
        transition: touchStartX.current ? "none" : "transform 0.3s ease",
        backgroundColor: touchStartX.current ? "#9f0712" : "",
      }}
      className="w-full bg-linear-to-l from-violet-200/85 to-violet-900/85 dark:from-slate-950/95 dark:to-violet-950/60 flex items-center justify-between gap-4 rounded-full px-4 py-2 cursor-pointer overflow-hidden "
    >
      <p className="xl:text-3xl text-violet-200 font-bold md:w-60 xl:w-80 truncate text-left">
        {touchStartX.current ? "Swipe to remove" : name}
      </p>
      <div className="flex items-center md:w-50 gap-2">
        <img src={icon?.icon} alt="icon" className="w-8 xl:w-14" />
        <p className="xl:text-xl text-violet-950 font-semibold">{weather}</p>
      </div>
      <img
        src={theme === "dark" ? deleteIconDark : deleteIcon}
        className="hidden lg:block lg:w-5.5 xl:w-10 z-20"
        alt="delete icon"
        onClick={handleDeleteCity}
      />
    </li>
  );
}
