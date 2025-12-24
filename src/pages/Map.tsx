import { Link } from "react-router-dom";
import WeatherMap from "../features/map/WeatherMap";
import { useGeolocation } from "../hooks/useGeoLocation";

export default function Map() {
  const { getLocation } = useGeolocation();

  function handleGetLocation() {
    getLocation();
  }

  return (
    <div className="lg:w-[88%] lg:h-full flex flex-col p-2 gap-4 lg:p-4 lg:pr-1.5 lg:mr-4 lg:ml-18 lg:mt-8 2xl:mt-0 2xl:w-full 2xl:ml-0">
      <div className="w-full flex flex-col md:flex-row gap-4 lg:gap-0 justify-between items-center lg:p-4">
        <button
          onClick={handleGetLocation}
          className="w-full text-center bg-linear-to-r from-violet-900/90 to-violet-800/65 dark:from-violet-900/90 dark:to-slate-900/90 lg:from-violet-900/90 lg:to-violet-800/65 lg:dark:from-violet-900/90 lg:dark:to-slate-950/30 text-violet-100 lg:text-sm xl:text-lg font-medium lg:w-fit px-8 py-3 md:py-2 rounded-4xl cursor-pointer shadow hover:bg-violet-950 transition-all"
        >
          Get My Location
        </button>
        <Link
          to="/"
          className="w-full text-center bg-linear-to-r from-violet-900/90 to-violet-800/65 dark:from-slate-900/90 dark:to-violet-900/90 lg:from-violet-900/90 lg:to-violet-800/65 lg:dark:from-slate-950/30 lg:dark:to-violet-900/90 text-violet-100 lg:text-sm xl:text-lg font-medium lg:w-fit px-8 py-3 md:py-2 rounded-4xl cursor-pointer shadow hover:bg-violet-950 transition-all"
        >
          Get Weather
        </Link>
      </div>

      <WeatherMap />
      <div className="w-full h-30 lg:hidden" />
    </div>
  );
}
