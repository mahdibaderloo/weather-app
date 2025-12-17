import { useCallback, useState } from "react";
import { useLocationStore } from "../store/locationStore";

interface GeoError {
  code: number;
  message: string;
}

export function useGeolocation() {
  const { setLocation, setLiveLocation } = useLocationStore();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;

        setLocation(latitude, longitude);
        setLiveLocation({ lat: latitude, lon: longitude });

        setLoading(false);
      },
      (err: GeoError) => {
        setError(err.message || "Location access denied");
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
      }
    );
  }, [setLocation, setLiveLocation]);

  return {
    getLocation,
    loading,
    error,
  };
}
