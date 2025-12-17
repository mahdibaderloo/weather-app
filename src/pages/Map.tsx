import { Link, useNavigate } from "react-router-dom";
import WeatherMap from "../features/map/WeatherMap";
import { useLocationStore } from "../store/locationStore";

export default function Map() {
  const navigate = useNavigate();
  const { setLocation, setLiveLocation } = useLocationStore();

  function handleGetLocation() {
    if (!navigator.geolocation) {
      alert("Your browser does not support location!");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;

        setLocation(latitude, longitude);
        setLiveLocation({ lat: latitude, lon: longitude });

        navigate("/");
      },
      (error) => {
        alert("Location access denied");
        console.error(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
      }
    );
  }

  return (
    <>
      <div className="lg:w-[86%] flex flex-col md:flex-row gap-4 lg:gap-0 justify-between items-center lg:p-0 lg:pr-6 lg:mr-4 lg:ml-30 lg:mt-30 2xl:mt-0 2xl:w-full 2xl:ml-0">
        <button
          onClick={handleGetLocation}
          className="w-full text-center bg-linear-to-r from-violet-900/90 to-violet-800/65 dark:from-violet-900/90 dark:to-slate-900/90 lg:from-violet-900/90 lg:to-violet-800/65 lg:dark:from-violet-900/90 lg:dark:to-slate-950/30 text-violet-100 xl:text-lg font-medium lg:w-fit px-8 py-3 rounded-4xl cursor-pointer shadow hover:bg-violet-950 transition-all"
        >
          Get My Location
        </button>
        <Link
          to="/"
          className="w-full text-center bg-linear-to-r from-violet-900/90 to-violet-800/65 dark:from-slate-900/90 dark:to-violet-900/90 lg:from-violet-900/90 lg:to-violet-800/65 lg:dark:from-slate-950/30 lg:dark:to-violet-900/90 text-violet-100 xl:text-lg font-medium lg:w-fit px-8 py-3 rounded-4xl cursor-pointer shadow hover:bg-violet-950 transition-all"
        >
          Get Information About This City
        </Link>
      </div>

      <WeatherMap />
      <div className="w-full h-30 lg:hidden" />
    </>
  );
}
