import { Link } from "react-router-dom";
import WeatherMap from "../features/map/WeatherMap";
import { useLocationStore } from "../store/locationStore";

export default function Map() {
  const setLocation = useLocationStore((state) => state.setLocation);

  function handleGetLocation() {
    if (!navigator.geolocation) {
      alert("Your browser does not support location!");
      return;
    }

    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation(pos.coords.latitude, pos.coords.longitude);
    });
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center">
        <button
          onClick={handleGetLocation}
          className="w-full text-center bg-linear-to-r from-violet-900/90 to-violet-800/65 dark:from-violet-900/90 dark:to-slate-900/90 lg:from-violet-900/90 lg:to-violet-800/65 lg:dark:from-violet-900/90 lg:dark:to-slate-950/30 text-violet-100 lg:text-lg font-medium lg:w-fit px-8 py-3 rounded-4xl cursor-pointer shadow hover:bg-violet-950 transition-all"
        >
          Get My Location
        </button>
        <Link
          to="/"
          className="w-full text-center bg-linear-to-r from-violet-900/90 to-violet-800/65 dark:from-slate-900/90 dark:to-violet-900/90 lg:from-violet-900/90 lg:to-violet-800/65 lg:dark:from-slate-950/30 lg:dark:to-violet-900/90 text-violet-100 lg:text-lg font-medium lg:w-fit px-8 py-3 rounded-4xl cursor-pointer shadow hover:bg-violet-950 transition-all"
        >
          Get Information About This City
        </Link>
      </div>

      <WeatherMap />
      <div className="w-full h-30" />
    </>
  );
}
