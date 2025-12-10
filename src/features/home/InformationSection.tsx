import locationIcon from "../../assets/location.svg";
import { useToggleUnitValue } from "../../hooks/useToggleUnitValue";
import { useWeatherCode } from "../../hooks/useWeatherCode";
import useWindSpeedUnit from "../../hooks/useWindSpeedUnit";
import { useDateStore } from "../../store/dateStore";
import { useTemperatureUnitStore } from "../../store/temperatureUnitStore";
import { getFormattedDate, getWeekday } from "../../utils/date";
import { weatherIcon } from "../../utils/weatherIcon";

interface InformationProps {
  city: string | undefined;
  data: {
    temperature: number;
    weathercode: number;
    windspeed: number;
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
  const weather = useWeatherCode(data.weathercode, data?.windspeed);
  const icon = weatherIcon(weather)?.icon;
  const { unit, toggleUnit, windUnit } = useTemperatureUnitStore();
  const temp = useToggleUnitValue(data?.temperature);
  const maxTemp = useToggleUnitValue(max);
  const minTemp = useToggleUnitValue(min);
  const { selectedDate } = useDateStore() || new Date();
  const windSpeed = useWindSpeedUnit(data?.windspeed);

  function handleToggleUnit() {
    toggleUnit();
  }

  return (
    <section className="lg:relative lg:z-50 p-4 bg-linear-to-r from-violet-800/60 to-violet-400/35 dark:from-slate-950/95 dark:to-slate-950/50 rounded-4xl w-full lg:w-[49%] h-fit flex flex-col md:flex-row justify-between mt-4 lg:mt-0">
      {/* <div className="absolute blur-sm w-full h-full" /> */}
      <div className="flex flex-col lg:gap-10">
        <div className="w-full lg:w-fit flex items-center gap-2 bg-violet-950 dark:bg-linear-to-l dark:from-slate-950/95 dark:to-slate-950/30 rounded-2xl pr-6 pl-1 py-1">
          <img src={locationIcon} alt="Location icon" className="w-8" />
          <p className="font-semibold text-lg text-violet-200 w-fit truncate">
            {city || "City"}
          </p>
        </div>
        <div className="flex flex-col items-center md:hidden">
          <img src={icon} alt="Icon" className="w-40" />
          <p className="font-semibold text-2xl text-violet-950">{weather}</p>
        </div>

        <div>
          <p className="font-bold text-3xl lg:text-5xl text-violet-100 mt-10 md:mt-8 lg:mt-0">
            {getWeekday()}
          </p>
          <span className="lg:text-lg font-semibold text-violet-300">
            {getFormattedDate(selectedDate)}
          </span>
        </div>

        <div>
          <p className="font-bold text-4xl lg:text-6xl text-violet-100 mt-6 lg:mt-0">
            {Math.floor(temp)}°{unit}
          </p>
          <p className="lg:text-lg font-semibold text-violet-300">
            High: {Math.floor(maxTemp)} Low: {Math.floor(minTemp)}
          </p>
        </div>

        <p className="text-lg font-semibold text-violet-200 mt-6 lg:mt-0">
          Wind Speed: {windSpeed} {windUnit}
        </p>
      </div>

      <div className="flex flex-col justify-between items-end lg:gap-10">
        <div
          className="hidden w-fit md:flex items-center justify-between bg-violet-200/40 rounded-full cursor-pointer"
          onClick={handleToggleUnit}
        >
          <span
            className={`w-8 h-8 rounded-full font-medium flex justify-center items-center transition-all ${
              unit === "F"
                ? "bg-violet-950 text-violet-200 dark:bg-linear-to-r dark:from-slate-950/95 dark:to-slate-950/30"
                : "text-violet-950 dark:text-slate-950"
            }`}
          >
            F
          </span>
          <span
            className={`w-8 h-8 rounded-full font-medium flex justify-center items-center transition-all ${
              unit === "C"
                ? "bg-violet-950 text-violet-200 dark:bg-linear-to-r dark:from-slate-950/95 dark:to-slate-950/30"
                : "text-violet-950 dark:text-slate-950"
            }`}
          >
            C
          </span>
        </div>

        <div className="hidden md:flex flex-col items-end md:mb-8 lg:mb-0">
          <img src={icon} alt="Icon" className="md:w-40 lg:w-60" />
          <p className="font-semibold text-2xl md:text-lg lg:text-3xl text-violet-950">
            {weather}
          </p>
        </div>
      </div>
    </section>
  );
}
