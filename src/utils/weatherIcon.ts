import sunnyImage from "../assets/sunny.png";
import windyImage from "../assets/windy.png";
import partlyCloudyImage from "../assets/partly-cloudy.png";
import cloudyImage from "../assets/cloudy.png";
import rainyImage from "../assets/rainy.png";
import stormyImage from "../assets/stormy.png";
import snowyImage from "../assets/snowy.png";

import sunnyIcon from "../assets/sunny.svg";
import windyIcon from "../assets/windy.svg";
import partlyCloudyIcon from "../assets/partly-cloudy.svg";
import cloudyIcon from "../assets/cloudy.svg";
import rainyIcon from "../assets/rainy.svg";
import stormyIcon from "../assets/stormy.svg";
import snowyIcon from "../assets/snowy.svg";

const information = [
  { id: "Sunny", image: sunnyImage, icon: sunnyIcon },
  { id: "Windy", image: windyImage, icon: windyIcon },
  {
    id: "Patly Cloudy",
    image: partlyCloudyImage,
    icon: partlyCloudyIcon,
  },
  { id: "Cloudy", image: cloudyImage, icon: cloudyIcon },
  { id: "Rainy", image: rainyImage, icon: rainyIcon },
  { id: "Stormy", image: stormyImage, icon: stormyIcon },
  { id: "Snowy", image: snowyImage, icon: snowyIcon },
];

export function weatherIcon(weather: string) {
  const weatherImage = information.find((item) => item.id === weather);
  return weatherImage;
}
