export function getAQIFromPM25(pm25: number): number {
  const breakpoints = [
    { concLow: 0, concHigh: 12, aqiLow: 0, aqiHigh: 50 },
    { concLow: 12.1, concHigh: 35.4, aqiLow: 51, aqiHigh: 100 },
    { concLow: 35.5, concHigh: 55.4, aqiLow: 101, aqiHigh: 150 },
    { concLow: 55.5, concHigh: 150.4, aqiLow: 151, aqiHigh: 200 },
    { concLow: 150.5, concHigh: 250.4, aqiLow: 201, aqiHigh: 300 },
    { concLow: 250.5, concHigh: 350.4, aqiLow: 301, aqiHigh: 400 },
    { concLow: 350.5, concHigh: 500.4, aqiLow: 401, aqiHigh: 500 },
  ];

  for (let bp of breakpoints) {
    if (pm25 >= bp.concLow && pm25 <= bp.concHigh) {
      return Math.round(
        ((bp.aqiHigh - bp.aqiLow) / (bp.concHigh - bp.concLow)) *
          (pm25 - bp.concLow) +
          bp.aqiLow
      );
    }
  }
  return -1;
}

export function getAqiStatus(aqi: number) {
  if (aqi <= 50) return { status: "Good", color: "from-green-800" };
  if (aqi <= 100) return { status: "Moderate", color: "from-yellow-400" };
  if (aqi <= 150)
    return {
      status: "Unhealthy for Sensitive Groups",
      color: "from-yellow-600",
    };
  if (aqi <= 200) return { status: "Unhealthy", color: "from-red-600" };
  if (aqi <= 300) return { status: "Very Unhealthy", color: "from-violet-900" };
  else return { status: "Hazardous", color: "from-red-900" };
}
