import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

interface WeatherMapProps {
  lat: number;
  lon: number;
  city?: string;
  temperature?: number;
}

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function WeatherMap({
  lat,
  lon,
  city,
  temperature,
}: WeatherMapProps) {
  return (
    <MapContainer
      center={[lat, lon]}
      zoom={12}
      style={{ height: "57%", width: "100%", borderRadius: "2rem" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <Marker position={[lat, lon]}>
        <Popup>
          {city && <strong>{city}</strong>} <br />
          {temperature && `${temperature}°C`}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
