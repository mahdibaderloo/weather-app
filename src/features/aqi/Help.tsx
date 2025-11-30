const helpTitles = [
  { title: "Clean", class: "bg-green-800", desc: null },
  { title: "Acceptable", class: "bg-yellow-400", desc: null },
  {
    title: "Unhealthy",
    class: "bg-yellow-600 flex-col",
    desc: "(for sensitive groups)",
  },
  { title: "Unhealthy", class: "bg-red-600", desc: null },
  { title: "Very Unhealthy", class: "bg-violet-900", desc: null },
  { title: "Dangerous", class: "bg-red-900", desc: null },
];

const helpIndexes = [0, 50, 100, 150, 200, 300];

export default function Help() {
  return (
    <div className="mt-16 flex flex-col justify-center items-center">
      <ul className="w-[85%] grid grid-cols-6 rounded-3xl overflow-hidden">
        {helpTitles.map((t) => {
          if (t.desc) {
            return (
              <li
                className={`flex justify-center items-center text-white text-lg font-medium px-2 py-1 ${t.class}`}
              >
                Unhealthy{" "}
                <span className="text-sm">(for sensitive groups)</span>
              </li>
            );
          } else {
            return (
              <li
                className={`flex justify-center items-center text-white text-lg font-medium px-2 py-1 ${t.class}`}
              >
                {t.title}
              </li>
            );
          }
        })}
      </ul>

      <ul className="w-[85%] grid grid-cols-6 mt-4">
        {helpIndexes.map((i) => (
          <li key={i} className="text-violet-200 text-lg font-medium">
            {i === 300 ? "+300" : i}
          </li>
        ))}
      </ul>
    </div>
  );
}
