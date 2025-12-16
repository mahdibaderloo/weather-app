const helpTitles = [
  { id: 1, title: "Good", class: "bg-green-800", desc: null },
  { id: 2, title: "Moderate", class: "bg-yellow-400", desc: null },
  {
    id: 3,
    title: "Unhealthy",
    class: "bg-yellow-600 flex-col",
    desc: "(for sensitive groups)",
  },
  { id: 4, title: "Unhealthy", class: "bg-red-600", desc: null },
  { id: 5, title: "Very Unhealthy", class: "bg-violet-900", desc: null },
  { id: 6, title: "Hazardous", class: "bg-red-900", desc: null },
];

const helpIndexes = [0, 50, 100, 150, 200, 300];

export default function Help() {
  return (
    <div className="hidden lg:mt-8 xl:mt-16 lg:flex flex-col justify-center items-center">
      <ul className="xl:w-[90%] grid grid-cols-6 rounded-3xl overflow-hidden">
        {helpTitles.map((t) => {
          if (t.desc) {
            return (
              <li
                key={t.id}
                className={`flex justify-center items-center text-white xl:text-lg font-medium xl:px-2 py-1 ${t.class}`}
              >
                Unhealthy{" "}
                <span className="text-sm">(for sensitive groups)</span>
              </li>
            );
          } else {
            return (
              <li
                key={t.id}
                className={`flex justify-center items-center text-white xl:text-lg font-medium xl:px-2 py-1 ${t.class}`}
              >
                {t.title}
              </li>
            );
          }
        })}
      </ul>

      <ul className="w-[85%] grid grid-cols-6 mt-4">
        {helpIndexes.map((i) => (
          <li
            key={i}
            className="text-violet-200 dark:text-violet-950 text-lg font-medium"
          >
            {i === 300 ? "+300" : i}
          </li>
        ))}
      </ul>
    </div>
  );
}
