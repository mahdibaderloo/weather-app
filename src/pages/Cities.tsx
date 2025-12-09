import { Link } from "react-router-dom";
import { useLocationStore } from "../store/locationStore";
import CityItem from "../features/city/CityItem";

export default function Cities() {
  const { cityList } = useLocationStore();

  return (
    <div className="w-full lg:h-full flex flex-col p-2 gap-8">
      <div className="flex justify-between items-center lg:p-4">
        <p className="font-bold text-2xl lg:text-4xl text-violet-950 dark:text-violet-800">
          City List
        </p>
        <Link
          to="/map"
          className="hidden lg:block bg-linear-to-r from-violet-900/90 to-violet-950 dark:from-violet-900/90 dark:to-slate-950/30 text-violet-100 text-lg font-medium w-fit px-8 py-3 rounded-4xl cursor-pointer shadow hover:bg-violet-950 transition-all"
        >
          + Add City
        </Link>
      </div>
      <ul className="flex flex-col gap-2 overflow-y-auto">
        {cityList.length > 0 ? (
          cityList.map((city) => (
            <CityItem
              key={city.name}
              name={city.name}
              lat={city.lat}
              lon={city.lon}
            />
          ))
        ) : (
          <li
            key="there is no city"
            className="w-full bg-linear-to-l from-violet-200/85 to-violet-900/85 dark:from-slate-950/95 dark:to-violet-950/60 text-red-800 rounded-full flex items-center justify-center py-5 lg:text-2xl font-bold"
          >
            No cities added!
          </li>
        )}
      </ul>
      <Link
        to="/map"
        className="lg:hidden bg-linear-to-r from-violet-900/90 to-violet-950 dark:from-violet-900/90 dark:to-slate-900/90 text-violet-100 font-medium w-full text-center px-8 py-3 rounded-4xl cursor-pointer shadow hover:bg-violet-950 transition-all"
      >
        + Add City
      </Link>
      <div className="w-full h-30" />
    </div>
  );
}
