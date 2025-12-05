export default function SettingsModal() {
  return (
    <ul className="w-fit flex-col mt-2 bg-linear-to-l from-violet-200 to-violet-900 dark:from-slate-950/95 dark:to-violet-950/60 rounded-3xl overflow-hidden absolute right-[50%] top-27">
      <li className="text-violet-100 font-medium cursor-pointer py-4 px-6 hover:bg-violet-900 bg-linear-to-l from-violet-800/85 to-violet-950/85">
        Kilometers per hour (km/h)
      </li>
      <li className="text-violet-100 font-medium cursor-pointer py-4 px-6 hover:bg-violet-900">
        Meters per second (m/s)
      </li>
      <li className="text-violet-100 font-medium cursor-pointer py-4 px-6 hover:bg-violet-900">
        Miles per hour (mph)
      </li>
    </ul>
  );
}
