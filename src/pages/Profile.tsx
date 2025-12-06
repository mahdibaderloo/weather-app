import { useLocationStore } from "../store/locationStore";

import profileIcon from "../assets/profile.svg";
import editIcon from "../assets/edit.svg";
import locationIcon from "../assets/location.svg";
import hintIcon from "../assets/hint.svg";

export default function Profile() {
  const { city } = useLocationStore();

  return (
    <div className="w-full h-full flex flex-col p-4">
      <p className="font-bold text-4xl text-violet-950 dark:text-violet-800">
        Profile
      </p>

      <div className="w-full flex items-center mt-8 gap-8 p-8 rounded-4xl bg-linear-to-l from-violet-200/75 to-violet-900/85 dark:from-slate-950/95 dark:to-violet-950/60 relative">
        <img
          src={profileIcon}
          alt="avatar"
          className="w-40 h-40 bg-linear-to-r from-violet-200/75 to-violet-700/65 dark:from-slate-950/95 dark:to-violet-700/30 rounded-4xl shadow"
        />
        <div className="flex flex-col gap-4">
          <p className="text-violet-100 font-bold text-3xl">Username</p>
          <p className="text-violet-100/60 font-semibold text-2xl">
            user.email@example.com
          </p>
        </div>
        <img
          src={editIcon}
          alt="edit"
          className="w-10 rounded-2xl bg-linear-to-l from-violet-500/85 to-violet-900/95 dark:from-violet-950 dark:to-slate-900 p-2 absolute right-4 top-4 cursor-pointer"
        />
      </div>
    </div>
  );
}
