import rainy from "../assets/rainy.png";
import rainyIcon from "../assets/rainy.svg";
import DailyForecast from "../features/home/DailyForecast";
import InformationSection from "../features/home/InformationSection";
import { useWeather } from "../hooks/useWeather";
import { useLocationStore } from "../store/LocationStore";

export default function Home() {
  const { city, lat, lon } = useLocationStore();
  const { data, isLoading } = useWeather(lat, lon);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full h-full relative p-8">
      <img
        src={rainy}
        alt="Background"
        className="w-[99%] rounded-4xl shadow blur-[1px] absolute inset-0 object-cover"
      />

      <div className="w-full flex justify-between gap-1">
        <InformationSection
          city={city}
          data={data?.current}
          max={Math.ceil(data?.daily.temperature_2m_max[0])}
          min={Math.ceil(data?.daily.temperature_2m_min[0])}
        />

        <DailyForecast />
      </div>

      <section className="relative z-50 p-4 bg-linear-to-b from-violet-400/35 to-violet-800/60 rounded-4xl w-full h-fit flex flex-col gap-6 justify-between mt-6">
        <p className="font-semibold text-xl text-violet-200">
          Today's Forecast
        </p>

        <ul className="flex items-center justify-center gap-2">
          <li className="flex flex-col items-center gap-2 bg-linear-to-b from-violet-400/75 to-violet-600/40 rounded-2xl w-fit p-4">
            <img src={rainyIcon} alt="icon" className="w-24" />

            <div className="flex items-center justify-center gap-2 ">
              <p className="bg-violet-300 text-violet-950 font-medium py-1 px-2 rounded-xl">
                Rainy
              </p>
              <p className="bg-violet-300 text-violet-950 font-medium py-1 px-2 rounded-xl">
                12:00 pm
              </p>
            </div>

            <p className="text-violet-300 font-bold text-5xl">15°</p>
          </li>
          <li className="flex flex-col items-center gap-2 bg-linear-to-b from-violet-400/75 to-violet-600/40 rounded-2xl w-fit p-4">
            <img src={rainyIcon} alt="icon" className="w-24" />

            <div className="flex items-center justify-center gap-2 ">
              <p className="bg-violet-300 text-violet-950 font-medium py-1 px-2 rounded-xl">
                Rainy
              </p>
              <p className="bg-violet-300 text-violet-950 font-medium py-1 px-2 rounded-xl">
                14:00 pm
              </p>
            </div>

            <p className="text-violet-300 font-bold text-5xl">16°</p>
          </li>
          <li className="flex flex-col items-center gap-2 bg-linear-to-b from-violet-400/75 to-violet-600/40 rounded-2xl w-fit p-4">
            <img src={rainyIcon} alt="icon" className="w-24" />

            <div className="flex items-center justify-center gap-2 ">
              <p className="bg-violet-300 text-violet-950 font-medium py-1 px-2 rounded-xl">
                Rainy
              </p>
              <p className="bg-violet-300 text-violet-950 font-medium py-1 px-2 rounded-xl">
                16:00 pm
              </p>
            </div>

            <p className="text-violet-300 font-bold text-5xl">13°</p>
          </li>
          <li className="flex flex-col items-center gap-2 bg-linear-to-b from-violet-400/75 to-violet-600/40 rounded-2xl w-fit p-4">
            <img src={rainyIcon} alt="icon" className="w-24" />

            <div className="flex items-center justify-center gap-2 ">
              <p className="bg-violet-300 text-violet-950 font-medium py-1 px-2 rounded-xl">
                Rainy
              </p>
              <p className="bg-violet-300 text-violet-950 font-medium py-1 px-2 rounded-xl">
                18:00 pm
              </p>
            </div>

            <p className="text-violet-300 font-bold text-5xl">12°</p>
          </li>
          <li className="flex flex-col items-center gap-2 bg-linear-to-b from-violet-400/75 to-violet-600/40 rounded-2xl w-fit p-4">
            <img src={rainyIcon} alt="icon" className="w-24" />

            <div className="flex items-center justify-center gap-2 ">
              <p className="bg-violet-300 text-violet-950 font-medium py-1 px-2 rounded-xl">
                Rainy
              </p>
              <p className="bg-violet-300 text-violet-950 font-medium py-1 px-2 rounded-xl">
                20:00 pm
              </p>
            </div>

            <p className="text-violet-300 font-bold text-5xl">11°</p>
          </li>
        </ul>
      </section>
    </div>
  );
}
