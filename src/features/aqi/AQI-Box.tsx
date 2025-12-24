import { getAQIFromPM25, getAqiStatus } from "../../utils/aqi";

interface AQIBoxProps {
  data: {
    pm2_5: number[];
    pm10: number[];
    time: string[];
    us_aqi: number[];
  };
  fetchTime: number;
}

export default function AQIBox({ data, fetchTime }: AQIBoxProps) {
  const date = new Date(fetchTime);
  const hour = date.getHours();
  const minutes = date.getMinutes();

  const { time, pm2_5 } = data;
  const pm25 = pm2_5[hour];
  const aqi = getAQIFromPM25(pm25);
  const timeNow = time[hour];

  return (
    <div
      className={`w-full lg:w-[60%] 2xl:w-[50%] flex flex-col bg-linear-to-b ${
        getAqiStatus(aqi).color
      } to-violet-400/45 dark:to-slate-900 text-violet-50 dark:text-slate-950 rounded-4xl p-8 lg:p-4`}
    >
      <p className="font-semibold text-xl md:text-2xl lg:text-xl pb-4 border-b-2 border-white/20">
        Air quality index now
      </p>
      <p className="mt-4 2xl:mt-8 mx-auto text-6xl md:text-7xl font-bold">
        {aqi}
      </p>
      <p className="md:text-lg lg:text-sm font-medium mt-4 text-white/80 dark:text-slate-950/80">
        {getAqiStatus(aqi).status}
      </p>
      <p className="hidden lg:text-sm xl:text-lg font-medium mt-1 text-white/80 dark:text-slate-950/80 lg:block">
        {`${timeNow.slice(0, 10)} ${hour}:${
          minutes < 10 ? `0${minutes}` : minutes
        }`}
      </p>
    </div>
  );
}
