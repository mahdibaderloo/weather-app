import { useModalStore } from "../../store/modalStore";

export default function SettingsModal() {
  const { setClose } = useModalStore();

  function handleSetUnit() {
    setClose();
  }

  return (
    <ul className="w-fit flex-col mt-2 bg-linear-to-l from-violet-200 to-violet-900 dark:from-slate-950/95 dark:to-violet-950/60 rounded-3xl overflow-hidden absolute right-[50%] top-40">
      <li
        className="text-violet-100 font-medium cursor-pointer py-4 px-6 hover:bg-violet-900 bg-linear-to-l from-violet-800/85 to-violet-950/85"
        onClick={handleSetUnit}
      >
        Kilometers per hour (km/h)
      </li>
      <li
        className="text-violet-100 font-medium cursor-pointer py-4 px-6 hover:bg-violet-900"
        onClick={handleSetUnit}
      >
        Meters per second (m/s)
      </li>
      <li
        className="text-violet-100 font-medium cursor-pointer py-4 px-6 hover:bg-violet-900"
        onClick={handleSetUnit}
      >
        Miles per hour (mph)
      </li>
    </ul>
  );
}
