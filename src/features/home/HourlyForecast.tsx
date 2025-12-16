import { getIndexesHoursLater } from "../../utils/date";
import HourlyItem from "./HourlyItem";

interface DataProp {
  data: {
    temperature_2m: number[];
    time: string[];
    weathercode: number[];
  };
}

export default function HourlyForecast({ data }: DataProp) {
  return (
    <section className="lg:relative z-50 p-4 bg-linear-to-t lg:bg-linear-to-b from-violet-400/35 to-violet-800/60 dark:from-slate-900/50 dark:to-slate-950/55 lg:dark:from-slate-950/30 lg:dark:to-slate-950/95 rounded-4xl w-full h-fit flex flex-col gap-6 lg:gap-2 justify-between mt-4">
      <p className="font-semibold text-xl text-violet-200">Today's Forecast</p>

      <ul className="flex items-center justify-center gap-1 md:gap-2 xl:mt-3 2xl:mt-4">
        {getIndexesHoursLater(data.time).map((hour) => {
          return <HourlyItem key={data.time[hour]} data={data} hour={hour} />;
        })}
      </ul>
    </section>
  );
}
