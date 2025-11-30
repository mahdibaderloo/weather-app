import { useQuery } from "@tanstack/react-query";
import { formatDateForApi } from "../utils/date";

interface UseWeatherProps {
  lat?: number;
  lon?: number;
  startDate?: Date;
}

export function useWeather({ lat, lon, startDate }: UseWeatherProps) {
  return useQuery({
    queryKey: ["weather", lat, lon, startDate],
    queryFn: async () => {
      if (!lat || !lon) return null;

      const start = startDate || new Date();

      const end = new Date(start);
      end.setDate(start.getDate() + 7);

      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,weathercode&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto&start_date=${formatDateForApi(
          start
        )}&end_date=${formatDateForApi(end)}`
      );

      if (!res.ok) throw new Error("Failed to fetch weather");
      const data = await res.json();
      console.log(data);

      return {
        current: data.current_weather,
        hourly: data.hourly,
        daily: data.daily,
      };
    },
    enabled: !!lat && !!lon,
    refetchInterval: 60_000,
  });
}
