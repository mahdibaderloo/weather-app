import { useState } from "react";
import { useLocationStore } from "../store/locationStore";

import Modal from "../components/Modal";

import profileIcon from "../assets/profile-dark.svg";
import editIcon from "../assets/edit.svg";
import locationIcon from "../assets/location.svg";
import hintIcon from "../assets/hint.svg";
import logoutIcon from "../assets/logout.svg";

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const { city } = useLocationStore();

  function handleShowModal() {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 5000);
  }

  return (
    <div className="lg:w-[86%] xl:w-full h-full flex flex-col p-4 lg:p-0 lg:pr-6 lg:mr-4 lg:ml-30 lg:mt-30">
      <p className="font-bold text-2xl md:text-3xl lg:hidden xl:block xl:text-4xl text-violet-950 dark:text-violet-800">
        Profile
      </p>

      <div className="w-full flex items-center mt-8 gap-4 lg:gap-8 p-4 lg:p-8 rounded-4xl bg-linear-to-l from-violet-200/75 to-violet-900/85 dark:from-slate-950/95 dark:to-violet-950/60 relative">
        <img
          src={profileIcon}
          alt="avatar"
          className="w-16 h-16 md:w-24 md:h-24 xl:w-40 xl:h-40 bg-linear-to-r from-violet-200/75 to-violet-700/65 dark:from-slate-950/95 dark:to-violet-700/30 rounded-3xl lg:rounded-4xl shadow p-2"
        />
        <div className="flex flex-col gap-4">
          <p className="text-violet-100 font-bold md:text-xl xl:text-3xl">
            Username
          </p>
          <p className="text-violet-100/60 font-semibold md:text-lg xl:text-2xl">
            user.email@example.com
          </p>
        </div>
        <img
          src={editIcon}
          alt="edit"
          className="w-8 md:w-9 lg:w-10 rounded-xl lg:rounded-2xl bg-linear-to-l from-violet-500/85 to-violet-900/95 dark:from-violet-950 dark:to-slate-900 p-2 absolute right-4 top-4 cursor-pointer"
        />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="w-full lg:w-1/2 flex gap-2 lg:gap-0 items-center bg-linear-to-l from-violet-200/75 to-violet-900/85 dark:from-slate-950/95 dark:to-violet-950/60 rounded-3xl lg:rounded-4xl p-4 lg:p-8 relative">
          <img src={locationIcon} alt="icon" className="w-10 xl:w-20" />
          <p className="text-violet-100 font-bold md:text-xl xl:text-3xl truncate">
            {city}
          </p>
          <img
            src={hintIcon}
            alt="icon"
            onClick={handleShowModal}
            className="w-8 md:w-9 lg:w-10 rounded-xl lg:rounded-2xl bg-linear-to-l from-violet-500/85 to-violet-900/95 dark:from-violet-950 dark:to-slate-900 p-2 absolute right-4 top-4 cursor-pointer"
          />
          {isOpen && <Modal />}
        </div>

        <div></div>
      </div>

      <button className="w-fit flex items-center gap-2 py-2 px-6 lg:py-4 lg:px-8 mt-20 lg:mt-12 xl:mt-30 bg-linear-to-l from-violet-200/75 to-violet-900/85 dark:from-slate-950/95 dark:to-violet-950/60 hover:bg-violet-900 transition-all shadow rounded-2xl lg:rounded-3xl cursor-pointer">
        <img src={logoutIcon} alt="icon" className="w-8 md:w-9 xl:w-10" />
        <p className="text-red-900 font-bold md:text-lg xl:text-xl">Log Out</p>
      </button>
    </div>
  );
}
