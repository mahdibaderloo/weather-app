import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CityItem {
  name: string;
  lat: number;
  lon: number;
}

interface LocationState {
  lat: number;
  lon: number;
  city?: string;
  cityList: CityItem[];
  setLocation: (lat: number, lon: number) => void;
  setCity: (city: string) => void;
  addCity: (item: CityItem) => void;
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

      addCity: (item) =>
        set((state) => {
          if (state.cityList.some((c) => c.name === item.name)) return state;
          return { cityList: [...state.cityList, item] };
        }),
    }),
    {
      name: "cities",
    }
  )
);
