import logoImage from "../../assets/weather-app.png";
// import calendarImage from "../../assets/calendar.svg";
import listImage from "../../assets/list.svg";
import mapImage from "../../assets/map.svg";
import settingsImage from "../../assets/settings.svg";
import maskImage from "../../assets/mask.svg";
import NavbarItem from "./NavbarItem";

interface Items {
  id: number;
  url: string;
  image: string;
  title: string;
}

const items: Items[] = [
  { id: 1, url: "/", image: logoImage, title: "Home" },
  { id: 2, url: "/cities", image: listImage, title: "Cities" },
  { id: 3, url: "/map", image: mapImage, title: "Map" },
  { id: 4, url: "/air-quality", image: maskImage, title: "AQI" },
  // { id: 5, url: "/calendar", image: calendarImage, title: "Calendar" },
  { id: 6, url: "/settings", image: settingsImage, title: "Settings" },
];

export default function Navbar() {
  return (
    <nav className="w-22 h-[852px] bg-linear-to-r from-violet-900/75 to-violet-500/50 px-4 rounded-full mt-8 shadow">
      <div className="blur-2xl" />
      <ul className="w-full h-full flex flex-col gap-8 pt-2">
        {items.map((item) => (
          <NavbarItem key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
}
