export function useWeatherCode(weatherCode: number, windSpeed?: number) {
  const map: Record<number, string> = {
    0: "Sunny",
    1: "Sunny",
    2: "Patly Cloudy",
    3: "Cloudy",

    45: "Fog",
    48: "Fog",

    51: "Rainy",
    53: "Rainy",
    55: "Rainy",

    61: "Rainy",
    63: "Rainy",
    65: "Rainy",

    71: "Snowy",
    73: "Snowy",
    75: "Snowy",

    80: "Stormy",
    81: "Stormy",
    82: "Stormy",

    95: "Stormy",
    96: "Stormy",
    99: "Stormy",
  };

  if (windSpeed && windSpeed > 15) return "Windy";

  return map[weatherCode] || "Unspecified";
}
