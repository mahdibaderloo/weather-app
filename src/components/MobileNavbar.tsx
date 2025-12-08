import { NavLink } from "react-router-dom";
import { useThemeStore } from "../store/themeStore";

import logoImage from "../assets/weather-app.png";
import listImage from "../assets/list.svg";
import listDark from "../assets/list-dark.svg";
import mapImage from "../assets/map.svg";
import mapDark from "../assets/map-dark.svg";
import settingsImage from "../assets/settings.svg";
import settingsDark from "../assets/settings-dark.svg";
import profileImage from "../assets/profile.svg";

interface Items {
  id: number;
  url: string;
  image: string;
  dark: string;
  title: string;
}

const items: Items[] = [
  {
    id: 1,
    url: "/settings",
    image: settingsImage,
    dark: settingsDark,
    title: "Settings",
  },
  { id: 2, url: "/cities", image: listImage, dark: listDark, title: "Cities" },
  { id: 3, url: "/", image: logoImage, dark: logoImage, title: "Home" },
  { id: 4, url: "/map", image: mapImage, dark: mapDark, title: "Map" },
  {
    id: 5,
    url: "/profile",
    image: profileImage,
    dark: profileImage,
    title: "Profile",
  },
];

export default function MobileNavbar() {
  const { theme } = useThemeStore();

  return (
    <nav className="w-full h-fit fixed bottom-0 z-50 bg-linear-to-r from-violet-900/40 to-violet-500/40 dark:from-slate-950/40 dark:to-violet-950/40 px-4 pb-2 shadow lg:hidden">
      <ul className="w-full h-full flex justify-between pt-2">
        {items.map((item) => (
          <li
            className="flex flex-col items-center justify-center"
            key={item.id}
          >
            <NavLink
              to={item.url}
              className={({ isActive }) =>
                isActive
                  ? `bg-linear-to-r from-violet-500 to-violet-800 dark:bg-linear-to-t dark:from-slate-950 dark:to-violet-900/70 p-2 w-14 ${
                      item.id === 3 ? "w-18" : ""
                    } rounded-full shadow`
                  : `bg-linear-to-r from-violet-500 to-violet-300 dark:bg-linear-to-t dark:from-violet-700 dark:to-slate-900 p-2 w-14 ${
                      item.id === 3 ? "w-18" : ""
                    } rounded-full transition-all delay-150`
              }
            >
              <img src={theme === "dark" ? item.dark : item.image} alt="Logo" />
            </NavLink>
            <span className="text-violet-950 dark:text-violet-100/60 text-sm font-medium mt-1">
              {item.title}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
