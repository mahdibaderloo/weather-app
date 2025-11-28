import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { Link } from "react-router-dom";
import { useLocationStore } from "../store/locationStore";
import "react-day-picker/dist/style.css";
import { useDateStore } from "../store/dateStore";

export default function Calendar() {
  const [selected, setSelected] = useState<Date | undefined>(new Date());
  const { city } = useLocationStore();
  const { setSelectedDate } = useDateStore();

  useEffect(
    function () {
      setSelectedDate(selected!);
    },
    [selected]
  );

  return (
    <div className="flex flex-col justify-center gap-10">
      <div className="w-full flex justify-between">
        <Link
          to="/"
          className="bg-linear-to-r from-violet-900/90 to-violet-800/65 text-violet-100 text-lg font-medium w-fit px-8 py-3 rounded-4xl cursor-pointer shadow hover:bg-violet-950 transition-all"
        >
          Get information for this date in{" "}
          <span className="font-bold">{city}</span>
        </Link>
      </div>

      <div className="p-6 rounded-3xl shadow bg-white/30 backdrop-blur-xl w-fit mx-auto">
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          className="rounded-2xl"
          modifiersClassNames={{
            selected: "bg-violet-600 text-white shadow-md transition-all",
            today: "border border-violet-600 font-bold text-violet-700",
          }}
          styles={{
            caption: {
              color: "#4c1d95",
              fontWeight: "700",
              fontSize: "2rem",
            },
            head_cell: {
              padding: "0.4rem",
              color: "#6d28d9",
              fontWeight: "600",
            },
            cell: { padding: "1rem" },
          }}
        />
      </div>
    </div>
  );
}
