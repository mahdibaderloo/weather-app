import { Link } from "react-router-dom";
import { useLocationStore } from "../store/LocationStore";
import { useWeather } from "../hooks/useWeather";
import { useWeatherCode } from "../hooks/useWeatherCode";
import { weatherIcon } from "../utils/weatherIcon";

export default function Cities() {
  const { cityList } = useLocationStore();
  return (
    <div className="w-full h-full flex flex-col p-2 gap-8">
      <div className="flex justify-between items-center p-4">
        <p className="font-bold text-4xl text-violet-950">City List</p>
        <Link
          to="/map"
          className="bg-linear-to-r from-violet-900/90 to-violet-800/65 text-violet-100 text-lg font-medium w-fit px-8 py-3 rounded-4xl cursor-pointer shadow hover:bg-violet-950 transition-all"
        >
          + Add City
        </Link>
      </div>
      <ul className="flex flex-col gap-2 overflow-y-auto">
        {cityList.length > 0 ? (
          cityList.map((city) => {
            const { data, isLoading } = useWeather(city.lat, city.lon);
            const weather = useWeatherCode(
              data?.current.weathercode,
              data?.current.windspeed
            );
            const icon = weatherIcon(weather);

            if (isLoading)
              return (
                <p
                  key={city.name}
                  className="flex justify-center items-center text-4xl font-bold w-full h-[50%] text-violet-950"
                >
                  Loading...
                </p>
              );

            return (
              <li
                key={city.name}
                className="w-full bg-linear-to-l from-violet-200/85 to-violet-900/85 flex items-center justify-between rounded-full px-4 py-2 cursor-pointer"
              >
                <p className="text-3xl text-violet-200 font-bold w-80 truncate text-left">
                  {city.name}
                </p>
                <div className="flex items-center gap-2">
                  <img src={icon?.icon} alt="icon" className="w-14" />
                  <p className="text-xl text-violet-950 font-semibold">
                    {weather}
                  </p>
                </div>
                <img src="" alt="delete icon" />
              </li>
            );
          })
        ) : (
          <li className="w-full bg-linear-to-l from-violet-200/85 to-violet-900/85 rounded-full flex items-center justify-center p-2 cursor-pointer text-2xl font-bold">
            <Link to="/map">+ Add city</Link>
          </li>
        )}
      </ul>
    </div>
  );
}
