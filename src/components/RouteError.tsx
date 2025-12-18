import { Link, useRouteError } from "react-router-dom";

import errorIcon from "../assets/error.png";

export default function RouteError() {
  const error = useRouteError();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-linear-to-r from-violet-400 to-violet-300/85 dark:from-slate-900 dark:to-slate-950">
      <div className="2xl:max-w-7xl 2xl:mx-auto flex flex-col justify-center items-center">
        <img src={errorIcon} alt="icon" className="lg:w-100 2xl:w-140" />
        <p className="mt-2 text-violet-950 dark:text-slate-300 font-semibold lg:text-xl">
          Something went wrong while loading this page
        </p>
      </div>
      <Link
        to="/"
        className="bg-linear-to-r from-violet-900/90 to-violet-800/65 dark:from-slate-900/90 dark:to-violet-900/90 lg:from-violet-900/90 lg:to-violet-800/65 lg:dark:from-violet-950/80 lg:dark:to-violet-900/90 text-violet-100 font-medium py-2 px-4 rounded-2xl mt-6"
      >
        Refresh
      </Link>
    </div>
  );
}
