import type React from "react";
import { useNavigate } from "react-router-dom";
import { useThemeStore } from "../store/themeStore";
import { useTemperatureUnitStore } from "../store/temperatureUnitStore";
import { useModalStore } from "../store/modalStore";

import arrowsIcon from "../assets/arrows.svg";
import arrowRightIcon from "../assets/arrow-right.svg";
import arrowsDarkIcon from "../assets/arrows-dark.svg";
import arrowRightDarkIcon from "../assets/arrow-right-dark.svg";
import SettingsModal from "../features/settings/SettingsModal";
import lightIcon from "../assets/light.svg";
import darkIcon from "../assets/dark.svg";

export default function Settings() {
  const { theme, toggleTheme } = useThemeStore();
  const { unit, toggleUnit } = useTemperatureUnitStore();
  const { isOpen, setOpen, setClose } = useModalStore();
  const { windUnitFullName, windUnit } = useTemperatureUnitStore();
  const navigate = useNavigate();

  function handleClickFeedback() {
    window.open(
      "https://github.com/mahdibaderloo/weather-app",
      "_blank",
      "noopener,noreferrer"
    );
  }

  function handleOpenModal(e: React.MouseEvent) {
    e.stopPropagation();
    setOpen();
  }

  function handleToggleTheme() {
    toggleTheme();
    navigate(0);
  }

  return (
    <div className="w-full h-full flex flex-col p-4" onClick={() => setClose()}>
      <p className="font-bold text-2xl lg:text-4xl text-violet-950 dark:text-violet-800">
        Settings
      </p>

      <div className="flex flex-col lg:p-4 mt-8 relative">
        <p className="font-bold text-lg lg:text-2xl text-violet-950/80 dark:text-violet-800/80">
          Theme
        </p>
        <div
          className="w-14 h-14 mt-4 flex items-center justify-center bg-linear-to-l from-violet-500/85 to-violet-900/95 dark:from-violet-950 dark:to-slate-900 rounded-full cursor-pointer shadow"
          onClick={handleToggleTheme}
        >
          <img
            src={theme === "light" ? lightIcon : darkIcon}
            alt="Theme icon"
            className="w-8"
          />
        </div>
      </div>

      <ul className="flex flex-col lg:p-4 mt-8 relative">
        <p className="font-bold text-lg lg:text-2xl text-violet-950/80 dark:text-violet-800/80">
          Units
        </p>
        <li className="lg:w-1/2 flex items-center justify-between mt-4 bg-linear-to-l from-violet-200/85 to-violet-900/85 dark:from-slate-950/95 dark:to-violet-950/60 rounded-full py-2 px-4">
          <p className="text-violet-200 font-semibold lg:text-xl">
            Temperature units
          </p>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => toggleUnit()}
          >
            <span className="text-violet-950 dark:text-violet-800 font-medium">
              °{unit}
            </span>
            <img
              src={theme === "dark" ? arrowsDarkIcon : arrowsIcon}
              alt="Arrow icon"
              className="w-5"
            />
          </div>
        </li>
        <li className="lg:w-1/2 flex items-center justify-between mt-2 bg-linear-to-l from-violet-200/85 to-violet-900/85 dark:from-slate-950/95 dark:to-violet-950/60 rounded-full py-2 px-4">
          <p className="text-violet-200 font-semibold lg:text-xl">
            Wind speed units
          </p>
          <div
            className="flex items-center gap-2 cursor-pointer select-none"
            onClick={handleOpenModal}
          >
            <span className="text-violet-950 dark:text-violet-800 font-medium hidden lg:block">
              {windUnitFullName}
            </span>
            <span className="text-violet-950 dark:text-violet-800 font-medium lg:hidden">
              {windUnit}
            </span>
            <img
              src={theme === "dark" ? arrowsDarkIcon : arrowsIcon}
              alt="Arrow icon"
              className="w-5"
            />
          </div>
        </li>
        {isOpen && <SettingsModal />}
      </ul>

      <ul className="flex flex-col lg:p-4 mt-8">
        <p className="font-bold text-lg lg:text-2xl text-violet-950/80 dark:text-violet-800/80">
          About Weather App
        </p>
        <li
          className="lg:w-1/2 flex items-center justify-between mt-4 bg-linear-to-l from-violet-200/85 to-violet-900/85 dark:from-slate-950/95 dark:to-violet-950/60 rounded-full py-2 px-4 cursor-pointer"
          onClick={handleClickFeedback}
        >
          <p className="text-violet-200 font-semibold lg:text-xl">Feedback</p>
          <img
            src={theme === "dark" ? arrowRightDarkIcon : arrowRightIcon}
            alt="Arrow icon"
            className="w-5"
          />
        </li>
        <li className="lg:w-1/2 flex items-center justify-between mt-2 bg-linear-to-l from-violet-200/85 to-violet-900/85 dark:from-slate-950/95 dark:to-violet-950/60 rounded-full py-2 px-4 cursor-pointer">
          <p className="text-violet-200 font-semibold lg:text-xl">
            Privacy Policy
          </p>
          <img
            src={theme === "dark" ? arrowRightDarkIcon : arrowRightIcon}
            alt="Arrow icon"
            className="w-5"
          />
        </li>
      </ul>

      <div className="flex flex-col lg:p-4 mt-8">
        <p className="font-bold text-lg lg:text-2xl text-violet-950/80 dark:text-violet-800/80">
          About Me
        </p>
        <a
          href="https://github.com/mahdibaderloo"
          target="blank"
          className="lg:w-1/2 flex items-center justify-between mt-4 bg-linear-to-l from-violet-200/85 to-violet-900/85 dark:from-slate-950/95 dark:to-violet-950/60 rounded-full py-2 px-4 cursor-pointer"
        >
          <span className="text-violet-200 font-semibold lg:text-xl">
            Mahdi Baderloo
          </span>
          <img
            src={theme === "dark" ? arrowRightDarkIcon : arrowRightIcon}
            alt="Arrow icon"
            className="w-5"
          />
        </a>
      </div>
      <div className="w-full h-30" />
    </div>
  );
}
