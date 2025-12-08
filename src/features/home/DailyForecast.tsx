import DailyItem from "./DailyItem";

interface DataProp {
  data: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weathercode: number[];
  };
}

const days = [1, 2, 3];

export default function DailyForecast({ data }: DataProp) {
  return (
    <section className="lg:relative lg:z-50 p-4 bg-linear-to-l lg:bg-linear-to-r from-violet-400/35 to-violet-800/60 dark:from-slate-950/50 dark:to-slate-950/95 rounded-4xl w-full lg:w-[49%] h-fit flex flex-col mt-3 lg:mt-0">
      <p className="font-semibold text-xl text-violet-200">3-Day Forecast</p>

      <ul className="mt-6 divide-y-2 divide-violet-950 dark:divide-slate-900 lg:mb-7">
        {days.map((day) => {
          return <DailyItem key={day} data={data} day={day} />;
        })}
      </ul>
    </section>
  );
}
