import { Link } from "react-router-dom";
import { useLocationStore } from "../store/LocationStore";
import CityItem from "../features/city/CityItem";

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
          cityList.map((city) => (
            <CityItem name={city.name} lat={city.lat} lon={city.lon} />
          ))
        ) : (
          <li className="w-full bg-linear-to-l from-violet-200/85 to-violet-900/85 rounded-full flex items-center justify-center p-2 cursor-pointer text-2xl font-bold">
            No cities added. <Link to="/map">+ Add city</Link>
          </li>
        )}
      </ul>
    </div>
  );
}
