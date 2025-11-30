import { useQuery } from "@tanstack/react-query";

interface AQIProps {
  lat?: number;
  lon?: number;
}

export function useAQI({ lat, lon }: AQIProps) {
  return useQuery({
    queryKey: ["air-quality", lat, lon],
    queryFn: async () => {
      if (!lat || !lon) return null;
      const res = await fetch(
        `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&hourly=us_aqi,pm2_5,pm10&timezone=auto`
      );
      if (!res.ok) throw new Error("Failed to fetch air quality");
      const data = await res.json();
      return data;
    },
    enabled: !!lat && !!lon,
  });
}
