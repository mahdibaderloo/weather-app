import { Marker, Popup } from "react-leaflet";

export default function MarkerWithPopup({
  lat,
  lon,
  city,
  isLoading,
}: {
  lat: number;
  lon: number;
  city?: string;
  isLoading: boolean;
}) {
  return (
    <Marker position={[lat, lon]}>
      <Popup>{isLoading ? "Finding your city..." : city}</Popup>
    </Marker>
  );
}
