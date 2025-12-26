import { Link } from "react-router-dom";
import { useLocationStore } from "../store/locationStore";
import CityItem from "../features/city/CityItem";

export default function Cities() {
  const { cityList } = useLocationStore();

  return (
    <div className="lg:w-[88%] xl:w-[92%] lg:h-full flex flex-col p-2 gap-8 lg:p-4 lg:pr-6 lg:mr-4 lg:ml-18 lg:mt-8 xl:mt-10 2xl:mt-0 2xl:w-full 2xl:ml-0">
      <div className="flex justify-between items-center lg:p-4">
        <p className="font-bold text-2xl text-violet-950 dark:text-violet-800">
          City List
        </p>
        <Link
          to="/map"
          className="hidden md:block bg-linear-to-r from-violet-900/90 to-violet-950 dark:from-violet-900/90 dark:to-slate-950/30 text-violet-100 font-medium w-fit px-8 py-3 md:py-2 lg:text-sm rounded-4xl cursor-pointer shadow hover:bg-violet-950 transition-all"
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
            className="w-full bg-linear-to-l from-violet-200/85 to-violet-900/85 dark:from-slate-950/95 dark:to-violet-950/60 text-red-800 rounded-full flex items-center justify-center py-5 xl:text-2xl font-bold"
          >
            No cities added!
          </li>
        )}
      </ul>
      <Link
        to="/map"
        className="md:hidden bg-linear-to-r from-violet-900/90 to-violet-950 dark:from-violet-900/90 dark:to-slate-900/90 text-violet-100 font-medium w-full text-center px-8 py-3 rounded-4xl cursor-pointer shadow hover:bg-violet-950 transition-all"
      >
        + Add City
      </Link>
      <div className="w-full h-30 lg:h-2" />
    </div>
  );
}
