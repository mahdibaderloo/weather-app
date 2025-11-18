import { NavLink } from "react-router-dom";

import logoImage from "../assets/weather-app.png";
import calendarImage from "../assets/calendar.svg";
import listImage from "../assets/list.svg";
import mapImage from "../assets/map.svg";
import settingsImage from "../assets/settings.svg";

export default function Navbar() {
  return (
    <nav className="w-22 h-[90%] bg-linear-to-r from-violet-600/75 to-violet-500/50 px-4 rounded-full">
      <div className="blur-2xl" />
      <ul className="w-full h-full flex flex-col gap-8 pt-2">
        <li className="flex flex-col items-center justify-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-linear-to-r from-violet-500 to-violet-600 p-4 w-18 rounded-full shadow"
                : "bg-linear-to-r from-violet-500 to-violet-300 p-4 w-18 rounded-full transition-all delay-150"
            }
          >
            <img src={logoImage} alt="Logo" />
          </NavLink>
          <span>Home</span>
        </li>

        <li className="flex flex-col items-center justify-center">
          <NavLink
            to="/cities"
            className={({ isActive }) =>
              isActive
                ? "bg-linear-to-r from-violet-500 to-violet-600 p-4 w-18 rounded-full shadow"
                : "bg-linear-to-r from-violet-500 to-violet-300 p-4 w-18 rounded-full transition-all delay-150"
            }
          >
            <img src={listImage} alt="Logo" />
          </NavLink>
          <span>Cities</span>
        </li>

        <li className="flex flex-col items-center justify-center">
          <NavLink
            to="/map"
            className={({ isActive }) =>
              isActive
                ? "bg-linear-to-r from-violet-500 to-violet-600 p-4 w-18 rounded-full shadow"
                : "bg-linear-to-r from-violet-500 to-violet-300 p-4 w-18 rounded-full transition-all delay-150"
            }
          >
            <img src={mapImage} alt="Logo" />
          </NavLink>
          <span>Map</span>
        </li>

        <li className="flex flex-col items-center justify-center">
          <NavLink
            to="/calendar"
            className={({ isActive }) =>
              isActive
                ? "bg-linear-to-r from-violet-500 to-violet-600 p-4 w-18 rounded-full shadow"
                : "bg-linear-to-r from-violet-500 to-violet-300 p-4 w-18 rounded-full transition-all delay-150"
            }
          >
            <img src={calendarImage} alt="Logo" />
          </NavLink>
          <span>Calendar</span>
        </li>

        <li className="flex flex-col items-center justify-center">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive
                ? "bg-linear-to-r from-violet-500 to-violet-600 p-4 w-18 rounded-full shadow"
                : "bg-linear-to-r from-violet-500 to-violet-300 p-4 w-18 rounded-full transition-all delay-150"
            }
          >
            <img src={settingsImage} alt="Logo" />
          </NavLink>
          <span>Settings</span>
        </li>
      </ul>
    </nav>
  );
}
