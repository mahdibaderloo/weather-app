import { useQuery } from "@tanstack/react-query";

export function useSearchLocation(query: string) {
  return useQuery({
    queryKey: ["search-location", query],
    queryFn: async () => {
      if (!query) return null;

      const res = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=1`
      );
      const data = await res.json();

      if (!data.results || data.results.length === 0) return null;

      const { latitude, longitude, name } = data.results[0];

      return { lat: latitude, lon: longitude, city: name };
    },

    enabled: query.length > 2,
  });
}
