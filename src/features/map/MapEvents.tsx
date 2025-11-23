import { useMapEvents } from "react-leaflet";

export default function MapEvents({
  onSelect,
}: {
  onSelect: (lat: number, lon: number) => void;
}) {
  useMapEvents({
    click(e) {
      onSelect(e.latlng.lat, e.latlng.lng);
    },
  });

  return null;
}
