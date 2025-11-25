import { Link } from "react-router-dom";
import WeatherMap from "../features/map/WeatherMap";
import { useLocationStore } from "../store/LocationStore";

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
      <div className="flex justify-between items-center">
        <button
          onClick={handleGetLocation}
          className="bg-linear-to-r from-violet-900/90 to-violet-800/65 text-violet-100 text-lg font-medium w-fit px-8 py-3 rounded-4xl cursor-pointer shadow hover:bg-violet-950 transition-all"
        >
          Get My Location
        </button>
        <Link
          to="/"
          className="bg-linear-to-r from-violet-900/90 to-violet-800/65 text-violet-100 text-lg font-medium w-fit px-8 py-3 rounded-4xl cursor-pointer shadow hover:bg-violet-950 transition-all"
        >
          Get Information About This City
        </Link>
      </div>

      <WeatherMap />
    </>
  );
}
