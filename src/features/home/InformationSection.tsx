import locationIcon from "../../assets/location.svg";
import { useWeatherCode } from "../../hooks/useWeatherCode";
import { getFormattedDate, getWeekday } from "../../utils/date";
import { weatherIcon } from "../../utils/weatherIcon";

interface InformationProps {
  city: string | undefined;
  data: {
    temperature: number;
  };
  max: number;
  min: number;
}

export default function InformationSection({
  city,
  data,
  max,
  min,
}: InformationProps) {
  console.log(data);
  const weather = useWeatherCode(data?.weathercode, data?.windspeed);

  return (
    <section className="relative z-50 p-4 bg-linear-to-r from-violet-800/60 to-violet-400/35 rounded-4xl w-[49%] h-fit flex justify-between">
      {/* <div className="absolute blur-sm w-full h-full" /> */}
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-2 bg-violet-950 w-fit rounded-2xl pr-6 pl-1 py-1">
          <img src={locationIcon} alt="Location icon" className="w-8" />
          <p className="font-semibold text-lg text-violet-200 w-fit">
            {city || "City"}
          </p>
        </div>

        <div>
          <p className="font-bold text-5xl text-violet-100">{getWeekday()}</p>
          <span className="text-lg font-semibold text-violet-300">
            {getFormattedDate()}
          </span>
        </div>

        <div>
          <p className="font-bold text-6xl text-violet-100">
            {Math.floor(data?.temperature)}°C
          </p>
          <p className="text-lg font-semibold text-violet-300">
            High: {max} Low: {min}
          </p>
        </div>

        <p className="text-lg font-semibold text-violet-200">
          Wind Speed: {Math.floor(data?.windspeed)} km/h
        </p>
      </div>

      <div className="flex flex-col justify-between items-end gap-10">
        <div className="w-fit flex items-center justify-between bg-violet-200/40 rounded-full cursor-pointer">
          <span className="w-8 h-8 rounded-full font-medium flex justify-center items-center text-violet-950">
            F
          </span>
          <span className="w-8 h-8 rounded-full font-medium flex justify-center items-center bg-violet-950 text-violet-200">
            C
          </span>
        </div>

        <div className="flex flex-col items-end">
          <img src={weatherIcon(weather)?.icon} alt="Icon" className="w-60" />
          <p className="font-semibold text-3xl text-violet-950">{weather}</p>
        </div>
      </div>
    </section>
  );
}
