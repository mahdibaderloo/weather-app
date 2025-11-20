import rainy from "../assets/rainy.png";
import locationIcon from "../assets/location.svg";
import rainyIcon from "../assets/rainy.svg";

export default function Home() {
  return (
    <div className="w-full h-full relative p-8">
      <img
        src={rainy}
        alt="Background"
        className="w-[99%] rounded-4xl shadow blur-[1px] absolute inset-0 object-cover"
      />

      <div className="w-full flex justify-between gap-1">
        <section className="relative z-50 p-4 bg-linear-to-r from-violet-800/40 to-violet-400/15 rounded-4xl w-[49%] h-fit flex justify-between">
          {/* <div className="absolute blur-sm w-full h-full" /> */}
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-2 bg-violet-950 w-fit rounded-2xl pr-6 pl-1 py-1">
              <img src={locationIcon} alt="Location icon" className="w-8" />
              <p className="font-semibold text-lg text-violet-200">Karaj</p>
            </div>

            <div>
              <p className="font-bold text-5xl text-violet-100">Sunday</p>
              <span className="text-lg font-semibold text-violet-300">
                19 Nov, 2025
              </span>
            </div>

            <div>
              <p className="font-bold text-7xl text-violet-100">15°C</p>
              <p className="text-lg font-semibold text-violet-300">
                High: 20 Low: 9
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-10">
            <div className="w-fit flex items-center justify-between bg-violet-200/40 rounded-full cursor-pointer">
              <span className="w-8 h-8 rounded-full font-medium flex justify-center items-center text-violet-950">
                F
              </span>
              <span className="w-8 h-8 rounded-full font-medium flex justify-center items-center bg-violet-950 text-violet-200">
                C
              </span>
            </div>

            <div className="flex flex-col items-end">
              <img src={rainyIcon} alt="Icon" className="w-60" />
              <p className="font-semibold text-3xl text-violet-950">Rainy</p>
            </div>
          </div>
        </section>

        <section className="relative z-50 p-4 bg-linear-to-r from-violet-400/15 to-violet-800/40 rounded-4xl w-[49%] h-fit flex flex-col">
          <p className="font-semibold text-xl text-violet-200">
            3-Day Forecast
          </p>

          <ul className="mt-6 divide-y-2 divide-violet-950 mb-7">
            <li className="flex items-center justify-between text-violet-300 text-xl font-semibold py-4">
              <p className="w-20">Today</p>
              <div className="flex items-center">
                <img src={rainyIcon} alt="icon" className="w-14" />
                <span>Rainy</span>
              </div>
              <p>
                20 / <span className="text-violet-400">9</span>
              </p>
            </li>
            <li className="flex items-center justify-between text-violet-300 text-xl font-semibold py-4">
              <p className="w-20">Mon</p>
              <div className="flex items-center">
                <img src={rainyIcon} alt="icon" className="w-14" />
                <span>Rainy</span>
              </div>
              <p>
                20 / <span className="text-violet-400">9</span>
              </p>
            </li>
            <li className="flex items-center justify-between text-violet-300 text-xl font-semibold py-4">
              <p className="w-20">Tue</p>
              <div className="flex items-center">
                <img src={rainyIcon} alt="icon" className="w-14" />
                <span>Rainy</span>
              </div>
              <p>
                20 / <span className="text-violet-400">9</span>
              </p>
            </li>
          </ul>
        </section>
      </div>

      <section className="relative z-50 p-4 bg-linear-to-b from-violet-400/15 to-violet-800/40 rounded-4xl w-full h-fit flex justify-between mt-6"></section>
    </div>
  );
}
