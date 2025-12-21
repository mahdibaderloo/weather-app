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
    <div
      className="lg:w-[86%] xl:w-full flex flex-col p-4 lg:p-0 lg:pr-6 lg:mr-4 lg:ml-30 lg:mt-30 2xl:mt-0 2xl:w-full 2xl:ml-0"
      onClick={() => setClose()}
    >
      <p className="font-bold text-2xl md:text-3xl hidden xl:block xl:text-4xl text-violet-950 dark:text-violet-800">
        Settings
      </p>

      <div className="flex flex-col lg:p-4 relative lg:hidden">
        <p className="font-bold text-lg md:text-xl lg:text-2xl text-violet-950/80 dark:text-violet-800/80">
          Theme
        </p>
        <div
          className="w-14 h-14 md:w-16 md:h-16 mt-4 flex items-center justify-center bg-linear-to-l from-violet-500/85 to-violet-900/95 dark:from-violet-950 dark:to-slate-900 rounded-full cursor-pointer shadow"
          onClick={handleToggleTheme}
        >
          <img
            src={theme === "light" ? lightIcon : darkIcon}
            alt="Theme icon"
            className="w-8 md:w-10"
          />
        </div>
      </div>

      <ul className="flex flex-col lg:p-4 mt-8 lg:mt-0 xl:mt-8 relative">
        <p className="font-bold text-lg md:text-xl lg:text-2xl text-violet-950/80 dark:text-violet-800/80">
          Units
        </p>
        <li
          className="lg:w-[60%] xl:w-1/2 flex items-center justify-between mt-4 bg-linear-to-l from-violet-200/85 to-violet-900/85 dark:from-slate-950/95 dark:to-violet-950/60 rounded-full py-2 px-4 cursor-pointer"
          onClick={() => toggleUnit()}
        >
          <p className="text-violet-200 font-semibold md:text-lg lg:text-xl">
            Temperature units
          </p>
          <div className="flex items-center gap-2">
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
        <li
          className="lg:w-[60%] xl:w-1/2 flex items-center justify-between mt-2 bg-linear-to-l from-violet-200/85 to-violet-900/85 dark:from-slate-950/95 dark:to-violet-950/60 rounded-full py-2 px-4 cursor-pointer"
          onClick={handleOpenModal}
        >
          <p className="text-violet-200 font-semibold md:text-lg lg:text-xl">
            Wind speed units
          </p>
          <div className="flex items-center gap-2 select-none">
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

      <ul className="flex flex-col lg:p-4 mt-8 lg:mt-0 xl:mt-8">
        <p className="font-bold text-lg md:text-xl lg:text-2xl text-violet-950/80 dark:text-violet-800/80">
          About Weather App
        </p>
        <li
          className="lg:w-[60%] xl:w-1/2 flex items-center justify-between mt-4 bg-linear-to-l from-violet-200/85 to-violet-900/85 dark:from-slate-950/95 dark:to-violet-950/60 rounded-full py-2 px-4 cursor-pointer"
          onClick={handleClickFeedback}
        >
          <p className="text-violet-200 font-semibold md:text-lg lg:text-xl">
            Feedback
          </p>
          <img
            src={theme === "dark" ? arrowRightDarkIcon : arrowRightIcon}
            alt="Arrow icon"
            className="w-5"
          />
        </li>
        <li className="lg:w-[60%] xl:w-1/2 flex items-center justify-between mt-2 bg-linear-to-l from-violet-200/85 to-violet-900/85 dark:from-slate-950/95 dark:to-violet-950/60 rounded-full py-2 px-4 cursor-pointer">
          <p className="text-violet-200 font-semibold md:text-lg lg:text-xl">
            Privacy Policy
          </p>
          <img
            src={theme === "dark" ? arrowRightDarkIcon : arrowRightIcon}
            alt="Arrow icon"
            className="w-5"
          />
        </li>
      </ul>

      <div className="flex flex-col lg:p-4 mt-8 lg:mt-0 xl:mt-8">
        <p className="font-bold text-lg md:text-xl lg:text-2xl text-violet-950/80 dark:text-violet-800/80">
          About Me
        </p>
        <a
          href="https://github.com/mahdibaderloo"
          target="blank"
          className="lg:w-[60%] xl:w-1/2   flex items-center justify-between mt-4 bg-linear-to-l from-violet-200/85 to-violet-900/85 dark:from-slate-950/95 dark:to-violet-950/60 rounded-full py-2 px-4 cursor-pointer"
        >
          <span className="text-violet-200 font-semibold md:text-lg lg:text-xl">
            Mahdi Baderloo
          </span>
          <img
            src={theme === "dark" ? arrowRightDarkIcon : arrowRightIcon}
            alt="Arrow icon"
            className="w-5"
          />
        </a>
      </div>

      <div className="w-full h-30 md:h-36 lg:h-1" />
    </div>
  );
}
