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
  let day = new Date().getDay();

  if (count === 1) {
    return "Tomorrow";
  }
  const index = (day + count) % 7;
  return days[index];
}

export function getIndexesHoursLater(dataTime: string[]) {
  const hoursAhead = [2, 4, 6, 8, 10];
  const now = new Date();
  const results: number[] = [];

  for (let h of hoursAhead) {
    const future = new Date(now.getTime() + h * 60 * 60 * 1000);
    const year = future.getFullYear();
    const month = (future.getMonth() + 1).toString().padStart(2, "0");
    const day = future.getDate().toString().padStart(2, "0");
    const hour = future.getHours().toString().padStart(2, "0");

    const formatted = `${year}-${month}-${day}T${hour}:00`;
    const index = dataTime.indexOf(formatted);
    results.push(index);
  }

  return results;
}
