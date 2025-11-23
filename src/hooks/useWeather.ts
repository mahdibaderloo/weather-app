import { useQuery } from "@tanstack/react-query";

export function useWeather(lat?: number, lon?: number) {
  return useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: async () => {
      if (!lat || !lon) return null;
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
      );
      if (!res.ok) throw new Error("Failed to fetch weather");
      const data = await res.json();
      return data.current_weather;
    },
    enabled: !!lat && !!lon,
    refetchInterval: 60_000,
  });
}
