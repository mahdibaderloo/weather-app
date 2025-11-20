import rainy from "../assets/rainy.png";
import locationIcon from "../assets/location.svg";
import rainyIcon from "../assets/rainy.svg";

export default function Home() {
  return (
    <div className="w-full h-full relative p-4">
      <img
        src={rainy}
        alt="Background"
        className="w-[99%] rounded-4xl shadow blur-[2px] absolute inset-0 object-cover"
      />
      <section className="relative z-50 p-4 bg-linear-to-r from-violet-800/30 to-violet-400/20 rounded-4xl w-[45%] flex justify-between">
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
          <div className="w-fit flex items-center justify-between bg-violet-300 rounded-full cursor-pointer">
            <span className="w-8 h-8 rounded-full font-medium flex justify-center items-center">
              F
            </span>
            <span className="w-8 h-8 rounded-full font-medium flex justify-center items-center bg-violet-950 text-violet-200">
              C
            </span>
          </div>

          <div className="flex flex-col items-end">
            <img src={rainyIcon} alt="Icon" className="w-50" />
            <p className="font-semibold text-3xl mr-4 text-violet-950">Rainy</p>
          </div>
        </div>
      </section>
    </div>
  );
}
