import AQIBox from "../features/aqi/AQI-Box";
import Help from "../features/aqi/Help";
import { useAQI } from "../hooks/useAQI";
import { useLocationStore } from "../store/locationStore";

export default function AirQualityIndex() {
  const { lat, lon } = useLocationStore();
  const { data, isLoading, dataUpdatedAt } = useAQI({ lat, lon });

  if (isLoading) {
    return (
      <p className="flex justify-center items-center text-4xl font-bold w-full h-[50%] text-violet-950">
        Loading...
      </p>
    );
  }

  if (!data) {
    return (
      <p className="flex justify-center items-center text-4xl font-bold w-full h-[50%] text-violet-950 dark:text-violet-600 ">
        No air quality data available.
      </p>
    );
  }

  return (
    <div className="lg:w-[86%] xl:w-[84%] h-full flex flex-col lg:p-0 lg:pr-6 lg:mr-4 lg:ml-30 lg:mt-30 2xl:mt-0 2xl:w-full 2xl:ml-0">
      <h3 className="hidden font-bold xl:text-4xl text-violet-950 dark:text-violet-800 xl:block">
        Air Quality Index
      </h3>

      <div className="w-full flex lg:gap-4 mt-4 lg:mt-4 xl:mt-16 justify-center">
        <AQIBox data={data?.hourly} fetchTime={dataUpdatedAt} />
      </div>

      <Help />
    </div>
  );
}
