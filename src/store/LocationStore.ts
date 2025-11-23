import { create } from "zustand";

interface LocationState {
  lat: number;
  lon: number;
  city?: string;
  setLocation: (lat: number, lon: number) => void;
  setCity: (city: string) => void;
}

export const useLocationStore = create<LocationState>((set) => ({
  lat: 35.6892,
  lon: 51.389,
  city: "Tehran",
  setLocation: (lat, lon) => set({ lat, lon }),
  setCity: (city) => set({ city }),
}));
