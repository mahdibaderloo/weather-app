import rainyIcon from "../../assets/rainy.svg";

export default function DailyForecast() {
  return (
    <section className="relative z-50 p-4 bg-linear-to-r from-violet-400/35 to-violet-800/60 rounded-4xl w-[49%] h-fit flex flex-col">
      <p className="font-semibold text-xl text-violet-200">3-Day Forecast</p>

      <ul className="mt-6 divide-y-2 divide-violet-950 mb-7">
        <li className="flex items-center justify-between text-violet-300 text-xl font-semibold py-4">
          <p className="w-20">Tomorrow</p>
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
  );
}
