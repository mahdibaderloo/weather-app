import { useQuery } from "@tanstack/react-query";

async function fetchCityName(lat: number, lon: number) {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
  );
  const data = await res.json();

  if (!data) {
    throw new Error("An error occurred while retrieving information.");
  }

  return (
    data.address.city ||
    data.address.town ||
    data.address.village ||
    data.address.county ||
    "Unspecified"
  );
}

export function useCityQuery(lat?: number, lon?: number) {
  return useQuery({
    queryKey: ["cityName", lat, lon],
    queryFn: () => fetchCityName(lat!, lon!),
    enabled: !!lat && !!lon,
  });
}
