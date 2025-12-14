export default function Modal() {
  return (
    <div className="rounded-3xl bg-linear-to-l from-violet-200 to-violet-400 dark:from-slate-900 dark:to-violet-500 p-4 text-lg font-medium text-violet-950 dark:text-violet-100/90 shadow absolute md:left-[35%] md:top-full lg:left-4 lg:top-3 lg:text-[16px] xl:text-lg xl:top-7 xl:left-5">
      <p>This is your current location!</p>
      <p>If it is incorrect; go to the "Map" page to change it.</p>
    </div>
  );
}
