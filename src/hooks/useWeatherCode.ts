export function useWeatherCode(weatherCode: number, windSpeed?: number) {
  if (windSpeed && windSpeed > 15) return "Windy";

  if (weatherCode === 0 || weatherCode === 1) return "Sunny";
  if (weatherCode === 2) return "Partly Cloudy";
  if (weatherCode === 3) return "Cloudy";

  if (weatherCode >= 45 && weatherCode <= 48) return "Fog";

  if (
    (weatherCode >= 51 && weatherCode <= 55) ||
    (weatherCode >= 61 && weatherCode <= 65)
  )
    return "Rainy";

  if (
    (weatherCode >= 71 && weatherCode <= 75) ||
    weatherCode === 85 ||
    weatherCode === 86
  )
    return "Snowy";

  if (
    (weatherCode >= 80 && weatherCode <= 82) ||
    (weatherCode >= 95 && weatherCode <= 99)
  )
    return "Stormy";

  return "Cloudy";
}
