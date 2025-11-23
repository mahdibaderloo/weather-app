import { MapContainer, TileLayer } from "react-leaflet";
import { useEffect, useState } from "react";
import MapEvents from "./MapEvents";

import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useCity } from "../../hooks/useCity";
import MarkerWithPopup from "./MarkerWithoutPopup";

const DefaultIcon = L.icon({ iconUrl: markerIcon, shadowUrl: markerShadow });
L.Marker.prototype.options.icon = DefaultIcon;

export default function WeatherMap({ lat, lon }: { lat: number; lon: number }) {
  const [position, setPosition] = useState<{ lat: number; lon: number } | null>(
    null
  );

  useEffect(() => {
    setPosition({ lat, lon });
  }, [lat, lon]);

  const { data: city, isLoading } = useCity(position?.lat, position?.lon);

  return (
    <>
      {isLoading ? (
        <p className="flex justify-center items-center text-4xl font-bold w-full h-[50%] text-violet-950">
          Loading...
        </p>
      ) : (
        <MapContainer
          center={[position?.lat || 35.6892, position?.lon || 51.389]}
          zoom={16}
          style={{ height: "50%", borderRadius: "2rem" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <MapEvents
            onSelect={(lat, lon) => {
              setPosition({ lat, lon });
            }}
          />

          {position && (
            <MarkerWithPopup
              lat={position.lat}
              lon={position.lon}
              city={city}
              isLoading={isLoading}
            />
          )}
        </MapContainer>
      )}
    </>
  );
}
