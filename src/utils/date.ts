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

export function getIndexesHoursLater(dataTime: string[]) {
  const hoursAhead = [2, 4, 6, 8, 10];
  const now = new Date();
  const results: number[] = [];

  for (let h of hoursAhead) {
    const future = new Date(now.getTime() + h * 60 * 60 * 1000);
    const formatted = future.toISOString().slice(0, 14).concat("00");
    const index = dataTime.indexOf(formatted);
    results.push(index);
  }

  return results;
}
