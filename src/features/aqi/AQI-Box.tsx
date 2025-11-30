import { getAQIFromPM25 } from "../../utils/aqi";

export default function AQIBox({ data }) {
  const { time, us_aqi, pm2_5, pm10 } = data;
  const pm25 = pm2_5[0]; // جدیدترین مقدار
  const aqi = getAQIFromPM25(pm25);
  const timeNow = time[time?.length - 1];

  return (
    <div className="w-[35%] flex flex-col bg-linear-to-b from-yellow-400 to-violet-400/45 text-violet-50 rounded-4xl p-8">
      <p className="font-semibold text-2xl pb-4 border-b-2 border-white/20">
        Air quality index now
      </p>
      <p className="mt-4 mx-auto text-7xl font-bold">{aqi}</p>
      <p className="text-lg font-medium mt-4 text-white/80">Dangerous</p>
      <p className="text-lg font-medium mt-1 text-white/80">{timeNow}</p>
    </div>
  );
}
