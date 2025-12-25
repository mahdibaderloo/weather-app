import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useThemeStore } from "../store/themeStore";
import { useLocationStore } from "../store/locationStore";
import { useSearchLocation } from "../hooks/useSearchLocation";

import searchIcon from "../assets/search.svg";
import searchIconDark from "../assets/search-dark.svg";
import lightIcon from "../assets/light.svg";
import darkIcon from "../assets/dark.svg";
import profileImage from "../assets/profile-dark.svg";

export default function MainHeader() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const { theme, toggleTheme } = useThemeStore();
  const { setLocation, setCity } = useLocationStore();
  const { data } = useSearchLocation(query);
  const navigate = useNavigate();

  useEffect(
    function () {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    [theme]
  );

  function handleToggleTheme() {
    toggleTheme();
    navigate(0);
  }

  function handleSubmitSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!data || !data.lat || !data.lon) {
      setError("City not found!");
      setTimeout(() => {
        setError("");
        setQuery("");
      }, 3000);

      return;
    }

    setError("");
    setLocation(data.lat, data.lon);
    setCity(data.city);
    navigate("/");
    setTimeout(() => {
      setQuery("");
    }, 1000);
  }

  return (
    <header className="flex items-center justify-between w-full mt-4 lg:mt-2 lg:pr-2 lg:fixed lg:mx-14 lg:w-[90%] 2xl:static 2xl:w-full 2xl:mx-0 z-20">
      <form
        onSubmit={handleSubmitSearch}
        className={`bg-linear-to-r ${
          error
            ? "from-red-200/85 to-red-900/85 dark:from-red-950/85 dark:to-red-900"
            : "from-violet-200/85 to-violet-900/85 dark:from-violet-950/85 dark:to-slate-900"
        } flex items-center gap-1 w-full lg:w-[50%] 2xl:w-1/2 h-10 p-2 md:mx-8 2xl:mx-0 rounded-4xl shadow`}
      >
        <img
          src={theme === "dark" ? searchIconDark : searchIcon}
          alt="Search icon"
          className="w-12 md:w-10"
        />
        <input
          type="text"
          className="w-full h-full outline-none border-none text-violet-950 dark:text-violet-100 lg:text-sm font-medium"
          placeholder="Search city"
          value={error ? error : query}
          disabled={error.length !== 0}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <div className="hidden lg:flex items-center gap-2">
        <div
          className="w-10 h-10 flex items-center justify-center bg-linear-to-l from-violet-500/85 to-violet-900/95 dark:from-violet-950 dark:to-slate-900 rounded-full cursor-pointer shadow"
          onClick={handleToggleTheme}
        >
          <img
            src={theme === "light" ? lightIcon : darkIcon}
            alt="Theme icon"
            className="w-6"
          />
        </div>
        <Link
          to="/profile"
          className="w-10 h-10 flex items-center justify-center bg-linear-to-r from-violet-500/85 to-violet-900/95 dark:from-violet-950 dark:to-slate-900 rounded-full cursor-pointer shadow"
        >
          <img src={profileImage} alt="Profile icon" className="w-7" />
        </Link>
      </div>
    </header>
  );
}
