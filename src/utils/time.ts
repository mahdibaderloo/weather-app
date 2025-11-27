export function timeAmOrPm(time: string) {
  const numberTime = Number(time.slice(0, 2));
  if (numberTime < 10) {
    return `0${numberTime}:00 am`;
  } else if (numberTime > 9 && numberTime < 13) {
    return `${numberTime}:00 am`;
  } else if (numberTime > 12) {
    return `${numberTime}:00 pm`;
  }
}
