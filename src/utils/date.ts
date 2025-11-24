export function getWeekday() {
  return new Date().toLocaleDateString("en-US", { weekday: "long" });
}

export function getFormattedDate() {
  const date = new Date();

  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" }); // Nov
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
}
