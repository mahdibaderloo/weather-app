import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import { useState } from "react";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

function LocationSelector({
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

export default function WeatherMap() {
  const [position, setPosition] = useState<{ lat: number; lon: number } | null>(
    null
  );
  const [city, setCity] = useState<string>("");

  async function handleSelect(lat: number, lon: number) {
    setPosition({ lat, lon });

    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
    );
    const data = await res.json();

    const cityName =
      data.address.city ||
      data.address.town ||
      data.address.village ||
      data.address.county;

    setCity(cityName);
  }

  return (
    <MapContainer
      center={[35.6892, 51.389]} // Tehran
      zoom={11}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <LocationSelector onSelect={handleSelect} />

      {position && (
        <Marker position={[position.lat, position.lon]}>
          <Popup>{city ? `City: ${city}` : "Loading city name..."}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
