import { useThemeStore } from "../store/themeStore";

import arrowsIcon from "../assets/arrows.svg";
import arrowRightIcon from "../assets/arrow-right.svg";
import arrowsDarkIcon from "../assets/arrows-dark.svg";
import arrowRightDarkIcon from "../assets/arrow-right-dark.svg";

export default function Settings() {
  const { theme } = useThemeStore();

  function handleClickFeedback() {
    window.open(
      "https://github.com/mahdibaderloo/weather-app",
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <div className="w-full h-full flex flex-col p-4">
      <p className="font-bold text-4xl text-violet-950 dark:text-violet-800">
        Settings
      </p>

      <ul className="flex flex-col p-4 mt-8">
        <p className="font-bold text-2xl text-violet-950/80 dark:text-violet-800/80">
          Units
        </p>
        <li className="w-1/2 flex items-center justify-between mt-4 bg-linear-to-l from-violet-200/85 to-violet-900/85 dark:from-slate-950/95 dark:to-violet-950/60 rounded-full py-2 px-4">
          <p className="text-violet-200 font-semibold text-xl">
            Temperature units
          </p>
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-violet-950 dark:text-violet-800 font-medium">
              °C
            </span>
            <img
              src={theme === "dark" ? arrowsDarkIcon : arrowsIcon}
              alt="Arrow icon"
              className="w-5"
            />
          </div>
        </li>
        <li className="w-1/2 flex items-center justify-between mt-2 bg-linear-to-l from-violet-200/85 to-violet-900/85 dark:from-slate-950/95 dark:to-violet-950/60 rounded-full py-2 px-4">
          <p className="text-violet-200 font-semibold text-xl">
            Wind speed units
          </p>
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-violet-950 dark:text-violet-800 font-medium">
              Kilometers per hour (km/h)
            </span>
            <img
              src={theme === "dark" ? arrowsDarkIcon : arrowsIcon}
              alt="Arrow icon"
              className="w-5"
            />
          </div>
        </li>
      </ul>

      <ul className="flex flex-col p-4 mt-8">
        <p className="font-bold text-2xl text-violet-950/80 dark:text-violet-800/80">
          About Weather App
        </p>
        <li
          className="w-1/2 flex items-center justify-between mt-4 bg-linear-to-l from-violet-200/85 to-violet-900/85 dark:from-slate-950/95 dark:to-violet-950/60 rounded-full py-2 px-4 cursor-pointer"
          onClick={handleClickFeedback}
        >
          <p className="text-violet-200 font-semibold text-xl">Feedback</p>
          <img
            src={theme === "dark" ? arrowRightDarkIcon : arrowRightIcon}
            alt="Arrow icon"
            className="w-5"
          />
        </li>
        <li className="w-1/2 flex items-center justify-between mt-2 bg-linear-to-l from-violet-200/85 to-violet-900/85 dark:from-slate-950/95 dark:to-violet-950/60 rounded-full py-2 px-4 cursor-pointer">
          <p className="text-violet-200 font-semibold text-xl">
            Privacy Policy
          </p>
          <img
            src={theme === "dark" ? arrowRightDarkIcon : arrowRightIcon}
            alt="Arrow icon"
            className="w-5"
          />
        </li>
      </ul>

      <div className="flex flex-col p-4 mt-8">
        <p className="font-bold text-2xl text-violet-950/80 dark:text-violet-800/80">
          About Me
        </p>
        <a
          href="https://github.com/mahdibaderloo"
          target="blank"
          className="w-1/2 flex items-center justify-between mt-4 bg-linear-to-l from-violet-200/85 to-violet-900/85 dark:from-slate-950/95 dark:to-violet-950/60 rounded-full py-2 px-4 cursor-pointer"
        >
          <span className="text-violet-200 font-semibold text-xl">
            Mahdi Baderloo
          </span>
          <img
            src={theme === "dark" ? arrowRightDarkIcon : arrowRightIcon}
            alt="Arrow icon"
            className="w-5"
          />
        </a>
      </div>
    </div>
  );
}
