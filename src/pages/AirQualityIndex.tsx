import AQIBox from "../features/aqi/AQI-Box";
import Help from "../features/aqi/Help";

export default function AirQualityIndex() {
  return (
    <div className="w-full h-full flex flex-col p-4">
      <h3 className="font-bold text-4xl text-violet-950">Air Quality Index</h3>

      <div className="w-full flex gap-4 mt-8 justify-center">
        <AQIBox />
        <AQIBox />
      </div>

      <Help />
    </div>
  );
}
