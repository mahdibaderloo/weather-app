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
    <section className="relative z-50 p-4 bg-linear-to-b from-violet-400/35 to-violet-800/60 dark:from-slate-950/30 dark:to-slate-950/95 rounded-4xl w-full h-fit flex flex-col gap-6 justify-between mt-6">
      <p className="font-semibold text-xl text-violet-200">Today's Forecast</p>

      <ul className="flex items-center justify-center gap-2">
        {getIndexesHoursLater(data.time).map((hour) => {
          return <HourlyItem key={data.time[hour]} data={data} hour={hour} />;
        })}
      </ul>
    </section>
  );
}
