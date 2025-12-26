import { useEffect, useState } from "react";
import { useLocationStore } from "../store/locationStore";

import Modal from "../components/Modal";

import profileIcon from "../assets/profile-dark.svg";
import editIcon from "../assets/edit.svg";
import locationIcon from "../assets/location.svg";
import hintIcon from "../assets/hint.svg";
import logoutIcon from "../assets/logout.svg";
import { useCity } from "../hooks/useCity";
import { useGeolocation } from "../hooks/useGeoLocation";

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const { liveLocation, city, lat, lon } = useLocationStore();
  const { getLocation } = useGeolocation();
  const { data: liveCity } = useCity(liveLocation.lat, liveLocation.lon);

  useEffect(() => {
    if (!lat || !lon) {
      getLocation();
    }
  }, [lat, lon, getLocation]);

  function handleShowModal() {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 5000);
  }

  return (
    <div className="lg:w-[85%] xl:w-[88%] h-full flex flex-col p-4 md:p-2 lg:p-0 lg:pr-6 lg:mr-4 lg:ml-24 lg:mt-10 xl:ml-32 2xl:mt-0 2xl:w-full 2xl:ml-0">
      <p className="font-bold text-2xl lg:text-3xl lg:hidden xl:block xl:text-4xl text-violet-950 dark:text-violet-800">
        Profile
      </p>

      <div className="w-full flex items-center mt-8 gap-4 lg:gap-6 p-4 rounded-4xl bg-linear-to-l from-violet-200/75 to-violet-900/85 dark:from-slate-950/95 dark:to-violet-950/60 relative">
        <img
          src={profileIcon}
          alt="avatar"
          className="w-16 h-16 md:w-24 md:h-24 lg:w-20 lg:h-20 xl:w-30 xl:h-30 bg-linear-to-r from-violet-200/75 to-violet-700/65 dark:from-slate-950/95 dark:to-violet-700/30 rounded-3xl xl:rounded-4xl shadow p-2"
        />
        <div className="flex flex-col gap-4">
          <p className="text-violet-100 font-bold text-[16px] md:text-xl lg:text-lg xl:text-3xl">
            Username
          </p>
          <p className="text-violet-100/60 font-semibold text-[14px] md:text-lg lg:text-sm xl:text-2xl">
            user.email@example.com
          </p>
        </div>
        <img
          src={editIcon}
          alt="edit"
          className="w-8 lg:w-7 xl:w-10 rounded-xl xl:rounded-2xl bg-linear-to-l from-violet-500/85 to-violet-900/95 dark:from-violet-950 dark:to-slate-900 p-2 absolute right-4 top-4 cursor-pointer"
        />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="w-full lg:w-1/2 flex gap-2 lg:gap-0 items-center bg-linear-to-l from-violet-200/75 to-violet-900/85 dark:from-slate-950/95 dark:to-violet-950/60 rounded-3xl xl:rounded-4xl p-4 xl:p-6 relative">
          <img src={locationIcon} alt="icon" className="w-10 lg:w-8 xl:w-16" />
          <p className="text-violet-100 font-bold md:text-xl lg:text-sm xl:text-2xl truncate">
            {liveCity ? liveCity : city}
          </p>
          <img
            src={hintIcon}
            alt="icon"
            onClick={handleShowModal}
            className="w-8 lg:w-7 xl:w-10 rounded-xl xl:rounded-2xl bg-linear-to-l from-violet-500/85 to-violet-900/95 dark:from-violet-950 dark:to-slate-900 p-2 absolute right-4 top-4 cursor-pointer"
          />
          {isOpen && <Modal />}
        </div>

        <div></div>
      </div>

      <button className="w-fit flex items-center gap-2 py-2 px-6 lg:py-2 lg:px-4 mt-20 md:mt-16 lg:mt-10 xl:mt-20 bg-linear-to-l from-violet-200/75 to-violet-900/85 dark:from-slate-950/95 dark:to-violet-950/60 hover:bg-violet-900 transition-all shadow rounded-2xl xl:rounded-3xl cursor-pointer">
        <img
          src={logoutIcon}
          alt="icon"
          className="w-8 md:w-9 lg:w-7 xl:w-10"
        />
        <p className="text-red-900 font-bold md:text-lg lg:text-sm xl:text-xl">
          Log Out
        </p>
      </button>
    </div>
  );
}
