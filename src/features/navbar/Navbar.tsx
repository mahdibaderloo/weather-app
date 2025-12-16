import { useThemeStore } from "../../store/themeStore";

import logoImage from "../../assets/weather-app.png";
// import calendarImage from "../../assets/calendar.svg";
// import calendarDark from "../../assets/calendar-dark.svg";
import listImage from "../../assets/list.svg";
import listDark from "../../assets/list-dark.svg";
import mapImage from "../../assets/map.svg";
import mapDark from "../../assets/map-dark.svg";
import maskImage from "../../assets/mask.svg";
import maskDark from "../../assets/mask-dark.svg";
import settingsImage from "../../assets/settings.svg";
import settingsDark from "../../assets/settings-dark.svg";

import NavbarItem from "./NavbarItem";

interface Items {
  id: number;
  url: string;
  image: string;
  dark: string;
  title: string;
}

const items: Items[] = [
  { id: 1, url: "/", image: logoImage, dark: logoImage, title: "Home" },
  { id: 2, url: "/cities", image: listImage, dark: listDark, title: "Cities" },
  { id: 3, url: "/map", image: mapImage, dark: mapDark, title: "Map" },
  {
    id: 4,
    url: "/air-quality",
    image: maskImage,
    dark: maskDark,
    title: "AQI",
  },
  // { id: 5, url: "/calendar", image: calendarImage, dark: calendarDark, title: "Calendar" },
  {
    id: 6,
    url: "/settings",
    image: settingsImage,
    dark: settingsDark,
    title: "Settings",
  },
];

export default function Navbar() {
  const { theme } = useThemeStore();

  return (
    <nav className="hidden lg:w-fit xl:w-22 lg:h-fit  h-[852px] bg-linear-to-r from-violet-900/75 to-violet-500/50 dark:from-slate-900 dark:to-violet-950/60 p-2 xl:px-4 lg:pb-4 xl:pb-14 rounded-full ml-2 mt-8 shadow lg:block fixed">
      <div className="blur-2xl" />
      <ul className="w-full h-full flex flex-col gap-6 xl:gap-10 pt-2">
        {items.map((item) => (
          <NavbarItem key={item.id} item={item} theme={theme} />
        ))}
      </ul>
    </nav>
  );
}
