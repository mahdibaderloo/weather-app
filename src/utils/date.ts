export function getWeekday() {
  return new Date().toLocaleDateString("en-US", { weekday: "long" });
}

export function getFormattedDate() {
  const date = new Date();

  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
}

export function getNextDay(count = 0) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = new Date().getDay();

  if (count === 1) {
    return "Tomorrow";
  } else {
    return days[day + count];
  }
}
