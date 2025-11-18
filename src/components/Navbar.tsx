import { NavLink } from "react-router-dom";

import logoImage from "../assets/weather-app.png";
import calendarImage from "../assets/calendar.svg";
import listImage from "../assets/list.svg";
import mapImage from "../assets/map.svg";
import settingsImage from "../assets/settings.svg";

export default function Navbar() {
  return (
    <nav className="flex flex-col items-center gap-10 w-22 h-[90%] bg-linear-to-r from-violet-600/75 to-violet-500/50 px-4 rounded-full">
      <div className="blur-2xl" />
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
    </nav>
  );
}
