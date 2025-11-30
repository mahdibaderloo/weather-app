import Help from "../features/aqi/Help";
import { getFormattedDate } from "../utils/date";

export default function AirQualityIndex() {
  return (
    <div className="w-full h-full flex flex-col p-4">
      <h3 className="font-bold text-4xl text-violet-950">Air Quality Index</h3>

      <div className="w-full flex gap-4 mt-8 justify-center">
        <div className="w-[35%] flex flex-col bg-linear-to-b from-yellow-400 to-violet-400/45 text-violet-50 rounded-4xl p-8">
          <p className="font-semibold text-2xl pb-4 border-b-2 border-white/20">
            Air quality index now
          </p>
          <p className="mt-4 mx-auto text-7xl font-bold">491</p>
          <p className="text-lg font-medium mt-4 text-white/80">Dangerous</p>
          <p className="text-lg font-medium mt-1 text-white/80">
            Pollutant index: 10 PM
          </p>
          <p className="text-lg font-medium mt-1 text-white/80">
            {getFormattedDate(new Date())} - 12:40
          </p>
        </div>

        <div className="w-[35%] flex flex-col bg-linear-to-b from-red-900/90 to-violet-400/45 text-violet-50 rounded-4xl p-8">
          <p className="font-semibold text-2xl pb-4 border-b-2 border-white/20">
            Index of the last 24 hours
          </p>
          <p className="mt-4 mx-auto text-7xl font-bold">491</p>
          <p className="text-lg font-medium mt-4 text-white/80">Dangerous</p>
          <p className="text-lg font-medium mt-1 text-white/80">
            Pollutant index: 10 PM
          </p>
          <p className="text-lg font-medium mt-1 text-white/80">
            {getFormattedDate(new Date())} - 12:40
          </p>
        </div>
      </div>

      <Help />
    </div>
  );
}
