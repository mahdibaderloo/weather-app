import AQIBox from "../features/aqi/AQI-Box";
import Help from "../features/aqi/Help";
import { useAQI } from "../hooks/useAQI";
import { useLocationStore } from "../store/locationStore";

export default function AirQualityIndex() {
  const { lat, lon } = useLocationStore();
  const { data, isLoading } = useAQI({ lat, lon });
  console.log(data);

  if (isLoading) {
    return (
      <p className="flex justify-center items-center text-4xl font-bold w-full h-[50%] text-violet-950">
        Loading...
      </p>
    );
  }

  return (
    <div className="w-full h-full flex flex-col p-4">
      <h3 className="font-bold text-4xl text-violet-950">Air Quality Index</h3>

      <div className="w-full flex gap-4 mt-8 justify-center">
        <AQIBox data={data?.hourly} />
        <AQIBox data={data?.hourly} />
      </div>

      <Help />
    </div>
  );
}
