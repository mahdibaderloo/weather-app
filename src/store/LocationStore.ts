import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LocationState {
  lat: number;
  lon: number;
  city?: string;
  cityList: string[];
  setLocation: (lat: number, lon: number) => void;
  setCity: (city: string) => void;
  addCity: (city: string) => void;
}

export const useLocationStore = create<LocationState>()(
  persist(
    (set) => ({
      lat: 35.6892,
      lon: 51.389,
      city: "Tehran",
      cityList: [],

      setLocation: (lat, lon) => set({ lat, lon }),
      setCity: (city) => set({ city }),

      addCity: (city) =>
        set((state) => ({
          cityList: [...state.cityList, city],
        })),
    }),
    {
      name: "cities",
    }
  )
);
