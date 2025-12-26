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
import Loading from "../../components/Loading";

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
        <Loading />
      ) : (
        <MapContainer
          center={[lat, lon]}
          zoom={16}
          style={{ borderRadius: "2rem" }}
          className={
            theme === "dark"
              ? `h-[50%] lg:h-[70%] lg:w-full xl:w-[98%] 2xl:w-full 2xl:h-[50%] rounded-2xl filter invert-90 hue-rotate-180 brightness-75 contrast-125`
              : "h-[50%] lg:h-[70%] lg:w-full xl:w-[98%] 2xl:w-full 2xl:h-[50%]"
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
