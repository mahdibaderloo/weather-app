import { NavLink } from "react-router-dom";

type NavbarItemProp = {
  item: {
    id: number;
    url: string;
    image: string;
    dark: string;
    title: string;
  };
  theme: "dark" | "light";
};

export default function NavbarItem({ item, theme }: NavbarItemProp) {
  const { url, image, title, dark } = item;

  return (
    <li className="flex flex-col items-center justify-center">
      <NavLink
        to={url}
        className={({ isActive }) =>
          isActive
            ? "bg-linear-to-r from-violet-500 to-violet-800 dark:bg-linear-to-b dark:from-slate-950 dark:to-violet-900 p-3 lg:w-12 xl:w-13 rounded-full shadow"
            : "bg-linear-to-r from-violet-500 to-violet-300 dark:from-violet-700 dark:to-slate-900 p-3 lg:w-12 xl:w-13 rounded-full transition-all delay-150"
        }
      >
        <img src={theme === "dark" ? dark : image} alt="Logo" />
      </NavLink>
      <span className="text-violet-950 dark:text-violet-100 font-medium mt-1 lg:text-[14px] xl:text-[16px]">
        {title}
      </span>
    </li>
  );
}
