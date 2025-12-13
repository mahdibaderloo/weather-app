import { MapContainer, TileLayer } from "react-leaflet";
import MapEvents from "./MapEvents";

import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useCity } from "../../hooks/useCity";
import MarkerWithPopup from "./MarkerWithoutPopup";
import { useLocationStore } from "../../store/locationStore";
import { useEffect } from "react";
import { useThemeStore } from "../../store/themeStore";

const DefaultIcon = L.icon({ iconUrl: markerIcon, shadowUrl: markerShadow });
L.Marker.prototype.options.icon = DefaultIcon;

export default function WeatherMap() {
  const { lat, lon, city, setLocation, setCity } = useLocationStore();
  const { theme } = useThemeStore();
  const { data: cityName, isLoading } = useCity(lat, lon);

  useEffect(() => {
    if (cityName) setCity(cityName);
  }, [cityName, setCity]);

  return (
    <>
      {isLoading ? (
        <p className="flex justify-center items-center text-4xl font-bold w-full h-[50%] text-violet-950">
          Loading...
        </p>
      ) : (
        <MapContainer
          center={[lat, lon]}
          zoom={16}
          style={{ borderRadius: "2rem" }}
          className={
            theme === "dark"
              ? `h-[50%] lg:h-[60%] lg:w-[85%] lg:ml-30 rounded-2xl filter invert-90 hue-rotate-180 brightness-75 contrast-125`
              : "h-[50%] lg:h-[60%] lg:w-[85%] lg:ml-30"
          }
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <MapEvents
            onSelect={(newLat, newLon) => {
              setLocation(newLat, newLon);
            }}
          />

          {cityName && (
            <MarkerWithPopup
              lat={lat}
              lon={lon}
              city={city}
              isLoading={isLoading}
            />
          )}
        </MapContainer>
      )}
    </>
  );
}
