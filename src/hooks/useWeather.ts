import { useQuery } from "@tanstack/react-query";

// interface WeatherData {
//   current: {
//     temperature: number;
//     weathercode: number;
//   };
//   hourly: {
//     time: string[];
//     temperature: number[];
//     weathercode: number[];
//   };
//   daily: {
//     time: string[];
//     temp_max: number[];
//     temp_min: number[];
//     weathercode: number[];
//   };
// }

export function useWeather(lat?: number, lon?: number) {
  return useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: async () => {
      if (!lat || !lon) return null;
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,weathercode&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`
      );
      if (!res.ok) throw new Error("Failed to fetch weather");
      const data = await res.json();

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
