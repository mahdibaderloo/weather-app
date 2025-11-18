import { NavLink } from "react-router-dom";

type NavbarItemProp = {
  item: {
    id: number;
    url: string;
    image: string;
    title: string;
  };
};

export default function NavbarItem({ item }: NavbarItemProp) {
  const { url, image, title } = item;

  return (
    <li className="flex flex-col items-center justify-center">
      <NavLink
        to={url}
        className={({ isActive }) =>
          isActive
            ? "bg-linear-to-r from-violet-500 to-violet-600 p-4 w-18 rounded-full shadow"
            : "bg-linear-to-r from-violet-500 to-violet-300 p-4 w-18 rounded-full transition-all delay-150"
        }
      >
        <img src={image} alt="Logo" />
      </NavLink>
      <span>{title}</span>
    </li>
  );
}
