import { useState } from "react";
import WeatherMap from "../features/map/WeatherMap";

export default function Map() {
  const [coords, setCoords] = useState<{
    lat: number;
    lon: number;
    city?: string;
  }>({
    lat: 35.6892,
    lon: 51.389,
    city: "Tehran",
  });

  function handleGetLocation() {
    if (!navigator.geolocation) {
      alert("Your browser does not support location!");
      return;
    }

    navigator.geolocation.getCurrentPosition((pos) => {
      setCoords({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      });
    });
  }

  return (
    <>
      <button
        onClick={handleGetLocation}
        className="bg-linear-to-r from-violet-900/90 to-violet-800/65 text-violet-100 text-lg font-medium w-fit px-8 py-3 rounded-4xl cursor-pointer shadow hover:bg-violet-950 transition-all"
      >
        Get My Location
      </button>

      <WeatherMap lat={coords.lat} lon={coords.lon} />
    </>
  );
}
